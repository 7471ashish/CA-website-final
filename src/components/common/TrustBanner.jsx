import React from 'react';
import { ShieldCheck, Clock, Award, CheckCircle } from 'lucide-react';

export default function TrustBanner() {
  const trustItems = [
    { icon: ShieldCheck, text: "ICAI Regulated Practice" },
    { icon: Clock, text: "5+ Years FCA Experience" },
    { icon: Award, text: "Official UDIN Verification" },
    { icon: CheckCircle, text: "100% Legal Compliance" },
  ];

  return (
    <div className="bg-gradient-to-r from-[#1c5f94] via-[#226ea9] to-[#1c5f94] border border-gold-400/50 rounded-2xl p-4 sm:p-6 mb-10 shadow-lg text-white">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {trustItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 justify-center sm:justify-start">
              <Icon className="w-5 h-5 text-gold-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
