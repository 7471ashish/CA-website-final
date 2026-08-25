import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Topbar() {
  return (
    <div className="bg-gradient-to-r from-[#1c5f94] via-[#246fa8] to-[#1c5f94] text-white text-sm sm:text-[15px] py-3 sm:py-3.5 border-b-2 border-gold-400/50 relative z-50 transition-colors duration-200 w-full overflow-hidden shadow-md">
      <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center flex-wrap gap-3">
        
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
