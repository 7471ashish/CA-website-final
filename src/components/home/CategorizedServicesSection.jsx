import React from 'react';
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
  Sparkles
} from 'lucide-react';

export default function CategorizedServicesSection({ onOpenConsultation }) {
  // 1. Business Registrations Data (CAGMC Style Clean Grid)
  const businessRegistrations = [
    {
      title: "Foreign Company Registration",
      desc: "Setting up a foreign company subsidiary, branch, or liaison office in India with 100% RBI/FDI compliance.",
      icon: Globe,
      link: "/company-incorporation"
    },
    {
      title: "Private Limited Company",
      desc: "The most popular corporate entity for startups and enterprises with limited liability protection and equity access.",
      icon: Building2,
      link: "/company-incorporation"
    },
    {
      title: "Public Limited Company",
      desc: "Suitable for large enterprises aiming to raise equity capital from the public and financial institutions.",
      icon: Scale,
      link: "/company-incorporation"
    },
    {
      title: "LLP Registration",
      desc: "Ideal structure for professional firms and businesses having multiple partners with limited liability.",
      icon: Briefcase,
      link: "/company-incorporation"
    },
    {
      title: "Nidhi Company Registration",
      desc: "Promote mutual thrift and savings by collecting deposits and lending exclusively among members.",
      icon: Landmark,
      link: "/company-incorporation"
    },
    {
      title: "Producer Company",
      desc: "Specialized corporate entity for farmers and agricultural producers with specialized MCA compliances.",
      icon: Award,
      link: "/company-incorporation"
    },
    {
      title: "One Person Company (OPC)",
      desc: "Corporate business entity ideal for solo entrepreneurs aiming to start a company with 100% single ownership.",
      icon: Building2,
      link: "/company-incorporation"
    },
    {
      title: "Partnership Registration",
      desc: "Forming a partnership firm with customized partnership deed drafting and registrar authentication.",
      icon: Briefcase,
      link: "/company-incorporation"
    },
    {
      title: "GST Registration (3-Day)",
      desc: "Quick 3-day express GSTIN registration under the Goods and Services Tax Act with zero hassle.",
      icon: Tags,
      link: "/gst-registration"
    },
    {
      title: "MSME Udyam Registration",
      desc: "Central government Udyam certification unlocking priority bank lending, subsidies, and tender exemptions.",
      icon: Award,
      link: "/services"
    },
    {
      title: "FSSAI Food License",
      desc: "Mandatory Food Safety license for manufacturers, traders, restaurants, and food cloud kitchens.",
      icon: ShieldCheck,
      link: "/services"
    },
    {
      title: "Import Export Code (IEC)",
      desc: "10-digit DGFT license mandatory for importing/exporting commercial goods or international services.",
      icon: Globe,
      link: "/services"
    }
  ];

  // 2. Audit & Tax Services Data (CAGMC Style Clean Grid)
  const auditTaxServices = [
    {
      title: "ITR Filing (Forms 1-7)",
      desc: "Comprehensive direct tax return filing for salaried, business, capital gains, and NRI taxpayers.",
      icon: FileText,
      link: "/itr-filing"
    },
    {
      title: "GST Returns & GSTR-9",
      desc: "Monthly GSTR-1, GSTR-3B filings, automatic GSTR-2B purchase input reconciliation, and annual audit.",
      icon: Tags,
      link: "/gst-registration"
    },
    {
      title: "ROC & MCA Annual Filings",
      desc: "Filing of Form AOC-4 (Financials), MGT-7 (Annual Return), Director DIR-3 KYC, and secretarial compliance.",
      icon: Briefcase,
      link: "/company-incorporation"
    },
    {
      title: "TDS / TCS Return Filings",
      desc: "Quarterly TDS return e-filing for salary (24Q), non-salary (26Q), TCS (27EQ), and Form 16/16A generation.",
      icon: ClipboardCheck,
      link: "/itr-filing"
    },
    {
      title: "Tax Audit (Sec 44AB Form 3CD)",
      desc: "Comprehensive Tax Audit under Section 44AB with Form 3CA/3CB and detailed Form 3CD reporting.",
      icon: CheckCircle2,
      link: "/audit-assurance"
    },
    {
      title: "DISA (ICAI) Systems Audit",
      desc: "Certified Information Systems Audit conducted by DISA (ICAI) qualified systems auditor CA. DEEPANSHI BANSAL.",
      icon: ShieldCheck,
      link: "/audit-assurance"
    },
    {
      title: "Statutory Company Audit",
      desc: "Independent statutory audits for Private Limited companies, LLPs, and corporate trusts under Companies Act 2013.",
      icon: ShieldCheck,
      link: "/audit-assurance"
    },
    {
      title: "Bank & Stock Audits",
      desc: "Concurrent audits, stock verifications, and compliance monitoring for nationalized and private banks.",
      icon: Landmark,
      link: "/audit-assurance"
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* SECTION 1: Business Registrations (Clean Simple 4-Column Grid) */}
      <section className="py-20 bg-[#f9fafb] text-slate-800 transition-colors duration-200 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-14">
            <div className="text-center sm:text-left">
              <span className="inline-block text-xs font-black uppercase tracking-widest text-[#2f8524] bg-emerald-100/80 border border-emerald-300 px-3.5 py-1 rounded-full mb-2">
                Incorporation &amp; Licensing
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
                Business Registrations
              </h2>
              <div className="w-16 h-1.5 bg-[#55b848] rounded-full mt-2 mx-auto sm:mx-0"></div>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Fast, hassle-free incorporation and statutory government licensing for all legal structures
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-600 hover:text-white font-heading font-black text-xs uppercase tracking-wider transition-all shadow-xs shrink-0 cursor-pointer"
            >
              <span>See All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessRegistrations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border-2 border-slate-300 hover:border-[#55b848] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between text-center group"
                >
                  <div>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#2f8524] group-hover:bg-[#55b848] group-hover:text-white transition-all shadow-2xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-base sm:text-lg font-black text-navy-950 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenConsultation(item.title)}
                      className="py-1.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
                    >
                      Inquire
                    </button>
                    <Link
                      to={item.link}
                      className="text-xs font-extrabold text-slate-700 hover:text-emerald-700 flex items-center gap-1 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 2: Audit and Tax Management (Clean Simple 4-Column Grid) */}
      <section className="py-20 bg-white text-slate-800 transition-colors duration-200 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-14">
            <div className="text-center sm:text-left">
              <span className="inline-block text-xs font-black uppercase tracking-widest text-[#d9630e] bg-orange-100/80 border border-orange-300 px-3.5 py-1 rounded-full mb-2">
                Taxation &amp; Assurance
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
                Audit and Tax Management
              </h2>
              <div className="w-16 h-1.5 bg-[#f37920] rounded-full mt-2 mx-auto sm:mx-0"></div>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Partner-led taxation strategy, statutory audits under ICAI standards &amp; MCA compliances
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-orange-50 border border-orange-200 text-orange-800 hover:bg-orange-600 hover:text-white font-heading font-black text-xs uppercase tracking-wider transition-all shadow-xs shrink-0 cursor-pointer"
            >
              <span>See All Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditTaxServices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border-2 border-slate-300 hover:border-[#f37920] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between text-center group"
                >
                  <div>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#d9630e] group-hover:bg-[#f37920] group-hover:text-white transition-all shadow-2xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-base sm:text-lg font-black text-navy-950 mb-2 group-hover:text-[#d9630e] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-700 font-medium leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onOpenConsultation(item.title)}
                      className="py-1.5 px-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-black uppercase tracking-wider transition-colors cursor-pointer shadow-2xs"
                    >
                      Inquire
                    </button>
                    <Link
                      to={item.link}
                      className="text-xs font-extrabold text-slate-700 hover:text-orange-700 flex items-center gap-1 transition-colors"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* GRAND "SEE ALL SERVICES" ACTION BAR */}
      <section className="py-12 bg-gradient-to-r from-[#102c4c] via-[#143862] to-[#0e2744] text-white border-b-4 border-gold-500 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-gold-300 bg-gold-500/20 border border-gold-500/30 px-3.5 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Full Practice Scope</span>
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white">
              Looking for a Specific Specialized Service?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Explore our complete categorized directory of all 38+ Chartered Accountancy services &amp; filings
            </p>
          </div>

          <Link
            to="/services"
            className="py-3.5 px-8 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-2xl hover:from-gold-300 hover:to-gold-500 hover:scale-105 transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>See All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
