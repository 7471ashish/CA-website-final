import React from 'react';
import { industriesData } from '../../data/faqsData';
import { siteConfig } from '../../data/siteConfig';

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-navy-950/80 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-300 bg-gold-100 dark:bg-gold-500/15 border border-gold-300 dark:border-gold-500/30 px-3.5 py-1 rounded-full mb-3">
            Sectors We Support
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
            Providing tailored Chartered Accountancy and business tax advisory across diverse sectors in {siteConfig.locationCity}, {siteConfig.locationState} &amp; NCR.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {industriesData.map((ind, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center shadow-sm hover:border-gold-400 dark:hover:border-gold-500 hover:shadow-md transition-all duration-200 flex items-center justify-center min-h-[70px]"
            >
              <span className="text-xs font-bold text-navy-900 dark:text-slate-100 tracking-tight">{ind}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
