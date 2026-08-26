import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Topbar() {
  return (
    <div className="bg-gradient-to-r from-[#0e2744] via-[#13345a] to-[#0e2744] text-white text-xs py-1.5 sm:py-2 border-b-2 border-gold-400/40 relative z-50 transition-colors duration-200 w-full overflow-hidden shadow-sm">
      <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-5 lg:px-6 flex justify-between items-center gap-2">
        
        {/* Left Contact Details */}
        <div className="flex items-center gap-3 sm:gap-6 lg:gap-8 min-w-0">
          {/* Phone */}
          <a
            href={`tel:${siteConfig.phones[0].raw}`}
            className="flex items-center gap-1.5 sm:gap-2 text-slate-100 hover:text-gold-400 transition-colors shrink-0 group"
            title="Call CA DRB & COMPANY"
          >
            <span className="p-1 rounded-md bg-gold-500/10 group-hover:bg-gold-500/20 text-gold-400">
              <Phone className="w-3.5 h-3.5" />
            </span>
            <span className="font-extrabold tracking-wide text-xs sm:text-xs">
              {siteConfig.phones[0].display}
            </span>
          </a>
          
          {/* Email (Hidden on smallest mobile, shown from sm:) */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden sm:flex items-center gap-1.5 sm:gap-2 text-slate-200 hover:text-gold-400 transition-colors truncate group"
            title="Email CA Deepanshi Bansal"
          >
            <span className="p-1 rounded-md bg-gold-500/10 group-hover:bg-gold-500/20 text-gold-400 shrink-0">
              <Mail className="w-3.5 h-3.5" />
            </span>
            <span className="font-medium text-xs truncate max-w-[180px] lg:max-w-none">
              {siteConfig.email}
            </span>
          </a>

          {/* Partner Credentials Badge (Only on 2xl large screens) */}
          <Link
            to="/about"
            className="hidden 2xl:flex flex-col text-left group border-l border-white/20 pl-4 py-0.5"
            title="Partner: CA. DEEPANSHI BANSAL"
          >
            <span className="text-white text-xs font-black leading-tight group-hover:text-gold-300 transition-colors tracking-wide">
              CA. DEEPANSHI BANSAL
            </span>
            <span className="text-gold-400 text-[10px] font-black uppercase tracking-wider leading-tight">
              B.COM, ACA, DISA (ICAI)
            </span>
          </Link>
        </div>

        {/* Right Badges & Working Hours */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          {/* ICAI Regulated Badge (Visible on md:) */}
          <Link
            to="/about"
            className="hidden md:inline-flex items-center gap-1.5 bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 border border-gold-500/40 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full font-black text-[10px] sm:text-xs uppercase tracking-wider transition-colors"
            title="View ICAI Firm Credentials"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
            <span>ICAI Regulated Practice &bull; {siteConfig.locationCity}</span>
          </Link>
          
          {/* Timings (On mobile & desktop) */}
          <Link
            to="/contact"
            className="flex items-center gap-1.5 text-slate-200 hover:text-gold-400 transition-colors text-[11px] sm:text-xs group"
            title="Office Timings"
          >
            <span className="p-1 rounded-md bg-gold-500/10 group-hover:bg-gold-500/20 text-gold-400 shrink-0">
              <Clock className="w-3.5 h-3.5" />
            </span>
            <span className="hidden sm:inline font-semibold">{siteConfig.workingHours}</span>
            <span className="sm:hidden font-bold">10 AM - 6:30 PM</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
