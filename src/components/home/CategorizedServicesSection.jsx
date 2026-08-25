import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  FileText, 
  Tags, 
  ClipboardCheck, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  Globe, 
  ArrowRight,
  Landmark,
  CheckCircle2,
  Scale,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function CategorizedServicesSection({ onOpenConsultation }) {
  // 1. Business Registrations Data
  const businessRegistrations = [
    {
      title: "Foreign Company Registration",
      desc: "Setting up a foreign company subsidiary, branch, or liaison office in India with 100% RBI/FDI compliance.",
      icon: Globe,
      badge: "Global FDI",
      link: "/company-incorporation"
    },
    {
      title: "Private Limited Company",
      desc: "The most popular corporate entity for startups and enterprises with limited liability protection and equity access.",
      icon: Building2,
      badge: "Most Popular",
      link: "/company-incorporation"
    },
    {
      title: "Public Limited Company",
      desc: "Suitable for large enterprises aiming to raise equity capital from the public and financial institutions.",
      icon: Scale,
      badge: "Public Capital",
      link: "/company-incorporation"
    },
    {
      title: "LLP Registration",
      desc: "Ideal structure for professional firms and businesses having multiple partners with limited liability.",
      icon: Briefcase,
      badge: "Flexible Structure",
      link: "/company-incorporation"
    },
    {
      title: "One Person Company (OPC)",
      desc: "Corporate business entity ideal for solo entrepreneurs aiming to start a company with 100% single ownership.",
      icon: Building2,
      badge: "Solo Founder",
      link: "/company-incorporation"
    },
    {
      title: "Partnership Registration",
      desc: "Forming a partnership firm with customized partnership deed drafting and registrar authentication.",
      icon: Briefcase,
      badge: "Quick Setup",
      link: "/company-incorporation"
    },
    {
      title: "GST Registration (3-Day)",
      desc: "Quick 3-day express GSTIN registration under the Goods and Services Tax Act with zero hassle.",
      icon: Tags,
      badge: "3-Day Express",
      link: "/gst-registration"
    },
    {
      title: "MSME Udyam Registration",
      desc: "Central government Udyam certification unlocking priority bank lending, subsidies, and tender exemptions.",
      icon: Award,
      badge: "Govt Subsidies",
      link: "/services"
    },
    {
      title: "FSSAI Food License",
      desc: "Mandatory Food Safety license for manufacturers, traders, restaurants, and cloud kitchens.",
      icon: ShieldCheck,
      badge: "Food Safety",
      link: "/services"
    },
    {
      title: "Import Export Code (IEC)",
      desc: "10-digit DGFT license mandatory for importing/exporting commercial goods or international services.",
      icon: Globe,
      badge: "Lifetime Valid",
      link: "/services"
    }
  ];

  // 2. Audit & Tax Services Data
  const auditTaxServices = [
    {
      title: "ITR Filing (Forms 1-7)",
      desc: "Comprehensive direct tax return filing for salaried, business, capital gains, and NRI taxpayers.",
      icon: FileText,
      badge: "AIS/TIS Sync",
      link: "/itr-filing"
    },
    {
      title: "GST Returns & GSTR-9",
      desc: "Monthly GSTR-1, GSTR-3B filings, automatic GSTR-2B purchase input reconciliation, and annual audit.",
      icon: Tags,
      badge: "ITC Reconciliation",
      link: "/gst-registration"
    },
    {
      title: "ROC & MCA Annual Filings",
      desc: "Filing of Form AOC-4 (Financials), MGT-7 (Annual Return), Director DIR-3 KYC, and secretarial compliance.",
      icon: Briefcase,
      badge: "Zero Penalty",
      link: "/company-incorporation"
    },
    {
      title: "TDS / TCS Return Filings",
      desc: "Quarterly TDS return e-filing for salary (24Q), non-salary (26Q), TCS (27EQ), and Form 16/16A generation.",
      icon: ClipboardCheck,
      badge: "Form 16/16A",
      link: "/itr-filing"
    },
    {
      title: "Tax Audit (Sec 44AB)",
      desc: "Comprehensive Tax Audit under Section 44AB with Form 3CA/3CB and detailed Form 3CD reporting.",
      icon: CheckCircle2,
      badge: "Form 3CD",
      link: "/audit-assurance"
    },
    {
      title: "DISA (ICAI) Systems Audit",
      desc: "Certified Information Systems Audit conducted by DISA (ICAI) systems auditor CA. DEEPANSHI BANSAL.",
      icon: ShieldCheck,
      badge: "DISA Certified",
      link: "/audit-assurance"
    },
    {
      title: "Statutory Company Audit",
      desc: "Independent statutory audits for Private Limited companies, LLPs, and corporate trusts under Companies Act 2013.",
      icon: ShieldCheck,
      badge: "ICAI Auditing",
      link: "/audit-assurance"
    },
    {
      title: "Bank & Stock Audits",
      desc: "Concurrent audits, stock verifications, and compliance monitoring for nationalized and private banks.",
      icon: Landmark,
      badge: "Bank Panel Grade",
      link: "/audit-assurance"
    }
  ];

  // Carousel 1 (Business Registration) State
  const [bizIndex, setBizIndex] = useState(1);
  const [bizPaused, setBizPaused] = useState(false);

  // Carousel 2 (Audit & Tax) State
  const [auditIndex, setAuditIndex] = useState(1);
  const [auditPaused, setAuditPaused] = useState(false);

  // Auto transition with active continuous auto-sliding (2.4s interval)
  useEffect(() => {
    if (bizPaused) return;
    const interval = setInterval(() => {
      setBizIndex((prev) => (prev + 1) % businessRegistrations.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [bizPaused, businessRegistrations.length]);

  // Auto transition with active continuous auto-sliding (2.6s interval)
  useEffect(() => {
    if (auditPaused) return;
    const interval = setInterval(() => {
      setAuditIndex((prev) => (prev + 1) % auditTaxServices.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [auditPaused, auditTaxServices.length]);

  const prevBiz = () => {
    setBizIndex((prev) => (prev - 1 + businessRegistrations.length) % businessRegistrations.length);
  };
  const nextBiz = () => {
    setBizIndex((prev) => (prev + 1) % businessRegistrations.length);
  };

  const prevAudit = () => {
    setAuditIndex((prev) => (prev - 1 + auditTaxServices.length) % auditTaxServices.length);
  };
  const nextAudit = () => {
    setAuditIndex((prev) => (prev + 1) % auditTaxServices.length);
  };

  // Helper to get 5 visible items centered around activeIndex
  const getVisibleItems = (list, active) => {
    const total = list.length;
    return [-2, -1, 0, 1, 2].map((offset) => {
      const idx = (active + offset + total) % total;
      return { item: list[idx], offset, originalIndex: idx };
    });
  };

  const visibleBiz = getVisibleItems(businessRegistrations, bizIndex);
  const visibleAudit = getVisibleItems(auditTaxServices, auditIndex);

  return (
    <div className="space-y-0 overflow-hidden">
      
      {/* SECTION 1: Business Registrations (Center Zoom Spotlight Carousel) */}
      <section className="py-20 bg-[#f9fafb] text-slate-800 transition-colors duration-200 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div className="text-center sm:text-left">
              <span className="inline-block text-xs font-black uppercase tracking-widest text-[#2f8524] bg-emerald-100/80 border border-emerald-300 px-3.5 py-1 rounded-full mb-2">
                Incorporation &amp; Licensing
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
                Business Registrations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fast incorporation &amp; statutory licensing across all legal structures (Active card centered &amp; zoomed)
              </p>
            </div>

            {/* Left/Right Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={prevBiz}
                className="w-11 h-11 rounded-full bg-white border-2 border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-700 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                title="Previous Service"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextBiz}
                className="w-11 h-11 rounded-full bg-white border-2 border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-700 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                title="Next Service"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Center-Zoom Showcase Track */}
          <div 
            className="relative py-8 px-2 overflow-hidden"
            onMouseEnter={() => setBizPaused(true)}
            onMouseLeave={() => setBizPaused(false)}
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 min-h-[360px]">
              {visibleBiz.map(({ item, offset, originalIndex }) => {
                const isCenter = offset === 0;
                const isAdjacent = Math.abs(offset) === 1;
                const Icon = item.icon;

                // Only render 3 on mobile, 5 on desktop
                const isHiddenOnMobile = Math.abs(offset) === 2;

                return (
                  <div
                    key={`${item.title}-${offset}`}
                    onClick={() => setBizIndex(originalIndex)}
                    className={`transition-all duration-700 ease-in-out transform cursor-pointer flex flex-col justify-between rounded-3xl ${
                      isHiddenOnMobile ? 'hidden lg:flex' : 'flex'
                    } ${
                      isCenter
                        ? 'w-[320px] sm:w-[380px] scale-105 sm:scale-110 z-30 bg-white border-3 border-emerald-500 shadow-2xl p-6 sm:p-7 ring-4 ring-emerald-500/15'
                        : isAdjacent
                        ? 'w-[260px] sm:w-[290px] scale-95 z-20 bg-white/90 border-2 border-slate-200 shadow-md p-5 opacity-75 hover:opacity-100 hover:border-emerald-300'
                        : 'w-[230px] scale-90 z-10 bg-white/70 border border-slate-200 p-4 opacity-40 hover:opacity-75'
                    }`}
                  >
                    <div>
                      {/* Top Row */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <div className={`rounded-2xl flex items-center justify-center transition-all ${
                          isCenter
                            ? 'w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-md'
                            : 'w-11 h-11 bg-emerald-50 text-emerald-700 border border-emerald-200'
                        }`}>
                          <Icon className={isCenter ? "w-7 h-7" : "w-5 h-5"} />
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                          isCenter
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300 shadow-xs font-black'
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}>
                          {item.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`font-heading font-black text-navy-950 leading-snug mb-2 transition-colors ${
                        isCenter ? 'text-lg sm:text-xl text-[#102c4c]' : 'text-sm sm:text-base text-slate-800'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-slate-600 leading-relaxed font-medium ${
                        isCenter ? 'text-xs sm:text-sm line-clamp-3 mb-4' : 'text-xs line-clamp-2 mb-2'
                      }`}>
                        {item.desc}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className={`pt-3 border-t flex items-center justify-between gap-2 ${
                      isCenter ? 'border-emerald-100' : 'border-slate-100'
                    }`}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenConsultation(item.title);
                        }}
                        className={`font-heading font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                          isCenter
                            ? 'py-2 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-700 text-white shadow-md hover:brightness-110'
                            : 'py-1 px-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px]'
                        }`}
                      >
                        Inquire
                      </button>
                      <Link
                        to={item.link}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-bold text-slate-700 hover:text-emerald-700 flex items-center gap-1 transition-colors"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dot Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {businessRegistrations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setBizIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    bizIndex === i
                      ? 'w-8 bg-emerald-600 shadow-xs'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  title={`Go to item ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: Audit and Tax Management (Center Zoom Spotlight Carousel) */}
      <section className="py-20 bg-white text-slate-800 transition-colors duration-200 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
            <div className="text-center sm:text-left">
              <span className="inline-block text-xs font-black uppercase tracking-widest text-[#d9630e] bg-orange-100/80 border border-orange-300 px-3.5 py-1 rounded-full mb-2">
                Taxation &amp; Assurance
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
                Audit and Tax Management
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Partner-led taxation strategy, statutory audits under ICAI standards &amp; MCA compliances
              </p>
            </div>

            {/* Left/Right Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={prevAudit}
                className="w-11 h-11 rounded-full bg-white border-2 border-slate-300 hover:border-orange-500 text-slate-700 hover:text-orange-700 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                title="Previous Service"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextAudit}
                className="w-11 h-11 rounded-full bg-white border-2 border-slate-300 hover:border-orange-500 text-slate-700 hover:text-orange-700 shadow-md flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
                title="Next Service"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Center-Zoom Showcase Track */}
          <div 
            className="relative py-8 px-2 overflow-hidden"
            onMouseEnter={() => setAuditPaused(true)}
            onMouseLeave={() => setAuditPaused(false)}
          >
            <div className="flex items-center justify-center gap-4 sm:gap-6 min-h-[360px]">
              {visibleAudit.map(({ item, offset, originalIndex }) => {
                const isCenter = offset === 0;
                const isAdjacent = Math.abs(offset) === 1;
                const Icon = item.icon;

                // Only render 3 on mobile, 5 on desktop
                const isHiddenOnMobile = Math.abs(offset) === 2;

                return (
                  <div
                    key={`${item.title}-${offset}`}
                    onClick={() => setAuditIndex(originalIndex)}
                    className={`transition-all duration-700 ease-in-out transform cursor-pointer flex flex-col justify-between rounded-3xl ${
                      isHiddenOnMobile ? 'hidden lg:flex' : 'flex'
                    } ${
                      isCenter
                        ? 'w-[320px] sm:w-[380px] scale-105 sm:scale-110 z-30 bg-white border-3 border-orange-500 shadow-2xl p-6 sm:p-7 ring-4 ring-orange-500/15'
                        : isAdjacent
                        ? 'w-[260px] sm:w-[290px] scale-95 z-20 bg-white/90 border-2 border-slate-200 shadow-md p-5 opacity-75 hover:opacity-100 hover:border-orange-300'
                        : 'w-[230px] scale-90 z-10 bg-white/70 border border-slate-200 p-4 opacity-40 hover:opacity-75'
                    }`}
                  >
                    <div>
                      {/* Top Row */}
                      <div className="flex items-center justify-between gap-2 mb-3.5">
                        <div className={`rounded-2xl flex items-center justify-center transition-all ${
                          isCenter
                            ? 'w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-md'
                            : 'w-11 h-11 bg-orange-50 text-orange-700 border border-orange-200'
                        }`}>
                          <Icon className={isCenter ? "w-7 h-7" : "w-5 h-5"} />
                        </div>
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                          isCenter
                            ? 'bg-orange-100 text-orange-800 border-orange-300 shadow-xs font-black'
                            : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}>
                          {item.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`font-heading font-black text-navy-950 leading-snug mb-2 transition-colors ${
                        isCenter ? 'text-lg sm:text-xl text-[#102c4c]' : 'text-sm sm:text-base text-slate-800'
                      }`}>
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className={`text-slate-600 leading-relaxed font-medium ${
                        isCenter ? 'text-xs sm:text-sm line-clamp-3 mb-4' : 'text-xs line-clamp-2 mb-2'
                      }`}>
                        {item.desc}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className={`pt-3 border-t flex items-center justify-between gap-2 ${
                      isCenter ? 'border-orange-100' : 'border-slate-100'
                    }`}>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenConsultation(item.title);
                        }}
                        className={`font-heading font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                          isCenter
                            ? 'py-2 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md hover:brightness-110'
                            : 'py-1 px-2.5 rounded-lg bg-orange-50 text-orange-800 border border-orange-200 text-[11px]'
                        }`}
                      >
                        Inquire
                      </button>
                      <Link
                        to={item.link}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-bold text-slate-700 hover:text-orange-700 flex items-center gap-1 transition-colors"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dot Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {auditTaxServices.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setAuditIndex(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    auditIndex === i
                      ? 'w-8 bg-orange-600 shadow-xs'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  title={`Go to item ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
