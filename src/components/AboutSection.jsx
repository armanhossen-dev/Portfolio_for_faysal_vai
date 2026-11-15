import React from 'react';
import { 
  GraduationCap, 
  Compass, 
  Layers, 
  Cpu, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Mail, 
  Calendar 
} from 'lucide-react';
import { studentProfile } from '../data/projectsData';

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
    <section id="about" className="py-20 border-b border-studio-200 dark:border-studio-800 bg-white dark:bg-studio-900/40 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-blueprint-600 dark:text-blueprint-400 font-semibold mb-2">
            <span className="w-2 h-2 bg-blueprint-500 rounded-xs"></span>
            CURRICULUM VITAE // ACADEMIC PROFILE
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-studio-950 dark:text-white uppercase tracking-tight">
            About Faysal Ahmed
          </h2>
          <p className="text-sm sm:text-base text-studio-600 dark:text-studio-400 mt-2">
            Final-year Architecture Candidate at Daffodil International University, Dhaka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Academic Credentials & Manifesto */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Bio Card */}
            <div className="bg-[#FAFAF8] dark:bg-studio-900 p-6 sm:p-8 rounded-xl border border-studio-200 dark:border-studio-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-studio-200 dark:border-studio-800 font-mono text-xs">
                <span className="text-studio-500">DEGREE PROGRAM:</span>
                <span className="font-bold text-studio-900 dark:text-white">B.Arch (Final Year Candidate)</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-studio-200 dark:border-studio-800 font-mono text-xs">
                <span className="text-studio-500">STUDENT IDENTIFICATION:</span>
                <span className="font-bold text-blueprint-600 dark:text-blueprint-400">{studentProfile.studentId}</span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-studio-200 dark:border-studio-800 font-mono text-xs">
                <span className="text-studio-500">INSTITUTION:</span>
                <span className="font-bold text-studio-900 dark:text-white">{studentProfile.university}</span>
              </div>

              <div className="pt-2">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-studio-900 dark:text-white mb-2">
                  Architectural Philosophy
                </h3>
                <p className="text-sm sm:text-base text-studio-700 dark:text-studio-300 leading-relaxed font-sans">
                  "Architecture is not merely the creation of objects, but an ethical mediation between society, local resources, and the fragile ecosystem. My design research centers on empowering vulnerable communities, utilizing climate-sensitive passive methods, and re-imagining how high-density urban environments can remain humane, verdant, and dignified."
                </p>
              </div>
            </div>

            {/* Academic Studio Trajectory */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-base uppercase tracking-wider text-studio-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blueprint-500" />
                Studio Progression & Design Trajectory
              </h3>

              <div className="space-y-3">
                {academicStudios.map((stu, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-lg bg-[#FAFAF8] dark:bg-studio-900 border border-studio-200 dark:border-studio-800 font-sans"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1 mb-1 font-mono text-xs">
                      <span className="font-bold text-blueprint-600 dark:text-blueprint-400">
                        {stu.studio}
                      </span>
                      <span className="text-studio-500 bg-studio-100 dark:bg-studio-800 px-2 py-0.5 rounded text-[10px]">
                        {stu.term}
                      </span>
                    </div>
                    <div className="font-display font-semibold text-sm text-studio-900 dark:text-white mb-1">
                      {stu.project}
                    </div>
                    <div className="text-xs text-studio-600 dark:text-studio-400 leading-relaxed">
                      {stu.focus}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Skills, Software, and Competencies */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Architectural Competencies */}
            <div className="bg-[#FAFAF8] dark:bg-studio-900 p-6 rounded-xl border border-studio-200 dark:border-studio-800 space-y-4">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-studio-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-blueprint-500" />
                Core Architectural Competencies
              </h3>

              <ul className="space-y-2">
                {studentProfile.skills.architectural.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-studio-700 dark:text-studio-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Software & Technical Arsenal */}
            <div className="bg-[#FAFAF8] dark:bg-studio-900 p-6 rounded-xl border border-studio-200 dark:border-studio-800 space-y-4">
              <h3 className="font-display font-bold text-sm uppercase tracking-wider text-studio-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-ochre-500" />
                Technical & Software Proficiency
              </h3>

              <div className="flex flex-wrap gap-2">
                {studentProfile.skills.software.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded bg-white dark:bg-studio-950 text-studio-800 dark:text-studio-200 border border-studio-200 dark:border-studio-700 font-mono text-xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Contact & CV Banner */}
            <div className="p-5 rounded-xl bg-studio-900 dark:bg-studio-950 text-white border border-studio-800 space-y-3">
              <h4 className="font-display font-bold text-base text-white">
                Looking for Studio Collaboration?
              </h4>
              <p className="text-xs text-studio-300 leading-relaxed font-sans">
                Open for architectural internships, junior architect roles, thesis collaboration, and sustainable urban research projects.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blueprint-600 hover:bg-blueprint-500 text-white font-mono text-xs font-semibold rounded transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Get in Touch</span>
                </a>

                <a
                  href={studentProfile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0A66C2] hover:bg-[#084e96] text-white font-mono text-xs font-semibold rounded transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
                  </svg>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
