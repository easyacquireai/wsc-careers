import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  DollarSign,
  Users,
  Wifi,
  TrendingUp,
} from "lucide-react";
import { jobs } from "@/data/jobs";

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-wsc-bg">
      {/* Header */}
      <header className="nav-glass fixed top-0 left-0 right-0 z-50 border-b border-white/10">
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
          <a
            href="#roles"
            className="text-sm font-medium text-wsc-text-secondary hover:text-white transition-colors"
          >
            View Open Roles
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero-gradient relative pt-32 pb-28">
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            {/* We're Hiring Badge */}
            <div className="inline-flex items-center gap-2 hiring-badge rounded-full px-4 py-2 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-wsc-green" />
              <span className="text-sm font-medium text-white/90">
                We&apos;re Hiring
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
              <span className="text-white">Join The Fastest Growing</span>
              <br />
              <span className="headline-gradient">Agency In The Industry</span>
            </h1>

            <p className="mt-6 text-lg text-wsc-text-secondary max-w-2xl mx-auto leading-relaxed">
              We Scale Creators is a performance marketing agency that partners
              with top influencers and creators to launch and scale 7-figure
              campaigns. We&apos;re growing fast and looking for exceptional talent
              to join our team.
            </p>

            <a
              href="#roles"
              className="btn-hero inline-flex items-center gap-2 mt-10 px-8 py-3.5 rounded-full bg-white text-[#0B0014] font-semibold text-sm transition-all"
            >
              View Open Roles
              <ArrowRight size={16} />
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { value: "$3M+", label: "MONTHLY RUN RATE" },
              { value: "60M+", label: "COMBINED PARTNER FOLLOWERS" },
              { value: "$90M+", label: "IN REVENUE GENERATED" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-3 text-xs font-medium text-wsc-text-secondary uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why WSC */}
        <section className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold text-white text-center mb-16">
            Why We Scale Creators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <DollarSign size={24} />,
                title: "Profit Share Model",
                desc: "Your work directly impacts revenue. Top performers share in the upside with profit-based compensation tied to the campaigns you help scale.",
              },
              {
                icon: <Users size={24} />,
                title: "Work With Top Creators",
                desc: "Our portfolio includes creators like Cheryl Porter (38M+ followers). You\u2019ll be building campaigns for some of the biggest names in the creator economy.",
              },
              {
                icon: <Wifi size={24} />,
                title: "Remote & Results-Driven",
                desc: "Fully remote culture. We care about output, not hours logged. Work from anywhere with a team that values speed, ownership, and measurable impact.",
              },
              {
                icon: <TrendingUp size={24} />,
                title: "Clear Growth Trajectory",
                desc: "As WSC scales to 15+ offers and beyond, leadership and senior roles are opening up. Early team members grow with the company.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="glass-card rounded-2xl p-8 transition-all duration-300"
              >
                <div className="text-wsc-purple-light mb-4">{card.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-wsc-text-secondary leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Roles */}
        <section id="roles" className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Open Roles</h2>
            <p className="mt-3 text-wsc-text-secondary">
              Join our team and help scale the biggest creators in the world.
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/roles/${job.slug}`}
                className="group block glass-card rounded-2xl p-6 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-wsc-purple-light transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-sm text-wsc-text-secondary">
                        <Briefcase size={14} />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-wsc-text-secondary">
                        <MapPin size={14} />
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-wsc-text-secondary group-hover:text-white group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-6 mb-12">
          <div className="cta-gradient rounded-3xl max-w-6xl mx-auto px-6 py-24 text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to Scale With Us?
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              We&apos;re looking for A-players focused on results, impact, and
              want to join the fastest growing agency in the world.
            </p>
            <a
              href="#roles"
              className="btn-hero inline-flex items-center gap-2 mt-8 px-8 py-3.5 rounded-full bg-white text-[#0B0014] font-semibold text-sm transition-all"
            >
              View Open Roles
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-wsc-text-secondary/60">
            &copy; 2026 We Scale Creators. All rights reserved.
          </p>
          <a
            href="https://wescalecreators.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-wsc-text-secondary/60 hover:text-white transition-colors"
          >
            wescalecreators.com
          </a>
        </div>
      </footer>
    </div>
  );
}
