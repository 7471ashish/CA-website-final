import React from 'react';
import { CheckCircle2, Phone, MessageSquare, X, Calendar } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function ConfirmationPopup({ isOpen, onClose, personName = "Valued Client", serviceName = "Consultation" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102c4c]/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-white dark:bg-navy-900 rounded-3xl shadow-2xl p-6 sm:p-8 text-center border-2 border-gold-400 overflow-hidden transform animate-scaleUp transition-colors duration-200">
        
        {/* Top Glow Accent */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600"></div>

        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 dark:bg-navy-800 text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-750 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close popup"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Animated Check Icon */}
        <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-500 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/20">
          <CheckCircle2 className="w-9 h-9 animate-bounce" />
        </div>

        {/* Badge */}
        <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-300 bg-gold-50 dark:bg-gold-500/10 border border-gold-200 dark:border-gold-500/30 px-3 py-0.5 rounded-full mb-2">
          Request Confirmed &bull; Recorded
        </span>

        {/* Heading */}
        <h3 className="font-heading text-2xl font-extrabold text-navy-900 dark:text-white mb-2">
          We Will Connect With You Soon!
        </h3>

        {/* Personalized Message */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          Dear <strong>{personName}</strong>, your details for <strong>{serviceName}</strong> have been securely recorded. <strong>{siteConfig.principal}'s</strong> team will review your requirement and reach out shortly.
        </p>

        {/* Quick Contact Box */}
        <div className="bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 mb-6 text-left space-y-2 text-xs">
          <div className="flex items-center justify-between font-bold text-navy-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
            <span>Direct Office Helpline:</span>
            <span className="text-gold-600 dark:text-gold-400">{siteConfig.phones[0].display}</span>
          </div>
          <div className="flex items-center justify-between text-slate-600 dark:text-slate-300 pt-1">
            <span>Office Hours:</span>
            <span>{siteConfig.workingHours}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-[#25d366] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-md cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Need Urgent Advice? Chat on WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-850 dark:bg-gold-500 dark:hover:bg-gold-400 text-white dark:text-navy-950 font-heading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            Got It, Thank You!
          </button>
        </div>

      </div>
    </div>
  );
}
