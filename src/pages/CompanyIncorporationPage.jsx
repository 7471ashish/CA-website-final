import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Briefcase, CheckCircle2, Phone, MessageSquare, Clock, Award, Building2 } from 'lucide-react';
import SEO from '../components/common/SEO';
import { siteConfig } from '../data/siteConfig';
import InteractiveDocumentChecklist from '../components/common/InteractiveDocumentChecklist';

export default function CompanyIncorporationPage() {
  const { onOpenConsultation } = useOutletContext();

  const entities = [
    { title: "Private Limited Company", desc: "SPICe+ incorporation with Certificate of Incorporation, PAN, TAN, MOA, AOA & Bank Account." },
    { title: "Limited Liability Partnership (LLP)", desc: "Ideal for professionals and partnerships with limited liability and customized LLP agreements." },
    { title: "One Person Company (OPC)", desc: "100% solo founder ownership with corporate legal identity and limited liability." },
    { title: "Partnership Firm & Sole Prop", desc: "Partnership deed drafting, registrar notarization, and MSME Udyam registration." }
  ];

  return (
    <div>
      <SEO 
        title="Company Incorporation & Business Registration in Meerut | DRB & COMPANY"
        description="Fast 3-7 day Private Limited, LLP, OPC and Partnership registration in Meerut by DRB & COMPANY Chartered Accountants."
        canonical="https://www.drbandcompany.com/company-incorporation"
      />
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white py-16 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">Services</Link>
            <span>/</span>
            <span className="text-white">Company Incorporation</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Company Law &amp; Business Registration
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed">
            Pvt Ltd, LLP, OPC, and Partnership registrations on MCA SPICe+ portal with complete annual ROC compliance in {siteConfig.locationCity}.
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
                  MCA SPICe+ Fast Track
                </span>
                <h2 className="font-heading text-2xl font-bold text-navy-950 mb-4">
                  Start Your Venture with the Right Corporate Structure
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  We guide startup founders and enterprises from name reservation (RUN) to digital signature certificates (DSC), MOA/AOA drafting, and official certificate of incorporation issuance.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {entities.map((entity, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border-l-4 border-gold-500 border border-slate-200">
                      <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">{entity.title}</h4>
                      <p className="text-xs text-slate-600">{entity.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Document Checklist */}
              <InteractiveDocumentChecklist
                serviceTitle="Company Incorporation & Business Registration"
                documents={[
                  "PAN and Aadhaar of all promoters/directors",
                  "Passport / Voter ID / Driving license of directors",
                  "Bank statements with current address proof",
                  "Electricity bill of registered office & Landlord NOC"
                ]}
              />

            </div>

            {/* Right Sticky Sidebar */}
            <div className="lg:col-span-4 sticky top-28 space-y-6">
              <div className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-gold-500/30">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">Corporate Advisory</span>
                <h3 className="font-heading text-xl font-bold text-white mb-2">Incorporate Your Business</h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  Get full documentation and MCA filings completed with senior partner supervision in {siteConfig.locationCity}.
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => onOpenConsultation("Company Incorporation")}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-gold cursor-pointer"
                  >
                    Book Incorporation Appointment
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
