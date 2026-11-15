import React from 'react';
import { studentProfile } from '../data/projectsData';

export default function Footer({ onOpenSheetReview }) {
  return (
    <footer className="relative w-full min-h-[620px] sm:min-h-[700px] lg:min-h-[768px] flex flex-col justify-between bg-[#0a0c0e] text-white overflow-hidden border-t border-white/15 font-mono text-xs">
      
      {/* Full-Width Panoramic Background Silhouette Photo */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none w-full h-full">
        <img
          src="./images/footer-silhouette.jpg"
          alt="Faysal Ahmed Architectural Waterscape Silhouette"
          className="w-full h-full object-cover object-bottom opacity-100"
        />
        {/* Subtle architectural gradient scrim: Darker at top for legible text, clear at bottom for silhouette reflections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0c0e]/90 via-[#0a0c0e]/30 to-[#0a0c0e]/80"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 flex-1 flex flex-col justify-between">
        
        {/* Top Header: Big Signature + Action Bar */}
        <div className="pb-10 border-b border-white/15 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#ffb81c] font-semibold mb-2 tracking-wider">
              <span className="w-2 h-2 bg-[#ffb81c] rounded-full"></span>
              PORTFOLIO ARCHIVE // FINAL YEAR B.ARCH
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white drop-shadow-md">
              {studentProfile.name}
            </h2>
            <p className="text-xs sm:text-sm font-sans text-studio-200 mt-1 max-w-xl leading-relaxed drop-shadow-sm">
              Architectural designer and urban researcher focused on ecological urbanism, resilient community infrastructure, and circular industrial facilities.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenSheetReview(0)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ffb81c] hover:bg-white text-[#101214] font-bold text-xs tracking-tight transition-all duration-200 shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              <i className="bx bx-book-open text-base"></i>
              <span>Review Portfolio Sheets</span>
            </button>

            <a
              href={`mailto:${studentProfile.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black/50 hover:bg-white/15 text-white border border-white/20 font-semibold text-xs transition-colors backdrop-blur-md shadow-sm"
            >
              <i className="bx bx-envelope text-base text-[#ffb81c]"></i>
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Middle Details Grid: Airy Hairline Architectural Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 py-10 my-auto">
          
          {/* Detail 1: Academic & Studio Affiliation */}
          <div className="lg:col-span-4 space-y-3 p-4 rounded-xl bg-black/35 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ffb81c] flex items-center gap-2">
              <span>01 // ACADEMIC AFFILIATION</span>
            </div>
            <div className="text-sm font-display font-semibold text-white">
              {studentProfile.university}
            </div>
            <div className="text-xs text-studio-300 font-sans leading-relaxed">
              Department of Architecture • Final Year Candidate
            </div>
            <div className="text-[11px] font-mono text-studio-400 pt-1 border-t border-white/10 flex items-center gap-1.5">
              <i className="bx bx-map-pin text-[#ffb81c] text-sm"></i>
              <span>Lives in {studentProfile.livesIn} • From {studentProfile.hometown}</span>
            </div>
          </div>

          {/* Detail 2: Portfolio Navigation Index */}
          <div className="lg:col-span-5 space-y-3 p-4 rounded-xl bg-black/35 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ffb81c] flex items-center gap-2">
              <span>02 // PORTFOLIO INDEX</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#projects" className="text-studio-200 hover:text-[#ffb81c] transition-colors flex items-center gap-1.5">
                <span className="text-[#ffb81c] text-[10px]">→</span> Featured Projects
              </a>
              <a href="#achievements" className="text-studio-200 hover:text-[#ffb81c] transition-colors flex items-center gap-1.5">
                <span className="text-[#ffb81c] text-[10px]">→</span> ARCHFEST Award
              </a>
              <a href="#sheets" className="text-studio-200 hover:text-[#ffb81c] transition-colors flex items-center gap-1.5">
                <span className="text-[#ffb81c] text-[10px]">→</span> Technical Sheets
              </a>
              <a href="#research" className="text-studio-200 hover:text-[#ffb81c] transition-colors flex items-center gap-1.5">
                <span className="text-[#ffb81c] text-[10px]">→</span> Urban Research
              </a>
              <a href="#about" className="text-studio-200 hover:text-[#ffb81c] transition-colors flex items-center gap-1.5">
                <span className="text-[#ffb81c] text-[10px]">→</span> Academic CV
              </a>
              <a href="#contact" className="text-studio-200 hover:text-[#ffb81c] transition-colors flex items-center gap-1.5">
                <span className="text-[#ffb81c] text-[10px]">→</span> Direct Contact
              </a>
            </div>
          </div>

          {/* Detail 3: Social & Transmission */}
          <div className="lg:col-span-3 space-y-3 p-4 rounded-xl bg-black/35 backdrop-blur-md border border-white/10 shadow-lg">
            <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#ffb81c] flex items-center gap-2">
              <span>03 // NETWORK</span>
            </div>
            <div className="space-y-2 text-xs font-mono">
              <a
                href={studentProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 text-studio-200 hover:text-white transition-colors border border-white/10"
              >
                <span className="flex items-center gap-2">
                  <i className="bx bxl-linkedin text-base text-[#ffb81c]"></i>
                  <span>LinkedIn</span>
                </span>
                <i className="bx bx-right-arrow-alt text-studio-400"></i>
              </a>

              <a
                href={studentProfile.facebook}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 text-studio-200 hover:text-white transition-colors border border-white/10"
              >
                <span className="flex items-center gap-2">
                  <i className="bx bxl-facebook text-base text-[#ffb81c]"></i>
                  <span>Facebook</span>
                </span>
                <i className="bx bx-right-arrow-alt text-studio-400"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean Architectural Rights & Stamp */}
        <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-studio-300 drop-shadow-md">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffb81c]"></span>
            <span>© {new Date().getFullYear()} {studentProfile.name}. All Architectural Rights Reserved.</span>
          </div>
          <div className="text-studio-400 font-mono">
            Dhaka, Bangladesh • Department of Architecture, DIU
          </div>
        </div>

      </div>
    </footer>
  );
}
