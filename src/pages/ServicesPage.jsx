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

          {/* 8 Detailed Service Sections - Ultra-Compact & Easy to Browse */}
          <div className="space-y-4 sm:space-y-5">
            {servicesData.map((svc) => {
              const Icon = iconMap[svc.iconName] || FileText;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-5 shadow-xs hover:border-gold-400/80 transition-all duration-200 scroll-mt-20"
                >
                  {/* Top Bar: Icon, Title & Actions */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-xs border border-slate-800">
                        <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] sm:text-[11px] font-extrabold text-gold-600 uppercase tracking-wider">
                            Practice {svc.num}
                          </span>
                          <span className="text-slate-300">&bull;</span>
                          <span className="text-[10px] sm:text-[11px] font-bold text-slate-500">{siteConfig.locationCity}</span>
                        </div>
                        <h2 className="font-heading text-base sm:text-lg lg:text-xl font-extrabold text-[#102c4c] leading-tight">
                          {svc.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                      <button
                        onClick={() => onOpenConsultation(svc.title)}
                        className="py-1.5 px-3.5 rounded-lg bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-heading font-black text-xs uppercase tracking-wider shadow-xs hover:from-gold-300 hover:to-gold-500 transition-all text-center cursor-pointer shrink-0"
                      >
                        Book Appointment
                      </button>
                      {svc.detailPath.startsWith('/') && !svc.detailPath.includes('#') && (
                        <Link
                          to={svc.detailPath}
                          className="py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-xs text-center transition-colors border border-slate-200 flex items-center gap-1 shrink-0"
                        >
                          <span>Dedicated Page</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-normal my-2.5">
                    {svc.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-1">
                    {/* Deliverables (Compact 2-Column Grid) */}
                    <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-3 sm:p-4 shadow-2xs flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-[#102c4c] pb-2 border-b border-slate-200/70 mb-2.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Scope of Work &amp; Deliverables</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {svc.deliverables.map((deliv, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-700 p-1 px-2 rounded bg-white border border-slate-200/70">
                              <span className="text-gold-600 font-bold text-xs">&bull;</span>
                              <span className="truncate" title={deliv}>{deliv}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Interactive Required Documents Checklist (Ultra-Compact) */}
                    <InteractiveDocumentChecklist
                      serviceTitle={svc.title}
                      documents={svc.documents}
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
