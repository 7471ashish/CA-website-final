import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { handleSmartEmailClick } from '../../utils/emailHelper';

export default function Topbar() {
  return (
    <div className="bg-gradient-to-r from-[#0c223c] via-[#102c4c] to-[#0c223c] text-white text-[11px] lg:text-[11.5px] py-1.5 border-b border-gold-400/30 relative z-50 transition-colors duration-200 w-full overflow-hidden shadow-xs">
      <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-3 lg:px-4 xl:px-6 flex justify-between items-center gap-2 whitespace-nowrap">
        
        {/* Left Side: Contact Information (Phone & Full Email - Never Cut Off) */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0 whitespace-nowrap">
          {/* Phone */}
          <a
            href={`tel:${siteConfig.phones[0].raw}`}
            className="flex items-center gap-1.5 text-slate-100 hover:text-gold-400 transition-colors shrink-0 group whitespace-nowrap"
            title="Call CA DRB & COMPANY"
          >
            <span className="p-0.5 rounded bg-gold-500/15 text-gold-400 group-hover:bg-gold-500/25 transition-colors">
              <Phone className="w-3.5 h-3.5" />
            </span>
            <span className="font-extrabold tracking-wide text-[11px] lg:text-[11.5px]">
              {siteConfig.phones[0].display}
            </span>
          </a>

          {/* Divider */}
          <span className="text-white/20 hidden sm:inline">&bull;</span>

          {/* Full Email Address (Smart Router: App on Mobile, Gmail Web on Laptop) */}
          <a
            href={`mailto:${siteConfig.email}`}
            onClick={handleSmartEmailClick}
            className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-gold-400 transition-colors shrink-0 group whitespace-nowrap cursor-pointer"
            title="Send Email to CA Deepanshi Bansal"
          >
            <span className="p-0.5 rounded bg-gold-500/15 text-gold-400 group-hover:bg-gold-500/25 transition-colors shrink-0">
              <Mail className="w-3.5 h-3.5" />
            </span>
            <span className="font-semibold text-[11px] lg:text-[11.5px] whitespace-nowrap">
              {siteConfig.email}
            </span>
          </a>
        </div>

        {/* Right Side: Credential Badge & Timings (Always Full Text) */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 shrink-0 whitespace-nowrap">
          {/* ICAI Regulated Badge */}
          <Link
            to="/about"
            className="hidden md:inline-flex items-center gap-1.5 bg-gold-500/15 hover:bg-gold-500/25 text-gold-300 border border-gold-500/40 px-2 sm:px-2.5 py-0.5 rounded-full font-black text-[10px] sm:text-[10.5px] uppercase tracking-wider transition-all whitespace-nowrap shrink-0"
            title="View ICAI Firm Credentials"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>ICAI Regulated Practice &bull; {siteConfig.locationCity}</span>
          </Link>

          {/* Divider */}
          <span className="text-white/20 hidden md:inline">&bull;</span>

          {/* Working Timings */}
          <Link
            to="/contact"
            className="flex items-center gap-1.5 text-slate-200 hover:text-gold-400 transition-colors text-[10.5px] sm:text-[11px] shrink-0 group whitespace-nowrap"
            title="Office Working Hours"
          >
            <span className="p-0.5 rounded bg-gold-500/15 text-gold-400 group-hover:bg-gold-500/25 transition-colors shrink-0">
              <Clock className="w-3.5 h-3.5" />
            </span>
            <span className="hidden sm:inline font-semibold whitespace-nowrap">{siteConfig.workingHours}</span>
            <span className="sm:hidden font-bold whitespace-nowrap">10 AM - 6:30 PM</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
