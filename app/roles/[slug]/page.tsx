import { jobs, getJobBySlug } from "@/data/jobs";
import { notFound } from "next/navigation";
import RolePageClient from "./RolePageClient";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: "Role Not Found" };
  return {
    title: `${job.title} | We Scale Creators`,
    description: job.description,
  };
}

export default async function RolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) notFound();

  return <RolePageClient job={job} />;
}
