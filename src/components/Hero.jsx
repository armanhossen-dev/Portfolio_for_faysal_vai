import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Compass, 
  Maximize2, 
  Layers, 
  MapPin, 
  GraduationCap, 
  Calendar 
} from 'lucide-react';
import { studentProfile, allSheets } from '../data/projectsData';

export default function Hero({ onOpenSheetReview, onSelectSheet }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-studio-200 dark:border-studio-800 bg-grid-pattern">
      {/* Drafting Crosshairs & Technical Registration Marks */}
      <div className="absolute top-24 left-6 font-mono text-[10px] text-studio-400 dark:text-studio-600 select-none hidden sm:block">
        [+] 23°49'32"N  90°24'48"E // DHAKA
      </div>
      <div className="absolute top-24 right-6 font-mono text-[10px] text-studio-400 dark:text-studio-600 select-none hidden sm:block">
        SCALE: NTS // ARCH_STUDIO_V
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Academic & Design Manifesto */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Academic Status Stamp */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-studio-900 border border-studio-300 dark:border-studio-700 rounded text-xs font-mono text-studio-700 dark:text-studio-300 mb-6 shadow-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-semibold text-blueprint-600 dark:text-blueprint-400">B.ARCH CANDIDATE</span>
              <span className="text-studio-400">|</span>
              <span>ID: {studentProfile.studentId}</span>
              <span className="hidden sm:inline text-studio-400">|</span>
              <span className="hidden sm:inline text-ochre-600 dark:text-ochre-500 font-medium">SPRING 2025 – 2026</span>
            </div>

            {/* Main Name & Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-studio-950 dark:text-white uppercase leading-[1.08] mb-4">
              {studentProfile.name}
            </h1>

            <div className="text-lg sm:text-xl font-display text-blueprint-600 dark:text-blueprint-400 font-semibold mb-4 tracking-wide">
              Architecture Portfolio • Daffodil International University
            </div>

            <p className="text-base sm:text-lg text-studio-600 dark:text-studio-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Exploring the confluence of <strong className="text-studio-900 dark:text-white font-semibold">ecological urbanism</strong>, high-density residential community frameworks, and circular industrial facilities. Bridging socio-spatial realities with resilient, sustainable architectural interventions.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-studio-900 dark:bg-white text-white dark:text-studio-900 hover:bg-blueprint-600 dark:hover:bg-blueprint-400 dark:hover:text-studio-950 rounded transition-all shadow-md group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={() => onOpenSheetReview(0)}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-mono font-medium bg-white dark:bg-studio-900 text-studio-800 dark:text-studio-200 border border-studio-300 dark:border-studio-700 hover:border-blueprint-500 rounded transition-colors shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-blueprint-600 dark:text-blueprint-400" />
                <span>Review Portfolio Sheets</span>
              </button>

              <a
                href={studentProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium bg-[#0A66C2]/10 dark:bg-[#0A66C2]/20 text-[#0A66C2] dark:text-[#70B5F9] border border-[#0A66C2]/30 rounded hover:bg-[#0A66C2]/20 transition-colors shadow-xs"
                title="Connect on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-studio-600 dark:text-studio-400 hover:text-studio-950 dark:hover:text-white transition-colors"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Academic Bio</span>
              </a>
            </div>

            {/* Key Architectural Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-studio-200 dark:border-studio-800 font-mono">
              {studentProfile.metrics.map((m, idx) => (
                <div key={idx} className="bg-white/70 dark:bg-studio-900/60 p-3 rounded border border-studio-200/80 dark:border-studio-800 backdrop-blur-xs">
                  <div className="text-xl sm:text-2xl font-bold font-display text-studio-900 dark:text-white">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-studio-500 dark:text-studio-400 uppercase tracking-tight mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Architectural Sheet Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative group bg-white dark:bg-studio-900 p-3 sm:p-4 rounded-xl border border-studio-300 dark:border-studio-700 shadow-xl">
              
              {/* Sheet Meta Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-studio-200 dark:border-studio-800 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-blueprint-500 rounded-full"></span>
                  <span className="font-semibold text-studio-900 dark:text-white">PORTFOLIO SHEETS</span>
                </div>
                <div className="text-studio-500 dark:text-studio-400 text-[11px]">
                  12 TECHNICAL DRAWINGS
                </div>
              </div>

              {/* Interactive Image Preview */}
              <div 
                className="relative overflow-hidden rounded-lg aspect-[1.414/1] bg-studio-100 dark:bg-studio-800 cursor-pointer border border-studio-200 dark:border-studio-800"
                onClick={() => onOpenSheetReview(0)}
              >
                <img
                  src="./images/optimized/cover.jpg"
                  alt="Faysal Ahmed Architectural Portfolio Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-studio-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4 text-white">
                  <div className="font-mono text-xs text-blueprint-300 mb-1 flex items-center justify-between">
                    <span>SHEET 00 // COVER</span>
                    <span className="flex items-center gap-1 text-[11px] bg-studio-900/80 px-2 py-0.5 rounded border border-studio-700">
                      <Maximize2 className="w-3 h-3" /> Click to Inspect
                    </span>
                  </div>
                  <div className="font-display font-bold text-base sm:text-lg uppercase">
                    Faysal Ahmed Architecture Portfolio
                  </div>
                  <div className="text-xs text-studio-300 font-mono">
                    Spring 2025 • Fall 2025 • Spring 2026
                  </div>
                </div>
              </div>

              {/* Quick Jump Sheet Thumbnails Strip */}
              <div className="mt-3 pt-3 border-t border-studio-200 dark:border-studio-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-studio-500 dark:text-studio-400 uppercase">
                    Featured Project Sheets:
                  </span>
                  <button
                    onClick={() => onOpenSheetReview(2)}
                    className="text-[11px] font-mono text-blueprint-600 dark:text-blueprint-400 hover:underline flex items-center gap-1"
                  >
                    Browse All <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: 'P1-Agro', idx: 2, img: './images/thumb/project1-sheet1.jpg' },
                    { label: 'P2-Wetland', idx: 4, img: './images/thumb/project2-sheet1.jpg' },
                    { label: 'P3-Housing', idx: 6, img: './images/thumb/project3-sheet1.jpg' },
                    { label: 'P4-E-Waste', idx: 8, img: './images/thumb/project4-sheet1.jpg' }
                  ].map((item) => (
                    <button
                      key={item.label}
                      onClick={() => onOpenSheetReview(item.idx)}
                      className="group/thumb relative rounded overflow-hidden aspect-[1.414/1] border border-studio-200 dark:border-studio-700 hover:border-blueprint-500 focus:outline-hidden"
                      title={`Open ${item.label}`}
                    >
                      <img
                        src={item.img}
                        alt={item.label}
                        className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 bg-studio-950/40 hover:bg-transparent transition-colors flex items-end p-1">
                        <span className="text-[9px] font-mono text-white font-semibold truncate bg-studio-950/70 px-1 rounded">
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
