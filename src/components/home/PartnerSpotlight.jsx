import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Award, 
  ShieldCheck, 
  UserCheck, 
  FileCheck2, 
  Lock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function PartnerSpotlight({ onOpenConsultation }) {
  const pillars = [
    {
      icon: UserCheck,
      title: "Senior Partner Oversight",
      desc: "Every tax computation, audit report, and corporate filing is directly reviewed by CA Deepanshi Bansal."
    },
    {
      icon: ShieldCheck,
      title: "100% ICAI UDIN Verification",
      desc: "Instant 18-digit Unique Document Identification Number (UDIN) generated for authentic legal validity."
    },
    {
      icon: FileCheck2,
      title: "Zero-Defect Reconciliation",
      desc: "Thorough reconciliation of Form 26AS, AIS/TIS, and GSTR-2B before submitting any returns."
    },
    {
      icon: Lock,
      title: "Statutory Confidentiality",
      desc: "Strict adherence to ICAI ethical code and institutional-grade data privacy for all financial records."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-navy-950 transition-colors duration-200" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Partner Side Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1c5f94] via-[#2474b3] to-[#184773] p-8 sm:p-12 text-white flex flex-col justify-between items-center text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-20 -left-20 w-48 h-48 bg-gold-500/20 blur-3xl rounded-full pointer-events-none"></div>

            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="p-3.5 bg-white rounded-2xl shadow-2xl mb-6 border border-slate-200">
                <img
                  src={siteConfig.caLogoUrl}
                  alt="Chartered Accountant ICAI Emblem"
                  className="h-20 w-auto object-contain"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/30 text-gold-300 text-[10px] font-extrabold uppercase tracking-widest">
                  Principal Chartered Accountant
                </span>
                <span className="px-3 py-1 rounded-full bg-navy-800 border border-gold-400/40 text-gold-300 text-[10px] font-extrabold uppercase tracking-widest shadow-sm">
                  DISA (ICAI) Certified
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {siteConfig.principal}
              </h3>
              <span className="text-sm font-bold text-gold-400 uppercase tracking-widest mt-1">
                {siteConfig.qualifications}
              </span>
              <p className="text-xs text-slate-300 mt-2">
                Partner &bull; {siteConfig.locationCity}
              </p>
            </div>

            {/* Bottom Experience Stats */}
            <div className="mt-8 pt-6 border-t border-white/15 w-full flex justify-around text-center relative z-10">
              <div>
                <span className="block font-heading text-2xl font-black text-gold-400">{siteConfig.experienceYears}</span>
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Years Practice</span>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div>
                <span className="block font-heading text-2xl font-black text-gold-400">{siteConfig.establishedYear}</span>
                <span className="text-[10px] text-slate-300 uppercase tracking-wider font-bold">Est. In {siteConfig.locationCity}</span>
              </div>
            </div>
          </div>

          {/* Firm Bio & 4 Pillars Side */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-300 bg-gold-100/80 dark:bg-gold-500/15 border border-gold-300/80 dark:border-gold-500/30 px-3.5 py-1 rounded-full mb-3">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                <span>Firm Values &amp; Standards</span>
              </span>

              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white tracking-tight mb-4 leading-tight">
                Integrity, Precision &amp; Strategic Advisory You Can Rely On
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Led by <strong>{siteConfig.principal}</strong> ({siteConfig.qualifications}), <strong>{siteConfig.firmName}</strong> operates with the core belief that high-quality Chartered Accountancy must combine deep regulatory knowledge with immediate, accessible client communication across Indian Direct/Indirect Tax, UAE Corporate Tax &amp; VAT, and DISA Information Systems Audits.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {pillars.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-navy-850 border border-slate-200 dark:border-slate-800 shadow-sm">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <Icon className="w-4 h-4 text-gold-500 shrink-0" />
                        <h4 className="font-heading text-xs sm:text-sm font-bold text-navy-900 dark:text-white">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <Link
                to="/about"
                className="py-3 px-6 rounded-xl bg-navy-900 hover:bg-navy-850 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-950 font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                Learn More About Our Practice &rarr;
              </Link>
              
              {onOpenConsultation && (
                <button
                  onClick={() => onOpenConsultation("Partner Consultation")}
                  className="py-3 px-5 rounded-xl bg-white dark:bg-navy-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-gold-400 font-heading font-bold text-xs tracking-wider transition-colors cursor-pointer"
                >
                  Book Consultation
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

