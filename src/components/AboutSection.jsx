import React from 'react';
import { studentProfile } from '../data/projectsData';

export default function AboutSection() {
  const appBrandThemes = {
    "Adobe Photoshop": {
      cardBg: "bg-[#eaf5fe] dark:bg-[#071726]",
      border: "border-[#31A8FF]/35 dark:border-[#31A8FF]/30 hover:border-[#31A8FF]",
      iconBg: "bg-[#001E36] text-[#31A8FF]",
      tagColor: "text-[#0070c0] dark:text-[#6ec1ff]",
      accent: "#31A8FF"
    },
    "Sketchup": {
      cardBg: "bg-[#fef1f1] dark:bg-[#200809]",
      border: "border-[#EA2127]/35 dark:border-[#EA2127]/30 hover:border-[#EA2127]",
      iconBg: "bg-[#EA2127] text-white",
      tagColor: "text-[#c41217] dark:text-[#ff7a7e]",
      accent: "#EA2127"
    },
    "Autocad": {
      cardBg: "bg-[#fff0f0] dark:bg-[#200707]",
      border: "border-[#E51010]/35 dark:border-[#E51010]/30 hover:border-[#E51010]",
      iconBg: "bg-[#E51010] text-white",
      tagColor: "text-[#c20d0d] dark:text-[#ff7575]",
      accent: "#E51010"
    },
    "Archicad": {
      cardBg: "bg-[#edf5fc] dark:bg-[#071828]",
      border: "border-[#0073CF]/35 dark:border-[#0073CF]/30 hover:border-[#0073CF]",
      iconBg: "bg-[#005A9C] text-white",
      tagColor: "text-[#005A9C] dark:text-[#5cb5ff]",
      accent: "#0073CF"
    },
    "Lumion": {
      cardBg: "bg-[#edf6fa] dark:bg-[#0b1c28]",
      border: "border-[#24527a]/35 dark:border-[#24527a]/30 hover:border-[#24527a]",
      iconBg: "bg-[#24527a] text-white",
      tagColor: "text-[#24527a] dark:text-[#6fa8dc]",
      accent: "#24527a"
    },
    "Enscape": {
      cardBg: "bg-[#fff4ec] dark:bg-[#231103]",
      border: "border-[#FF6B00]/35 dark:border-[#FF6B00]/30 hover:border-[#FF6B00]",
      iconBg: "bg-[#FF6B00] text-white",
      tagColor: "text-[#d95b00] dark:text-[#ffa05c]",
      accent: "#FF6B00"
    },
    "D5 Render": {
      cardBg: "bg-[#f5f3ff] dark:bg-[#1a1333]",
      border: "border-[#6366f1]/35 dark:border-[#6366f1]/30 hover:border-[#6366f1]",
      iconBg: "bg-transparent text-[#6366f1]",
      tagColor: "text-[#5848f5] dark:text-[#a5b4fc]",
      accent: "#5848f5"
    },
    "Affinity": {
      cardBg: "bg-[#f4fce8] dark:bg-[#121c0b]",
      border: "border-[#84cc16]/35 dark:border-[#84cc16]/30 hover:border-[#84cc16]",
      iconBg: "bg-[#84cc16] text-[#0f172a]",
      iconBoxBg: "bg-transparent",
      tagColor: "text-[#4d7c0f] dark:text-[#bef264]",
      accent: "#84cc16"
    },
    "VS Code": {
      cardBg: "bg-[#edf6fd] dark:bg-[#061827]",
      border: "border-[#007ACC]/35 dark:border-[#007ACC]/30 hover:border-[#007ACC]",
      iconBg: "bg-[#007ACC] text-white",
      tagColor: "text-[#0066aa] dark:text-[#6bc3ff]",
      accent: "#007ACC"
    },
    "QGIS": {
      cardBg: "bg-[#f2f8ed] dark:bg-[#101e08]",
      border: "border-[#589632]/35 dark:border-[#589632]/30 hover:border-[#589632]",
      iconBg: "bg-[#589632] text-white",
      tagColor: "text-[#437525] dark:text-[#8cd259]",
      accent: "#589632"
    },
    "Autodesk Forma": {
      cardBg: "bg-[#f8f9fa] dark:bg-[#15181c]",
      border: "border-black/15 dark:border-white/15 hover:border-black dark:hover:border-white",
      iconBg: "bg-black text-white",
      iconBoxBg: "bg-black border border-black/80 dark:border-white/20",
      tagColor: "text-studio-800 dark:text-studio-200",
      accent: "#000000"
    },
    "Archimap": {
      cardBg: "bg-[#fff6eb] dark:bg-[#231504]",
      border: "border-[#FF9F1C]/35 dark:border-[#FF9F1C]/30 hover:border-[#FF9F1C]",
      iconBg: "bg-[#FF9F1C] text-[#231504]",
      tagColor: "text-[#cc7700] dark:text-[#ffbe66]",
      accent: "#FF9F1C"
    }
  };

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
        <div className="max-w-3xl lg:max-w-none mb-16">
          <div className="flex items-center gap-2 font-mono text-xs text-studio-500 dark:text-[#ffb81c] font-semibold mb-3 tracking-wider">
            <span className="w-2 h-2 bg-studio-900 dark:bg-[#ffb81c]"></span>
            05 // CURRICULUM VITAE &amp; ACADEMIC PROFILE
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-studio-950 dark:text-white uppercase tracking-tight leading-[0.95]">
            About Faysal Ahmed
          </h2>
          <p className="text-base text-studio-600 dark:text-[#8e959d] mt-3 font-sans lg:whitespace-nowrap">
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
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
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
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                          draggable="false"
                          onContextMenu={(e) => e.preventDefault()}
                          onDragStart={(e) => e.preventDefault()}
                        />
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

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {studentProfile.dailyTools?.map((tool, idx) => {
                  const theme = appBrandThemes[tool.name] || {
                    cardBg: "bg-studio-50 dark:bg-[#181b1e]",
                    border: "border-studio-200 dark:border-white/10 hover:border-[#ffb81c]",
                    iconBg: "bg-white dark:bg-[#101214] text-studio-900 dark:text-[#ffb81c]",
                    tagColor: "text-studio-500 dark:text-[#8e959d]",
                    accent: "#ffb81c"
                  };

                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl ${theme.cardBg} border ${theme.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-md group flex flex-col justify-between relative overflow-hidden`}
                    >
                      <div className="flex items-center justify-between mb-2.5">
                        <div className={`w-8 h-8 rounded-lg ${tool.image ? `p-0.5 overflow-hidden flex items-center justify-center ${theme.iconBoxBg || 'bg-white border border-studio-200/80 dark:border-white/20'}` : `${theme.iconBg} border border-current/25 flex items-center justify-center`} group-hover:scale-110 transition-transform shadow-xs`}>
                          {tool.image ? (
                            <img
                              src={tool.image}
                              alt={tool.name}
                              className="w-full h-full object-contain select-none pointer-events-none rounded-md"
                              draggable="false"
                              onDragStart={(e) => e.preventDefault()}
                              onContextMenu={(e) => e.preventDefault()}
                            />
                          ) : (
                            <i className={`bx ${tool.icon} text-lg`}></i>
                          )}
                        </div>
                        <span className={`text-[9px] font-mono uppercase font-semibold ${theme.tagColor}`}>
                          {tool.category}
                        </span>
                      </div>
                      <div>
                        <div className="font-display font-semibold text-xs text-studio-950 dark:text-white">
                          {tool.name}
                        </div>
                        <p className="text-[10px] text-studio-600 dark:text-[#8e959d] line-clamp-1 mt-0.5 font-sans">
                          {tool.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
