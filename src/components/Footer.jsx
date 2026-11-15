import React from 'react';
import { studentProfile } from '../data/projectsData';

export default function Footer({ onOpenSheetReview }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-studio-950 text-white overflow-hidden border-t border-studio-800 font-mono text-xs">
      
      {/* Background Silhouette Photo in Water */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="./images/footer-silhouette.jpg"
          alt="Faysal Ahmed Architectural Silhouette"
          className="w-full h-full object-cover object-center opacity-35 mix-blend-luminosity scale-105 transition-opacity duration-700"
        />
        {/* Architectural Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-studio-950/90"></div>
        <div className="absolute inset-0 bg-radial from-transparent via-black/40 to-black/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">

          {/* Col 1: Architectural Stamp */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-white flex flex-col items-center justify-center font-bold text-xs leading-none bg-black/60 backdrop-blur-md rounded-md">
                <span className="text-blueprint-400">FA</span>
                <span className="text-[8px] text-studio-400">ARCH</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg text-white uppercase tracking-tight">
                  {studentProfile.name}
                </div>
                <div className="text-[11px] text-studio-300">
                  B.Arch Final Year Candidate • Daffodil International University
                </div>
              </div>
            </div>

            <p className="text-xs text-studio-300 font-sans leading-relaxed max-w-sm">
              Department of Architecture, Daffodil International University. Focused on climate-adaptive urbanism, ecological community infrastructure, and circular industrial facilities.
            </p>

            <div className="space-y-1 text-[11px] text-studio-400 font-mono">
              <div>LOCATION: Lives in {studentProfile.livesIn} • From {studentProfile.hometown}</div>
              <div>COORDINATES: 23°49'32"N  90°24'48"E // DHAKA</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blueprint-400 rounded-full"></span>
              Portfolio Navigation
            </div>
            <ul className="space-y-1.5 text-xs text-studio-300">
              <li><a href="#projects" className="hover:text-blueprint-400 transition-colors">Featured Projects</a></li>
              <li><a href="#sheets" className="hover:text-blueprint-400 transition-colors">Technical Drawing Sheets</a></li>
              <li><a href="#research" className="hover:text-blueprint-400 transition-colors">Commons Module & Teota Heritage</a></li>
              <li><a href="#about" className="hover:text-blueprint-400 transition-colors">Academic CV & Studios</a></li>
              <li><a href="#contact" className="hover:text-blueprint-400 transition-colors">Contact & Inquiries</a></li>
              <li className="pt-1 flex items-center gap-3">
                <a
                  href={studentProfile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blueprint-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <i className="bx bxl-linkedin text-sm"></i>
                  <span>LinkedIn</span>
                </a>
                <span className="text-white/20">•</span>
                <a
                  href={studentProfile.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#6ba7f8] hover:text-white transition-colors flex items-center gap-1"
                >
                  <i className="bx bxl-facebook text-sm"></i>
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Mode Action */}
          <div className="md:col-span-4 space-y-3">
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <i className="bx bx-book-open text-blueprint-400 text-sm"></i>
                Jury / Presentation View
              </div>
              <p className="text-xs font-sans text-studio-300 leading-relaxed">
                Launch the full-screen sequential portfolio sheet review for academic juries, crits, or studio interviews.
              </p>
              <button
                onClick={() => onOpenSheetReview(0)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blueprint-600 hover:bg-blueprint-500 text-white rounded-lg transition-colors text-xs font-semibold shadow-md"
              >
                <i className="bx bx-book-open text-sm"></i>
                <span>Launch Sheet Presentation</span>
              </button>
            </div>
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
              className="flex items-center gap-1 hover:text-white transition-colors"
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
