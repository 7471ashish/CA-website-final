import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Award, CheckCircle2, Shield, UserCheck, Phone, MapPin, Users, Briefcase, GraduationCap, Clock, Compass, Target, Sparkles, Building2, Check, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import { siteConfig } from '../data/siteConfig';

export default function AboutPage() {
  const { onOpenConsultation } = useOutletContext();

  const values = [
    {
      title: "Partnership Strength & Synergistic Expertise",
      desc: "DRB & COMPANY unites the analytical precision of CA. Deepanshi Bansal (Systems Auditor & Tax Strategist) with the seasoned audit leadership of CA. Parul (Fellow Chartered Accountant), providing dual-partner review on complex corporate engagements."
    },
    {
      title: "Ethical Integrity & 100% UDIN Compliance",
      desc: "We adhere strictly to the ICAI code of professional ethics. Every certificate, tax audit report, net worth statement, and balance sheet is authenticated with an official Unique Document Identification Number (UDIN)."
    },
    {
      title: "Senior Partner Direct Involvement",
      desc: "Unlike large firms where junior staff handle files, our senior partners personally assess every business structure, audit working paper, and tax filing to safeguard client interests and optimize statutory liabilities."
    },
    {
      title: "Express 24-48h Digital Turnaround",
      desc: "Leveraging automated compliance tools, cloud ledger integrations, and rapid digital workflows, we deliver express corporate filings, GST returns, and audited reports without compromising statutory accuracy."
    }
  ];

  const firmStrengths = [
    "ICAI-Regulated Partnership Firm with multi-disciplinary partner leadership",
    "Certified Information Systems Auditor on board (DISA qualified by ICAI)",
    "Senior Partner with extensive Corporate Statutory & Bank Audit track record",
    "Complete statutory coverage: Income Tax, GST, MCA Corporate Law, Statutory Audits & DISA Systems Audit",
    "Strategic central office in Budhana Gate, Meerut with in-person & virtual consultation",
    "Transparent engagement models with zero hidden costs or compliance delays"
  ];

  return (
    <div className="bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-200 transition-colors duration-200">
      <SEO 
        title="About Us | DRB & COMPANY - CA Deepanshi Bansal & CA Parul (Meerut)"
        description="Learn about DRB & COMPANY, an ICAI-regulated Chartered Accountants Partnership Firm in Meerut led by CA Deepanshi Bansal (ACA, DISA) and CA Parul (FCA, M.Com)."
        canonical="https://www.drbandcompany.com/about"
      />
      
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white py-20 border-b-4 border-gold-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-gold-300 bg-gold-500/20 border border-gold-500/30 px-3.5 py-1 rounded-full">
              {siteConfig.firmType} &bull; Regulated by ICAI
            </span>
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-emerald-300 bg-emerald-500/20 border border-emerald-500/30 px-3.5 py-1 rounded-full">
              Meerut &bull; Western Uttar Pradesh
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            About {siteConfig.firmName}
          </h1>
          <p className="text-xl sm:text-2xl text-gold-300 font-heading font-semibold mt-3">
            Transforming Knowledge into Values
          </p>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed font-normal">
            A premier Chartered Accountants <strong>Partnership Firm</strong> delivering senior partner-led excellence in Taxation Strategy, Statutory Audits, Corporate Law, and Global Advisory in {siteConfig.locationCity} and across India.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-navy-950 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Detailed Narrative Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-400 bg-gold-100 dark:bg-gold-500/15 border border-gold-300 dark:border-gold-500/30 px-4 py-1.5 rounded-full">
                <Users className="w-4 h-4" />
                <span>Our Partnership Heritage</span>
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-black text-navy-950 dark:text-white tracking-tight">
                Senior Partner-Led Financial &amp; Statutory Excellence
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                <strong>{siteConfig.firmName}</strong> was established as a dynamic <strong>Chartered Accountants Partnership Firm</strong> registered under the Institute of Chartered Accountants of India (ICAI). Operating from the commercial nerve-center of <strong>Budhana Gate, Meerut</strong>, our firm serves as a strategic growth partner for enterprises, family businesses, emerging startups, and individuals.
              </p>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                Our practice is distinguished by the direct involvement of both its senior partners — <strong>CA. Deepanshi Bansal</strong> and <strong>CA. Parul</strong>. By pairing advanced Information Systems Auditing (DISA ICAI) and modern digital taxation with deep seasoned expertise in corporate statutory auditing, GST litigation, and banking finance, we provide comprehensive financial solutions backed by 100% UDIN compliance.
              </p>
              <div className="pt-2">
                <ul className="space-y-2.5">
                  {firmStrengths.slice(0, 4).map((str, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] p-8 rounded-3xl text-white shadow-2xl border-2 border-gold-500/40 space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src={siteConfig.caLogoUrl}
                    alt="ICAI Emblem"
                    className="h-16 w-auto object-contain bg-white rounded-xl p-1.5 shadow-md"
                  />
                  <div>
                    <h3 className="font-heading text-xl font-black text-white">{siteConfig.firmName}</h3>
                    <p className="text-xs font-bold text-gold-400 uppercase tracking-widest">{siteConfig.legalTitle}</p>
                    <p className="text-[11px] text-emerald-300 font-bold uppercase mt-0.5">ICAI Registered Partnership</p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 space-y-3 text-xs text-slate-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Constitution:</span>
                    <span className="font-bold text-white">Partnership Firm</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">Head Office:</span>
                    <span className="font-bold text-white">Budhana Gate, Meerut</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-slate-400">UDIN Compliance:</span>
                    <span className="font-bold text-emerald-400">100% Mandatory</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Service Reach:</span>
                    <span className="font-bold text-gold-300">Pan-India &amp; Global NRIs</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenConsultation()}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-heading font-black text-xs uppercase tracking-wider hover:from-gold-300 hover:to-gold-500 shadow-xl transition-all cursor-pointer text-center"
                >
                  Schedule Appointment
                </button>
              </div>
            </div>
          </div>

          {/* TWO PARTNERS FULL PROFILE SECTION */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-black uppercase tracking-widest text-gold-600 dark:text-gold-400">Leadership Team</span>
              <h3 className="font-heading text-3xl sm:text-4xl font-black text-navy-950 dark:text-white tracking-tight mt-1">
                Meet Our Senior Partners
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Combining specialized Information Systems auditing with seasoned corporate tax and statutory audit leadership
              </p>
              <div className="w-16 h-1.5 bg-gold-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* PARTNER 1: CA Deepanshi Bansal */}
              <div className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] p-8 sm:p-10 rounded-3xl text-white shadow-2xl border-2 border-gold-500/40 flex flex-col justify-between relative overflow-hidden group hover:border-gold-400 transition-all">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/10 blur-3xl rounded-full pointer-events-none"></div>
                
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="p-2 bg-white rounded-xl shadow-md inline-block">
                      <img src={siteConfig.caLogoUrl} alt="ICAI CA" className="h-10 w-auto object-contain" />
                    </div>
                    <span className="text-xs text-gold-300 font-bold">📍 Meerut Central Office</span>
                  </div>

                  <h4 className="font-heading text-2xl sm:text-3xl font-black text-white group-hover:text-gold-300 transition-colors">
                    CA. Deepanshi Bansal
                  </h4>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-2 mb-4">
                    <span className="text-sm font-black text-gold-400 uppercase tracking-wider">
                      B.COM, ACA, DISA (ICAI)
                    </span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-white/10">
                    <p>
                      <strong>Core Specializations:</strong> Direct &amp; International Taxation, Corporate Tax Planning, MCA Company Law Compliances, and ICAI UDIN Verified <strong>Visa Networth Statements</strong> for embassies worldwide.
                    </p>
                    <p>
                      As a <strong>DISA (ICAI) Qualified Systems Auditor</strong>, CA. Deepanshi Bansal conducts certified Information Systems audits, IT risk assessments, ERP controls evaluations, and data integrity audits for modern enterprises.
                    </p>
                  </div>
                </div>
              </div>

              {/* PARTNER 2: CA Parul */}
              <div className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] p-8 sm:p-10 rounded-3xl text-white shadow-2xl border-2 border-gold-500/40 flex flex-col justify-between relative overflow-hidden group hover:border-gold-400 transition-all">
                <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
                
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="p-2 bg-white rounded-xl shadow-md inline-block">
                      <img src={siteConfig.caLogoUrl} alt="ICAI CA" className="h-10 w-auto object-contain" />
                    </div>
                    <span className="text-xs text-gold-300 font-bold">📍 Meerut Central Office</span>
                  </div>

                  <h4 className="font-heading text-2xl sm:text-3xl font-black text-white group-hover:text-gold-300 transition-colors">
                    CA. Parul
                  </h4>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-2 mb-4">
                    <span className="text-sm font-black text-gold-400 uppercase tracking-wider">
                      M.COM, FCA
                    </span>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-white/10">
                    <p>
                      <strong>Core Specializations:</strong> Corporate Statutory Audits under Companies Act 2013, Tax Audits under Section 44AB, GST Strategic Auditing &amp; Litigation, Banking Project Financing (CMA Data &amp; DPRs).
                    </p>
                    <p>
                      As a practicing Chartered Accountant, CA. Parul leads complex corporate statutory audits, bank concurrent audits, and Section 8 / Trust tax exemptions.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto">
            <div className="bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/15 text-gold-600 dark:text-gold-400 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-black text-navy-950 dark:text-white mb-2">
                Our Vision
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                To be recognized as Uttar Pradesh’s most reliable and technologically advanced Chartered Accountants partnership firm — empowering businesses to achieve unhindered commercial growth with absolute statutory compliance and financial clarity.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-black text-navy-950 dark:text-white mb-2">
                Our Mission
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                To provide senior partner-led accounting, audit, tax, and regulatory solutions with unyielding ethical rigor, 100% UDIN transparency, and rapid turnaround for enterprises, non-profits, and global NRIs.
              </p>
            </div>
          </div>

          {/* Core Firm Commitments */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h3 className="font-heading text-2xl sm:text-3xl font-black text-navy-950 dark:text-white">
                Our Core Firm Commitments
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                The pillars that guide our practice every day
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {values.map((v, i) => (
                <div key={i} className="bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-sm">
                  <h4 className="font-heading text-base font-bold text-navy-950 dark:text-white mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span>{v.title}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pl-7">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Grand CTA Banner */}
          <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-850 text-white rounded-3xl p-8 sm:p-12 text-center border border-gold-500/40 shadow-2xl max-w-5xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-4xl font-black mb-3">
              Need Direct Partner Consultation?
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 font-normal">
              Schedule an in-person conference at our Budhana Gate office in Meerut or connect directly with our senior partners via Phone or WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onOpenConsultation()}
                className="py-3.5 px-8 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-heading font-black text-xs uppercase tracking-wider shadow-xl hover:from-gold-300 hover:to-gold-500 transition-all cursor-pointer"
              >
                Book Consultation
              </button>
              <a
                href={`tel:${siteConfig.phones[0].raw}`}
                className="py-3.5 px-8 rounded-xl bg-white/10 text-white font-heading font-bold text-xs border border-white/20 hover:bg-white/15 transition-colors"
              >
                Call: {siteConfig.phones[0].display}
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
