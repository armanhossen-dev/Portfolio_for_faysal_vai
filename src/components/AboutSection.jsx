import React from 'react';
import { studentProfile } from '../data/projectsData';

export default function AboutSection() {
  const architecturalCompetencies = [
    "Ecological Urbanism & Waterfront Bio-Filtration",
    "High-Density Residential & Clustered Community Housing",
    "Circular Industrial Facility & E-Waste Architecture",
    "Solar Radiation & Environmental Daylight Analysis",
    "Parametric BIM, 3D Spatial Modeling & Visualization",
    "Physical Scale Modeling & Material Exploration"
  ];

  return (
    <section id="about" className="py-24 border-b border-studio-200 dark:border-white/10 bg-white dark:bg-[#101214] bg-grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-studio-500 dark:text-[#ffb81c] font-semibold mb-3 tracking-wider">
            <span className="w-2 h-2 bg-studio-900 dark:bg-[#ffb81c]"></span>
            05 // CURRICULUM VITAE &amp; ACADEMIC PROFILE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-studio-950 dark:text-white uppercase tracking-tight leading-[0.95]">
            About Faysal Ahmed
          </h2>
          <p className="text-base text-studio-600 dark:text-[#8e959d] mt-3 font-sans">
            Architectural designer and urban researcher in the final year of B.Arch at Daffodil International University, Dhaka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Portrait & Personal Foundation (5 cols) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Architectural Portrait Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-studio-200 dark:border-white/10 bg-studio-100 dark:bg-[#181b1e] p-2.5 shadow-sm">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-studio-950">
                <img
                  src="./images/faysal-profile.jpg"
                  alt="Faysal Ahmed – Architectural Designer"
                  className="w-full h-full object-cover object-center grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
                />

                {/* Floating Architectural Technical Tags */}
                <div className="absolute top-3 left-3 bg-[#101214]/85 backdrop-blur-md px-2.5 py-1 rounded border border-white/10 font-mono text-[10px] text-white">
                  <span className="text-[#ffb81c]">SCALE:</span> 1:1 // ARCH_STUDIO
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-[#101214]/90 backdrop-blur-md p-3 rounded-lg border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-display font-bold text-sm text-white">Faysal Ahmed</div>
                    <div className="text-[11px] text-[#ffb81c] font-mono">B.Arch Candidate • Spring 2026</div>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#ffb81c] animate-pulse" title="Active Candidate"></span>
                </div>
              </div>
            </div>

            {/* Architectural Specification Table (Title Block Style) */}
            <div className="rounded-xl border border-studio-200 dark:border-white/10 overflow-hidden bg-studio-50 dark:bg-[#181b1e]">
              <div className="grid grid-cols-2 text-xs divide-x divide-y divide-studio-200 dark:divide-white/10">
                <div className="p-3.5">
                  <small className="block text-[10px] font-mono uppercase text-studio-500 dark:text-[#8e959d] mb-1">
                    Department
                  </small>
                  <span className="font-semibold text-studio-900 dark:text-white">
                    Architecture, DIU
                  </span>
                </div>
                <div className="p-3.5">
                  <small className="block text-[10px] font-mono uppercase text-studio-500 dark:text-[#8e959d] mb-1">
                    Degree Level
                  </small>
                  <span className="font-semibold text-studio-900 dark:text-white">
                    {studentProfile.degree}
                  </span>
                </div>
                <div className="p-3.5">
                  <small className="block text-[10px] font-mono uppercase text-studio-500 dark:text-[#8e959d] mb-1">
                    Current City
                  </small>
                  <span className="font-semibold text-studio-900 dark:text-white">
                    {studentProfile.livesIn}
                  </span>
                </div>
                <div className="p-3.5">
                  <small className="block text-[10px] font-mono uppercase text-studio-500 dark:text-[#8e959d] mb-1">
                    Hometown
                  </small>
                  <span className="font-semibold text-studio-900 dark:text-white">
                    {studentProfile.hometown}
                  </span>
                </div>
              </div>
            </div>

            {/* Honor & Best Design Plaque */}
            <div className="p-4 rounded-xl border border-[#ffb81c]/40 bg-[#ffb81c]/5 dark:bg-[#ffb81c]/10 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#ffb81c] text-[#101214] flex items-center justify-center shrink-0 text-xl font-bold">
                <i className="bx bxs-trophy"></i>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-[#ffb81c] text-[#101214] uppercase">
                    ARCHFEST 2026 WINNER
                  </span>
                  <span className="text-xs font-semibold text-studio-900 dark:text-[#ffb81c]">
                    Best Design Award (Category 08)
                  </span>
                </div>
                <p className="text-xs text-studio-700 dark:text-[#eceeef] mt-1 font-sans">
                  Award of Excellence for <em>"Between Water &amp; Home: Toward an Inclusive and Adaptive Korail"</em>.
                </p>
              </div>
            </div>

            {/* Architectural Philosophy Manifesto */}
            <div className="p-5 rounded-xl border-l-4 border-l-[#ffb81c] border border-studio-200 dark:border-white/10 bg-studio-50/70 dark:bg-[#181b1e]">
              <h3 className="font-mono text-xs uppercase tracking-wider text-studio-500 dark:text-[#8e959d] mb-2">
                // DESIGN PHILOSOPHY
              </h3>
              <blockquote className="text-sm text-studio-800 dark:text-[#eceeef] leading-relaxed italic font-sans">
                "Architecture is an ethical mediation between human society, local resources, and the fragile ecosystem. My design research centers on empowering vulnerable communities with climate-sensitive, resilient spatial interventions."
              </blockquote>
            </div>

          </div>

          {/* Right Column: Academic Trajectory & Software Arsenal (7 cols) */}
          <div className="lg:col-span-7 space-y-8">

            {/* Education History */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-studio-200 dark:border-white/10">
                <h3 className="font-display font-bold text-base uppercase tracking-wider text-studio-950 dark:text-white flex items-center gap-2">
                  <i className="bx bxs-graduation text-lg text-studio-900 dark:text-[#ffb81c]"></i>
                  Academic Trajectory &amp; Education
                </h3>
                <span className="text-[11px] font-mono text-studio-500 dark:text-[#8e959d]">
                  3 Institutions
                </span>
              </div>

              <div className="space-y-3 font-sans">
                {studentProfile.education?.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-studio-50 dark:bg-[#181b1e] border border-studio-200/80 dark:border-white/10 hover:border-[#ffb81c] transition-all flex items-center gap-4 sm:gap-5"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-[#101214] p-1.5 flex items-center justify-center shrink-0 border border-studio-200 dark:border-white/10 overflow-hidden shadow-sm">
                      {edu.logo ? (
                        <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                      ) : (
                        <i className={`bx ${edu.icon || 'bx-school'} text-2xl text-studio-900 dark:text-[#ffb81c]`}></i>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <span className="font-bold text-sm sm:text-base text-studio-950 dark:text-[#ffb81c]">
                          {edu.degree}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {edu.enrolled && (
                            <span className="text-[10px] font-semibold text-[#101214] bg-[#ffb81c] px-2 py-0.5 rounded-full font-mono">
                              {edu.enrolled}
                            </span>
                          )}
                          <span className="text-studio-500 dark:text-[#8e959d] bg-studio-200/60 dark:bg-[#101214] px-2 py-0.5 rounded text-[10px] font-mono">
                            {edu.period}
                          </span>
                        </div>
                      </div>
                      <div className="font-display font-semibold text-sm sm:text-base text-studio-900 dark:text-white">
                        {edu.institution}
                      </div>
                      <div className="text-xs text-studio-500 dark:text-[#8e959d] mt-0.5">
                        {edu.department ? `${edu.department} • ` : ''}{edu.level} • {edu.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Architectural Focus Areas */}
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-studio-200 dark:border-white/10">
                <h3 className="font-display font-bold text-base uppercase tracking-wider text-studio-950 dark:text-white flex items-center gap-2">
                  <i className="bx bx-compass text-lg text-studio-900 dark:text-[#ffb81c]"></i>
                  Core Competencies &amp; Research Focus
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {architecturalCompetencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-studio-200 dark:border-white/10 bg-studio-50/50 dark:bg-[#181b1e] flex items-center gap-2.5 text-xs text-studio-800 dark:text-[#eceeef]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ffb81c] shrink-0"></span>
                    <span className="font-medium">{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Software Arsenal (12 Tools) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-studio-200 dark:border-white/10">
                <h3 className="font-display font-bold text-base uppercase tracking-wider text-studio-950 dark:text-white flex items-center gap-2">
                  <i className="bx bx-layer text-lg text-studio-900 dark:text-[#ffb81c]"></i>
                  Technical Software Arsenal
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-studio-200/60 dark:bg-[#101214] text-studio-700 dark:text-[#ffb81c] rounded font-bold">
                  12 Daily Tools
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {studentProfile.dailyTools?.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-studio-50 dark:bg-[#181b1e] border border-studio-200 dark:border-white/10 hover:border-[#ffb81c] transition-all group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-7 h-7 rounded-lg bg-white dark:bg-[#101214] border border-studio-200 dark:border-white/10 flex items-center justify-center text-studio-900 dark:text-[#ffb81c] group-hover:scale-105 transition-transform">
                        <i className={`bx ${tool.icon} text-base`}></i>
                      </div>
                      <span className="text-[9px] font-mono uppercase text-studio-500 dark:text-[#8e959d]">
                        {tool.category}
                      </span>
                    </div>
                    <div>
                      <div className="font-display font-semibold text-xs text-studio-950 dark:text-white">
                        {tool.name}
                      </div>
                      <p className="text-[10px] text-studio-500 dark:text-[#8e959d] line-clamp-1 mt-0.5 font-sans">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
