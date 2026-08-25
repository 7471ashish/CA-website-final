import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import SEO from '../components/common/SEO';
import { siteConfig } from '../data/siteConfig';
import { submitLeadToSpreadsheet } from '../services/leadService';
import ConfirmationPopup from '../components/common/ConfirmationPopup';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Income Tax',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [savedData, setSavedData] = useState({ name: '', service: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitLeadToSpreadsheet({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.subject,
        message: formData.message,
        source: 'Contact Page Inquiry Form'
      });

      setSavedData({
        name: formData.name,
        service: formData.subject
      });

      setFormData({ name: '', email: '', phone: '', subject: 'Income Tax', message: '' });
      setShowPopup(true);
    } catch (err) {
      console.error('Contact submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SEO 
        title="Contact Us & Location | DRB & COMPANY - CA Office in Meerut"
        description="Visit DRB & COMPANY Chartered Accountants at Budhana Gate, Meerut. Call +91 91490 56549 or email CA.deepanshibansal2023@gmail.com for in-person consultation."
        canonical="https://www.drbandcompany.com/contact"
      />
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#1c5f94] via-[#226ea9] to-[#185387] text-white py-16 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Contact &amp; Location</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact Us &amp; Office Location
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed">
            Schedule an in-person consultation at our {siteConfig.locationCity} office or connect directly with our advisory team.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50 dark:bg-navy-950/60 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Contact Form */}
            <div className="lg:col-span-7 bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-300 bg-gold-100 dark:bg-gold-500/15 border border-gold-300 dark:border-gold-500/30 px-3.5 py-1 rounded-full mb-3">
                Direct Inquiry
              </span>
              <h2 className="font-heading text-2xl font-bold text-navy-900 dark:text-white mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
                Fill out the form below and {siteConfig.principal}'s office will get back to you promptly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 91490 56549"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1.5">
                    Practice Area / Topic *
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 transition-all"
                  >
                    <option value="Income Tax" className="dark:bg-navy-950">Income Tax &amp; ITR Filing</option>
                    <option value="GST Services" className="dark:bg-navy-950">GST Registration &amp; Returns</option>
                    <option value="UAE & International Taxation" className="dark:bg-navy-950">UAE Corporate Tax &amp; VAT</option>
                    <option value="Audit & Assurance" className="dark:bg-navy-950">Tax Audit under Sec 44AB</option>
                    <option value="DISA & Systems Audit" className="dark:bg-navy-950">DISA (ICAI) Systems Audit</option>
                    <option value="Company Law & ROC" className="dark:bg-navy-950">Company Incorporation &amp; ROC</option>
                    <option value="Business Setup & Advisory" className="dark:bg-navy-950">Business Setup &amp; MSME Registration</option>
                    <option value="NRI Tax & FEMA" className="dark:bg-navy-950">NRI Tax &amp; 15CA/15CB</option>
                    <option value="Loan & Project Report" className="dark:bg-navy-950">Bank Loan CMA &amp; Project Report</option>
                    <option value="Networth & Embassy Certificates" className="dark:bg-navy-950">Visa Networth Certificate</option>
                    <option value="General Enquiry" className="dark:bg-navy-950">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1.5">
                    Message / Case Details *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please share details about your requirement..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-heading font-extrabold text-xs uppercase tracking-wider shadow-gold transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {loading ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Right Office Coordinates & Maps */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-gradient-to-br from-[#1c5f94] via-[#226ea9] to-[#185387] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gold-400/50">
                <h3 className="font-heading text-xl font-bold text-white mb-4 pb-3 border-b border-white/10">
                  {siteConfig.locationCity} Office Details
                </h3>

                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block mb-0.5">{siteConfig.firmName}</strong>
                      <span>{siteConfig.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">Phone Number</strong>
                      <span>
                        <a href={`tel:${siteConfig.phones[0].raw}`} className="hover:text-gold-400">{siteConfig.phones[0].display}</a>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">Email Address</strong>
                      <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-400">{siteConfig.email}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-400 shrink-0" />
                    <div>
                      <strong className="text-white block mb-0.5">Office Timings</strong>
                      <span>{siteConfig.workingHours}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25d366] text-white font-heading font-bold text-xs flex items-center justify-center gap-2 text-center hover:brightness-105 transition-all shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Connect</span>
                  </a>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
                <iframe
                  title="DRB & Company CA Office Location Meerut"
                  src={siteConfig.googleMapsEmbed}
                  className="w-full h-64 border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Confirmation Popup */}
      <ConfirmationPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        personName={savedData.name}
        serviceName={savedData.service}
      />
    </div>
  );
}
