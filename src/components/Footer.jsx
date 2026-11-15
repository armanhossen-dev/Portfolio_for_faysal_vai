import React from 'react';
import { studentProfile } from '../data/projectsData';

export default function Footer({ onOpenSheetReview }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-studio-950 border-t border-studio-200 dark:border-studio-800 text-studio-600 dark:text-studio-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-studio-200 dark:border-studio-800">

          {/* Col 1: Architectural Stamp */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border-2 border-studio-900 dark:border-white flex flex-col items-center justify-center font-bold text-xs leading-none">
                <span className="text-blueprint-600 dark:text-blueprint-400">FA</span>
                <span className="text-[8px] text-studio-500">ARCH</span>
              </div>
              <div>
                <div className="font-display font-bold text-base text-studio-900 dark:text-white uppercase tracking-tight">
                  {studentProfile.name}
                </div>
                <div className="text-[11px] text-studio-500 dark:text-studio-400">
                  B.Arch Final Year Candidate • Daffodil Int. University
                </div>
              </div>
            </div>

            <p className="text-xs text-studio-500 dark:text-studio-400 font-sans leading-relaxed max-w-sm">
              Department of Architecture, Daffodil International University. Focused on climate-adaptive urbanism, ecological community infrastructure, and sustainable housing systems.
            </p>

            <div className="text-[11px] text-studio-400 font-mono">
              COORDINATES: 23°49'32"N  90°24'48"E // DHAKA
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-studio-900 dark:text-white uppercase tracking-wider mb-2">
              Portfolio Navigation
            </div>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#projects" className="hover:text-blueprint-500 transition-colors">Featured Projects</a></li>
              <li><a href="#sheets" className="hover:text-blueprint-500 transition-colors">Technical Drawing Sheets</a></li>
              <li><a href="#research" className="hover:text-blueprint-500 transition-colors">Commons Module & Teota Heritage</a></li>
              <li><a href="#about" className="hover:text-blueprint-500 transition-colors">Academic CV & Studios</a></li>
              <li><a href="#contact" className="hover:text-blueprint-500 transition-colors">Contact & Inquiries</a></li>
              <li>
                <a
                  href={studentProfile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueprint-600 dark:text-blueprint-400 hover:underline flex items-center gap-1.5 pt-1"
                >
                  <i className="bx bxl-linkedin text-sm"></i>
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={studentProfile.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1877F2] dark:text-[#6ba7f8] hover:underline flex items-center gap-1.5 pt-0.5"
                >
                  <i className="bx bxl-facebook text-sm"></i>
                  <span>Facebook Profile</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Mode Action */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold text-studio-900 dark:text-white uppercase tracking-wider mb-2">
              Jury / Presentation View
            </div>
            <p className="text-xs font-sans text-studio-500 dark:text-studio-400 leading-relaxed">
              Launch the full-screen sequential portfolio sheet review for academic juries, crits, or studio interviews.
            </p>
            <button
              onClick={() => onOpenSheetReview(0)}
              className="inline-flex items-center gap-2 px-3.5 py-2 bg-studio-100 dark:bg-studio-800 hover:bg-blueprint-500 hover:text-white text-studio-900 dark:text-white rounded transition-colors text-xs font-semibold"
            >
              <i className="bx bx-book-open text-sm"></i>
              <span>Launch Sheet Presentation</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-studio-400">
          <div>
            © {new Date().getFullYear()} {studentProfile.name}. All Architectural Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Daffodil International University</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-studio-900 dark:hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <i className="bx bx-up-arrow-alt text-sm"></i>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
