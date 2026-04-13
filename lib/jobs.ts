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

/** Raw row shape from the Supabase hiring_jobs table (Omnia) */
interface DbJob {
  id: string;
  title: string;
  slug: string;
  status: string;
  location: string;
  employment_type: string;
  compensation_base: string | null;
  compensation_structure: string | null;
  short_description: string | null;
  who_we_are: string | null;
  what_youll_do: JobListItem[] | null;
  requirements: JobListItem[] | null;
  nice_to_have: JobListItem[] | null;
  benefits: JobListItem[] | null;
}

/* ===== Helpers ===== */

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
  const compensation = [row.compensation_base, row.compensation_structure]
    .filter(Boolean)
    .join(" + ");

  return {
    slug: row.slug,
    title: row.title,
    type: row.employment_type || "Full-Time Contractor",
    location: row.location || "Remote",
    department: "General",
    compensation,
    summary: row.short_description || "",
    whoWeAre: row.who_we_are || row.short_description || "",
    theRole: row.short_description || "",
    whatYoullDoHeading: deriveWhatYoullDoHeading(row.title),
    whatYoullDo: listItemsToStrings(row.what_youll_do),
    requirements: listItemsToStrings(row.requirements),
    compensationAndBenefits: listItemsToStrings(row.benefits),
  };
}

/* ===== Queries ===== */

const JOB_COLUMNS =
  "id,title,slug,status,location,employment_type,compensation_base,compensation_structure,short_description,who_we_are,what_youll_do,requirements,nice_to_have,benefits";

/** Fetch all live jobs (for the homepage) */
export async function getPublishedJobs(): Promise<Job[]> {
  const { data, error } = await supabase
    .from("hiring_jobs")
    .select(JOB_COLUMNS)
    .eq("status", "live")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Supabase getPublishedJobs error:", error.message);
    return [];
  }

  return (data as DbJob[]).map(mapDbJobToJob);
}

/** Fetch a single live job by slug (for role detail pages) */
export async function getPublishedJobBySlug(
  slug: string
): Promise<Job | null> {
  const { data, error } = await supabase
    .from("hiring_jobs")
    .select(JOB_COLUMNS)
    .eq("slug", slug)
    .eq("status", "live")
    .single();

  if (error) {
    if (error.code === "PGRST116") return null; // not found
    console.error("Supabase getPublishedJobBySlug error:", error.message);
    return null;
  }

  return mapDbJobToJob(data as DbJob);
}

/** Fetch all live slugs (for generateStaticParams) */
export async function getPublishedSlugs(): Promise<string[]> {
  const { data, error } = await supabase
    .from("hiring_jobs")
    .select("slug")
    .eq("status", "live");

  if (error) {
    console.error("Supabase getPublishedSlugs error:", error.message);
    return [];
  }

  return (data ?? []).map((row: { slug: string }) => row.slug);
}
