import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

// Crisp LinkedIn Icon SVG
function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

// Crisp Instagram Icon SVG
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#102c4c] via-[#0e2744] to-[#091a2e] text-slate-100 pt-16 pb-8 border-t-4 border-gold-400 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid matching cagmc.com layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Business Registration */}
          <div>
            <h4 className="font-heading text-sm font-extrabold uppercase tracking-wider text-white mb-4 border-b border-gold-500/30 pb-2">
              Business Registration
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>Private Limited Company</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>Limited Liability Partnership (LLP)</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>One Person Company (OPC)</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>Partnership Firm Registration</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>Sole Proprietorship Setup</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>Foreign Company Subsidiary</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>Nidhi &amp; Producer Company</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Licenses & Certifications */}
          <div>
            <h4 className="font-heading text-sm font-extrabold uppercase tracking-wider text-white mb-4 border-b border-gold-500/30 pb-2">
              Licenses &amp; Approvals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/gst-registration" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>GST Registration (3-7 Days)</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>MSME Udyam Registration</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>FSSAI Food License</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>Import Export Code (IEC)</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>ISO Certification Advisory</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>Startup India DPIIT Tax Holiday</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>RERA &amp; Shop Act License</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Audit & Tax Compliances */}
          <div>
            <h4 className="font-heading text-sm font-extrabold uppercase tracking-wider text-white mb-4 border-b border-gold-500/30 pb-2">
              Audit &amp; Tax Management
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/itr-filing" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>ITR Filing (ITR 1 to 7)</span>
                </Link>
              </li>
              <li>
                <Link to="/gst-registration" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>GST Returns &amp; GSTR-9 Audit</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>ROC &amp; Annual MCA Filing</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>Tax Audit (Sec 44AB Form 3CD)</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>DISA (ICAI) Systems Audit</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>Statutory Company Audit</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <span className="text-gold-500 font-bold">&rsaquo;</span>
                  <span>Bank &amp; Stock Audit</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office Location */}
          <div>
            <h4 className="font-heading text-sm font-extrabold uppercase tracking-wider text-white mb-4 border-b border-gold-500/30 pb-2">
              Get in Touch
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>
                  <a href={`tel:${siteConfig.phones[0].raw}`} className="hover:text-gold-400 font-semibold">{siteConfig.phones[0].display}</a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}?subject=Inquiry%20Regarding%20CA%20Services%20-%20DRB%20%26%20COMPANY`} className="hover:text-gold-400">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="pt-1">
                <a
                  href={siteConfig.googleMapsDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 font-bold underline underline-offset-2"
                >
                  <span>Locate us on Google Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>

            <div className="pt-4 space-y-3">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25d366] text-white text-center text-xs font-bold block hover:brightness-105 transition-all shadow-md"
              >
                💬 Direct WhatsApp Chat
              </a>

              {/* Social Profiles */}
              <div>
                <span className="text-[10.5px] font-black uppercase tracking-wider text-gold-400 block mb-2">
                  Connect With Partner
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={siteConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl bg-white/10 hover:bg-[#0077b5] text-slate-200 hover:text-white border border-white/15 transition-all text-xs font-bold shadow-xs group"
                    title="Connect with CA. DEEPANSHI BANSAL on LinkedIn"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-sky-400 group-hover:text-white shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-slate-200 hover:text-white border border-white/15 transition-all text-xs font-bold shadow-xs group"
                    title="Follow on Instagram"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400 group-hover:text-white shrink-0" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.firmName} &bull; {siteConfig.legalTitle}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-white/5 hover:bg-[#0077b5] text-slate-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-white/5 hover:bg-[#e1306c] text-slate-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
            <span className="text-slate-600">|</span>
            <Link to="/about" className="hover:text-gold-400">About Firm</Link>
            <span>&bull;</span>
            <Link to="/careers" className="hover:text-gold-400">Careers</Link>
            <span>&bull;</span>
            <Link to="/contact" className="hover:text-gold-400">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
