import React from 'react';
import { ShieldCheck, Zap, Award, CheckCircle2, TrendingUp, Sparkles, Scale } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function WhyChooseUsSection({ onOpenConsultation }) {
  const pillars = [
    {
      icon: TrendingUp,
      title: "Proactive & Strategic Approach",
      desc: "We don't just file retrospective taxes; we provide forward-looking tax optimization, legitimate deduction planning, and cash flow advisory to maximize your business savings.",
      badge: "Value Creation"
    },
    {
      icon: ShieldCheck,
      title: "100% ICAI UDIN & Ethical Compliance",
      desc: "Every certificate, audit report, and balance sheet is generated in compliance with the Institute of Chartered Accountants of India (ICAI) and verified with an official 18-digit UDIN.",
      badge: "Regulatory Peace"
    },
    {
      icon: Zap,
      title: "Fast-Track Digital Execution",
      desc: "From 3-day GST registrations to 24-48h express Visa Networth certificates, our modern tech pipeline guarantees prompt, error-free delivery without bureaucratic delays.",
      badge: "Express Speed"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-navy-900/40 text-slate-700 dark:text-slate-200 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-400 bg-gold-100 dark:bg-gold-500/10 px-4 py-1.5 rounded-full border border-gold-300 dark:border-gold-500/30 mb-3">
            Why DRB &amp; Company
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            Why Businesses &amp; Individuals Choose Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            Our Chartered Accountancy practice follows a proactive, reliable, and innovative approach to ensure customer success and complete statutory peace of mind.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-white dark:bg-navy-950 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-600 dark:text-gold-400 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-gold-600 dark:text-gold-400 bg-gold-50 dark:bg-gold-500/10 px-3 py-1 rounded-full border border-gold-200 dark:border-gold-500/30">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onOpenConsultation(item.title)}
                    className="text-xs font-bold text-navy-950 dark:text-gold-400 hover:text-gold-600 dark:hover:text-gold-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Learn More &amp; Consult</span>
                    <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
