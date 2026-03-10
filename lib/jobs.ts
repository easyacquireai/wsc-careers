import { supabase } from "./supabase";

/* ===== Types ===== */

/** Shape the careers page components expect */
export interface Job {
  slug: string;
  title: string;
  type: string;
  location: string;
  department: string;
  compensation: string;
  summary: string;
  whoWeAre: string;
  theRole: string;
  whatYoullDoHeading: string;
  whatYoullDo: string[];
  requirements: string[];
  compensationAndBenefits: string[];
}

/** JSONB list item stored in the CRM database */
interface JobListItem {
  bold: string;
  text: string;
}

/** JobMetadata v2 stored in application_questions column */
interface JobMetadata {
  version: 2;
  role_description: string;
  compensation_base: string;
  compensation_structure: string;
  benefits: JobListItem[];
  application_config: {
    requires_resume: boolean;
    requires_portfolio: boolean;
    requires_loom: boolean;
    requires_test_project: boolean;
    loom_questions: string[];
    test_project_description: string;
    email_subject_format: string;
    application_emails: string;
  };
}

/** Raw row shape from the Supabase jobs table */
interface DbJob {
  id: string;
  title: string;
  slug: string;
  status: string;
  department: string | null;
  location: string;
  job_type: string;
  compensation: string | null;
  short_description: string | null;
  what_youll_do: JobListItem[] | null;
  requirements: JobListItem[] | null;
  nice_to_have: JobListItem[] | null;
  application_questions: JobMetadata | unknown[] | null;
}

/* ===== Helpers ===== */

function parseJobMetadata(val: unknown): JobMetadata | null {
  let obj = val;
  if (typeof obj === "string") {
    try { obj = JSON.parse(obj); } catch { return null; }
  }
  if (
    typeof obj === "object" &&
    obj !== null &&
    "version" in obj &&
    (obj as JobMetadata).version === 2
  ) {
    return obj as JobMetadata;
  }
  return null;
}

/** Safely parse a JSONB field that may come back as a JSON string */
function parseJsonbArray(val: unknown): JobListItem[] {
  if (Array.isArray(val)) return val;
  if (typeof val === "string") {
    try {
      const parsed = JSON.parse(val);
      if (Array.isArray(parsed)) return parsed;
    } catch {
      // not valid JSON
    }
  }
  return [];
}

/** Convert {bold, text} list items to "Bold. Text" strings */
function listItemsToStrings(items: unknown): string[] {
  const arr = parseJsonbArray(items);
  if (arr.length === 0) return [];
  return arr.map((item) => {
    const bold = item.bold?.trim() ?? "";
    const text = item.text?.trim() ?? "";
    if (bold && text) return `${bold} ${text}`;
    return bold || text;
  });
}

/** Derive the "What You'll Do" heading from the job title */
function deriveWhatYoullDoHeading(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes("head of") || lower.includes("director") || lower.includes("lead")) {
    return "What You Will Own";
  }
  return "What You\u2019ll Do";
}

/* ===== Mapping ===== */

function mapDbJobToJob(row: DbJob): Job {
  const metadata = parseJobMetadata(row.application_questions);

  return {
    slug: row.slug,
    title: row.title,
    type: row.job_type || "Full-Time Contractor",
    location: row.location || "Remote",
    department: row.department || "General",
    compensation: row.compensation || "",
    summary: row.short_description || "",
    whoWeAre: row.short_description || "",
    theRole: metadata?.role_description || "",
    whatYoullDoHeading: deriveWhatYoullDoHeading(row.title),
    whatYoullDo: listItemsToStrings(row.what_youll_do),
    requirements: listItemsToStrings(row.requirements),
    compensationAndBenefits: listItemsToStrings(metadata?.benefits),
  };
}

/* ===== Queries ===== */

const JOB_COLUMNS =
  "id,title,slug,status,department,location,job_type,compensation,short_description,what_youll_do,requirements,nice_to_have,application_questions";

/** Fetch all published jobs (for the homepage) */
export async function getPublishedJobs(): Promise<Job[]> {
  const { data, error } = await supabase
    .from("jobs")
    .select(JOB_COLUMNS)
    .eq("status", "published")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase getPublishedJobs error:", error.message);
    return [];
  }

  return (data as DbJob[]).map(mapDbJobToJob);
}

/** Fetch a single published job by slug (for role detail pages) */
export async function getPublishedJobBySlug(
  slug: string
): Promise<Job | null> {
  const { data, error } = await supabase
    .from("jobs")
    .select(JOB_COLUMNS)
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  if (error) {
    if (error.code === "PGRST116") return null; // not found
    console.error("Supabase getPublishedJobBySlug error:", error.message);
    return null;
  }

  return mapDbJobToJob(data as DbJob);
}

/** Fetch all published slugs (for generateStaticParams) */
export async function getPublishedSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from("jobs")
    .select("slug")
    .eq("status", "published");

  if (error) {
    console.error("Supabase getPublishedSlugs error:", error.message);
    return [];
  }

  return (data ?? []).map((row: { slug: string }) => row.slug);
}
