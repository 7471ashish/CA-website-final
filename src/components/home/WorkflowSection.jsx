import React from 'react';
import { 
  FileSearch, 
  Layers, 
  ShieldCheck, 
  HeadphonesIcon, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function WorkflowSection({ onOpenConsultation }) {
  const steps = [
    {
      num: "01",
      icon: FileSearch,
      title: "Discovery & Needs Analysis",
      desc: "Confidential 1-on-1 evaluation of your personal income, business accounts, or foreign remittance requirements.",
      tags: ["Confidential", "Direct Partner Access"]
    },
    {
      num: "02",
      icon: Layers,
      title: "Document Review & Tax Strategy",
      desc: "Detailed ledger audit, AIS/TIS reconciliation, regime comparison, and legal loophole check before submission.",
      tags: ["Reconciliation", "Tax Optimization"]
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Statutory E-Filing & UDIN",
      desc: "Precise portal filing on Income Tax / GST / MCA systems with official 18-digit ICAI UDIN seal generation.",
      tags: ["ICAI UDIN", "Zero Defect Filing"]
    },
    {
      num: "04",
      icon: HeadphonesIcon,
      title: "Continuous Compliance Support",
      desc: "Year-round guidance, statutory due-date alerts, notice resolutions, and ongoing corporate financial advisory.",
      tags: ["Notice Defense", "Year-round Advisory"]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-navy-950 transition-colors duration-200 border-t border-b border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-300 bg-gold-100/80 dark:bg-gold-500/15 border border-gold-300/80 dark:border-gold-500/30 px-3.5 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>Seamless Advisory Journey</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white tracking-tight">
            How We Manage Your Compliance &amp; Tax Engagements
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
            A transparent, structured four-step methodology engineered for zero-defect compliance, audit readiness, and maximum tax efficiency.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="relative bg-slate-50 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-7 flex flex-col justify-between hover:border-gold-400 dark:hover:border-gold-500 hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1.5 group"
              >
                {/* Step Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-navy-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-navy-900 dark:text-gold-400 group-hover:bg-navy-900 dark:group-hover:bg-gold-500 group-hover:text-gold-400 dark:group-hover:text-navy-950 shadow-sm transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-heading text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-gold-500 transition-colors">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-navy-900 dark:text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-1.5">
                  {step.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="text-[10px] font-bold bg-white dark:bg-navy-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Row */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onOpenConsultation && onOpenConsultation("Workflow Consultation")}
            className="inline-flex items-center gap-2 py-3.5 px-8 rounded-xl bg-navy-900 hover:bg-navy-850 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            <span>Start Your Engagement Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
