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
  Sparkles,
  ChevronRight
} from 'lucide-react';
import SEO from '../components/common/SEO';
import { servicesCategories, servicesData } from '../data/servicesData';
import { siteConfig } from '../data/siteConfig';
import TrustBanner from '../components/common/TrustBanner';

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
  FileCheck: FileCheck,
};

export default function ServicesPage() {
  const { onOpenConsultation } = useOutletContext();
  const [selectedCatId, setSelectedCatId] = useState(servicesCategories[0].id);

  const activeCategory = servicesCategories.find(cat => cat.id === selectedCatId) || servicesCategories[0];
  const CategoryIcon = iconMap[activeCategory.iconName] || Briefcase;

  return (
    <div>
      <SEO 
        title="All Services & Practice Directory | DRB & COMPANY - Chartered Accountants Meerut"
        description="Explore all 38+ specialized Chartered Accountancy and corporate services by DRB & COMPANY: Business Registration, Statutory Licenses, Tax & ITR Filing, Audits, NGO Trust, Trademark, and Visa Wealth Advisory in Meerut."
        canonical="https://www.drbandcompany.com/services"
      />
      
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white py-12 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-gold-300 bg-gold-500/20 border border-gold-500/30 px-3.5 py-1 rounded-full mb-3">
            Practice Directory &bull; All 38+ Sub-Services
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Professional Practice Directory
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mt-2.5 leading-relaxed">
            Select any practice domain below to instantly explore all specialized sub-services, filings, and statutory deliverables of {siteConfig.firmName}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10 bg-slate-50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <TrustBanner />

          {/* Interactive 6-Category Pill Bar (Instant Zero-Scroll Navigation) */}
          <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border border-slate-200 rounded-2xl p-2 sm:p-2.5 shadow-md mb-8 flex items-center gap-2 overflow-x-auto no-scrollbar">
            {servicesCategories.map((cat) => {
              const isActive = selectedCatId === cat.id;
              const TabIcon = iconMap[cat.iconName] || Briefcase;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCatId(cat.id)}
                  className={`py-2 px-3.5 sm:px-4 rounded-xl text-xs sm:text-[13px] font-heading font-black tracking-wide whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#102c4c] text-gold-400 shadow-sm border border-[#102c4c]'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-[#102c4c]'
                  }`}
                >
                  <TabIcon className={`w-3.5 h-3.5 ${isActive ? 'text-gold-400' : 'text-slate-500'}`} />
                  <span>{cat.categoryTitle}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? 'bg-gold-500 text-navy-950' : 'bg-slate-200 text-slate-600'
                  }`}>
                    {cat.services.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Header Banner */}
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-4 sm:p-6 mb-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0 shadow-sm border border-slate-800">
                <CategoryIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-gold-600">
                    {activeCategory.badge}
                  </span>
                  <span className="text-slate-300">&bull;</span>
                  <span className="text-[11px] font-bold text-slate-500">{activeCategory.services.length} Sub-Services Available</span>
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#102c4c]">
                  {activeCategory.categoryTitle}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {activeCategory.categorySubtitle}
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenConsultation(activeCategory.categoryTitle)}
              className="py-2 px-4 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-heading font-black text-xs uppercase tracking-wider shadow-xs hover:from-gold-300 hover:to-gold-500 transition-all text-center cursor-pointer shrink-0 whitespace-nowrap"
            >
              Consult On {activeCategory.categoryTitle.split(' ')[0]}
            </button>
          </div>

          {/* All Sub-Services in Active Category (Compact Multi-Column Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {activeCategory.services.map((svc) => {
              const SubIcon = iconMap[svc.icon] || FileText;
              return (
                <div
                  key={svc.id}
                  className="bg-white border-2 border-slate-300 hover:border-gold-500/80 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Sub-Service Top Row */}
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-navy-900 group-hover:text-gold-400 text-slate-700 flex items-center justify-center shrink-0 transition-colors">
                        <SubIcon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-gold-700 bg-gold-50 border border-gold-300 px-2 py-0.5 rounded-md text-right leading-tight">
                        {svc.highlight}
                      </span>
                    </div>

                    {/* Sub-Service Title */}
                    <h3 className="font-heading text-sm font-bold text-[#102c4c] group-hover:text-gold-600 transition-colors leading-snug mb-2">
                      {svc.title}
                    </h3>

                    {/* Sub-Service Description */}
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {svc.shortDesc}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenConsultation(svc.title)}
                      className="py-1 px-2.5 rounded-lg bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-heading font-black text-[11px] uppercase tracking-wider hover:from-gold-300 hover:to-gold-500 shadow-2xs transition-all cursor-pointer"
                    >
                      Book
                    </button>
                    <Link
                      to={svc.link}
                      className="py-1 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-heading font-bold text-[11px] flex items-center gap-1 transition-colors border border-slate-200"
                    >
                      <span>Dedicated Page</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </Link>
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
