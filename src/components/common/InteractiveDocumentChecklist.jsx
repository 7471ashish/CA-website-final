import React, { useState } from 'react';
import { CheckSquare, Square, CheckCircle2, Lock, Unlock, Sparkles, FileCheck, ArrowRight } from 'lucide-react';

export default function InteractiveDocumentChecklist({ 
  serviceTitle = "Services", 
  documents = [], 
  onOpenConsultation 
}) {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleItem = (idx) => {
    setCheckedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const totalDocs = documents.length;
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const isAllChecked = totalDocs > 0 && checkedCount === totalDocs;

  const handleSelectAll = () => {
    if (isAllChecked) {
      setCheckedItems({});
    } else {
      const all = {};
      documents.forEach((_, idx) => {
        all[idx] = true;
      });
      setCheckedItems(all);
    }
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-7 shadow-lg flex flex-col justify-between transition-all duration-300">
      <div>
        {/* Header with Icon & Progress */}
        <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gold-50 border border-gold-300/60 text-gold-600">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading text-sm sm:text-base font-bold text-[#102c4c] uppercase tracking-wide">
                Client Document Checklist
              </h4>
              <p className="text-[11px] text-slate-500 font-medium">
                Tick all items to activate priority appointment
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSelectAll}
            className="text-[11px] font-bold text-[#102c4c] hover:text-gold-600 underline cursor-pointer transition-colors"
          >
            {isAllChecked ? 'Uncheck All' : 'Tick All'}
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-xs font-bold mb-1.5">
            <span className="text-slate-600 flex items-center gap-1">
              <span>Readiness Progress:</span>
              <span className={`font-black ${isAllChecked ? 'text-emerald-600' : 'text-gold-600'}`}>
                {checkedCount} of {totalDocs} Documents Ready
              </span>
            </span>
            <span className={`font-black ${isAllChecked ? 'text-emerald-600' : 'text-slate-500'}`}>
              {Math.round((checkedCount / (totalDocs || 1)) * 100)}%
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div 
              className={`h-full transition-all duration-300 rounded-full ${
                isAllChecked 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
                  : 'bg-gradient-to-r from-gold-400 to-gold-600'
              }`}
              style={{ width: `${(checkedCount / (totalDocs || 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Interactive Checkbox Items */}
        <div className="space-y-2 mb-6">
          {documents.map((doc, idx) => {
            const isChecked = !!checkedItems[idx];
            return (
              <div
                key={idx}
                onClick={() => toggleItem(idx)}
                className={`flex items-center gap-3 p-2.5 sm:p-3 rounded-xl border transition-all duration-200 cursor-pointer select-none ${
                  isChecked 
                    ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950 shadow-sm' 
                    : 'bg-slate-50/70 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="shrink-0 transition-transform active:scale-90">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-400" />
                  )}
                </div>
                <span className={`text-xs sm:text-sm font-semibold transition-colors ${isChecked ? 'line-through text-slate-500' : 'text-slate-800'}`}>
                  {doc}
                </span>
                {isChecked && (
                  <span className="ml-auto text-[10px] font-black uppercase text-emerald-600 bg-emerald-100/80 px-2 py-0.5 rounded-full shrink-0">
                    Ready
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Action Trigger */}
      <div className="pt-4 border-t border-slate-100">
        {isAllChecked ? (
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-xs font-black text-emerald-600 bg-emerald-50 py-1.5 px-3 rounded-lg border border-emerald-200 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>All {totalDocs} Documents Confirmed Ready!</span>
            </div>
            <button
              onClick={() => onOpenConsultation && onOpenConsultation(`${serviceTitle} (All Documents Ready)`)}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-heading font-black text-xs sm:text-sm uppercase tracking-wider shadow-gold hover:from-gold-300 hover:to-gold-500 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer animate-pulse"
            >
              <Unlock className="w-4 h-4 shrink-0" />
              <span>Book Priority Appointment Now</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 py-1.5 px-3 rounded-lg border border-slate-200">
              <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>Tick all {totalDocs} documents to unlock appointment</span>
            </div>
            <button
              disabled
              className="w-full py-3 px-6 rounded-xl bg-slate-200 text-slate-400 font-heading font-bold text-xs uppercase tracking-wider cursor-not-allowed flex items-center justify-center gap-2 opacity-80"
              title="Please check all required documents first"
            >
              <Lock className="w-4 h-4 shrink-0" />
              <span>Appointment Locked ({checkedCount}/{totalDocs} Ready)</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
