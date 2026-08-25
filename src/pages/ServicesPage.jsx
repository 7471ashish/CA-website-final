import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Building2, 
  ShieldCheck, 
  Briefcase, 
  TrendingUp, 
  Globe, 
  PieChart, 
  Award, 
  FileCheck,
  Heart,
  Layers,
  Sparkles
} from 'lucide-react';
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
  Heart: Heart,
};

const categoryMap = {
  'income-tax': 'tax',
  'gst-services': 'tax',
  'audit-assurance': 'audit',
  'company-law': 'corporate',
  'ngo-trust': 'ngo',
  'trademark-ip': 'ip',
  'networth-certificate': 'advisory',
  'nri-tax': 'advisory',
  'loan-project': 'advisory',
};

const filterTabs = [
  { id: 'all', label: 'All Practices', count: 9 },
  { id: 'tax', label: 'Taxation & GST', count: 2 },
  { id: 'audit', label: 'Audit & Assurance', count: 1 },
  { id: 'corporate', label: 'Company Law', count: 1 },
  { id: 'advisory', label: 'Global Wealth & Loans', count: 3 },
  { id: 'ngo', label: 'NGO & Trust', count: 1 },
  { id: 'ip', label: 'Trademark & IP', count: 1 }
];

export default function ServicesPage() {
  const { onOpenConsultation } = useOutletContext();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(svc => categoryMap[svc.id] === activeCategory);

  return (
    <div>
      <SEO 
        title="Our Services | DRB & COMPANY - Chartered Accountants Meerut"
        description="Comprehensive Chartered Accountancy services: Company Incorporation, ITR Filing, GST Returns, Statutory Audits, Tax Audit Sec 44AB, DISA Systems Audit & Bank CMA project advisory in Meerut."
        canonical="https://www.drbandcompany.com/services"
      />
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white py-14 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-gold-300 bg-gold-500/20 border border-gold-500/30 px-3.5 py-1 rounded-full mb-3">
            Practice Overview &bull; All 9 Specialized Practice Domains
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Professional Services
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mt-3 leading-relaxed">
            Strictly tailored Chartered Accountancy and corporate solutions matching the practice of {siteConfig.firmName} in {siteConfig.locationCity}, {siteConfig.locationState}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-slate-50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <TrustBanner />

          {/* Interactive Sub-Services Category Filter Pills (Zero Scrolling Solution) */}
          <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-2 sm:p-2.5 shadow-md mb-8 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`py-2 px-3.5 sm:px-4 rounded-xl text-xs sm:text-[13px] font-heading font-black tracking-wide whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#102c4c] text-gold-400 shadow-sm border border-[#102c4c]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#102c4c]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-gold-500 text-navy-950' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Filtered Compact Service Cards */}
          <div className="space-y-4 sm:space-y-5">
            {filteredServices.map((svc) => {
              const Icon = iconMap[svc.iconName] || FileText;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="bg-white border border-slate-200/90 rounded-2xl p-3.5 sm:p-5 shadow-xs hover:border-gold-400/80 transition-all duration-200 scroll-mt-24"
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
                      <Link
                        to={svc.detailPath}
                        className="py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-xs text-center transition-colors border border-slate-200 flex items-center gap-1 shrink-0"
                      >
                        <span>Dedicated Page</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-normal my-2.5">
                    {svc.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-1">
                    {/* Deliverables (Compact 2-Column Grid with Dark Borders) */}
                    <div className="bg-slate-50/90 border-2 border-slate-300 rounded-xl p-3.5 sm:p-4 shadow-sm flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading text-xs sm:text-[13px] font-black uppercase tracking-wider text-gold-600 pb-2 border-b border-gold-300 mb-2.5 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>Scope of Work &amp; Deliverables</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {svc.deliverables.map((deliv, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-800 p-1.5 px-2.5 rounded-lg bg-white border border-slate-300 shadow-2xs hover:border-gold-500 transition-colors">
                              <span className="text-gold-600 font-black text-xs">&bull;</span>
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
