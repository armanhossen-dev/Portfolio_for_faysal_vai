import React from 'react';
import { studentProfile } from '../data/projectsData';
import ArchitectWorkspaceIllustration from './illustrations/ArchitectWorkspaceIllustration';

export default function AboutSection() {
  const academicStudios = [
    {
      term: "Spring 2026",
      studio: "Architectural Design Studio IX",
      project: "Design of an E-Waste Recycling Factory, Manikganj",
      focus: "Industrial ecology, rigorous linear zoning (dirty/clean), solar radiation analysis & hazardous material containment."
    },
    {
      term: "Fall 2025",
      studio: "Architectural Design Studio VIII",
      project: "Clustered Urban Housing, Uttara, Dhaka",
      focus: "112-acre sustainable campus, high-density living (200 people/acre), 55% green space preservation & 4-unit cluster typologies."
    },
    {
      term: "Spring 2025",
      studio: "Architectural Design Studio VII",
      project: "Korail Agro-Urban Nexus & Waterfront Bio-Filtration",
      focus: "Decentralized circular waste systems, women's empowerment, modular community architecture & ecological wetland restoration."
    },
    {
      term: "2024 – 2025",
      studio: "Architectural Heritage & Theory",
      project: "Time Transitions & Contrasts: Teota Jomidar Bari",
      focus: "Phenomenological promenade connecting Past, Present, and Future through directional light, shadow, and tactile brickwork."
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-studio-200 dark:border-white/10 bg-white dark:bg-[#101214] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-blueprint-600 dark:text-[#ffb81c] font-semibold mb-2">
            <span className="w-2 h-2 bg-blueprint-500 dark:bg-[#ffb81c] rounded-xs"></span>
            CURRICULUM VITAE // ACADEMIC PROFILE
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-studio-950 dark:text-white uppercase tracking-tight">
            About Faysal Ahmed
          </h2>
          <p className="text-sm sm:text-base text-studio-600 dark:text-[#9aa1a8] mt-2">
            Final-year Architecture Candidate at Daffodil International University, Dhaka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Academic Credentials & Manifesto */}
          <div className="lg:col-span-7 space-y-8">

            {/* Bio Card */}
            <div className="bg-[#FAFAF8] dark:bg-[#181b1e] p-6 sm:p-8 rounded-xl border border-studio-200 dark:border-white/10 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-studio-200 dark:border-white/10 font-mono text-xs">
                <span className="text-studio-500 dark:text-[#9aa1a8]">DEGREE PROGRAM:</span>
                <span className="font-bold text-studio-900 dark:text-white">B.Arch (Final Year Candidate)</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-studio-200 dark:border-white/10 font-mono text-xs">
                <span className="text-studio-500 dark:text-[#9aa1a8]">ACADEMIC FOCUS:</span>
                <span className="font-bold text-blueprint-600 dark:text-[#ffb81c]">Ecological Urbanism & Resilient Architecture</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-studio-200 dark:border-white/10 font-mono text-xs">
                <span className="text-studio-500 dark:text-[#9aa1a8]">INSTITUTION:</span>
                <span className="font-bold text-studio-900 dark:text-white flex items-center gap-2">
                  <img src={studentProfile.universityLogo} alt="DIU Crest" className="w-5 h-5 object-contain shrink-0" />
                  <span>{studentProfile.university}</span>
                </span>
              </div>

              {/* Personal Details */}
              <div className="py-3 border-b border-studio-200 dark:border-white/10">
                <div className="text-[10px] font-mono text-studio-400 dark:text-[#9aa1a8] uppercase mb-2 tracking-wider">
                  PERSONAL DETAILS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5 text-studio-700 dark:text-[#eceeef] bg-white dark:bg-[#101214] p-2.5 rounded-lg border border-studio-200/80 dark:border-white/10">
                    <i className="bx bx-map-pin text-lg text-rose-500 dark:text-[#ffb81c] shrink-0"></i>
                    <div>
                      <div className="text-[10px] text-studio-400 dark:text-[#9aa1a8] font-mono uppercase">Current City</div>
                      <div className="font-medium">Lives in {studentProfile.livesIn}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 text-studio-700 dark:text-[#eceeef] bg-white dark:bg-[#101214] p-2.5 rounded-lg border border-studio-200/80 dark:border-white/10">
                    <i className="bx bx-home-alt text-lg text-blueprint-500 dark:text-[#ffb81c] shrink-0"></i>
                    <div>
                      <div className="text-[10px] text-studio-400 dark:text-[#9aa1a8] font-mono uppercase">Hometown</div>
                      <div className="font-medium">From {studentProfile.hometown}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competition Victory / Honors Callout */}
              <div className="p-4 rounded-xl bg-amber-500/10 dark:bg-[#ffb81c]/10 border border-amber-500/30 dark:border-[#ffb81c]/30 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-500 dark:bg-[#ffb81c] text-white dark:text-[#101214] flex items-center justify-center shrink-0 text-xl shadow-xs font-bold">
                  <i className="bx bxs-trophy"></i>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500 dark:bg-[#ffb81c] text-white dark:text-[#101214] uppercase">
                      ARCHFEST 2026 WINNER
                    </span>
                    <span className="text-xs text-amber-700 dark:text-[#ffb81c] font-semibold">
                      Best Design Award (Category 08)
                    </span>
                  </div>
                  <p className="text-xs text-studio-600 dark:text-[#eceeef] mt-1 font-sans">
                    Award of Excellence for <em>"Between Water & Home: Toward an Inclusive and Adaptive Korail"</em>, Department of Architecture, Daffodil International University.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-studio-900 dark:text-white mb-2">
                  Architectural Philosophy
                </h3>
                <p className="text-sm sm:text-base text-studio-700 dark:text-[#eceeef] leading-relaxed font-sans">
                  "Architecture is not merely the creation of objects, but an ethical mediation between society, local resources, and the fragile ecosystem. My design research centers on empowering vulnerable communities, utilizing climate-sensitive passive methods, and re-imagining how high-density urban environments can remain humane, verdant, and dignified."
                </p>
              </div>
            </div>

            {/* Educational Background Timeline */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-base uppercase tracking-wider text-studio-900 dark:text-white flex items-center gap-2">
                <i className="bx bxs-school text-xl text-ochre-500 dark:text-[#ffb81c]"></i>
                Educational Background & Academic History
              </h3>

              <div className="space-y-3 font-sans">
                {studentProfile.education?.map((edu, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-xl bg-white dark:bg-[#181b1e] border border-studio-200/80 dark:border-white/10 shadow-2xs hover:border-blueprint-400 dark:hover:border-[#ffb81c] transition-all flex items-start gap-3.5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-[#101214] p-1 flex items-center justify-center shrink-0 border border-studio-200 dark:border-white/10 shadow-2xs overflow-hidden">
                      {edu.logo ? (
                        <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" />
                      ) : (
                        <i className={`bx ${edu.icon || 'bx-school'} text-xl text-blueprint-600 dark:text-[#ffb81c]`}></i>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-0.5">
                        <span className="font-bold text-xs sm:text-sm text-blueprint-600 dark:text-[#ffb81c]">
                          {edu.degree}
                        </span>
                        <div className="flex items-center gap-1.5">
                          {edu.enrolled && (
                            <span className="text-[11px] font-semibold text-amber-800 dark:text-[#101214] bg-amber-500/15 dark:bg-[#ffb81c] border border-amber-500/30 dark:border-[#ffb81c] px-2 py-0.5 rounded-full">
                              {edu.enrolled}
                            </span>
                          )}
                          <span className="text-studio-500 dark:text-[#9aa1a8] bg-studio-100 dark:bg-[#101214] px-2 py-0.5 rounded text-[10px] font-mono">
                            {edu.period}
                          </span>
                        </div>
                      </div>
                      <div className="font-display font-semibold text-sm text-studio-900 dark:text-white mb-0.5">
                        {edu.institution}
                      </div>
                      <div className="text-xs text-studio-500 dark:text-[#9aa1a8]">
                        {edu.department ? `${edu.department} • ` : ''}{edu.level} • {edu.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Studio Trajectory */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-base uppercase tracking-wider text-studio-900 dark:text-white flex items-center gap-2">
                <i className="bx bxs-graduation text-xl text-blueprint-500 dark:text-[#ffb81c]"></i>
                Studio Progression & Design Trajectory
              </h3>

              <div className="space-y-3">
                {academicStudios.map((stu, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-[#FAFAF8] dark:bg-[#181b1e] border border-studio-200 dark:border-white/10 font-sans"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1 font-mono text-xs">
                      <span className="font-bold text-blueprint-600 dark:text-[#ffb81c]">
                        {stu.studio}
                      </span>
                      <span className="text-studio-500 dark:text-[#9aa1a8] bg-studio-100 dark:bg-[#101214] px-2 py-0.5 rounded text-[10px]">
                        {stu.term}
                      </span>
                    </div>
                    <div className="font-display font-semibold text-sm text-studio-900 dark:text-white mb-1">
                      {stu.project}
                    </div>
                    <div className="text-xs text-studio-600 dark:text-[#9aa1a8] leading-relaxed">
                      {stu.focus}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Skills, Software, and Competencies */}
          <div className="lg:col-span-5 space-y-6">

            {/* Architectural Studio Illustration */}
            <div className="bg-[#FAFAF8] dark:bg-[#181b1e] p-4 rounded-xl border border-studio-200 dark:border-white/10 overflow-hidden text-center">
              <ArchitectWorkspaceIllustration className="w-full h-auto max-w-sm mx-auto" />
              <div className="font-mono text-[11px] text-studio-500 dark:text-[#9aa1a8] mt-2">
                STUDIO ARCHIVE • DRAFTING WORKSPACE
              </div>
            </div>

            {/* Architectural Competencies */}
            <div className="bg-[#FAFAF8] dark:bg-[#181b1e] p-6 rounded-xl border border-studio-200 dark:border-white/10 space-y-4">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-studio-900 dark:text-white flex items-center gap-2">
                <i className="bx bx-layer text-lg text-blueprint-500 dark:text-[#ffb81c]"></i>
                Core Architectural Competencies
              </h3>

              <ul className="space-y-2">
                {studentProfile.skills.architectural.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-studio-700 dark:text-[#eceeef]">
                    <i className="bx bx-check-circle text-base text-emerald-500 dark:text-[#ffb81c] shrink-0 mt-0.5"></i>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Daily Apps & Tools */}
            <div className="bg-[#FAFAF8] dark:bg-[#181b1e] p-6 rounded-xl border border-studio-200 dark:border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-studio-900 dark:text-white flex items-center gap-2">
                  <i className="bx bx-laptop text-lg text-ochre-500 dark:text-[#ffb81c]"></i>
                  Daily Apps & Technical Arsenal
                </h3>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-studio-100 dark:bg-[#101214] text-studio-600 dark:text-[#ffb81c] rounded-md font-bold">
                  12 Tools
                </span>
              </div>

              {/* Grid of 12 Daily Apps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {studentProfile.dailyTools?.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white dark:bg-[#101214] border border-studio-200 dark:border-white/10 hover:border-blueprint-400 dark:hover:border-[#ffb81c] transition-all duration-200 group flex items-start gap-2.5 shadow-2xs"
                  >
                    <div className="w-8 h-8 rounded-md bg-studio-100 dark:bg-[#181b1e] text-blueprint-600 dark:text-[#ffb81c] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <i className={`bx ${tool.icon} text-lg`}></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-display font-semibold text-xs text-studio-900 dark:text-white truncate">
                          {tool.name}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 bg-studio-100 dark:bg-[#181b1e] text-studio-500 dark:text-[#9aa1a8] rounded shrink-0">
                          {tool.category}
                        </span>
                      </div>
                      <p className="text-[10px] text-studio-500 dark:text-[#9aa1a8] line-clamp-1 mt-0.5">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact & CV Banner */}
            <div className="p-5 rounded-xl bg-studio-900 dark:bg-[#181b1e] text-white border border-studio-800 dark:border-white/10 space-y-3">
              <h4 className="font-display font-bold text-base text-white">
                Looking for Studio Collaboration?
              </h4>
              <p className="text-xs text-studio-300 dark:text-[#9aa1a8] leading-relaxed font-sans">
                Open for architectural internships, junior architect roles, thesis collaboration, and sustainable urban research projects.
              </p>
              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] bg-blueprint-600 hover:bg-blueprint-500 dark:bg-[#ffb81c] dark:text-[#101214] hover:dark:bg-white hover:dark:text-[#101214] text-white text-sm font-bold rounded-lg transition-colors whitespace-nowrap shadow-xs"
                >
                  <i className="bx bx-envelope text-base"></i>
                  <span>Get in Touch</span>
                </a>

                <a
                  href={studentProfile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] bg-[#0A66C2] hover:bg-[#084e96] dark:bg-[#101214] dark:border dark:border-white/15 dark:hover:border-[#ffb81c] dark:hover:text-[#ffb81c] text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-xs"
                  aria-label="Connect on LinkedIn"
                >
                  <i className="bx bxl-linkedin-square text-base"></i>
                  <span>LinkedIn</span>
                </a>

                <a
                  href={studentProfile.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] bg-[#1877F2] hover:bg-[#125ec4] dark:bg-[#101214] dark:border dark:border-white/15 dark:hover:border-[#ffb81c] dark:hover:text-[#ffb81c] text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shadow-xs"
                  aria-label="Connect on Facebook"
                >
                  <i className="bx bxl-facebook-square text-base"></i>
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
