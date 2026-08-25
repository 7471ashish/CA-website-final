import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  FileText, 
  Tags, 
  ClipboardCheck, 
  ShieldCheck, 
  FileCheck, 
  Award, 
  Briefcase, 
  Globe, 
  PieChart, 
  ArrowRight,
  Landmark,
  CheckCircle2,
  Scale
} from 'lucide-react';

export default function CategorizedServicesSection({ onOpenConsultation }) {
  // 1. Business Registrations & Company Incorporation (CAGMC Style)
  const businessRegistrations = [
    {
      title: "Foreign Company Registration",
      desc: "For setting up a foreign company to establish business as a subsidiary or branch/liaison office in India.",
      icon: Globe,
      link: "/services"
    },
    {
      title: "Private Limited Company",
      desc: "The most popular form of corporate legal entity in India for scalable businesses, startups, and enterprises.",
      icon: Building2,
      link: "/services"
    },
    {
      title: "Public Limited Company",
      desc: "Suitable for large enterprises aiming to raise equity capital from the public and financial institutions.",
      icon: Scale,
      link: "/services"
    },
    {
      title: "LLP Registration",
      desc: "An ideal approach for small-to-medium businesses having multiple partners with limited liability protection.",
      icon: Briefcase,
      link: "/services"
    },
    {
      title: "Nidhi Company Registration",
      desc: "Promote mutual thrift and savings by collecting deposits and lending exclusively among members.",
      icon: Landmark,
      link: "/services"
    },
    {
      title: "Producer Company",
      desc: "Ideal corporate entity for farmers and agricultural producers formed with 10 or more member producers.",
      icon: Award,
      link: "/services"
    },
    {
      title: "One Person Company (OPC)",
      desc: "Corporate business entity ideal for solo entrepreneurs aiming to start a company with limited liability.",
      icon: Building2,
      link: "/services"
    },
    {
      title: "Partnership Registration",
      desc: "Forming a partnership firm with customized partnership deed drafting and registrar authentication.",
      icon: Briefcase,
      link: "/services"
    },
    {
      title: "GST Registration",
      desc: "Quick 3-day GSTIN registration under the Goods and Services Tax Act for businesses & e-commerce.",
      icon: Tags,
      link: "/gst-registration"
    },
    {
      title: "MSME Udyam Registration",
      desc: "Central government Udyam certification unlocking priority bank lending, subsidies, and tender benefits.",
      icon: Award,
      link: "/services"
    },
    {
      title: "FSSAI Food License",
      desc: "Mandatory Food Safety license and registration for manufacturers, traders, restaurants, and food cloud kitchens.",
      icon: ShieldCheck,
      link: "/services"
    },
    {
      title: "Import Export Code (IEC)",
      desc: "10-digit DGFT license mandatory for importing/exporting commercial goods or international services from India.",
      icon: Globe,
      link: "/services"
    }
  ];

  // 2. Audit, Taxation & Corporate Compliances (CAGMC Style)
  const auditTaxServices = [
    {
      title: "ITR Filing (All Forms)",
      desc: "Expert e-filing for ITR-1 to ITR-7 covering salaried, capital gains, corporate business, and foreign assets.",
      icon: FileText,
      link: "/itr-filing"
    },
    {
      title: "ROC & Annual MCA Filing",
      desc: "Annual General Meeting compliance, AOC-4 financials, MGT-7 returns, and Director KYC for MCA.",
      icon: Briefcase,
      link: "/services"
    },
    {
      title: "GST Returns & Reconciliation",
      desc: "Mandatory monthly & quarterly GSTR-1, GSTR-3B filings, and input tax credit reconciliation with GSTR-2B.",
      icon: Tags,
      link: "/gst-registration"
    },
    {
      title: "TDS & TCS Return Filing",
      desc: "Quarterly statements submitted to the IT department for Form 24Q (Salary), 26Q (Non-Salary) and 16A.",
      icon: ClipboardCheck,
      link: "/services"
    },
    {
      title: "GST Annual Audit (GSTR-9C)",
      desc: "Examination of books, turnover reconciliations, GSTR-9 annual returns, and audit reporting GSTR-9C.",
      icon: FileCheck,
      link: "/gst-registration"
    },
    {
      title: "Bank & Stock Audits",
      desc: "Concurrent audits, stock verifications, and compliance monitoring for nationalized and private banks.",
      icon: Landmark,
      link: "/services"
    },
    {
      title: "DISA Systems Audit",
      desc: "Certified Information Systems Audit conducted by DISA (ICAI) qualified auditor CA Deepanshi Bansal.",
      icon: ShieldCheck,
      link: "/services"
    },
    {
      title: "Tax Audit (Sec 44AB)",
      desc: "Comprehensive Tax Audit under Section 44AB with Form 3CA/3CB and Form 3CD reporting for businesses.",
      icon: CheckCircle2,
      link: "/services"
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* SECTION 1: Business Registrations (CAGMC Style) */}
      <section className="py-20 bg-[#f9fafb] dark:bg-navy-900/60 text-slate-800 dark:text-slate-200 transition-colors duration-200 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-navy-950 dark:text-white tracking-tight">
              Business Registrations
            </h2>
            <div className="w-16 h-1.5 bg-[#55b848] mx-auto mt-3 rounded-full"></div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3">
              Fast, hassle-free incorporation and statutory government licensing for all entity types
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessRegistrations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-navy-950 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center group"
                >
                  <div>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-50 dark:bg-emerald-950/30 flex items-center justify-center text-[#55b848] group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-base sm:text-lg font-black text-navy-950 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 font-medium leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center">
                    <button
                      onClick={() => onOpenConsultation(item.title)}
                      className="text-xs sm:text-sm font-extrabold text-emerald-600 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 2: Audit and Tax Management (CAGMC Style) */}
      <section className="py-20 bg-white dark:bg-navy-950 text-slate-800 dark:text-slate-200 transition-colors duration-200 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-black text-navy-950 dark:text-white tracking-tight">
              Audit and Tax Management
            </h2>
            <div className="w-16 h-1.5 bg-[#f37920] mx-auto mt-3 rounded-full"></div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3">
              Partner-led taxation strategy, statutory audits under ICAI standards &amp; MCA compliances
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditTaxServices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-navy-950 rounded-2xl p-6 border border-slate-300 dark:border-slate-800 hover:border-[#f37920] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center group"
                >
                  <div>
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-orange-50 dark:bg-orange-950/30 flex items-center justify-center text-[#f37920] group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading text-base sm:text-lg font-black text-navy-950 dark:text-white mb-2 group-hover:text-[#f37920] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-800 dark:text-slate-200 font-medium leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center">
                    <button
                      onClick={() => onOpenConsultation(item.title)}
                      className="text-xs sm:text-sm font-extrabold text-[#f37920] hover:text-orange-700 dark:hover:text-orange-400 flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
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
