import React from 'react';
import { studentProfile } from '../data/projectsData';

function ColumnHeader({ title }) {
  return (
    <div className="flex items-center gap-2 mb-6 select-none">
      <svg
        viewBox="0 0 12 14"
        className="w-2.5 h-3.5 shrink-0 stroke-[#ffb81c] stroke-[2.2] stroke-linecap-round"
        fill="none"
        aria-hidden="true"
      >
        <line x1="2" y1="12" x2="10" y2="2" />
      </svg>
      <span className="h-px flex-1 bg-white/20"></span>
      <span className="font-mono text-xs tracking-wider uppercase flex items-center gap-1.5 whitespace-nowrap">
        <span className="text-[#ffb81c] font-bold">4200</span>
        <span className="text-white font-bold">{title}</span>
      </span>
      <span className="h-px flex-1 bg-white/20"></span>
      <svg
        viewBox="0 0 12 14"
        className="w-2.5 h-3.5 shrink-0 stroke-[#ffb81c] stroke-[2.2] stroke-linecap-round"
        fill="none"
        aria-hidden="true"
      >
        <line x1="2" y1="12" x2="10" y2="2" />
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex flex-col justify-between bg-[#0a0c0e] text-white overflow-hidden border-t border-white/15">
      
      {/* Full-Width Background Photo Silhouette */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none w-full h-full">
        <img
          src="./images/footer-silhouette.jpg"
          alt="Faysal Ahmed Waterscape Silhouette"
          className="w-full h-full object-cover object-bottom opacity-100"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
        {/* Scrim overlay: preserves photo silhouette reflections while keeping architectural drafting lines crisp */}
        <div className="absolute inset-0 bg-[#0a0c0e]/85 backdrop-blur-[1px]"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6 flex-1 flex flex-col justify-between">
        
        {/* Architectural Structural Grid with Axis Markers (A, B, C, D) */}
        <div className="relative pt-6">
          
          {/* Top Axis Bubble Header Row (Desktop & Tablet) */}
          <div className="hidden md:grid grid-cols-3 relative mb-2">
            <div className="relative">
              <span className="footer-bubble absolute -top-3 -left-3.5 shadow-md">
                A
              </span>
            </div>
            <div className="relative">
              <span className="footer-bubble absolute -top-3 -left-3.5 shadow-md">
                B
              </span>
            </div>
            <div className="relative">
              <span className="footer-bubble absolute -top-3 -left-3.5 shadow-md">
                C
              </span>
              <span className="footer-bubble absolute -top-3 -right-3.5 shadow-md">
                D
              </span>
            </div>
          </div>

          {/* 3 Columns Divided by Dashed Structural Lines */}
          <div className="grid grid-cols-1 md:grid-cols-3 relative">
            
            {/* Column A -> B: 4200 Portfolio */}
            <div className="relative pt-6 pb-8 px-4 sm:px-6 md:px-8 border-l border-dashed border-white/20">
              <span className="md:hidden footer-bubble absolute -top-3 -left-3.5 shadow-md">
                A
              </span>
              <ColumnHeader title="Portfolio" />
              <nav className="space-y-2.5 text-sm font-sans" aria-label="Portfolio Navigation">
                <a
                  href="#projects"
                  className="block text-studio-200 hover:text-[#ffb81c] transition-colors"
                >
                  Featured projects
                </a>
                <a
                  href="#sheets"
                  className="block text-studio-200 hover:text-[#ffb81c] transition-colors"
                >
                  Technical sheets
                </a>
                <a
                  href="#research"
                  className="block text-studio-200 hover:text-[#ffb81c] transition-colors"
                >
                  Urban research
                </a>
                <a
                  href="#achievements"
                  className="block text-studio-200 hover:text-[#ffb81c] transition-colors"
                >
                  ARCHFEST award
                </a>
                <a
                  href="#about"
                  className="block text-studio-200 hover:text-[#ffb81c] transition-colors"
                >
                  Academic CV
                </a>
              </nav>
            </div>

            {/* Column B -> C: 4200 Contact */}
            <div className="relative pt-6 pb-8 px-4 sm:px-6 md:px-8 border-l border-dashed border-white/20">
              <span className="md:hidden footer-bubble absolute -top-3 -left-3.5 shadow-md">
                B
              </span>
              <ColumnHeader title="Contact" />
              <div className="space-y-2.5 text-sm font-sans">
                <a
                  href="#contact"
                  className="block text-studio-200 hover:text-[#ffb81c] transition-colors"
                >
                  Get in touch
                </a>
                <a
                  href={studentProfile.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-studio-200 hover:text-[#ffb81c] transition-colors"
                >
                  Behance
                </a>
                <a
                  href={studentProfile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-studio-200 hover:text-[#ffb81c] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={studentProfile.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="block text-studio-200 hover:text-[#ffb81c] transition-colors"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Column C -> D: 4200 Studio */}
            <div className="relative pt-6 pb-8 px-4 sm:px-6 md:px-8 border-l md:border-r border-dashed border-white/20">
              <span className="md:hidden footer-bubble absolute -top-3 -left-3.5 shadow-md">
                C
              </span>
              <ColumnHeader title="Studio" />
              <div className="text-sm font-sans text-studio-200 leading-relaxed">
                <div>Final year B.Arch</div>
                <div>Daffodil International</div>
                <div>University</div>
                <div className="text-xs font-mono text-studio-400 mt-4 pt-1 flex items-center gap-2">
                  <span>Dhaka, Bangladesh</span>
                  <span className="inline-flex items-center" title="Bangladesh">
                    <svg
                      viewBox="0 0 20 12"
                      className="w-4 h-2.5 rounded-[2px] overflow-hidden shadow-2xs shrink-0"
                      aria-label="Bangladesh Flag"
                    >
                      <rect width="20" height="12" fill="#006a4e" />
                      <circle cx="9" cy="6" r="4" fill="#f42a41" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Monumental Outlined Architectural Name & Dashed Grid Extension */}
        <div className="group relative mt-8 pt-6 pb-2 select-none flex items-center justify-center text-center w-full px-2 sm:px-4 cursor-pointer">
          {/* Subtle continuation of dashed vertical lines */}
          <div className="hidden md:grid grid-cols-3 absolute inset-0 z-0 opacity-40">
            <div className="border-l border-dashed border-white/20"></div>
            <div className="border-l border-dashed border-white/20"></div>
            <div className="border-l border-r border-dashed border-white/20"></div>
          </div>

          <div className="relative z-10 footer-outline-name text-center w-full">
            Faysal Ahmed
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-studio-400">
          <div>
            © {new Date().getFullYear()} {studentProfile.name}. All Architectural Rights Reserved.
          </div>
          <div>
            Department of Architecture • Daffodil International University
          </div>
        </div>

      </div>
    </footer>
  );
}
