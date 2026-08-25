import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Heart, CheckCircle2, Phone, MessageSquare, Clock, Award, BookmarkCheck } from 'lucide-react';
import SEO from '../components/common/SEO';
import { siteConfig } from '../data/siteConfig';
import InteractiveDocumentChecklist from '../components/common/InteractiveDocumentChecklist';

export default function NgoTrustPage() {
  const { onOpenConsultation } = useOutletContext();

  const services = [
    { title: "Public Charitable Trust Registration", desc: "Trust Deed drafting, registration with the Sub-Registrar, and 12AB tax exemptions." },
    { title: "Section 8 Company Formation", desc: "Corporate non-profit company formation with nationwide jurisdiction and CSR eligibility." },
    { title: "12A & 80G Tax Exemption Approvals", desc: "Section 12AB lifetime tax-exempt status and Section 80G tax benefit certificates for donors." },
    { title: "NGO Darpan & CSR-1 Registration", desc: "NITI Aayog Darpan unique ID and MCA CSR-1 filing for corporate CSR grant eligibility." }
  ];

  return (
    <div>
      <SEO 
        title="NGO, Trust & Section 8 Registration | 12A & 80G Tax Exemption Meerut"
        description="Public Charitable Trust registration, Section 8 Company, Society formation, and Section 12A/80G approvals in Meerut by DRB & COMPANY."
        canonical="https://www.drbandcompany.com/ngo-trust-registration"
      />
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white py-16 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span className="text-white">NGO &amp; Trust</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            NGO, Trust &amp; 12A / 80G Registrations
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed">
            Legal structuring for non-profits, charitable trusts, Section 8 companies, 12AB tax exemptions, and 80G donor rebate certificates.
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
                  Non-Profit &amp; CSR Advisory
                </span>
                <h2 className="font-heading text-2xl font-bold text-navy-950 mb-4">
                  Empowering Social Enterprises &amp; Charitable Foundations
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  We handle the entire non-profit governance lifecycle from trust deed drafting and sub-registrar registration to Section 12A/80G approvals, CSR-1 grant readiness, and FCRA clearances.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border-l-4 border-gold-500 border border-slate-200">
                      <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">{item.title}</h4>
                      <p className="text-xs text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Document Checklist */}
              <InteractiveDocumentChecklist
                serviceTitle="NGO, Trust & 12A/80G Registration"
                documents={[
                  "PAN & Aadhaar of all Trustees / Governing Body Members",
                  "Trust Deed / Memorandum & Rules of Society / Section 8 MOA",
                  "Proof of registered office address (Electricity bill & NOC)",
                  "Activity report & detailed note on charitable objectives"
                ]}
              />

            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-gold-500/30">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">Non-Profit Desk</span>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Register Trust / 12A 80G</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Connect with our senior partners for compliant NGO registration and lifetime tax exemption certificates.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => onOpenConsultation("NGO & Trust Registration")}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-gold cursor-pointer"
                  >
                    Book NGO Consultation
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
