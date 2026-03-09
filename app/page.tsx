"use client";

import { useState, useEffect, useCallback } from "react";
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

/* Short compensation labels for role cards */
const cardCompensation: Record<string, string> = {
  "head-of-performance-marketing": "$12,000/mo + Profit Share",
  "senior-copywriter": "$7K–$8K/mo + Profit Share",
  "senior-media-buyer": "$7K–$8K/mo + Profit Share",
  "graphic-designer": "$3.5K–$4.5K/mo",
};

export default function CareersPage() {
  const [navScrolled, setNavScrolled] = useState(false);

  /* Header: transparent at top, glass when scrolled past hero */
  const handleScroll = useCallback(() => {
    setNavScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Scroll-reveal via IntersectionObserver */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal-section").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-wsc-bg">
      {/* ───── Header ───── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navScrolled
            ? "nav-glass border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
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
          <a href="#roles" className="btn-nav-pill">
            View Open Roles
          </a>
        </div>
      </header>

      <main>
        {/* ───── Hero ───── */}
        <section className="hero-section">
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            {/* Hiring badge */}
            <div className="inline-flex items-center gap-2 hiring-badge px-4 py-2 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-wsc-green" />
              <span className="text-sm font-medium text-white/90">
                We&apos;re Hiring
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
              <span className="text-white">Join The Fastest Growing</span>
              <br />
              <span className="headline-gradient">
                Agency In The Industry
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              We Scale Creators is a performance marketing agency that partners
              with top influencers and creators to launch and scale 7-figure
              campaigns. We&apos;re growing fast and looking for exceptional
              talent to join our team.
            </p>

            <a
              href="#roles"
              className="btn-hero inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-white text-[#0B0014] font-semibold text-sm"
            >
              View Open Roles
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Fade-out at bottom of hero */}
          <div className="hero-fade" />
        </section>

        {/* ───── Stats ───── */}
        <section className="glow-section reveal-section">
          <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "$3M+", label: "MONTHLY RUN RATE" },
              { value: "60M+", label: "COMBINED PARTNER FOLLOWERS" },
              { value: "$90M+", label: "IN REVENUE GENERATED" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card p-10 text-center">
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="mt-3 text-xs font-medium text-wsc-text-secondary uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ───── Why WSC ───── */}
        <section className="reveal-section">
          <div className="max-w-6xl mx-auto px-6 py-28">
            <h2 className="text-3xl font-bold text-white text-center mb-16">
              Why We Scale Creators
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <DollarSign size={24} />,
                  title: "Profit Share Model",
                  desc: "Your work directly impacts revenue. Top performers share in the upside with profit-based compensation tied to the campaigns you help scale.",
                  cardClass: "why-card-1",
                },
                {
                  icon: <Users size={24} />,
                  title: "Work With Top Creators",
                  desc: "Our portfolio includes creators like Cheryl Porter (38M+ followers). You\u2019ll be building campaigns for some of the biggest names in the creator economy.",
                  cardClass: "why-card-2",
                },
                {
                  icon: <Wifi size={24} />,
                  title: "Remote & Results-Driven",
                  desc: "Fully remote culture. We care about output, not hours logged. Work from anywhere with a team that values speed, ownership, and measurable impact.",
                  cardClass: "why-card-3",
                },
                {
                  icon: <TrendingUp size={24} />,
                  title: "Clear Growth Trajectory",
                  desc: "As WSC scales to 15+ offers and beyond, leadership and senior roles are opening up. Early team members grow with the company.",
                  cardClass: "why-card-4",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className={`glass-card ${card.cardClass} p-10`}
                >
                  <div className="text-wsc-purple-light mb-5">{card.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-wsc-text-secondary leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ───── Open Roles ───── */}
        <section
          id="roles"
          className="glow-section reveal-section scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-6 py-32">
            {/* Section heading with glow + accent */}
            <div className="roles-heading-wrap text-center mb-16">
              <h2 className="relative z-10 text-3xl font-bold headline-gradient inline-block">
                Open Roles
              </h2>
              <span className="roles-heading-accent" />
              <p className="relative z-10 mt-5 text-wsc-text-secondary max-w-lg mx-auto">
                Join our team and help scale the biggest creators in the world.
              </p>
            </div>

            <div className="space-y-6">
              {jobs.map((job) => (
                <Link
                  key={job.slug}
                  href={`/roles/${job.slug}`}
                  className="group block role-card"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3 flex-wrap">
                        <h3 className="text-lg font-semibold text-white group-hover:text-wsc-purple-light transition-colors duration-300">
                          {job.title}
                        </h3>
                        <span className="dept-badge hidden sm:inline-block">
                          {job.department}
                        </span>
                      </div>

                      <p className="text-sm text-wsc-text-secondary leading-relaxed mb-4">
                        {job.summary}
                      </p>

                      {/* Color-coded info pills */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="badge-status flex items-center gap-1.5">
                          <Briefcase size={11} />
                          {job.type}
                        </span>
                        <span className="badge-location flex items-center gap-1.5">
                          <MapPin size={11} />
                          {job.location}
                        </span>
                        <span className="badge-compensation flex items-center gap-1.5">
                          <DollarSign size={11} />
                          {cardCompensation[job.slug] ?? job.compensation}
                        </span>
                      </div>
                    </div>

                    <div className="role-card-arrow flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 transition-all duration-300 shrink-0 mt-1">
                      <ArrowRight
                        size={16}
                        className="text-wsc-text-secondary transition-colors duration-300"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ───── CTA — Full Bleed ───── */}
        <section className="cta-full-bleed relative">
          {/* Gradient fade from page bg into CTA */}
          <div className="cta-fade-in absolute top-0 left-0 right-0 z-10" />

          <div className="relative z-0 pt-48 pb-28 text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to Scale With Us?
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              We&apos;re looking for A-players focused on results, impact, and
              want to join the fastest growing agency in the world.
            </p>
            <a
              href="#roles"
              className="btn-hero inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-white text-[#0B0014] font-semibold text-sm"
            >
              View Open Roles
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      {/* ───── Footer ───── */}
      <footer className="bg-wsc-bg">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
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
