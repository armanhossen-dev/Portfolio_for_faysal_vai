import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  GraduationCap, 
  Send, 
  CheckCircle2, 
  FileText, 
  ExternalLink 
} from 'lucide-react';
import { studentProfile } from '../data/projectsData';

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
            
            <div className="bg-white dark:bg-studio-900 p-6 rounded-xl border border-studio-200 dark:border-studio-800 space-y-4">
              <h3 className="font-display font-bold text-base text-studio-900 dark:text-white uppercase tracking-wider text-xs border-b border-studio-200 dark:border-studio-800 pb-2">
                Studio & Academic Contact
              </h3>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex items-start gap-3 text-studio-600 dark:text-studio-300">
                  <div className="p-2 rounded bg-studio-100 dark:bg-studio-800 text-blueprint-600 dark:text-blueprint-400">
                    <GraduationCap className="w-4 h-4" />
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
                  <div className="p-2 rounded bg-studio-100 dark:bg-studio-800 text-ochre-500">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-studio-400 uppercase">LOCATION</div>
                    <div className="font-medium text-studio-900 dark:text-white mt-0.5">
                      Dhaka, Bangladesh
                    </div>
                    <div className="text-studio-500">Available for local & international projects</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-studio-600 dark:text-studio-300">
                  <div className="p-2 rounded bg-studio-100 dark:bg-studio-800 text-emerald-500">
                    <Mail className="w-4 h-4" />
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
                  <div className="p-2 rounded bg-studio-100 dark:bg-studio-800 text-[#0A66C2]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                    </svg>
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
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="p-6 bg-blueprint-50 dark:bg-blueprint-950/40 rounded-xl border border-blueprint-200 dark:border-blueprint-900/60 space-y-3">
              <h4 className="font-display font-bold text-sm text-blueprint-900 dark:text-blueprint-200">
                Portfolio Fast-Review
              </h4>
              <p className="text-xs text-blueprint-700 dark:text-blueprint-300 leading-relaxed font-sans">
                Want to review the full technical board collection in sequential format? Open the built-in sheet review flipbook.
              </p>
              <button
                onClick={() => onOpenSheetReview(0)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-blueprint-600 hover:bg-blueprint-700 text-white rounded-md text-xs font-mono font-semibold transition-colors shadow-sm"
              >
                <FileText className="w-4 h-4" />
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
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
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
                      <label className="block text-xs font-mono text-studio-600 dark:text-studio-300 mb-1">
                        YOUR NAME / STUDIO *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Studio Morphogenesis"
                        className="w-full px-3.5 py-2.5 text-xs bg-studio-50 dark:bg-studio-950 border border-studio-200 dark:border-studio-700 rounded focus:border-blueprint-500 focus:outline-hidden dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-studio-600 dark:text-studio-300 mb-1">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. contact@architecture.com"
                        className="w-full px-3.5 py-2.5 text-xs bg-studio-50 dark:bg-studio-950 border border-studio-200 dark:border-studio-700 rounded focus:border-blueprint-500 focus:outline-hidden dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-studio-600 dark:text-studio-300 mb-1">
                      INQUIRY TYPE
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-studio-50 dark:bg-studio-950 border border-studio-200 dark:border-studio-700 rounded focus:border-blueprint-500 focus:outline-hidden dark:text-white font-mono"
                    >
                      <option>Studio Recruitment / Junior Architect Role</option>
                      <option>Academic Review / Jury Discussion</option>
                      <option>Research Collaboration / Tactical Urbanism</option>
                      <option>Project Consultation & Visualization</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-studio-600 dark:text-studio-300 mb-1">
                      MESSAGE / PROJECT BRIEF *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your opportunity or inquiry..."
                      className="w-full px-3.5 py-2.5 text-xs bg-studio-50 dark:bg-studio-950 border border-studio-200 dark:border-studio-700 rounded focus:border-blueprint-500 focus:outline-hidden dark:text-white font-sans"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-studio-900 dark:bg-white text-white dark:text-studio-900 hover:bg-blueprint-600 dark:hover:bg-blueprint-400 font-mono text-xs font-bold rounded transition-colors shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
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
