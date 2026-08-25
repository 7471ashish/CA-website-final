import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Award, CheckCircle2, Phone, MessageSquare, ShieldCheck, Clock, FileCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function NetworthCertificatePage() {
  const { onOpenConsultation } = useOutletContext();

  const steps = [
    { num: 1, title: "Document Submission", desc: "Submit PAN, Aadhaar, property ownership deeds, and bank balance certificates at our office or via WhatsApp." },
    { num: 2, title: "Asset Valuation & Audit", desc: "We audit and calculate total net worth in INR and Foreign Currencies (CAD / USD / GBP / AUD / EUR)." },
    { num: 3, title: "ICAI UDIN Sealing", desc: "A digitally signed and sealed certificate with official 18-digit ICAI UDIN is issued within 1 to 2 working days." }
  ];

  return (
    <div>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-850 text-white py-16 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span className="text-white">Networth Certificate</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            CA Networth Certificate for Embassy Visas
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed">
            Official Chartered Accountant certified Statement of Net Worth with digital ICAI UDIN verification for Student, Visitor, and PR Visas (Canada, UK, USA, Australia, Europe). Ready in 1–2 days.
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
                  Embassy &amp; Visa Desk
                </span>
                <h2 className="font-heading text-2xl font-bold text-navy-900 dark:text-white mb-4">
                  Why CA Networth Certificates are Crucial for Visas
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Foreign embassies and immigration officers require definitive proof that the visa applicant and their family sponsors have sufficient financial capacity and strong economic ties in India. An official Certificate of Net Worth from a practicing CA with a verifiable UDIN is recognized worldwide.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border-l-4 border-gold-500 border border-slate-200/50 dark:border-slate-800">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">Immovable Properties</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Market valuation of residential houses, commercial buildings, agricultural land, and plots.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border-l-4 border-gold-500 border border-slate-200/50 dark:border-slate-800">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">Liquid Movable Assets</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Savings bank balances, Fixed Deposits (FDs), Mutual Funds, Shares, PPF &amp; EPF statements.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border-l-4 border-gold-500 border border-slate-200/50 dark:border-slate-800">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">Gold &amp; Precious Metals</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Certified jeweller valuation reports of gold ornaments and family silver articles.</p>
                  </div>
                  <div className="bg-slate-50 dark:bg-navy-950/80 p-4 rounded-xl border-l-4 border-gold-500 border border-slate-200/50 dark:border-slate-800">
                    <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-white mb-1">Official UDIN Seal</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">Every certificate features a unique 18-digit ICAI UDIN number for 100% legal visa officer verification.</p>
                  </div>
                </div>
              </div>

              {/* 3-Step Process */}
              <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white mb-6">
                  Fast 3-Step Express Workflow
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                  Documents Required for Networth Certificate
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>PAN &amp; Aadhaar of Applicant and Sponsors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Bank account statements (Last 6 months)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Fixed Deposit (FD) receipts / statements</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Property registry / title deeds / Revenue fard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Latest 2 to 3 years Income Tax Returns (ITR-V)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Gold valuation certificate (if applicable)</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              
              <div className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-850 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-gold-500/30">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">Express Visa Desk</span>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Get Networth Certificate</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Fast 1 to 2 working days turnaround with verified ICAI UDIN for Canada, UK, USA, and Australia visas.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => onOpenConsultation("Networth & Embassy Certificate")}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-gold cursor-pointer"
                  >
                    Request Networth Certificate
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
                    &rarr; Income Tax &amp; ITR Filing
                  </Link>
                  <Link to="/gst-registration" className="block text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-semibold py-1">
                    &rarr; GST Services &amp; Registration
                  </Link>
                  <Link to="/services#nri-tax" className="block text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 font-semibold py-1">
                    &rarr; NRI Tax &amp; FEMA Advisory
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
