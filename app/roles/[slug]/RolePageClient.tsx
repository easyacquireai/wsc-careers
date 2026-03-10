"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Briefcase, MapPin, DollarSign, X } from "lucide-react";
import type { Job } from "@/lib/jobs";

export default function RolePageClient({ job }: { job: Job }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const scrollToApply = useCallback(() => {
    const el = document.getElementById("apply");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-wsc-bg">
      {/* Sticky Header */}
      <header className="nav-glass fixed top-0 left-0 right-0 z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#roles"
            className="inline-flex items-center gap-2 text-sm text-wsc-text-secondary hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Open Roles</span>
            <span className="sm:hidden">Back</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/WSC_logo.png"
                alt="We Scale Creators"
                width={28}
                height={28}
                className="hidden sm:block"
              />
              <span className="font-semibold text-white text-sm hidden md:inline">
                We Scale Creators
              </span>
            </Link>
          </div>

          <button
            onClick={scrollToApply}
            type="button"
            className="btn-hero inline-flex items-center gap-2 px-5 py-2 bg-white text-[#0B0014] font-semibold text-sm cursor-pointer"
          >
            Apply Now
            <ArrowRight size={14} />
          </button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        {/* Title Section */}
        <div className="mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {job.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-5">
            <span className="flex items-center gap-1.5 text-sm text-wsc-text-secondary">
              <Briefcase size={14} />
              {job.type}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-wsc-text-secondary">
              <MapPin size={14} />
              {job.location}
            </span>
            <span className="flex items-center gap-1.5 text-sm text-wsc-text-secondary">
              <DollarSign size={14} />
              {job.compensation}
            </span>
            <span className="dept-badge">{job.department}</span>
          </div>
        </div>

        {/* Who We Are */}
        {job.whoWeAre && (
          <section className="detail-section mb-8">
            <h2 className="detail-section-heading">Who We Are</h2>
            <p className="text-wsc-text-secondary leading-relaxed text-[15px]">
              {job.whoWeAre}
            </p>
          </section>
        )}

        {/* The Role */}
        {job.theRole && (
          <section className="detail-section mb-8">
            <h2 className="detail-section-heading">The Role</h2>
            <p className="text-wsc-text-secondary leading-relaxed text-[15px]">
              {job.theRole}
            </p>
          </section>
        )}

        {/* What You Will Do / Own */}
        {job.whatYoullDo.length > 0 && (
          <section className="detail-section mb-8">
            <h2 className="detail-section-heading">{job.whatYoullDoHeading}</h2>
            <ul className="space-y-4">
              {job.whatYoullDo.map((item, i) => (
                <li key={i} className="flex gap-3.5 text-[15px] leading-relaxed">
                  <span className="text-wsc-purple-light mt-1 shrink-0 text-lg">
                    &bull;
                  </span>
                  <span className="text-wsc-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Requirements */}
        {job.requirements.length > 0 && (
          <section className="detail-section mb-8">
            <h2 className="detail-section-heading">Requirements</h2>
            <ul className="space-y-4">
              {job.requirements.map((item, i) => (
                <li key={i} className="flex gap-3.5 text-[15px] leading-relaxed">
                  <span className="text-wsc-purple-light mt-1 shrink-0 text-lg">
                    &bull;
                  </span>
                  <span className="text-wsc-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Compensation and Benefits */}
        {job.compensationAndBenefits.length > 0 && (
          <section className="detail-section mb-8">
            <h2 className="detail-section-heading">Compensation and Benefits</h2>
            <ul className="space-y-4">
              {job.compensationAndBenefits.map((item, i) => (
                <li key={i} className="flex gap-3.5 text-[15px] leading-relaxed">
                  <span className="text-wsc-purple-light mt-1 shrink-0 text-lg">
                    &bull;
                  </span>
                  <span className="text-wsc-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* How to Apply */}
        <section className="detail-section mb-8">
          <h2 className="detail-section-heading">How to Apply</h2>
          <p className="text-wsc-text-secondary leading-relaxed text-[15px]">
            Click the button below, fill out the application, and our hiring
            team will be in touch with more information.
          </p>
        </section>

        {/* Apply Now CTA */}
        <section id="apply" className="mt-16 scroll-mt-24">
          <div className="cta-gradient p-10 md:p-14 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Apply Now
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/80 max-w-lg mx-auto leading-relaxed">
              Click the button below, fill out the application, and our hiring
              team will be in touch with more information.
            </p>
            <button
              onClick={openModal}
              type="button"
              className="btn-hero inline-flex items-center gap-2 mt-8 px-10 py-4 bg-white text-[#0B0014] font-semibold text-sm cursor-pointer"
            >
              Apply Now
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

        {/* Back link bottom */}
        <div className="mt-14 text-center">
          <Link
            href="/#roles"
            className="inline-flex items-center gap-2 text-sm text-wsc-text-secondary hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={16} />
            Back to All Roles
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-16">
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

      {/* Typeform Modal Overlay */}
      {showModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal container */}
          <div
            className="relative w-[94vw] h-[90vh] max-w-3xl rounded-2xl overflow-hidden bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              type="button"
              className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
              aria-label="Close application form"
            >
              <X size={18} />
            </button>

            {/* Typeform iframe */}
            <iframe
              src="https://form.typeform.com/to/YFvvwYCM"
              title="Apply Now"
              className="w-full h-full border-0"
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
        </div>
      )}
    </div>
  );
}
