import React, { useState } from 'react';
import { recentAchievements, projects } from '../data/projectsData';

export default function AchievementsSection({ onSelectProject, onOpenLightbox }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const achievement = recentAchievements[0];

  const winningProject = projects.find(p => p.id === achievement.projectId);

  const galleryItems = [
    {
      src: achievement.images.winnerWithBoard,
      title: "Winner with Project Board",
      caption: "Faysal Ahmed holding the Winner Trophy in front of his project board 'Between Water & Home : Toward an Inclusive and Adaptive Korail'",
      tag: "Best Design Award"
    },
    {
      src: achievement.images.trophy,
      title: "ARCHFEST 2026 Trophy & Inscription",
      caption: "Award of Excellence for Outstanding Achievement in Architectural Design Competition (Conceptual to Execution)",
      tag: "Trophy Closeup"
    },
    {
      src: achievement.images.ceremony,
      title: "Official Award Ceremony on Stage",
      caption: "Presented on stage by Department of Architecture faculty members and university dignitaries at Daffodil International University",
      tag: "Stage Ceremony"
    }
  ];

  const handlePhotoClick = (photo) => {
    if (onOpenLightbox) {
      onOpenLightbox({
        title: photo.title,
        projectTitle: `${achievement.competition} (${achievement.year})`,
        sheetNumber: "HONOR",
        category: "Achievement",
        full: photo.src,
        description: photo.caption
      });
    } else {
      setSelectedPhoto(photo);
    }
  };

  return (
    <section id="achievements" className="py-20 border-b border-studio-200 dark:border-studio-800 bg-white dark:bg-studio-900/60 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-600 dark:text-amber-400 font-semibold mb-2">
            <span className="w-2.5 h-2.5 bg-amber-500 rounded-full animate-pulse"></span>
            HONORS & RECENT ACHIEVEMENTS // COMPETITION VICTORIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-studio-950 dark:text-white uppercase tracking-tight">
            Recent Architectural Achievements
          </h2>
          <p className="text-sm sm:text-base text-studio-600 dark:text-studio-400 mt-2">
            Official design competition victories, jury accolades, and recognized academic excellence at Daffodil International University.
          </p>
        </div>

        {/* Featured Main Achievement Showcase Card */}
        <div className="bg-[#FAFAF8] dark:bg-studio-950 rounded-2xl border border-studio-300 dark:border-studio-800 overflow-hidden shadow-2xl">
          
          {/* Architectural Deep Slate & Brass Header */}
          <div className="bg-studio-950 text-white px-6 sm:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/40 text-2xl text-amber-400 shadow-inner">
                <i className="bx bxs-trophy"></i>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-white/15 text-white uppercase tracking-wider">
                    {achievement.event}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/20 text-amber-300 uppercase tracking-wider border border-amber-500/30">
                    {achievement.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase tracking-tight mt-1 text-white">
                  {achievement.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center md:justify-end gap-3.5">
              <div className="text-left md:text-right">
                <div className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400">
                  {achievement.awardType} • {achievement.year}
                </div>
                <div className="text-sm font-semibold text-studio-200 mt-0.5">
                  {achievement.organizer}
                </div>
              </div>
              <img 
                src="./images/diu-logo.png" 
                alt="Daffodil International University Crest" 
                className="w-11 h-11 object-contain shrink-0 p-1 bg-white rounded-lg border border-white/20 shadow-sm hidden sm:block" 
              />
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* 3 Interactive Photo Gallery Cards */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-studio-500 dark:text-studio-400 uppercase tracking-wider flex items-center gap-1.5">
                  <i className="bx bx-images text-base text-amber-500"></i>
                  Ceremony & Exhibition Documentation (Click to Inspect)
                </span>
                <span className="text-[11px] font-mono text-studio-400">
                  3 Photos
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {galleryItems.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handlePhotoClick(item)}
                    className="group relative bg-white dark:bg-studio-900 rounded-xl overflow-hidden border border-studio-200 dark:border-studio-800 hover:border-amber-400 dark:hover:border-amber-500 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-studio-100 dark:bg-studio-900">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/75 text-white backdrop-blur-xs">
                        {item.tag}
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 text-xs font-mono">
                        <i className="bx bx-fullscreen text-lg"></i>
                        <span>Enlarge Photo</span>
                      </div>
                    </div>

                    <div className="p-3.5">
                      <div className="font-display font-bold text-xs sm:text-sm text-studio-900 dark:text-white mb-1">
                        {item.title}
                      </div>
                      <p className="text-[11px] text-studio-500 dark:text-studio-400 leading-snug line-clamp-2 font-sans">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inscription & Recognition Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-4 border-t border-studio-200 dark:border-studio-800">
              
              {/* Left Side: Summary & Citation */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <div className="text-[10px] font-mono text-amber-600 dark:text-amber-400 uppercase tracking-widest font-semibold mb-1">
                    OFFICIAL JURY CITATION
                  </div>
                  <blockquote className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border-l-4 border-amber-500 text-xs sm:text-sm text-studio-800 dark:text-studio-200 italic leading-relaxed">
                    "{achievement.citation}"
                  </blockquote>
                </div>

                <p className="text-xs sm:text-sm text-studio-600 dark:text-studio-300 leading-relaxed font-sans">
                  {achievement.summary}
                </p>

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono font-semibold text-studio-900 dark:text-white uppercase tracking-wider">
                    Key Highlights:
                  </div>
                  <ul className="space-y-1.5 text-xs text-studio-600 dark:text-studio-300 font-sans">
                    {achievement.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <i className="bx bx-check-double text-base text-emerald-500 shrink-0 mt-0.5"></i>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Winning Project Card */}
              <div className="lg:col-span-5 bg-white dark:bg-studio-900 p-5 rounded-xl border border-studio-200 dark:border-studio-800 space-y-3.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-blueprint-600 dark:text-blueprint-400 uppercase tracking-wider font-semibold">
                    WINNING PROJECT
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 rounded font-semibold">
                    Project 02
                  </span>
                </div>

                <div className="aspect-[16/9] rounded-lg overflow-hidden bg-studio-100 dark:bg-studio-800 border border-studio-200 dark:border-studio-700">
                  <img
                    src="./images/optimized/project2-sheet1.jpg"
                    alt={achievement.winningProject}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <div className="font-display font-bold text-sm sm:text-base text-studio-950 dark:text-white">
                    Between Water & Home
                  </div>
                  <div className="text-xs text-blueprint-600 dark:text-blueprint-400 font-medium">
                    Toward an Inclusive and Adaptive Korail
                  </div>
                  <p className="text-xs text-studio-500 dark:text-studio-400 mt-1 line-clamp-2">
                    Circular waste-to-craft cooperative and engineered bio-filtration wetland island mitigating lake eutrophication.
                  </p>
                </div>

                {winningProject && onSelectProject && (
                  <button
                    onClick={() => onSelectProject(winningProject)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] bg-studio-950 dark:bg-white text-white dark:text-studio-950 hover:bg-blueprint-600 dark:hover:bg-blueprint-500 dark:hover:text-white rounded-lg text-sm font-bold transition-colors shadow-xs"
                  >
                    <span>View Full Winning Project Details</span>
                    <i className="bx bx-right-arrow-alt text-lg"></i>
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
