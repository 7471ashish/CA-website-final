import React from 'react';
import { ShieldCheck, MapPin, Users, Monitor, Lock, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function OfficeShowcaseSection({ onOpenConsultation }) {
  return (
    <section className="py-20 bg-white dark:bg-navy-950 text-slate-700 dark:text-slate-200 transition-colors duration-200 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-400 bg-gold-100 dark:bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-300 dark:border-gold-500/30 mb-3">
            Our Infrastructure
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            Modern Practice &amp; Technology Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Visit our fully-equipped chartered accountancy office at Budhana Gate, Meerut — designed for confidentiality, speed, and client comfort.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Real Office Image and Features Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Real Office Image with Luxury Frame & Badges */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gold-500/30 group">
              <img
                src={siteConfig.officeImageUrl}
                alt="DRB & Company Chartered Accountants Office in Budhana Gate, Meerut - CA Deepanshi Bansal"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102c4c]/85 via-transparent to-transparent"></div>

              {/* Floating Verified Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-[#102c4c]/95 backdrop-blur-md p-4 rounded-2xl border border-gold-400/40 text-white flex items-center justify-between shadow-2xl">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    <h4 className="font-heading text-sm sm:text-base font-bold text-white">
                      {siteConfig.firmName} &bull; Main Office
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-gold-400 shrink-0" />
                    <span>{siteConfig.address}</span>
                  </p>
                </div>
                <a
                  href={siteConfig.googleMapsDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-wider hover:bg-gold-400 transition-colors shrink-0"
                >
                  Locate Us &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Right: Key Office Capabilities */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0 mt-1">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-navy-900 dark:text-white">
                    100% Data Confidentiality &amp; Security
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Client financial statements, PAN data, and corporate records are protected with bank-grade encryption and DISA audited access controls.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0 mt-1">
                  <Monitor className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-navy-900 dark:text-white">
                    High-Speed Digital Tax &amp; Audit Stations
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Integrated Tally Prime, MCA SPICe+, GST E-Invoicing, and Income Tax e-filing pipelines ensure real-time return processing with zero backlog.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0 mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-navy-900 dark:text-white">
                    Senior Partner Consultation Chamber
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    Dedicated private meeting space for one-on-one tax planning, scrutiny resolution, and business restructuring sessions.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation("Office Visit Appointment")}
                className="w-full py-3.5 px-6 rounded-xl bg-navy-900 dark:bg-gold-500 text-white dark:text-navy-950 font-heading font-extrabold text-xs uppercase tracking-wider hover:bg-navy-800 dark:hover:bg-gold-400 transition-all shadow-md cursor-pointer text-center"
              >
                Schedule In-Person Meeting at Meerut Office
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
