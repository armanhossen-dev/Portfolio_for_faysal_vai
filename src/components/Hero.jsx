import React from 'react';
import { studentProfile } from '../data/projectsData';

export default function Hero({ onOpenSheetReview }) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden border-b border-studio-200 dark:border-studio-800">
      
      {/* Background Architectural Photo of Faysal at Department of Architecture — 100% Crisp, ZERO Blur */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="./images/faysal-hero.jpg"
          alt="Faysal Ahmed - Department of Architecture"
          className="w-full h-full object-cover object-[25%_center] sm:object-[22%_center] md:object-[20%_center] lg:object-left"
        />

        {/* Clean right-side gradient for text contrast — Crisp, NO Blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/25 dark:to-black/60 hidden lg:block"></div>
        <div className="absolute inset-0 bg-black/20 dark:bg-black/50 lg:hidden"></div>
      </div>

      {/* Drafting Crosshairs & Technical Registration Marks */}
      <div className="absolute top-24 left-6 z-10 font-mono text-[10px] text-white/90 select-none hidden sm:block bg-black/65 px-2.5 py-1 rounded-md border border-white/20 shadow-sm">
        [+] 23°49'32"N  90°24'48"E // DHAKA
      </div>
      <div className="absolute top-24 right-6 z-10 font-mono text-[10px] text-white/90 select-none hidden sm:block bg-black/65 px-2.5 py-1 rounded-md border border-white/20 shadow-sm">
        SCALE: NTS // DEPT_OF_ARCHITECTURE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Negative Space allowing Faysal's photograph and Architecture Wall to be prominently showcased */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-5 flex-col justify-end min-h-[440px] select-none pointer-events-none">
            <div className="mt-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-studio-950/85 text-white text-xs border border-white/20 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span className="font-bold tracking-wide">Faysal Ahmed</span>
                <span className="text-white/60">|</span>
                <span className="text-white/90">Dept. of Architecture, DIU</span>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Intro Details */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            
            {/* Crisp Solid Card — NO Blur on Background */}
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white/95 dark:bg-studio-950/95 border border-studio-200 dark:border-studio-800 shadow-2xl">
              
              {/* Category / Department Eyebrow */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-studio-950 text-white dark:bg-white dark:text-studio-950 shadow-xs">
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
                <span className="inline-flex items-center gap-1.5 bg-studio-100 dark:bg-studio-900 px-3 py-1.5 rounded-md border border-studio-200 dark:border-studio-800">
                  <i className="bx bx-map-pin text-rose-500 text-base"></i>
                  <span>Lives in {studentProfile.livesIn}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-studio-100 dark:bg-studio-900 px-3 py-1.5 rounded-md border border-studio-200 dark:border-studio-800">
                  <i className="bx bx-home-alt text-blueprint-600 dark:text-blueprint-400 text-base"></i>
                  <span>From {studentProfile.hometown}</span>
                </span>
              </div>

              <p className="text-base text-studio-700 dark:text-studio-200 leading-relaxed mb-8 font-normal max-w-2xl">
                Exploring the confluence of <strong className="text-studio-950 dark:text-white font-bold">ecological urbanism</strong>, high-density residential community frameworks, and circular industrial facilities. Bridging socio-spatial realities with resilient, sustainable architectural interventions.
              </p>

              {/* CTAs with strict 44px touch targets */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-bold bg-studio-950 dark:bg-white text-white dark:text-studio-950 hover:bg-blueprint-600 dark:hover:bg-blueprint-500 dark:hover:text-white rounded-lg transition-all shadow-md group whitespace-nowrap"
                >
                  <span>Explore Projects</span>
                  <i className="bx bx-right-arrow-alt text-lg group-hover:translate-x-1 transition-transform"></i>
                </a>

                <button
                  onClick={() => onOpenSheetReview(0)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] text-sm font-bold bg-white dark:bg-studio-900 text-studio-900 dark:text-white border border-studio-300 dark:border-studio-700 hover:border-blueprint-500 rounded-lg transition-colors shadow-xs whitespace-nowrap"
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

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
