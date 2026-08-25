import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { FileText, CheckCircle2, ArrowRight, Phone, MessageSquare, ShieldCheck, Clock, FileCheck } from 'lucide-react';
import SEO from '../components/common/SEO';
import { siteConfig } from '../data/siteConfig';

export default function ItrFilingPage() {
  const { onOpenConsultation } = useOutletContext();

  const steps = [
    { num: 1, title: "Document Submission", desc: "Submit your PAN, Form 16, bank statements, and investment proofs securely via WhatsApp or in person." },
    { num: 2, title: "Computation & Regime Check", desc: "We reconcile Form 26AS, AIS/TIS, and simulate Old vs New Tax Regime to minimize your net tax payable." },
    { num: 3, title: "Client Draft Approval", desc: "A draft computation statement is shared with you for verification and approval prior to portal submission." },
    { num: 4, title: "E-Filing & Acknowledgement", desc: "We e-file your ITR on the official portal, assist with Aadhaar OTP e-verification, and issue the ITR-V." }
  ];

  return (
    <div>
      <SEO 
        title="Income Tax & ITR Filing in Meerut | DRB & COMPANY - CA Deepanshi Bansal"
        description="File your Income Tax Return (ITR 1 to 7) accurately with DRB & COMPANY Chartered Accountants in Budhana Gate, Meerut. Maximum tax savings, AIS/26AS reconciliation & fast filing."
        canonical="https://www.drbandcompany.com/itr-filing"
      />
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white py-16 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span className="text-white">Income Tax &amp; ITR</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Income Tax &amp; ITR Filing in {siteConfig.locationCity}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed">
            Professional Income Tax Return filing for salaried employees, business proprietors, firms, companies, and Non-Resident Indians (NRIs) by {siteConfig.principal} ({siteConfig.qualifications}).
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
                  Direct Tax Practice
                </span>
                <h2 className="font-heading text-2xl font-bold text-navy-900 dark:text-white mb-4">
                  Complete Direct Taxation Management
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  At <strong>{siteConfig.firmName}</strong> in {siteConfig.locationCity}, we handle end-to-end income tax compliance. We analyze deductions, select the optimal tax regime, reconcile withholding taxes (TDS), and represent clients in scrutiny proceedings under Section 143(1) and 148.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border-l-4 border-gold-500 border border-slate-200/50 dark:border-slate-800">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">ITR-1 &amp; ITR-2</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Salaried income, pension, single/multiple house properties, capital gains &amp; foreign assets.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border-l-4 border-gold-500 border border-slate-200/50 dark:border-slate-800">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">ITR-3 &amp; ITR-4 (Sugam)</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Proprietorships, presumptive taxation (Sec 44AD/44ADA/44AE), and freelance professionals.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border-l-4 border-gold-500 border border-slate-200/50 dark:border-slate-800">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">ITR-5 &amp; ITR-6</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Partnership firms, LLPs, Private Limited companies, and cooperative societies.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border-l-4 border-gold-500 border border-slate-200/50 dark:border-slate-800">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">Capital Gains &amp; Notices</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Property sale capital gains, Sec 54 exemptions, and departmental notice rectifications.</p>
                  </div>
                </div>
              </div>

              {/* 4-Step Process */}
              <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white mb-6">
                  Our 4-Step Filing Workflow
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

              {/* Document Checklist */}
              <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white mb-6">
                  Documents Required for ITR Filing
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>PAN Card &amp; Aadhaar Card</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Form 16 (Part A &amp; B) from employer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Bank statements for April to March</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>80C Receipts (PPF, ELSS, Insurance)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>80D Health insurance premium receipts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Housing loan interest certificate</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              
              <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-850 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-gold-500/30">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">Direct Assistance</span>
                <h3 className="font-heading text-xl font-bold text-white mb-2">File ITR with {siteConfig.principal}</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Get error-free e-filing, maximum deductions, and swift refund processing in {siteConfig.locationCity}.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => onOpenConsultation("Income Tax & ITR Filing")}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-gold cursor-pointer"
                  >
                    Book ITR Appointment
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
                  <Link to="/gst-registration" className="block text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-semibold py-1">
                    &rarr; GST Registration &amp; Monthly Returns
                  </Link>
                  <Link to="/services" className="block text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-semibold py-1">
                    &rarr; Statutory Audits &amp; Tax Audit Sec 44AB
                  </Link>
                  <Link to="/services" className="block text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-semibold py-1">
                    &rarr; Company Incorporation &amp; ROC Filing
                  </Link>
                  <Link to="/services#nri-tax" className="block text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-semibold py-1">
                    &rarr; NRI Tax &amp; Foreign Remittances
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
