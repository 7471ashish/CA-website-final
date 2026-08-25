import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Building2, ShieldCheck, Briefcase, TrendingUp, Globe, PieChart, Award, FileCheck } from 'lucide-react';
import SEO from '../components/common/SEO';
import { servicesData } from '../data/servicesData';
import { siteConfig } from '../data/siteConfig';
import TrustBanner from '../components/common/TrustBanner';
import InteractiveDocumentChecklist from '../components/common/InteractiveDocumentChecklist';

const iconMap = {
  FileText: FileText,
  Building2: Building2,
  ShieldCheck: ShieldCheck,
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
  Globe: Globe,
  PieChart: PieChart,
  Award: Award,
};

export default function ServicesPage() {
  const { onOpenConsultation } = useOutletContext();

  return (
    <div>
      <SEO 
        title="Our Services | DRB & COMPANY - Chartered Accountants Meerut"
        description="Comprehensive Chartered Accountancy services: Company Incorporation, ITR Filing, GST Returns, Statutory Audits, Tax Audit Sec 44AB, DISA Systems Audit & Bank CMA project advisory in Meerut."
        canonical="https://www.drbandcompany.com/services"
      />
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white py-16 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-gold-300 bg-gold-500/20 border border-gold-500/30 px-3.5 py-1 rounded-full mb-4">
            Practice Overview &bull; All 9 Specialized Practice Domains
          </span>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Professional Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed">
            Strictly tailored Chartered Accountancy and financial solutions matching the practice of {siteConfig.firmName} in {siteConfig.locationCity}, {siteConfig.locationState}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50 dark:bg-navy-950/60 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <TrustBanner />

          {/* 8 Detailed Service Sections */}
          <div className="space-y-12">
            {servicesData.map((svc) => {
              const Icon = iconMap[svc.iconName] || FileText;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm hover:border-gold-400/80 dark:hover:border-gold-500/80 transition-all duration-300 scroll-mt-28"
                >
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-navy-900 dark:bg-navy-800 text-gold-400 flex items-center justify-center shrink-0 shadow-md border border-slate-800 dark:border-slate-700">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-extrabold text-gold-600 dark:text-gold-400 uppercase tracking-widest">
                            Practice {svc.num}
                          </span>
                          <span className="text-slate-300 dark:text-slate-600">&bull;</span>
                          <span className="text-xs font-bold text-slate-500 dark:text-slate-400">{siteConfig.locationCity} &bull; {siteConfig.locationState}</span>
                        </div>
                        <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white mt-1">
                          {svc.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => onOpenConsultation(svc.title)}
                        className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-heading font-bold text-xs uppercase tracking-wider shadow-gold text-center cursor-pointer"
                      >
                        Book Appointment
                      </button>
                      {svc.detailPath.startsWith('/') && !svc.detailPath.includes('#') && (
                        <Link
                          to={svc.detailPath}
                          className="w-full sm:w-auto py-2.5 px-5 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-750 text-slate-800 dark:text-slate-100 font-heading font-bold text-xs text-center transition-colors border border-slate-200 dark:border-slate-700"
                        >
                          Dedicated Page &rarr;
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed my-6">
                    {svc.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                    {/* Deliverables */}
                    <div className="bg-slate-50 dark:bg-navy-950/80 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 sm:p-6">
                      <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Scope of Work &amp; Deliverables</span>
                      </h3>
                      <ul className="space-y-2.5">
                        {svc.deliverables.map((deliv, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <span className="text-gold-600 dark:text-gold-400 font-bold mt-0.5">&bull;</span>
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Interactive Required Documents Checklist */}
                    <InteractiveDocumentChecklist
                      serviceTitle={svc.title}
                      documents={svc.documents}
                      onOpenConsultation={onOpenConsultation}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
