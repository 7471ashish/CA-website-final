import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  X, 
  ArrowRight, 
  Building2, 
  FileText, 
  Tags, 
  ShieldCheck, 
  Award, 
  Briefcase, 
  Globe, 
  Landmark, 
  CheckCircle2, 
  Scale,
  Sparkles,
  Phone,
  Users
} from 'lucide-react';
import { servicesCategories } from '../../data/servicesData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Aggregate all searchable items
  const allSearchItems = [
    // Standalone Key Core Routes
    {
      title: "ITR Filing (Income Tax Returns)",
      desc: "ITR 1-7, salaried, business 44AD/ADA, capital gains, freelance & NRI tax returns with AIS/TIS reconciliation.",
      category: "Taxation",
      link: "/itr-filing",
      badge: "Direct Route",
      keywords: "itr income tax return filing 44ad 44ada capital gains salary foreign income 16 form 26as"
    },
    {
      title: "GST Registration & Returns",
      desc: "Express 3-day GSTIN registration, monthly GSTR-1 & 3B, annual GSTR-9 audit & ITC input reconciliation.",
      category: "Taxation",
      link: "/gst-registration",
      badge: "3-Day Express",
      keywords: "gst goods services tax gstin gstr 1 3b 9 input tax credit eway einvoicing"
    },
    {
      title: "Statutory & Tax Audit (Sec 44AB)",
      desc: "Independent company statutory audits under Companies Act 2013 & Tax Audit Section 44AB Form 3CD.",
      category: "Audit",
      link: "/audit-assurance",
      badge: "Form 3CD",
      keywords: "tax audit statutory audit 44ab 3cd 3ca 3cb company balance sheet stock concurrent"
    },
    {
      title: "DISA (ICAI) Systems Audit",
      desc: "Specialized Information Systems Security Audit conducted by certified DISA auditor CA. DEEPANSHI BANSAL.",
      category: "Audit",
      link: "/audit-assurance",
      badge: "DISA Certified",
      keywords: "disa icai information systems erp security audit it risk assessment cybersecurity deepanshi bansal"
    },
    {
      title: "Company Incorporation (Pvt Ltd, LLP, OPC)",
      desc: "End-to-end company formation on MCA SPICe+, DIN, PAN, TAN, MoA, AoA drafting & ROC filings.",
      category: "Registration",
      link: "/company-incorporation",
      badge: "MCA SPICe+",
      keywords: "company incorporation private limited pvt ltd llp opc partnership foreign subsidiary registration"
    },
    {
      title: "Visa Networth Certificate for Embassy",
      desc: "Official ICAI 18-digit UDIN verified CA Networth Certificate for Canada, UK, US, Australia, Europe study & visitor visas.",
      category: "Certifications",
      link: "/networth-certificate",
      badge: "UDIN Verified",
      keywords: "networth certificate visa canada uk usa student visa embassy wealth statement financial proof"
    },
    {
      title: "NGO, Trust & Section 8 Registration",
      desc: "Formation of charitable trusts, Section 8 companies, 12A & 80G tax exemptions, and CSR-1 registration.",
      category: "NGO",
      link: "/ngo-trust-registration",
      badge: "12A / 80G",
      keywords: "ngo trust section 8 12a 80g csr darpan society donation tax exemption"
    },
    {
      title: "Trademark & Intellectual Property (IP)",
      desc: "Brand name, logo trademark filing, trademark search, examination response, and objection hearing representation.",
      category: "IP & Legal",
      link: "/trademark-registration",
      badge: "Brand Protection",
      keywords: "trademark brand logo ip intellectual property copyright patent registration"
    },
    {
      title: "NRI Taxation & 15CA / 15CB Certificates",
      desc: "Foreign fund repatriation, DTAA tax treaty benefits, FEMA compliance, capital gains on Indian property.",
      category: "Taxation",
      link: "/nri-taxation",
      badge: "15CA/15CB",
      keywords: "nri non resident indian 15ca 15cb remittance dtaa fema property sale capital gains"
    },
    {
      title: "Project Financing & Bank CMA Data",
      desc: "Bank loan CMA data preparation, working capital limits, term loan DPR (Detailed Project Reports).",
      category: "Advisory",
      link: "/project-financing-cma",
      badge: "Bank Credit",
      keywords: "cma data project financing bank loan working capital dpr term loan credit limit"
    },
    {
      title: "About DRB & COMPANY Firm Profile",
      desc: "Meet Senior Partners CA. DEEPANSHI BANSAL & CA. PARUL, view ICAI registration credentials & Meerut central office.",
      category: "Firm",
      link: "/about",
      badge: "Firm Overview",
      keywords: "about us drb company deepanshi bansal parul meerut budhana gate partner chartered accountants"
    },
    {
      title: "Careers & Articleship",
      desc: "Articleship training for CA students and professional vacancies in Audit, Direct Tax & Corporate Law.",
      category: "Firm",
      link: "/careers",
      badge: "Talent Pool",
      keywords: "careers articleship ca students job vacancies vacancy resume cv apply"
    },
    {
      title: "Contact & Schedule Consultation",
      desc: "Book an in-person meeting at Budhana Gate, Meerut office or reach our senior partners via phone / email.",
      category: "Contact",
      link: "/contact",
      badge: "Direct Connect",
      keywords: "contact address phone number email schedule meeting appointment meerut location map"
    },
    // Subservices dynamically flattened from servicesCategories
    ...servicesCategories.flatMap((cat) =>
      cat.services.map((s) => ({
        title: s.title,
        desc: s.shortDesc,
        category: cat.categoryTitle,
        link: s.link || "/services",
        badge: s.highlight || "Specialized Service",
        keywords: `${s.title} ${s.shortDesc} ${cat.categoryTitle}`.toLowerCase()
      }))
    )
  ];

  // Auto focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Keyboard shortcut Esc to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // toggle
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  // Filter items
  const cleanQuery = query.trim().toLowerCase();
  const filteredItems = allSearchItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category.toLowerCase().includes(activeCategory.toLowerCase());
    if (!matchesCategory) return false;
    if (!cleanQuery) return true;
    return (
      item.title.toLowerCase().includes(cleanQuery) ||
      item.desc.toLowerCase().includes(cleanQuery) ||
      item.keywords.includes(cleanQuery)
    );
  });

  const popularChips = [
    { label: "ITR Filing", q: "ITR" },
    { label: "GST Registration", q: "GST" },
    { label: "Tax Audit (Sec 44AB)", q: "Tax Audit" },
    { label: "Private Limited SPICe+", q: "Private Limited" },
    { label: "DISA Systems Audit", q: "DISA" },
    { label: "Visa Networth Certificate", q: "Networth" },
    { label: "Section 8 / NGO 12A 80G", q: "NGO" },
    { label: "Trademark Registration", q: "Trademark" },
    { label: "CMA Data for Loans", q: "CMA Data" }
  ];

  const handleSelect = (link) => {
    navigate(link);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-16 sm:pt-24 px-4 sm:px-6 bg-navy-950/80 backdrop-blur-md transition-all animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Search Container */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-navy-900 rounded-3xl shadow-2xl border-2 border-gold-500/40 overflow-hidden z-10 flex flex-col max-h-[80vh]">
        
        {/* Search Header Input */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-slate-50/80 dark:bg-navy-950/60">
          <Search className="w-6 h-6 text-gold-500 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all 38+ services (e.g. ITR, GST, Pvt Ltd, Tax Audit, DISA, Networth...)"
            className="w-full bg-transparent text-sm sm:text-base font-semibold text-navy-950 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-200 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:text-navy-950 dark:hover:text-white transition-colors cursor-pointer text-xs font-black uppercase"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2.5 bg-white dark:bg-navy-900 border-b border-slate-100 dark:border-slate-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 shrink-0">
            Popular:
          </span>
          {popularChips.map((chip, idx) => (
            <button
              key={idx}
              onClick={() => setQuery(chip.q)}
              className="py-1 px-2.5 rounded-lg bg-slate-100 dark:bg-navy-800 hover:bg-gold-50 dark:hover:bg-gold-950/40 hover:text-gold-700 dark:hover:text-gold-300 text-slate-600 dark:text-slate-300 text-xs font-bold whitespace-nowrap transition-colors cursor-pointer"
            >
              {chip.label}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="overflow-y-auto p-4 space-y-2.5 flex-1 max-h-[50vh]">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-navy-800 text-slate-400 flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-navy-950 dark:text-white">
                No matching services found for "{query}"
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for "ITR", "GST", "Audit", "Company", "NGO", or "Trademark".
              </p>
            </div>
          ) : (
            filteredItems.slice(0, 15).map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(item.link)}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-navy-950 hover:bg-gold-50/60 dark:hover:bg-navy-800/80 border border-slate-200/80 dark:border-slate-800 hover:border-gold-400/80 transition-all cursor-pointer flex items-center justify-between gap-4 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-100 dark:bg-gold-500/15 text-gold-700 dark:text-gold-300 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-heading text-sm font-black text-navy-950 dark:text-white group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200 dark:bg-navy-800 text-slate-600 dark:text-slate-300">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-gold-600 dark:text-gold-400 font-bold text-xs shrink-0 group-hover:translate-x-1 transition-transform">
                  <span>Open</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Search Footer */}
        <div className="p-3 bg-slate-100 dark:bg-navy-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 px-5">
          <span>Total {allSearchItems.length} practice services indexed</span>
          <span>Click any item or press ESC to close</span>
        </div>

      </div>
    </div>
  );
}
