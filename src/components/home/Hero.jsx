import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  PhoneCall, 
  Clock, 
  Sparkles, 
  Zap,
  MapPin,
  Check
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Hero({ onOpenConsultation }) {
  return (
    <section className="relative min-h-[720px] lg:min-h-[840px] flex items-center justify-center text-white overflow-hidden border-b-4 border-gold-500 py-16 sm:py-24">
      
      {/* Full-Width Real Office Background Image - 100% Clean & Natural (No Color Shade) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${siteConfig.officeImageUrl}')`
        }}
      >
        {/* Minimal Neutral Shadow for Perfect Text Readability (Zero Color Tint) */}
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Spacious, Open, Uncluttered Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center justify-center">
        
        {/* Grand Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-5xl">
          Welcome to <br />
          <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            {siteConfig.firmName}
          </span>
        </h1>

        {/* Tagline matching cagmc.com - Open & Grand */}
        <p className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-gold-300 tracking-wider mt-4 mb-8 drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]">
          Transforming Knowledge into Values
        </p>

        {/* Action Button Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-8">
          <button
            onClick={() => onOpenConsultation()}
            className="w-full sm:w-auto py-4 px-9 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-heading font-black text-sm uppercase tracking-wider hover:from-gold-300 hover:to-gold-500 shadow-2xl shadow-gold-500/40 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <span>Book Priority Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            to="/contact"
            className="w-full sm:w-auto py-4 px-8 rounded-xl bg-black/60 hover:bg-black/80 text-white font-heading font-bold text-sm tracking-wide border-2 border-white/80 hover:border-gold-400 backdrop-blur-md transition-all duration-200 text-center flex items-center justify-center gap-2 shadow-2xl"
          >
            <span>Contact Office</span>
          </Link>
        </div>

        {/* Highlighted Practice Areas Bar */}
        <div className="w-full max-w-4xl mx-auto my-4 p-4 sm:p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.6)] text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 text-xs sm:text-base font-bold text-slate-100">
            <span className="flex items-center gap-1.5 text-gold-300">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Strategic Taxation</span>
            </span>
            <span className="text-gold-500 hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5 text-gold-300">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Company Incorporation</span>
            </span>
            <span className="text-gold-500 hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5 text-gold-300">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Statutory Audits</span>
            </span>
            <span className="text-gold-500 hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1.5 text-gold-300">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>ROC &amp; MCA Filings in {siteConfig.locationCity}</span>
            </span>
          </div>
        </div>

        {/* Wide Bottom Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-5 w-full max-w-5xl mt-6">
          {/* 1st Block: Static */}
          <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 sm:p-4 text-center shadow-2xl flex flex-col justify-center items-center">
            <span className="font-heading text-2xl sm:text-3xl font-black text-gold-400 block mb-0.5">250+</span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-100 uppercase tracking-wider">CLIENTS SERVED</span>
          </div>

          {/* 2nd Block: Clickable Link to About Us with Hover Effect */}
          <Link
            to="/about"
            className="bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 sm:p-4 text-center shadow-2xl hover:border-gold-400 hover:bg-black/80 hover:scale-[1.02] transition-all duration-200 cursor-pointer flex flex-col justify-center items-center group"
            title="View CA Deepanshi Bansal Profile"
          >
            <span className="font-heading text-sm sm:text-base lg:text-lg font-black text-gold-400 group-hover:text-gold-300 block mb-0.5 leading-tight transition-colors">
              CA DEEPANSHI BANSAL
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-100 uppercase tracking-wider">
              B.COM, ACA, DISA
            </span>
          </Link>

          {/* 3rd Block: Clickable Link to About Us with Hover Effect */}
          <Link
            to="/about"
            className="bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 sm:p-4 text-center shadow-2xl hover:border-gold-400 hover:bg-black/80 hover:scale-[1.02] transition-all duration-200 cursor-pointer flex flex-col justify-center items-center group"
            title="View CA Parul Profile"
          >
            <span className="font-heading text-sm sm:text-base lg:text-lg font-black text-gold-400 group-hover:text-gold-300 block mb-0.5 leading-tight transition-colors">
              CA PARUL
            </span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-100 uppercase tracking-wider">
              M.COM, FCA
            </span>
          </Link>

          {/* 4th Block: Static */}
          <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl p-3.5 sm:p-4 text-center shadow-2xl flex flex-col justify-center items-center">
            <span className="font-heading text-sm sm:text-base lg:text-lg font-black text-gold-400 block mb-0.5 leading-tight">CLIENT FOCUSED</span>
            <span className="text-[11px] sm:text-xs font-bold text-slate-100 uppercase tracking-wider">APPROACH</span>
          </div>
        </div>

      </div>
    </section>
  );
}
