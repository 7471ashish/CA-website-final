import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Topbar() {
  return (
    <div className="bg-gradient-to-r from-[#0e2744] via-[#13345a] to-[#0e2744] text-white text-xs sm:text-[13px] py-2 sm:py-2.5 border-b-2 border-gold-400/40 relative z-50 transition-colors duration-200 w-full overflow-hidden shadow-md">
      <div className="w-full max-w-[1580px] mx-auto px-3 sm:px-5 lg:px-7 flex justify-between items-center flex-wrap gap-2 sm:gap-3">
        
        {/* Left Contact Details (Clickable Call & Email) */}
        <div className="flex items-center gap-6 sm:gap-10 flex-wrap">
          
          {/* 1. Clickable Phone Icon + Number */}
          <a
            href={`tel:${siteConfig.phones[0].raw}`}
            className="flex items-center gap-2.5 text-slate-100 hover:text-gold-400 transition-all group cursor-pointer"
            title="Click to call CA DRB & COMPANY"
          >
            <span className="p-1 rounded-md bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors">
              <Phone className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
            </span>
            <span className="font-extrabold tracking-wide">
              {siteConfig.phones[0].display}
            </span>
          </a>
          
          {/* 2. Clickable Email Icon + Email Address */}
          <a
            href={`mailto:${siteConfig.email}`}
            className="hidden sm:flex items-center gap-2.5 text-slate-100 hover:text-gold-400 transition-all group cursor-pointer"
            title="Click to email CA Deepanshi Bansal"
          >
            <span className="p-1 rounded-md bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors">
              <Mail className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform" />
            </span>
            <span className="font-bold tracking-wide">
              {siteConfig.email}
            </span>
          </a>

          {/* 3. Partner Credentials Badge (Clickable -> Links to /about) */}
          <Link
            to="/about"
            className="hidden xl:flex flex-col text-left group cursor-pointer border-l border-white/20 pl-6 py-0.5"
            title="Partner: CA. DEEPANSHI BANSAL"
          >
            <span className="text-white text-xs sm:text-[13px] font-black leading-tight group-hover:text-gold-300 transition-colors tracking-wide">
              CA. DEEPANSHI BANSAL
            </span>
            <span className="text-gold-400 text-[10px] font-black uppercase tracking-wider leading-tight mt-0.5">
              B.COM, ACA, DISA (ICAI)
            </span>
          </Link>
        </div>

        {/* Right Accreditations & Hours (Clickable Links) */}
        <div className="hidden md:flex items-center gap-6 sm:gap-8">
          
          {/* 3. Clickable ICAI Practice Badge -> Links to About Us */}
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 border border-gold-500/50 px-4 py-1.5 rounded-full font-black text-xs sm:text-[13px] uppercase tracking-wider shadow-sm transition-all hover:scale-105 cursor-pointer"
            title="View ICAI Firm Credentials & Partners"
          >
            <ShieldCheck className="w-4.5 h-4.5 text-gold-400 shrink-0" />
            <span>ICAI Regulated Practice &bull; {siteConfig.locationCity}</span>
          </Link>
          
          {/* 4. Clickable Timings -> Links to Contact & Location */}
          <Link
            to="/contact"
            className="flex items-center gap-2.5 text-slate-200 hover:text-gold-400 transition-colors font-semibold text-xs sm:text-sm group cursor-pointer"
            title="Click to view office location and book meeting"
          >
            <span className="p-1 rounded-md bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors">
              <Clock className="w-4.5 h-4.5 text-gold-400 group-hover:scale-110 transition-transform" />
            </span>
            <span>{siteConfig.workingHours}</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
