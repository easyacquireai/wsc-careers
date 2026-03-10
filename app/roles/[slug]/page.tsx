import { notFound } from "next/navigation";
import {
  getPublishedJobBySlug,
  getPublishedSlugs,
} from "@/lib/jobs";
import RolePageClient from "./RolePageClient";

export const revalidate = 60; // ISR: refresh job data every 60 seconds

export async function generateStaticParams() {
  const slugs = await getPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getPublishedJobBySlug(slug);
  if (!job) return { title: "Role Not Found" };
  return {
    title: `${job.title} | We Scale Creators`,
    description: job.summary,
  };
}

export default async function RolePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const job = await getPublishedJobBySlug(slug);

  if (!job) notFound();

  return <RolePageClient job={job} />;
}
