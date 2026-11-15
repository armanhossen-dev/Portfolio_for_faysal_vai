import React from 'react';
import { studentProfile, allSheets } from '../data/projectsData';

export default function Hero({ onOpenSheetReview, onSelectSheet }) {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-studio-200 dark:border-studio-800">
      
      {/* Background Architectural Photo of Faysal at Department of Architecture */}
      <div className="absolute inset-0 z-0">
        <img
          src="./images/faysal-hero.jpg"
          alt="Faysal Ahmed - Department of Architecture"
          className="w-full h-full object-cover object-[28%_center] sm:object-[25%_center] md:object-[22%_center] lg:object-left-center transition-transform duration-700"
        />

        {/* Sophisticated Architectural Gradient Overlays */}
        {/* Desktop: Seamless gradient transition from crisp photo on left to readable background on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAFAF8]/70 to-[#FAFAF8] dark:via-studio-950/80 dark:to-studio-950 hidden lg:block"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF8] via-[#FAFAF8]/50 to-transparent dark:from-studio-950 dark:via-studio-950/50 dark:to-transparent hidden lg:block"></div>

        {/* Mobile / Tablet: Gradient overlay allowing Faysal to show through while guaranteeing high text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-[#FAFAF8]/85 to-[#FAFAF8] dark:from-black/60 dark:via-studio-950/90 dark:to-studio-950 lg:hidden"></div>
      </div>

      {/* Drafting Crosshairs & Technical Registration Marks */}
      <div className="absolute top-24 left-6 z-10 font-mono text-[10px] text-studio-700/80 dark:text-studio-300/80 select-none hidden sm:block bg-white/70 dark:bg-studio-900/70 px-2 py-0.5 rounded backdrop-blur-xs">
        [+] 23°49'32"N  90°24'48"E // DHAKA
      </div>
      <div className="absolute top-24 right-6 z-10 font-mono text-[10px] text-studio-700/80 dark:text-studio-300/80 select-none hidden sm:block bg-white/70 dark:bg-studio-900/70 px-2 py-0.5 rounded backdrop-blur-xs">
        SCALE: NTS // DEPT_OF_ARCHITECTURE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Negative Space allowing Faysal's photograph and Architecture Wall to be prominently showcased */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 flex-col justify-end min-h-[460px] select-none pointer-events-none">
            {/* Architectural subtle watermark badge on bottom left of hero */}
            <div className="mt-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-studio-900/70 dark:bg-black/70 backdrop-blur-md text-white text-xs border border-white/20 shadow-md">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="font-medium tracking-wide">Faysal Ahmed</span>
                <span className="text-white/60">|</span>
                <span className="text-white/80">Dept. of Architecture, DIU</span>
              </div>
            </div>
          </div>

          {/* Right Column: All Profile Intro Details */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            
            {/* Frosted Glass Content Panel for Maximum Legibility and Apple-level Polish */}
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white/90 dark:bg-studio-900/90 backdrop-blur-md border border-studio-200/90 dark:border-studio-800 shadow-2xl">
              
              {/* Category / Department Eyebrow */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-studio-900 text-white dark:bg-white dark:text-studio-950 shadow-xs">
                  <i className="bx bxs-school text-sm"></i>
                  <span>Department of Architecture</span>
                </span>
                <a
                  href="#achievements"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white transition-all shadow-xs"
                  title="View ARCHFEST 2026 Winner Best Design Award"
                >
                  <i className="bx bxs-trophy text-sm"></i>
                  <span>ARCHFEST 2026 Winner • Best Design</span>
                </a>
              </div>

              {/* Main Name & Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-studio-950 dark:text-white uppercase leading-[1.04] mb-3">
                {studentProfile.name}
              </h1>

              <div className="text-lg sm:text-xl font-display text-blueprint-600 dark:text-blueprint-400 font-bold mb-3 tracking-tight">
                Architectural Designer & Urban Researcher • Final Year B.Arch
              </div>

              {/* Personal Details: Location & Origin */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-studio-700 dark:text-studio-200 mb-5 font-medium">
                <span className="inline-flex items-center gap-1.5 bg-white dark:bg-studio-800 px-3 py-1.5 rounded-md border border-studio-200 dark:border-studio-700 shadow-2xs">
                  <i className="bx bx-map-pin text-rose-500 text-base"></i>
                  <span>Lives in {studentProfile.livesIn}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white dark:bg-studio-800 px-3 py-1.5 rounded-md border border-studio-200 dark:border-studio-700 shadow-2xs">
                  <i className="bx bx-home-alt text-blueprint-600 dark:text-blueprint-400 text-base"></i>
                  <span>From {studentProfile.hometown}</span>
                </span>
              </div>

              <p className="text-base text-studio-700 dark:text-studio-200 leading-relaxed mb-8 font-normal max-w-2xl">
                Exploring the confluence of <strong className="text-studio-950 dark:text-white font-bold">ecological urbanism</strong>, high-density residential community frameworks, and circular industrial facilities. Bridging socio-spatial realities with resilient, sustainable architectural interventions.
              </p>

              {/* CTAs with strict 44px touch targets */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-bold bg-studio-950 dark:bg-white text-white dark:text-studio-950 hover:bg-blueprint-600 dark:hover:bg-blueprint-500 dark:hover:text-white rounded-lg transition-all shadow-md group whitespace-nowrap"
                >
                  <span>Explore Projects</span>
                  <i className="bx bx-right-arrow-alt text-lg group-hover:translate-x-1 transition-transform"></i>
                </a>

                <button
                  onClick={() => onOpenSheetReview(0)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-sm font-bold bg-white dark:bg-studio-800 text-studio-900 dark:text-white border border-studio-300 dark:border-studio-700 hover:border-blueprint-500 rounded-lg transition-colors shadow-xs whitespace-nowrap"
                >
                  <i className="bx bx-book-open text-base text-blueprint-600 dark:text-blueprint-400"></i>
                  <span>Review Portfolio Sheets</span>
                </button>

                <a
                  href={studentProfile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 min-h-[44px] text-sm font-semibold bg-[#0A66C2]/10 dark:bg-[#0A66C2]/20 text-[#0A66C2] dark:text-[#70B5F9] border border-[#0A66C2]/30 rounded-lg hover:bg-[#0A66C2]/20 transition-colors shadow-2xs whitespace-nowrap"
                  title="Connect on LinkedIn"
                  aria-label="Connect with Faysal Ahmed on LinkedIn"
                >
                  <i className="bx bxl-linkedin-square text-lg"></i>
                  <span>LinkedIn</span>
                </a>

                <a
                  href={studentProfile.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 min-h-[44px] text-sm font-semibold bg-[#1877F2]/10 dark:bg-[#1877F2]/20 text-[#1877F2] dark:text-[#6ba7f8] border border-[#1877F2]/30 rounded-lg hover:bg-[#1877F2]/20 transition-colors shadow-2xs whitespace-nowrap"
                  title="Connect on Facebook"
                  aria-label="Connect with Faysal Ahmed on Facebook"
                >
                  <i className="bx bxl-facebook-square text-lg"></i>
                  <span>Facebook</span>
                </a>
              </div>

              {/* Key Architectural Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-6 border-t border-studio-200 dark:border-studio-800 font-mono">
                {studentProfile.metrics.map((m, idx) => (
                  <div key={idx} className="bg-white/80 dark:bg-studio-950/70 p-3 rounded-lg border border-studio-200/80 dark:border-studio-800 backdrop-blur-xs">
                    <div className="text-xl sm:text-2xl font-bold font-display text-studio-900 dark:text-white">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-studio-500 dark:text-studio-400 uppercase tracking-tight mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Jump Sheet Thumbnails Strip */}
              <div className="mt-5 pt-4 border-t border-studio-200 dark:border-studio-800">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-mono text-studio-500 dark:text-studio-400 uppercase">
                    Featured Portfolio Drawings:
                  </span>
                  <button
                    onClick={() => onOpenSheetReview(0)}
                    className="text-[11px] font-medium text-blueprint-600 dark:text-blueprint-400 hover:underline flex items-center gap-1"
                  >
                    Open Atlas <i className="bx bx-right-arrow-alt text-xs"></i>
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'P1 · Agro', idx: 2, img: './images/thumb/project1-sheet1.jpg' },
                    { label: 'P2 · Home', idx: 4, img: './images/thumb/project2-sheet1.jpg' },
                    { label: 'P3 · Housing', idx: 6, img: './images/thumb/project3-sheet1.jpg' },
                    { label: 'P4 · E-Waste', idx: 8, img: './images/thumb/project4-sheet1.jpg' }
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => onOpenSheetReview(item.idx)}
                      className="group/thumb relative rounded-md overflow-hidden aspect-[1.414/1] border border-studio-200 dark:border-studio-700 hover:border-blueprint-500 focus:outline-hidden shadow-xs"
                      title={`Open ${item.label}`}
                    >
                      <img
                        src={item.img}
                        alt={item.label}
                        className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-studio-950/40 hover:bg-transparent transition-colors flex items-end p-1">
                        <span className="text-[9px] font-medium text-white truncate bg-studio-950/80 px-1 py-0.2 rounded">
                          {item.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
