import React from 'react';
import { Check, FileCheck } from 'lucide-react';

export default function InteractiveDocumentChecklist({ 
  serviceTitle = "Services", 
  documents = [] 
}) {
  return (
    <div className="bg-slate-50/90 border-2 border-slate-300 rounded-xl p-3.5 sm:p-4 shadow-sm flex flex-col justify-between">
      {/* Header with Golden Text */}
      <div className="flex items-center gap-2 pb-2 border-b border-gold-300 mb-2.5">
        <FileCheck className="w-4 h-4 text-gold-600 shrink-0" />
        <h4 className="font-heading text-xs sm:text-[13px] font-black text-gold-600 uppercase tracking-wider">
          Client Document Checklist
        </h4>
      </div>

      {/* Ultra-Compact Document Items Grid with Dark Borders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {documents.map((doc, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 p-1.5 px-2.5 rounded-lg bg-white border border-slate-300 shadow-2xs hover:border-emerald-500 transition-colors"
          >
            <div className="w-4 h-4 rounded bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-slate-800 leading-snug truncate" title={doc}>
              {doc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
