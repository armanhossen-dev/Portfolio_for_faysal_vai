import React from 'react';
import { ArrowUp, BookOpen, Compass, Layers } from 'lucide-react';
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
                  ID: {studentProfile.studentId} • B.Arch Final Year Candidate
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
                  className="text-blueprint-600 dark:text-blueprint-400 hover:underline flex items-center gap-1 pt-1"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                  </svg>
                  <span>LinkedIn Profile</span>
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
              <BookOpen className="w-3.5 h-3.5" />
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
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
