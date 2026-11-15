import React, { useState } from 'react';
import { studentProfile } from '../data/projectsData';
import ArchitectContactIllustration from './illustrations/ArchitectContactIllustration';

export default function ContactSection({ onOpenSheetReview }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Studio Recruitment / Architectural Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-b border-studio-200 dark:border-studio-800 bg-[#FAFAF8] dark:bg-studio-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-blueprint-600 dark:text-blueprint-400 font-semibold mb-2">
            <span className="w-2 h-2 bg-blueprint-500 rounded-xs"></span>
            COLLABORATION & INQUIRIES // GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-studio-950 dark:text-white uppercase tracking-tight">
            Connect with Faysal Ahmed
          </h2>
          <p className="text-sm sm:text-base text-studio-600 dark:text-studio-400 mt-2">
            Available for architectural practice roles, research collaborations, thesis jury discussions, and design consultations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-6">

            {/* Architectural Messaging Illustration */}
            <div className="bg-white dark:bg-studio-900 p-4 rounded-xl border border-studio-200 dark:border-studio-800 text-center">
              <ArchitectContactIllustration className="w-full h-auto max-w-[260px] mx-auto" />
            </div>

            <div className="bg-white dark:bg-studio-900 p-6 rounded-xl border border-studio-200 dark:border-studio-800 space-y-4">
              <h3 className="font-display font-bold text-base text-studio-900 dark:text-white uppercase tracking-wider text-xs border-b border-studio-200 dark:border-studio-800 pb-2">
                Studio & Academic Contact
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3 text-studio-600 dark:text-studio-300">
                  <div className="p-2 rounded bg-studio-100 dark:bg-studio-800 text-blueprint-600 dark:text-blueprint-400 flex items-center justify-center">
                    <i className="bx bxs-graduation text-base"></i>
                  </div>
                  <div>
                    <div className="text-[10px] text-studio-400 uppercase">ACADEMIC DEPARTMENT</div>
                    <div className="font-medium text-studio-900 dark:text-white mt-0.5">
                      Department of Architecture
                    </div>
                    <div className="text-studio-500">{studentProfile.university}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-studio-600 dark:text-studio-300">
                  <div className="p-2 rounded bg-studio-100 dark:bg-studio-800 text-ochre-500 flex items-center justify-center">
                    <i className="bx bxs-map text-base"></i>
                  </div>
                  <div>
                    <div className="text-[10px] text-studio-400 uppercase">LOCATION & RESIDENCE</div>
                    <div className="font-medium text-studio-900 dark:text-white mt-0.5">
                      Lives in {studentProfile.livesIn}
                    </div>
                    <div className="text-xs text-studio-500 dark:text-studio-400 mt-0.5">
                      Hometown: From {studentProfile.hometown}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-studio-600 dark:text-studio-300">
                  <div className="p-2 rounded bg-studio-100 dark:bg-studio-800 text-emerald-500 flex items-center justify-center">
                    <i className="bx bxs-envelope text-base"></i>
                  </div>
                  <div>
                    <div className="text-[10px] text-studio-400 uppercase">DIRECT EMAIL</div>
                    <a
                      href={`mailto:${studentProfile.email}`}
                      className="font-medium text-blueprint-600 dark:text-blueprint-400 hover:underline mt-0.5 block"
                    >
                      {studentProfile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-studio-600 dark:text-studio-300">
                  <div className="p-2 rounded bg-studio-100 dark:bg-studio-800 text-[#0A66C2] flex items-center justify-center">
                    <i className="bx bxl-linkedin text-base"></i>
                  </div>
                  <div>
                    <div className="text-[10px] text-studio-400 uppercase">LINKEDIN PROFILE</div>
                    <a
                      href={studentProfile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-blueprint-600 dark:text-blueprint-400 hover:underline mt-0.5 flex items-center gap-1"
                    >
                      <span>linkedin.com/in/{studentProfile.linkedinHandle}</span>
                      <i className="bx bx-link-external text-xs"></i>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-studio-600 dark:text-studio-300">
                  <div className="p-2 rounded bg-studio-100 dark:bg-studio-800 text-[#1877F2] flex items-center justify-center">
                    <i className="bx bxl-facebook text-base"></i>
                  </div>
                  <div>
                    <div className="text-[10px] text-studio-400 uppercase">FACEBOOK PROFILE</div>
                    <a
                      href={studentProfile.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-blueprint-600 dark:text-blueprint-400 hover:underline mt-0.5 flex items-center gap-1"
                    >
                      <span>facebook.com/{studentProfile.facebookHandle}</span>
                      <i className="bx bx-link-external text-xs"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Card — High Contrast in Light & Dark Theme */}
            <div className="p-6 bg-blueprint-50/90 dark:bg-studio-900 rounded-xl border border-blueprint-200/80 dark:border-studio-800 shadow-xs space-y-3">
              <h4 className="font-display font-bold text-sm text-blueprint-900 dark:text-white flex items-center gap-2">
                <i className="bx bx-book-open text-base text-blueprint-600 dark:text-blueprint-400"></i>
                <span>Portfolio Fast-Review</span>
              </h4>
              <p className="text-xs text-studio-700 dark:text-studio-300 leading-relaxed font-sans">
                Want to review the full technical board collection in sequential format? Open the built-in sheet review flipbook.
              </p>
              <button
                onClick={() => onOpenSheetReview(0)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-blueprint-600 hover:bg-blueprint-500 text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
              >
                <i className="bx bx-book-open text-base"></i>
                <span>Open Portfolio Sheet Review</span>
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-studio-900 p-6 sm:p-8 rounded-xl border border-studio-200 dark:border-studio-800 shadow-sm">
              <h3 className="font-display font-bold text-lg text-studio-900 dark:text-white mb-1">
                Send an Architectural Inquiry
              </h3>
              <p className="text-xs text-studio-500 dark:text-studio-400 mb-6 font-mono">
                Direct transmission to Faysal Ahmed
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg text-center space-y-3 animate-fadeIn">
                  <i className="bx bxs-check-circle text-4xl text-emerald-500 mx-auto"></i>
                  <h4 className="font-display font-bold text-base text-emerald-900 dark:text-emerald-200">
                    Message Successfully Sent!
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300 max-w-sm mx-auto font-sans leading-relaxed">
                    Thank you for reaching out. Faysal has received your inquiry and will respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Studio Recruitment', message: '' });
                    }}
                    className="mt-3 text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-studio-700 dark:text-studio-200 mb-1.5 uppercase tracking-wide">
                        Your Name / Studio *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Studio Morphogenesis"
                        className="w-full px-4 py-3 min-h-[44px] text-sm bg-studio-50 dark:bg-studio-950 border border-studio-300 dark:border-studio-700 rounded-lg focus:border-blueprint-500 focus:outline-hidden dark:text-white"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-studio-700 dark:text-studio-200 mb-1.5 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. contact@architecture.com"
                        className="w-full px-4 py-3 min-h-[44px] text-sm bg-studio-50 dark:bg-studio-950 border border-studio-300 dark:border-studio-700 rounded-lg focus:border-blueprint-500 focus:outline-hidden dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-semibold text-studio-700 dark:text-studio-200 mb-1.5 uppercase tracking-wide">
                      Inquiry Type
                    </label>
                    <select
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 min-h-[44px] text-sm bg-studio-50 dark:bg-studio-950 border border-studio-300 dark:border-studio-700 rounded-lg focus:border-blueprint-500 focus:outline-hidden dark:text-white font-medium"
                    >
                      <option>Studio Recruitment / Junior Architect Role</option>
                      <option>Academic Review / Jury Discussion</option>
                      <option>Research Collaboration / Tactical Urbanism</option>
                      <option>Project Consultation & Visualization</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold text-studio-700 dark:text-studio-200 mb-1.5 uppercase tracking-wide">
                      Message / Project Brief *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your studio collaboration, jury review, or architectural inquiry..."
                      className="w-full px-4 py-3 text-sm bg-studio-50 dark:bg-studio-950 border border-studio-300 dark:border-studio-700 rounded-lg focus:border-blueprint-500 focus:outline-hidden dark:text-white font-sans leading-relaxed"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[44px] bg-studio-950 dark:bg-white text-white dark:text-studio-950 hover:bg-blueprint-600 dark:hover:bg-blueprint-500 dark:hover:text-white text-sm font-bold rounded-lg transition-colors shadow-md whitespace-nowrap"
                  >
                    <i className="bx bx-send text-base"></i>
                    <span>Send Message to Faysal</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
