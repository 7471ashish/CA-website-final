import React from 'react';
import { Check, FileCheck, BookmarkCheck, ArrowRight } from 'lucide-react';

export default function InteractiveDocumentChecklist({ 
  serviceTitle = "Services", 
  documents = [], 
  onOpenConsultation 
}) {
  return (
    <div className="bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-between">
      <div>
        {/* Header */}
        <div className="flex items-center gap-2.5 pb-3.5 border-b border-slate-200/80 mb-4">
          <div className="p-1.5 rounded-lg bg-gold-50 border border-gold-300 text-gold-600 shrink-0">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading text-sm sm:text-[15px] font-bold text-[#102c4c] uppercase tracking-wide">
              Client Document Checklist
            </h4>
            <p className="text-[11px] text-slate-500 font-medium">
              Keep these documents ready for fast 24-48h processing
            </p>
          </div>
        </div>

        {/* Green Checked Document Items */}
        <ul className="space-y-2.5 mb-6">
          {documents.map((doc, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-colors"
            >
              <div className="w-5 h-5 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                {doc}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <div className="pt-3 border-t border-slate-200/70">
        <button
          onClick={() => onOpenConsultation && onOpenConsultation(serviceTitle)}
          className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:from-gold-300 hover:to-gold-500 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
        >
          <BookmarkCheck className="w-4 h-4 shrink-0" />
          <span>Book Consultation &bull; {serviceTitle.split(' ')[0]}</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>
    </div>
  );
}
