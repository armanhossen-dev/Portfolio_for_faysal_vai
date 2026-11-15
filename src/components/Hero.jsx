import React from 'react';
import { studentProfile } from '../data/projectsData';

export default function Hero({ onOpenSheetReview }) {
  return (
    <section id="top" className="hero-architect">
      {/* Background Architectural Drafting Grid Mask */}
      <div className="hero-grid-mask" aria-hidden="true"></div>

      {/* Signature Architectural Yellow Polygon Cut & Dashed Projection Line */}
      <svg className="hero-cut" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="0,62 38,12 62,52 100,8 100,100 0,100" />
        <path d="M0,62 L38,12 L62,52 L100,8" />
      </svg>

      {/* Left Column: Bold Typographic Identity */}
      <div className="relative z-10">
        <h1 className="hero-name">
          <span>Faysal</span>
          <span className="l2">Ahmed</span>
        </h1>

        <p className="hero-role">
          Architectural Designer & Urban Researcher
        </p>

        <p className="hero-lede font-sans">
          Final-year B.Arch at DIU, exploring ecological urbanism.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold text-sm cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 bg-studio-950 text-white dark:bg-white dark:text-studio-950 shadow-md"
          >
            <span>Explore projects</span>
          </a>

          <button
            onClick={() => onOpenSheetReview(0)}
            className="inline-flex items-center justify-center h-12 px-7 rounded-full font-semibold text-sm cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 border border-studio-950/70 dark:border-white/70 text-studio-950 dark:text-white bg-transparent hover:bg-studio-950/5 dark:hover:bg-white/10"
          >
            <span>Review sheets</span>
          </button>
        </div>
      </div>

      {/* Right Column: Architectural Drawing Plate & Title Block */}
      <aside className="hero-side relative z-10" aria-label="Profile summary">
        {/* Dimension Callout & Vector Silhouette Portrait Plate */}
        <div className="relative">
          <div className="hero-dim" aria-hidden="true"></div>
          <span className="hero-dimlab" aria-hidden="true">1.75 m</span>
          
          <div className="hero-portrait shadow-lg">
            <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
              <rect width="400" height="500" fill="none" />
              <g stroke="currentColor" strokeOpacity=".12" strokeWidth="2">
                <path d="M40 0v500M100 0v500M160 0v500M220 0v500M280 0v500M340 0v500" />
              </g>
              <path d="M0 330 130 150 230 290 400 110V500H0z" fill="#ffb81c" />
              <g fill="currentColor" opacity=".92">
                <circle cx="205" cy="150" r="34" />
                <path d="M150 500l8-190c2-40 20-62 47-62s45 22 47 62l8 190z" />
              </g>
            </svg>
          </div>
        </div>

        {/* Technical Title Block Table */}
        <div className="hero-tb shadow-lg">
          <div className="award-row">
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round">
              <path d="M8 4h8v6a4 4 0 0 1-8 0zM8 6H4v1a4 4 0 0 0 4 4M16 6h4v1a4 4 0 0 1-4 4M12 14v4M8 20h8" />
            </svg>
            <div>
              <small>Award</small>
              <span>ARCHFEST 2026 winner, Best Design</span>
            </div>
          </div>
          <div>
            <small>Department</small>
            <span>Architecture, DIU</span>
          </div>
          <div>
            <small>Based in</small>
            <span>{studentProfile.livesIn}</span>
          </div>
          <div style={{ gridColumn: '1 / -1', borderRight: 0 }}>
            <small>From</small>
            <span>{studentProfile.hometown}</span>
          </div>
        </div>
      </aside>
    </section>
  );
}
