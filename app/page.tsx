import { getPublishedJobs } from "@/lib/jobs";
import HomePageClient from "./HomePageClient";

export const revalidate = 60; // ISR: refresh job data every 60 seconds

export default async function CareersPage() {
  const jobs = await getPublishedJobs();
  return <HomePageClient jobs={jobs} />;
}
