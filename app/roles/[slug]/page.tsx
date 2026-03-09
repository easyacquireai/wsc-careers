import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Briefcase, MapPin, Building2 } from "lucide-react";
import { jobs, getJobBySlug } from "@/data/jobs";
import { notFound } from "next/navigation";

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

  return (
    <div className="min-h-screen bg-wsc-bg text-wsc-text">
      {/* Header */}
      <header className="border-b border-wsc-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/WSC_logo.png"
              alt="We Scale Creators"
              width={36}
              height={36}
            />
            <span className="font-semibold text-white text-lg">
              We Scale Creators
            </span>
          </Link>
          <Link
            href="/#roles"
            className="text-sm font-medium text-wsc-text-secondary hover:text-white transition-colors"
          >
            View Open Roles
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Back link */}
        <Link
          href="/#roles"
          className="inline-flex items-center gap-2 text-sm text-wsc-text-secondary hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          All Open Roles
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {job.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <span className="flex items-center gap-1.5 text-sm text-wsc-text-secondary">
            <Briefcase size={14} />
            {job.type}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-wsc-text-secondary">
            <MapPin size={14} />
            {job.location}
          </span>
          <span className="flex items-center gap-1.5 text-sm text-wsc-text-secondary">
            <Building2 size={14} />
            {job.department}
          </span>
        </div>

        {/* Description */}
        <div className="mt-10">
          <p className="text-wsc-text leading-relaxed">{job.description}</p>
        </div>

        {/* What You'll Do */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-white mb-6">
            What You&apos;ll Do
          </h2>
          <ul className="space-y-4">
            {job.whatYoullDo.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="text-wsc-purple-light mt-0.5 shrink-0">
                  &bull;
                </span>
                <span className="text-wsc-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Requirements */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-white mb-6">
            Requirements
          </h2>
          <ul className="space-y-4">
            {job.requirements.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="text-wsc-purple-light mt-0.5 shrink-0">
                  &bull;
                </span>
                <span className="text-wsc-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Apply CTA */}
        <div className="mt-16 rounded-xl border border-wsc-border bg-wsc-card p-8 text-center">
          <h3 className="text-xl font-semibold text-white">
            Interested in this role?
          </h3>
          <p className="mt-2 text-sm text-wsc-text-secondary">
            Send your resume and portfolio to get started.
          </p>
          <a
            href="mailto:careers@wescalecreators.com"
            className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
          >
            Apply Now
          </a>
        </div>

        {/* Back link bottom */}
        <div className="mt-12 text-center">
          <Link
            href="/#roles"
            className="inline-flex items-center gap-2 text-sm text-wsc-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Back to All Roles
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-wsc-border mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            &copy; 2026 We Scale Creators. All rights reserved.
          </p>
          <a
            href="https://wescalecreators.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 hover:text-white transition-colors"
          >
            wescalecreators.com
          </a>
        </div>
      </footer>
    </div>
  );
}
