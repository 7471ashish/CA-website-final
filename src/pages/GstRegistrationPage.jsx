import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Building2, CheckCircle2, Phone, MessageSquare, ShieldCheck, Clock, FileCheck } from 'lucide-react';
import SEO from '../components/common/SEO';
import { siteConfig } from '../data/siteConfig';
import InteractiveDocumentChecklist from '../components/common/InteractiveDocumentChecklist';

export default function GstRegistrationPage() {
  const { onOpenConsultation } = useOutletContext();

  const steps = [
    { num: 1, title: "Document Verification", desc: "Submit PAN, Aadhaar, business address electricity bill & rent agreement for eligibility check." },
    { num: 2, title: "GST Portal Filing", desc: "We draft and submit Form GST REG-01 on the official GST common portal with proper HSN/SAC codes." },
    { num: 3, title: "Aadhaar Biometric/OTP", desc: "We assist you in real-time Aadhaar OTP or Biometric authentication for expedited portal approval." },
    { num: 4, title: "GSTIN Certificate", desc: "Receive your official GST Certificate (Form REG-06) with active login credentials in 3 to 7 working days." }
  ];

  return (
    <div>
      <SEO 
        title="GST Registration & Monthly Returns in Meerut | DRB & COMPANY"
        description="Get 3 to 7 day GST registration (REG-06), monthly GSTR-1 & 3B return filing, and ITC reconciliation with DRB & COMPANY Chartered Accountants in Meerut."
        canonical="https://www.drbandcompany.com/gst-registration"
      />
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white py-16 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span className="text-white">GST Services</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            GST Registration &amp; Compliance in {siteConfig.locationCity}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed">
            Fast 3 to 7-day GSTIN registration, monthly GSTR-1 &amp; GSTR-3B filings, input tax credit reconciliation, and annual audits by {siteConfig.firmName}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50 dark:bg-navy-950/60 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Overview Box */}
              <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-300 bg-gold-100 dark:bg-gold-500/15 border border-gold-300 dark:border-gold-500/30 px-3.5 py-1 rounded-full mb-3">
                  Indirect Tax Practice
                </span>
                <h2 className="font-heading text-2xl font-bold text-navy-900 dark:text-white mb-4">
                  Complete GST Administration &amp; Compliance
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  GST compliance requires prompt return filings, input tax matching (2B vs purchase registers), and e-invoicing norms. At <strong>{siteConfig.firmName}</strong>, we manage your complete GST lifecycle, ensuring maximum ITC claims and zero late fee penalties.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border-l-4 border-navy-900 dark:border-gold-500 border border-slate-200/50 dark:border-slate-800">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">Fast GST Registration</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Online GSTIN approval for Proprietors, LLPs, Companies &amp; Casual Traders in 3 to 7 working days.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border-l-4 border-navy-900 dark:border-gold-500 border border-slate-200/50 dark:border-slate-800">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">GSTR-1 &amp; GSTR-3B Filings</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Monthly outward supply reporting and tax summary payment with 100% ITC reconciliation.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border-l-4 border-navy-900 dark:border-gold-500 border border-slate-200/50 dark:border-slate-800">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">Annual Returns (GSTR-9/9C)</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Annual reconciliation statements, turnover audits, and DRC-03 voluntary tax liability settlements.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border-l-4 border-navy-900 dark:border-gold-500 border border-slate-200/50 dark:border-slate-800">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">E-Invoicing &amp; E-Way Bills</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Automated IRN generation for B2B transactions and seamless transport e-way bill generation.</p>
                  </div>
                </div>
              </div>

              {/* 4-Step Process */}
              <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white mb-6">
                  How We Process Your GST Registration
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {steps.map((st) => (
                    <div key={st.num} className="bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-slate-800 p-5 rounded-2xl">
                      <div className="w-8 h-8 rounded-full bg-navy-900 dark:bg-navy-800 text-gold-400 font-black text-xs flex items-center justify-center mb-3 border-2 border-gold-500">
                        {st.num}
                      </div>
                      <h4 className="font-heading text-sm font-bold text-navy-900 dark:text-white mb-1">{st.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{st.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Document Checklist */}
              <InteractiveDocumentChecklist
                serviceTitle="GST Registration & Compliances"
                documents={[
                  "PAN & Aadhaar of Applicant / Partners",
                  "Business Address Proof (Electricity Bill)",
                  "Rent Agreement & Landlord NOC",
                  "Cancelled Cheque / Bank Statement",
                  "Passport Size Photographs",
                  "Partnership Deed / COI (if Company or Firm)"
                ]}
                onOpenConsultation={onOpenConsultation}
              />
            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              
              <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-850 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-gold-500/30">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">GST Practice Desk</span>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Apply for GST Number</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Fast 3 to 7-day registration with monthly return filing support in {siteConfig.locationCity}.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => onOpenConsultation("GST Registration & Services")}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-gold cursor-pointer"
                  >
                    Apply for GST Number
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
                    className="w-full py-3 px-4 rounded-xl bg-[#25d366] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 text-xs text-slate-300">
                  <span className="font-bold text-gold-400 uppercase text-[10px] block mb-1">Office Address</span>
                  <span>{siteConfig.address}</span>
                </div>
              </div>

              {/* Other Practice Links */}
              <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
                <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-3">
                  Other Practice Areas
                </h4>
                <div className="space-y-2 text-xs">
                  <Link to="/itr-filing" className="block text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-semibold py-1">
                    &rarr; Income Tax &amp; ITR Filing (All Forms)
                  </Link>
                  <Link to="/services" className="block text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-semibold py-1">
                    &rarr; Statutory Audits &amp; Tax Audit Sec 44AB
                  </Link>
                  <Link to="/services" className="block text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-semibold py-1">
                    &rarr; Company Incorporation &amp; ROC Filing
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
