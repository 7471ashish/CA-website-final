import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Phone, MessageSquare, Clock, Award, Server } from 'lucide-react';
import SEO from '../components/common/SEO';
import { siteConfig } from '../data/siteConfig';
import InteractiveDocumentChecklist from '../components/common/InteractiveDocumentChecklist';

export default function AuditAssurancePage() {
  const { onOpenConsultation } = useOutletContext();

  const auditTypes = [
    { title: "Tax Audit (Sec 44AB Form 3CD)", desc: "Mandatory for business turnover exceeding ₹1 Cr (₹10 Cr for 95% digital transactions) or professionals over ₹50 Lakhs." },
    { title: "DISA (ICAI) Systems Audit", desc: "Information Systems security, ERP data integrity & cybersecurity controls audit conducted by certified DISA auditor CA Deepanshi Bansal." },
    { title: "Statutory Company Audit", desc: "Independent statutory audit for Private Limited Companies and LLPs as required under Companies Act 2013." },
    { title: "Bank & Stock Concurrent Audit", desc: "Borrower inventory verification, drawing power determination, and concurrent audit for commercial banks." }
  ];

  return (
    <div>
      <SEO 
        title="Audit & Assurance Services | Tax Audit Sec 44AB & DISA Systems Audit Meerut"
        description="Comprehensive statutory audit, Tax Audit Section 44AB Form 3CD, and certified DISA Information Systems Audits by DRB & COMPANY in Meerut."
        canonical="https://www.drbandcompany.com/audit-assurance"
      />
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white py-16 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span className="text-white">Audit &amp; Assurance</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Audit &amp; Assurance Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed">
            Statutory Audits, Section 44AB Tax Audits, and certified DISA (ICAI) Information Systems Audits with 100% ICAI UDIN authentication.
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
                  ICAI Auditing Standards
                </span>
                <h2 className="font-heading text-2xl font-bold text-navy-950 mb-4">
                  Corporate &amp; Statutory Auditing Excellence
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  At DRB &amp; COMPANY, our partner-supervised audit engagements deliver regulatory compliance, robust internal financial controls (IFC), and actionable business intelligence for enterprises across Uttar Pradesh and Delhi NCR.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {auditTypes.map((audit, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border-l-4 border-gold-500 border border-slate-200">
                      <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">{audit.title}</h4>
                      <p className="text-xs text-slate-600">{audit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Document Checklist */}
              <InteractiveDocumentChecklist
                serviceTitle="Audit & Assurance Services"
                documents={[
                  "Trial Balance, Balance Sheet & Profit & Loss Statement",
                  "Bank statements with detailed reconciliations",
                  "Sales, purchase and expense ledgers & GST 2B sync",
                  "Fixed asset register with depreciation computation",
                  "Statutory dues payment challans (GST, TDS, PF, ESI)",
                  "IT architecture & ERP security logs (for DISA IS audits)"
                ]}
              />

            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-gold-500/30">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">Direct Partner Review</span>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Schedule Audit Consultation</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Book direct consultation with Managing Partner CA. Deepanshi Bansal &amp; Senior Partner CA. Parul in {siteConfig.locationCity}.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => onOpenConsultation("Audit & Assurance Services")}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-gold cursor-pointer"
                  >
                    Book Audit Appointment
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
