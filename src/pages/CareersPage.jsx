import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, CheckCircle2, User, Mail, Phone, Upload, Send, AlertCircle, Sparkles, Inbox } from 'lucide-react';
import SEO from '../components/common/SEO';
import { siteConfig } from '../data/siteConfig';
import { submitLeadToSpreadsheet } from '../services/leadService';

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: 'CA Inter (Both Groups)',
    experience: 'Fresher',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await submitLeadToSpreadsheet({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: `Careers: ${formData.qualification}`,
        message: formData.message,
        source: 'Careers Talent Pool Form'
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', qualification: 'CA Inter (Both Groups)', experience: 'Fresher', message: '' });
      }, 5000);
    } catch (err) {
      console.error('Careers form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-navy-950 text-slate-800 dark:text-slate-200 transition-colors duration-200">
      <SEO 
        title="Careers & Articleship | DRB & COMPANY - Chartered Accountants Meerut"
        description="Careers & Articleship talent pool at DRB & COMPANY Chartered Accountants in Meerut. Submit your CV for future opportunities in Tax, Audit & Corporate Law."
        canonical="https://www.drbandcompany.com/careers"
      />
      
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#102c4c] via-[#143862] to-[#0e2744] text-white py-16 border-b-4 border-gold-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gold-400 font-semibold mb-3">
            <Link to="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-white">Careers</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight">
            Careers at {siteConfig.firmName}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mt-4 leading-relaxed font-normal">
            Build your expertise alongside senior partners in Taxation, Corporate Statutory Audits, and Information Systems Auditing in {siteConfig.locationCity}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* NO ACTIVE OPENINGS NOTICE BANNER */}
          <div className="bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl text-center mb-12 relative overflow-hidden">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto mb-5 shadow-inner">
              <Inbox className="w-8 h-8" />
            </div>

            <span className="inline-block text-[11px] font-black uppercase tracking-widest text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700/50 px-3.5 py-1 rounded-full mb-3">
              Status: No Active Openings
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl font-black text-navy-950 dark:text-white tracking-tight mb-3">
              Currently No Active Vacancies
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              We currently do not have any open positions or immediate vacancies at <strong>{siteConfig.firmName}</strong>. 
            </p>

            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 max-w-xl mx-auto text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2">
              <p>
                However, we are always keen to connect with talented CA Aspirants, Article Assistants, and Senior Accountants for our <strong>Future Talent Pool</strong>.
              </p>
              <p className="font-semibold text-navy-950 dark:text-gold-300">
                You may drop your CV at{' '}
                <a 
                  href={`mailto:${siteConfig.email}?subject=Resume%20for%20Future%20Opportunity%20-%20DRB%20%26%20COMPANY`}
                  className="text-gold-600 dark:text-gold-400 underline underline-offset-4 font-bold"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          {/* TALENT POOL / RESUME DROP FORM */}
          <div className="bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-10 shadow-lg">
            <div className="max-w-2xl mx-auto">
              
              <div className="text-center mb-8">
                <span className="text-xs font-black uppercase tracking-widest text-gold-600 dark:text-gold-400">Future Opportunities</span>
                <h3 className="font-heading text-2xl font-black text-navy-950 dark:text-white tracking-tight mt-1">
                  Submit CV for Future Openings
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  When new positions open up, our recruitment team will review candidates from our talent pool first.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-center animate-fadeIn">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <h4 className="font-heading text-lg font-black text-navy-950 dark:text-white">Profile Added to Talent Pool!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    Thank you. We have received your details. Whenever a relevant vacancy arises, our recruitment team will get in touch with you.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aman Deep"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@email.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 91490 56549"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1">
                      Educational / Professional Qualification *
                    </label>
                    <select
                      value={formData.qualification}
                      onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-xs sm:text-sm text-slate-800 dark:text-slate-100 bg-white dark:bg-navy-950 focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 focus:outline-none"
                    >
                      <option value="CA Inter (Both Groups)">CA Intermediate (Both Groups Passed)</option>
                      <option value="CA Inter (Single Group)">CA Intermediate (Single Group Passed)</option>
                      <option value="B.Com / M.Com Graduate">B.Com / M.Com Graduate</option>
                      <option value="Semi-Qualified CA">Semi-Qualified CA</option>
                      <option value="Qualified CA">Qualified CA (Fresher / Experienced)</option>
                      <option value="Other">Other Accounting Degree</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 dark:text-slate-200 mb-1">
                      Brief Experience / Academic Summary
                    </label>
                    <textarea
                      rows="3"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Brief note about your past exposure (e.g. Tally, GST, Audits)..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-navy-950 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-navy-900 dark:focus:ring-gold-400 focus:outline-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 font-heading font-black text-xs sm:text-sm uppercase tracking-wider hover:from-gold-300 hover:to-gold-500 shadow-xl transition-all cursor-pointer"
                  >
                    Submit CV to Talent Pool
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
