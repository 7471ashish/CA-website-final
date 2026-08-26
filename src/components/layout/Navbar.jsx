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
  Award,
  Search,
  ArrowRight
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Navbar({ onOpenConsultation, onOpenSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Global keyboard shortcut (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onOpenSearch?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

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
    `text-xs lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-extrabold tracking-tight whitespace-nowrap py-1.5 transition-colors duration-150 relative flex items-center gap-1 ${
      isActive 
        ? 'text-[#102c4c] font-black after:w-full' 
        : 'text-slate-700 hover:text-[#102c4c]'
    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-gradient-to-r after:from-gold-400 after:to-gold-600 after:transition-all after:duration-200`;

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-slate-200 shadow-md transition-colors duration-200 w-full">
        <div className="w-full max-w-[1600px] mx-auto px-3 sm:px-5 lg:px-7">
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 w-full gap-2 sm:gap-3 lg:gap-4 xl:gap-6">
            
            {/* 1. BRAND LOGO (Left - Compact & Centered Text) */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
              <div className="p-1 sm:p-1.5 bg-white rounded-xl shadow-sm border border-gold-500/40 group-hover:border-gold-500 transition-colors">
                <img
                  src={siteConfig.caLogoUrl}
                  alt="ICAI Chartered Accountants Logo"
                  className="h-8 sm:h-9 lg:h-11 xl:h-12 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center whitespace-nowrap">
                <span className="block font-heading font-black text-xs sm:text-base lg:text-lg xl:text-xl text-[#102c4c] tracking-tight leading-tight group-hover:text-gold-600 transition-colors">
                  {siteConfig.firmName}
                </span>
                <span className="inline-block text-[8px] sm:text-[9px] lg:text-[10px] xl:text-[11px] font-black text-gold-600 uppercase tracking-[0.16em] sm:tracking-[0.18em] leading-none mt-0.5 sm:mt-1 bg-gold-50/80 px-1.5 sm:px-2 py-0.5 rounded border border-gold-300/70 text-center">
                  {siteConfig.legalTitle}
                </span>
              </div>
            </Link>

            {/* 2. DESKTOP & TABLET NAVIGATION (Visible on lg: >= 1024px) */}
            <nav className="hidden lg:flex items-center gap-2.5 lg:gap-3.5 xl:gap-5 2xl:gap-7 whitespace-nowrap">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>

              {/* Start Business Mega Dropdown */}
              <div
                className="relative py-1.5"
                onMouseEnter={() => setActiveDropdown('business')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-xs lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-extrabold text-slate-700 hover:text-[#102c4c] transition-colors flex items-center gap-0.5 cursor-pointer whitespace-nowrap">
                  <span>Start Business</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'business' ? 'rotate-180 text-gold-500' : ''}`} />
                </button>

                {activeDropdown === 'business' && (
                  <div className="absolute top-full left-0 xl:left-1/2 xl:-translate-x-1/2 w-[740px] xl:w-[840px] max-w-[calc(100vw-2rem)] bg-white border-2 border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-7 animate-fadeIn z-50 grid grid-cols-3 gap-5">
                    {/* Sub-Service Category 1 */}
                    <div>
                      <div className="px-2 py-1 text-xs font-black uppercase tracking-wider text-gold-600 border-b-2 border-gold-200/80 mb-3 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>Company Incorporation</span>
                      </div>
                      <div className="space-y-1">
                        <Link to="/company-incorporation" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Private Limited Company</span>
                        </Link>
                        <Link to="/company-incorporation" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>LLP Registration</span>
                        </Link>
                        <Link to="/company-incorporation" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>One Person Company (OPC)</span>
                        </Link>
                        <Link to="/company-incorporation" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Public Limited Company</span>
                        </Link>
                        <Link to="/company-incorporation" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Foreign Subsidiary Setup</span>
                        </Link>
                      </div>
                    </div>

                    {/* Sub-Service Category 2 */}
                    <div>
                      <div className="px-2 py-1 text-xs font-black uppercase tracking-wider text-gold-600 border-b-2 border-gold-200/80 mb-3 flex items-center gap-1.5">
                        <Tags className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>Statutory Licenses</span>
                      </div>
                      <div className="space-y-1">
                        <Link to="/gst-registration" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                          <span>GST Registration (3-Day)</span>
                        </Link>
                        <Link to="/services" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>MSME Udyam Certificate</span>
                        </Link>
                        <Link to="/services" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>FSSAI Food License</span>
                        </Link>
                        <Link to="/services" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Import Export Code (IEC)</span>
                        </Link>
                        <Link to="/services" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Shop &amp; Establishment</span>
                        </Link>
                      </div>
                    </div>

                    {/* Sub-Service Category 3 */}
                    <div>
                      <div className="px-2 py-1 text-xs font-black uppercase tracking-wider text-gold-600 border-b-2 border-gold-200/80 mb-3 flex items-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>Specialized Entities</span>
                      </div>
                      <div className="space-y-1">
                        <Link to="/ngo-trust-registration" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Section 8 NGO Company</span>
                        </Link>
                        <Link to="/ngo-trust-registration" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Charitable Trust / Society</span>
                        </Link>
                        <Link to="/company-incorporation" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Partnership Firm (RoF)</span>
                        </Link>
                        <Link to="/company-incorporation" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Producer Company Setup</span>
                        </Link>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                        <Link to="/services" className="text-xs font-black text-gold-600 hover:text-navy-950 flex items-center justify-center gap-1">
                          <span>View All 38+ Services &rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Compliances & Audit Mega Dropdown */}
              <div
                className="relative py-1.5"
                onMouseEnter={() => setActiveDropdown('audit')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="text-xs lg:text-[13px] xl:text-[14px] 2xl:text-[15px] font-extrabold text-slate-700 hover:text-[#102c4c] transition-colors flex items-center gap-0.5 cursor-pointer whitespace-nowrap">
                  <span>Compliances &amp; Audit</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'audit' ? 'rotate-180 text-gold-500' : ''}`} />
                </button>

                {activeDropdown === 'audit' && (
                  <div className="absolute top-full left-0 xl:left-1/2 xl:-translate-x-1/2 w-[740px] xl:w-[840px] max-w-[calc(100vw-2rem)] bg-white border-2 border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-7 animate-fadeIn z-50 grid grid-cols-3 gap-5">
                    {/* Sub-Service Category 1 */}
                    <div>
                      <div className="px-2 py-1 text-xs font-black uppercase tracking-wider text-gold-600 border-b-2 border-gold-200/80 mb-3 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>Direct &amp; Indirect Tax</span>
                      </div>
                      <div className="space-y-1">
                        <Link to="/itr-filing" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>ITR Filing (Forms 1-7)</span>
                        </Link>
                        <Link to="/gst-registration" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                          <span>GST Monthly &amp; Annual Returns</span>
                        </Link>
                        <Link to="/itr-filing" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>TDS / TCS Return Filings</span>
                        </Link>
                        <Link to="/nri-taxation" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>NRI 15CA &amp; 15CB Certificates</span>
                        </Link>
                        <Link to="/itr-filing" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Tax Notice Scrutiny Representation</span>
                        </Link>
                      </div>
                    </div>

                    {/* Sub-Service Category 2 */}
                    <div>
                      <div className="px-2 py-1 text-xs font-black uppercase tracking-wider text-gold-600 border-b-2 border-gold-200/80 mb-3 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>Statutory &amp; Systems Audits</span>
                      </div>
                      <div className="space-y-1">
                        <Link to="/audit-assurance" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Tax Audit (Sec 44AB Form 3CD)</span>
                        </Link>
                        <Link to="/audit-assurance" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>DISA (ICAI) Systems Audit</span>
                        </Link>
                        <Link to="/audit-assurance" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Company Statutory Audit</span>
                        </Link>
                        <Link to="/audit-assurance" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Bank &amp; Stock Concurrent Audit</span>
                        </Link>
                      </div>
                    </div>

                    {/* Sub-Service Category 3 */}
                    <div>
                      <div className="px-2 py-1 text-xs font-black uppercase tracking-wider text-gold-600 border-b-2 border-gold-200/80 mb-3 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-gold-600 shrink-0" />
                        <span>Corporate &amp; Financing</span>
                      </div>
                      <div className="space-y-1">
                        <Link to="/company-incorporation" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>ROC Annual Filings (AOC-4/MGT-7)</span>
                        </Link>
                        <Link to="/networth-certificate" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Visa CA Networth Statement</span>
                        </Link>
                        <Link to="/project-financing-cma" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Bank CMA Data &amp; Project DPR</span>
                        </Link>
                        <Link to="/trademark-registration" className="flex items-center gap-2 px-2.5 py-1.5 text-xs sm:text-[13px] font-bold text-slate-800 hover:text-[#102c4c] hover:bg-gold-50/70 rounded-lg transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0"></span>
                          <span>Trademark Brand Registration</span>
                        </Link>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                        <Link to="/services" className="text-xs font-black text-gold-600 hover:text-navy-950 flex items-center justify-center gap-1">
                          <span>View All 38+ Services &rarr;</span>
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

            {/* 3. RIGHT ACTIONS (Golden Consultation CTA) */}
            <div className="hidden lg:flex items-center gap-2.5 xl:gap-3.5 shrink-0 whitespace-nowrap">
              <button
                onClick={() => onOpenConsultation()}
                className="h-9 px-3.5 xl:px-5 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-heading font-black text-xs xl:text-sm uppercase tracking-wider hover:from-gold-300 hover:to-gold-500 shadow-md transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer shrink-0 whitespace-nowrap"
              >
                <BookmarkCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* 4. MOBILE DRAWER HAMBURGER & SEARCH (Only on phones < lg / < 1024px) */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => onOpenSearch?.()}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-100 text-[#102c4c] hover:bg-slate-200 active:scale-95 transition-all cursor-pointer border border-slate-200"
                aria-label="Search services"
              >
                <Search className="w-5 h-5 text-gold-600" />
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 sm:p-2.5 rounded-xl bg-slate-100 text-[#102c4c] hover:bg-slate-200 active:scale-95 transition-all cursor-pointer border border-slate-200"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen(false)}
          ></div>

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <div className="flex items-center gap-2">
                  <img src={siteConfig.caLogoUrl} alt="Logo" className="h-9 w-auto bg-white rounded p-1" />
                  <span className="font-heading font-black text-base text-[#102c4c]">
                    {siteConfig.firmName}
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:text-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Search Trigger */}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenSearch?.();
                }}
                className="w-full py-2.5 px-3.5 mb-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-between text-xs font-bold"
              >
                <span className="flex items-center gap-2">
                  <Search className="w-4 h-4 text-gold-600" />
                  <span>Search all 38+ services...</span>
                </span>
                <span className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-400">Search</span>
              </button>

              <div className="space-y-3 font-bold text-sm">
                <NavLink to="/" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 hover:text-gold-500">
                  Home
                </NavLink>
                <NavLink to="/services" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 hover:text-gold-500">
                  All Services
                </NavLink>
                <NavLink to="/itr-filing" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 hover:text-gold-500">
                  ITR Filing
                </NavLink>
                <NavLink to="/gst-registration" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 hover:text-gold-500">
                  GST Registration &amp; Returns
                </NavLink>
                <NavLink to="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 hover:text-gold-500">
                  About Us (Partnership)
                </NavLink>
                <NavLink to="/careers" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 hover:text-gold-500">
                  Careers
                </NavLink>
                <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block py-2 text-slate-800 hover:text-gold-500">
                  Contact Office
                </NavLink>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25d366] text-white text-xs font-black flex items-center justify-center gap-2 shadow-md hover:brightness-105 transition-all"
              >
                <span>💬 WhatsApp: {siteConfig.phones[0].display}</span>
              </a>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 text-xs font-black uppercase tracking-wider shadow-md text-center"
              >
                Book Partner Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
