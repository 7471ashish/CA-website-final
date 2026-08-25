import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  FileText, 
  Building2, 
  ShieldCheck, 
  Briefcase, 
  TrendingUp, 
  Globe, 
  PieChart, 
  Award,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { siteConfig } from '../../data/siteConfig';
import TrustBanner from '../common/TrustBanner';

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

const categoryMap = {
  all: "All Services (9)",
  tax: "Direct Tax & GST",
  international: "UAE & NRI Taxation",
  audit: "Audit & DISA Systems",
  advisory: "Certifications & Setup"
};

export default function ServicesSection({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = servicesData.filter((svc) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'tax') return svc.id === 'income-tax' || svc.id === 'gst-services';
    if (activeCategory === 'international') return svc.id === 'uae-taxation' || svc.id === 'nri-tax';
    if (activeCategory === 'audit') return svc.id === 'audit-assurance' || svc.id === 'company-law';
    if (activeCategory === 'advisory') return svc.id === 'business-setup' || svc.id === 'loan-project' || svc.id === 'networth-certificate';
    return true;
  });

  return (
    <section className="py-20 bg-slate-50/70 dark:bg-navy-950/80 transition-colors duration-200" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-300 bg-gold-100/80 dark:bg-gold-500/15 border border-gold-300/80 dark:border-gold-500/30 px-3.5 py-1 rounded-full mb-3 shadow-sm">
            <span>Specialized Practice Domains</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            Comprehensive Chartered Accountancy Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            Delivering statutory precision, tax optimization, and corporate regulatory governance across {siteConfig.locationCity} and nationwide.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          {Object.entries(categoryMap).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === key
                  ? 'bg-navy-900 text-white dark:bg-gold-500 dark:text-navy-950 shadow-md scale-105'
                  : 'bg-white dark:bg-navy-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-gold-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Trust Badges Banner */}
        <TrustBanner />

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((svc) => {
            const Icon = iconMap[svc.iconName] || FileText;
            return (
              <div
                key={svc.id}
                className="group relative bg-white dark:bg-navy-900/90 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-card-hover hover:border-gold-400/80 dark:hover:border-gold-500/60 transition-all duration-300 transform hover:-translate-y-1.5"
              >
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 via-gold-500 to-navy-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Subtle Background Number Identifier */}
                <span className="absolute top-4 right-5 font-heading text-4xl font-black text-slate-100 dark:text-slate-800/60 group-hover:text-gold-500/15 transition-colors duration-300 select-none">
                  {svc.num}
                </span>

                <div>
                  {/* Icon with Ambient Container */}
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200/60 dark:from-navy-800 dark:to-navy-850 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-navy-900 dark:text-gold-400 group-hover:bg-navy-900 dark:group-hover:bg-gold-500 group-hover:text-gold-400 dark:group-hover:text-navy-950 group-hover:border-navy-900 dark:group-hover:border-gold-500 shadow-sm transition-all duration-300 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Service Title */}
                  <h3 className="font-heading text-lg font-bold text-navy-900 dark:text-white mb-2.5 leading-snug">
                    {svc.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                    {svc.shortDesc}
                  </p>

                  {/* Feature Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {svc.chips.map((chip, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold bg-slate-100 dark:bg-navy-800/90 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md border border-slate-200/80 dark:border-slate-700/80"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <Link
                    to={svc.detailPath}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 dark:text-gold-400 group-hover:text-gold-600 dark:group-hover:text-gold-300 transition-colors duration-200"
                  >
                    <span>View Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>

                  {onOpenConsultation && (
                    <button
                      onClick={() => onOpenConsultation(svc.title)}
                      className="text-[11px] font-bold text-gold-600 dark:text-gold-400 hover:underline cursor-pointer"
                    >
                      Consult &rarr;
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Box inside Services */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 text-white border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-1">
              Need a Custom Tax &amp; Audit Assessment?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with {siteConfig.principal} for tailored advisory and statutory filings.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            {onOpenConsultation && (
              <button
                onClick={() => onOpenConsultation("General Tax & Audit Assessment")}
                className="py-3 px-6 rounded-xl bg-gold-400 hover:bg-gold-300 text-navy-950 font-heading font-extrabold text-xs uppercase tracking-wider transition-all shadow-gold cursor-pointer"
              >
                Schedule Consultation
              </button>
            )}
            <Link
              to="/contact"
              className="py-3 px-5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs tracking-wider border border-white/20 transition-all"
            >
              Office Details
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

