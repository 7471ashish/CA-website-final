import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

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
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400">{siteConfig.email}</a>
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

            <div className="pt-4">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#25d366] text-white text-center text-xs font-bold block hover:brightness-105 transition-all shadow-md"
              >
                💬 Direct WhatsApp Chat
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.firmName} &bull; {siteConfig.legalTitle}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
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
