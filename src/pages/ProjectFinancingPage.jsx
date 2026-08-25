import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { PieChart, CheckCircle2, Phone, MessageSquare, Clock, Award, TrendingUp } from 'lucide-react';
import SEO from '../components/common/SEO';
import { siteConfig } from '../data/siteConfig';
import InteractiveDocumentChecklist from '../components/common/InteractiveDocumentChecklist';

export default function ProjectFinancingPage() {
  const { onOpenConsultation } = useOutletContext();

  const financeServices = [
    { title: "Bank CMA Data & Projections", desc: "Credit Monitoring Arrangement (CMA) reports with comprehensive fund flow, cash flow, and operating statement analysis for bank approval." },
    { title: "Detailed Project Reports (DPR)", desc: "Bank-grade DPRs for Term Loans, factory setup, machinery procurement, and commercial real estate projects." },
    { title: "Govt Subsidy Schemes (PMEGP / Mudra)", desc: "Project financial models and application documentation for PMEGP, Mudra, Stand-Up India, and UP state subsidy schemes." },
    { title: "Working Capital Assessment", desc: "Turnover method (Nayak Committee) and MPBF assessment for Cash Credit (CC) and Overdraft (OD) limit sanction." }
  ];

  return (
    <div>
      <SEO 
        title="Bank CMA Data & Project Reports in Meerut | DRB & COMPANY"
        description="Bank CMA Data, Detailed Project Reports (DPR), and working capital loan advisory in Meerut by DRB & COMPANY Chartered Accountants."
        canonical="https://www.drbandcompany.com/project-financing-cma"
      />
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white py-16 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span className="text-white">Project Financing</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Bank CMA Data &amp; Project Financing
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed">
            Bank-grade CMA reports, Detailed Project Reports (DPR), and financial feasibility models for MSME and corporate loan sanctions in {siteConfig.locationCity}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-10">
              
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-gold-600 bg-gold-50 border border-gold-300 px-3.5 py-1 rounded-full mb-3">
                  Bank Loan Advisory Desk
                </span>
                <h2 className="font-heading text-2xl font-bold text-navy-950 mb-4">
                  Financial Engineering for Business Growth
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Securing bank finance requires rigorous financial modeling, defensible debt service coverage ratios (DSCR), and accurate working capital cycle mapping. We structure CMA data tailored to lender criteria.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {financeServices.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border-l-4 border-gold-500 border border-slate-200">
                      <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Document Checklist */}
              <InteractiveDocumentChecklist
                serviceTitle="Bank CMA Data & Project Reports"
                documents={[
                  "Last 3 years audited balance sheets & ITR acknowledgements",
                  "Last 12 months bank statements of all active current accounts",
                  "Quotations / estimates for proposed machinery or construction",
                  "Sanction letters of existing bank facilities (if any)"
                ]}
              />

            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-gold-500/30">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">Project Finance Desk</span>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Get CMA &amp; DPR Prepared</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Fast 48-72h turnaround for bank loan proposals with partner guidance in {siteConfig.locationCity}.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => onOpenConsultation("Project Financing & CMA")}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-gold cursor-pointer"
                  >
                    Book CMA Consultation
                  </button>
                  <a
                    href={`tel:${siteConfig.phones[0].raw}`}
                    className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs flex items-center justify-center gap-2 border border-white/20 transition-colors cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-gold-400" />
                    <span>Call: {siteConfig.phones[0].display}</span>
                  </a>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25d366] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Direct Desk</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
