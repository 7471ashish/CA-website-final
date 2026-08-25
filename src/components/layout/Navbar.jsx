import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  BookmarkCheck,
  Building2,
  FileText,
  FileCheck,
  Briefcase,
  ShieldCheck,
  Tags,
  Globe,
  Award
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import ThemeToggle from '../common/ThemeToggle';

export default function Navbar({ onOpenConsultation }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close mobile nav and dropdowns on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname, location.hash]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinkClass = ({ isActive }) =>
    `text-sm xl:text-[15px] font-extrabold tracking-tight whitespace-nowrap py-2 transition-colors duration-150 relative flex items-center gap-1 ${
      isActive 
        ? 'text-navy-950 dark:text-gold-400 font-black after:w-full' 
        : 'text-slate-700 dark:text-slate-200 hover:text-navy-950 dark:hover:text-gold-400'
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-gradient-to-r after:from-gold-400 after:to-gold-600 after:transition-all after:duration-200`;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-b-2 border-slate-200 dark:border-slate-800 shadow-md transition-colors duration-200 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 w-full gap-4 xl:gap-8">
            
            {/* 1. BRAND LOGO (Left) */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <div className="p-1 sm:p-1.5 bg-white rounded-xl shadow-md border-2 border-gold-500/40 group-hover:border-gold-500 transition-colors">
                <img
                  src={siteConfig.caLogoUrl}
                  alt="ICAI Chartered Accountants Logo"
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
                />
              </div>
              <div className="whitespace-nowrap">
                <span className="block font-heading font-black text-base sm:text-xl lg:text-2xl text-navy-950 dark:text-white tracking-tight leading-tight group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                  {siteConfig.firmName}
                </span>
                <span className="inline-block text-[9px] sm:text-[11px] font-black text-gold-600 dark:text-gold-400 uppercase tracking-[0.18em] leading-none mt-0.5 bg-gold-50 dark:bg-gold-500/10 px-1.5 sm:px-2 py-0.5 rounded border border-gold-300/60 dark:border-gold-500/30">
                  {siteConfig.legalTitle}
                </span>
              </div>
            </Link>

            {/* 2. DESKTOP NAVIGATION (Center - Perfectly Spaced) */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-8 whitespace-nowrap">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              {/* Start Business Dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('business')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-sm xl:text-[15px] font-extrabold text-slate-700 dark:text-slate-200 hover:text-navy-950 dark:hover:text-gold-400 transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap">
                  <span>Start Business</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'business' ? 'rotate-180 text-gold-500' : ''}`} />
                </button>

                {activeDropdown === 'business' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 animate-fadeIn z-50 grid grid-cols-2 gap-5">
                    <div>
                      <div className="px-3 py-1 text-xs font-black uppercase tracking-wider text-gold-600 dark:text-gold-400 border-b-2 border-slate-100 dark:border-slate-800 mb-3">
                        Company Incorporation
                      </div>
                      <div className="space-y-1">
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • Private Limited Company
                        </Link>
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • LLP Registration
                        </Link>
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • One Person Company (OPC)
                        </Link>
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • Partnership Registration
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="px-3 py-1 text-xs font-black uppercase tracking-wider text-gold-600 dark:text-gold-400 border-b-2 border-slate-100 dark:border-slate-800 mb-3">
                        Licenses &amp; Registrations
                      </div>
                      <div className="space-y-1">
                        <Link to="/gst-registration" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • GST Registration (3-Day)
                        </Link>
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • MSME Udyam Certificate
                        </Link>
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • FSSAI Food License
                        </Link>
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • Import Export Code (IEC)
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Compliances & Audit Dropdown */}
              <div
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown('compliance')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-sm xl:text-[15px] font-extrabold text-slate-700 dark:text-slate-200 hover:text-navy-950 dark:hover:text-gold-400 transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap">
                  <span>Compliances &amp; Audit</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'compliance' ? 'rotate-180 text-gold-500' : ''}`} />
                </button>

                {activeDropdown === 'compliance' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 animate-fadeIn z-50 grid grid-cols-2 gap-5">
                    <div>
                      <div className="px-3 py-1 text-xs font-black uppercase tracking-wider text-gold-600 dark:text-gold-400 border-b-2 border-slate-100 dark:border-slate-800 mb-3">
                        Filing &amp; Returns
                      </div>
                      <div className="space-y-1">
                        <Link to="/itr-filing" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • ITR Filing (Forms 1-7)
                        </Link>
                        <Link to="/gst-registration" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • GST Returns (GSTR-1, 3B)
                        </Link>
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • ROC &amp; Annual MCA Filing
                        </Link>
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • TDS Returns (24Q/26Q)
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="px-3 py-1 text-xs font-black uppercase tracking-wider text-gold-600 dark:text-gold-400 border-b-2 border-slate-100 dark:border-slate-800 mb-3">
                        Audit &amp; Assurance
                      </div>
                      <div className="space-y-1">
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • Tax Audit (Sec 44AB Form 3CD)
                        </Link>
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • DISA (ICAI) Systems Audit
                        </Link>
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • Statutory Company Audit
                        </Link>
                        <Link to="/services" className="block px-3.5 py-2 text-sm font-bold text-slate-800 dark:text-slate-100 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-50 dark:hover:bg-navy-800 rounded-xl whitespace-nowrap transition-colors">
                          • Bank &amp; Stock Audit
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>
                About Us
              </NavLink>

              <NavLink to="/careers" className={navLinkClass}>
                Careers
              </NavLink>

              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </nav>

            {/* 3. RIGHT ACTIONS (Theme Toggle + Book Consultation CTA) */}
            <div className="hidden lg:flex items-center gap-3.5 shrink-0 whitespace-nowrap">
              {/* Day/Night Theme Toggle */}
              <ThemeToggle />

              {/* Golden Consultation Button */}
              <button
                onClick={() => onOpenConsultation()}
                className="h-10 px-5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-heading font-black text-xs xl:text-sm uppercase tracking-wider hover:from-gold-300 hover:to-gold-500 shadow-md transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer shrink-0 whitespace-nowrap"
              >
                <BookmarkCheck className="w-4 h-4 shrink-0" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* 4. MOBILE DRAWER HAMBURGER */}
            <div className="flex xl:hidden items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2.5 sm:p-3 rounded-xl bg-slate-100 dark:bg-navy-900 text-navy-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-navy-850 active:scale-95 transition-all cursor-pointer border border-slate-200 dark:border-slate-800"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] xl:hidden">
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          ></div>

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white dark:bg-navy-900 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <img src={siteConfig.caLogoUrl} alt="Logo" className="h-10 w-auto bg-white rounded p-1" />
                  <span className="font-heading font-black text-base text-navy-950 dark:text-white">
                    {siteConfig.firmName}
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-3.5 font-bold text-base">
                <NavLink to="/" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 dark:text-slate-200 hover:text-gold-500">
                  Home
                </NavLink>
                <NavLink to="/services" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 dark:text-slate-200 hover:text-gold-500">
                  All Services
                </NavLink>
                <NavLink to="/itr-filing" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 dark:text-slate-200 hover:text-gold-500">
                  ITR Filing
                </NavLink>
                <NavLink to="/gst-registration" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 dark:text-slate-200 hover:text-gold-500">
                  GST Registration &amp; Returns
                </NavLink>
                <NavLink to="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 dark:text-slate-200 hover:text-gold-500">
                  About Us (Partnership)
                </NavLink>
                <NavLink to="/careers" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 dark:text-slate-200 hover:text-gold-500">
                  Careers
                </NavLink>
                <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 dark:text-slate-200 hover:text-gold-500">
                  Contact Office
                </NavLink>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#25d366] text-white text-sm font-black flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition-all"
              >
                <span>💬 WhatsApp Direct Chat</span>
              </a>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-heading font-black text-xs uppercase tracking-wider shadow-md"
              >
                Book Consultation
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
