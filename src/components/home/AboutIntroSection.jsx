import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, ShieldCheck, CheckCircle2, Building2, Scale, FileSpreadsheet } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function AboutIntroSection({ onOpenConsultation }) {
  const highlights = [
    { title: "ICAI Regulated", desc: "Registered Partnership Firm", icon: Scale },
    { title: "Dual Senior Partners", desc: "FCA + ACA, DISA (ICAI)", icon: Users },
    { title: "100% UDIN Verification", desc: "All Certificates & Audits", icon: ShieldCheck },
    { title: "Full Spectrum Advisory", desc: "Taxation, Audits, MCA & NGO", icon: Building2 }
  ];

  return (
    <section className="py-20 sm:py-24 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 transition-colors duration-200 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-100 dark:bg-gold-500/15 border border-gold-300 dark:border-gold-500/30 text-gold-800 dark:text-gold-300 text-xs font-black uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Chartered Accountants Partnership Firm &bull; Meerut</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-navy-950 dark:text-white tracking-tight">
            About DRB &amp; COMPANY
          </h2>
          <p className="text-base sm:text-lg text-gold-600 dark:text-gold-400 font-bold mt-2">
            Transforming Knowledge into Values &bull; CA in Meerut
          </p>
          <div className="w-20 h-1.5 bg-gold-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Narrative Narrative Flow */}
        <div className="space-y-6 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed max-w-4xl mx-auto font-normal">
          <p>
            <strong>{siteConfig.firmName}</strong> is a distinguished Chartered Accountants <strong>Partnership Firm</strong> located in the historic commercial hub of <strong>{siteConfig.locationCity}</strong>. Regulated under the guidelines of the Institute of Chartered Accountants of India (ICAI), our practice is steered by two accomplished senior partners — <strong>CA. Deepanshi Bansal</strong> (ACA, DISA (ICAI), B.Com) and <strong>CA. Parul</strong> (FCA, M.Com).
          </p>
          <p>
            Our firm combines advanced technological proficiencies (such as certified <strong>DISA Information Systems Audits</strong> and automated GST reconciliations) with time-tested corporate auditing, direct taxation litigation, Section 8 / NGO registrations, and express <strong>Visa Networth Certifications</strong>. Every file, audit report, and representation at DRB &amp; COMPANY receives direct, meticulous partner supervision.
          </p>
        </div>

        {/* 4 Value Pillars Bar - Deep Navy Blue Background with White Text */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto my-10">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] border border-gold-400/40 rounded-2xl p-4 text-center shadow-md hover:border-gold-400 transition-colors">
                <div className="w-10 h-10 mx-auto mb-2.5 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-400/30 flex items-center justify-center shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading text-xs sm:text-sm font-black text-white leading-tight">
                  {h.title}
                </h4>
                <p className="text-[11px] font-medium text-slate-200 mt-1">
                  {h.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* TWO PARTNER CARDS EXPANDED */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          
          {/* Card 1: CA Deepanshi Bansal */}
          <div className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] p-6 sm:p-7 rounded-3xl text-white border-2 border-gold-400/50 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-gold-400/25 border border-gold-300/60 text-[10px] font-black text-gold-200 uppercase tracking-wider">
                  Managing Partner
                </span>
                <span className="text-xs text-slate-100 font-bold">📍 Meerut Office</span>
              </div>
              <h3 className="font-heading text-xl font-black text-white">
                CA. Deepanshi Bansal
              </h3>
              <p className="text-xs font-bold text-gold-300 uppercase tracking-wide mt-1">
                ACA, DISA (ICAI), B.Com
              </p>
              <p className="text-xs text-slate-100 leading-relaxed mt-3 pt-3 border-t border-white/15">
                Direct Tax Advisory, DISA Information Systems Audit, MCA Company Incorporations, and ROC Statutory Filings.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/15 flex items-center justify-between text-xs">
              <span className="text-gold-300 font-extrabold">DISA (ICAI) Qualified</span>
              <span className="text-slate-100">2+ Years Active Practice</span>
            </div>
          </div>

          {/* Card 2: CA Parul */}
          <div className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] p-6 sm:p-7 rounded-3xl text-white border-2 border-gold-400/50 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-emerald-400/25 border border-emerald-300/60 text-[10px] font-black text-emerald-200 uppercase tracking-wider">
                  Senior Partner
                </span>
                <span className="text-xs text-slate-100 font-bold">📍 Meerut Office</span>
              </div>
              <h3 className="font-heading text-xl font-black text-white">
                CA. Parul
              </h3>
              <p className="text-xs font-bold text-gold-300 uppercase tracking-wide mt-1">
                FCA, M.Com
              </p>
              <p className="text-xs text-slate-100 leading-relaxed mt-3 pt-3 border-t border-white/15">
                Corporate Statutory Audits, GST Strategic Planning, Banking Project Financing (CMA Data), and Tax Audit Sec 44AB.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/15 flex items-center justify-between text-xs">
              <span className="text-emerald-200 font-extrabold">Fellow Chartered Accountant (FCA)</span>
              <span className="text-slate-100">ICAI Registered Partner</span>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 py-3.5 px-9 rounded-xl bg-navy-950 dark:bg-gold-500 text-white dark:text-navy-950 font-heading font-black text-xs uppercase tracking-wider hover:bg-navy-900 dark:hover:bg-gold-400 transition-all shadow-lg cursor-pointer"
          >
            <span>Read Complete Firm Profile</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-xl bg-slate-100 dark:bg-navy-900 text-navy-950 dark:text-slate-100 font-heading font-bold text-xs uppercase tracking-wider hover:bg-slate-200 dark:hover:bg-navy-800 border border-slate-300 dark:border-slate-700 transition-all cursor-pointer"
          >
            <span>Book Partner Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
}
