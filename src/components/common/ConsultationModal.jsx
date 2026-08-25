import React, { useState } from 'react';
import { X, Calendar, Phone, Mail, User } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { submitLeadToSpreadsheet } from '../../services/leadService';
import ConfirmationPopup from './ConfirmationPopup';

export default function ConsultationModal({ isOpen, onClose, initialService = "Income Tax" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [savedData, setSavedData] = useState({ name: '', service: '' });

  if (!isOpen && !showPopup) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitLeadToSpreadsheet({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        source: 'Consultation Modal Form'
      });

      setSavedData({
        name: formData.name,
        service: formData.service
      });

      setFormData({ name: '', email: '', phone: '', service: initialService, message: '' });
      onClose(); // Close the input modal
      setShowPopup(true); // Open the confirmation popup
    } catch (err) {
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102c4c]/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white dark:bg-navy-900 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 transition-colors duration-200">
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-750 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="mb-6">
                <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-gold-600 dark:text-gold-300 bg-gold-50 dark:bg-gold-500/10 px-3 py-1 rounded-full border border-gold-200 dark:border-gold-500/30">
                  Direct Appointment
                </span>
                <h3 className="text-2xl font-bold text-navy-900 dark:text-white mt-2">Book Consultation</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {siteConfig.firmName} &bull; {siteConfig.principal} ({siteConfig.qualifications})
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@email.com"
                        className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1.5">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 91490 56549"
                        className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1.5">
                    Select Practice Area
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-navy-950 focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 focus:border-transparent transition-all"
                  >
                    <option value="Income Tax" className="dark:bg-navy-950">Income Tax &amp; ITR Filing</option>
                    <option value="GST Services" className="dark:bg-navy-950">GST Services &amp; Registration</option>
                    <option value="UAE & International Taxation" className="dark:bg-navy-950">UAE Corporate Tax (9%) &amp; VAT (5%)</option>
                    <option value="Audit & Assurance" className="dark:bg-navy-950">Audit &amp; Assurance (Sec 44AB / Statutory)</option>
                    <option value="DISA & Systems Audit" className="dark:bg-navy-950">DISA (ICAI) Information Systems Audit</option>
                    <option value="Company Law & ROC" className="dark:bg-navy-950">Company Law &amp; ROC Compliance</option>
                    <option value="Business Setup & Advisory" className="dark:bg-navy-950">Business Setup &amp; MSME Advisory</option>
                    <option value="NRI Tax & FEMA" className="dark:bg-navy-950">NRI Tax &amp; 15CA/CB</option>
                    <option value="Loan & Project Report" className="dark:bg-navy-950">Bank Loan CMA &amp; Project Report</option>
                    <option value="Networth & Embassy Certificates" className="dark:bg-navy-950">Networth &amp; Embassy Visa Certificates</option>
                    <option value="Other Advisory" className="dark:bg-navy-950">Other Financial Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1.5">
                    Message / Case Details
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us briefly about your inquiry..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 focus:border-transparent transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 text-navy-950 font-heading font-extrabold text-sm tracking-wide uppercase hover:from-gold-300 hover:to-gold-500 shadow-gold transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {loading ? 'Recording Details...' : 'Confirm Appointment Request'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Pop-up Notification */}
      <ConfirmationPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        personName={savedData.name}
        serviceName={savedData.service}
      />
    </>
  );
}
