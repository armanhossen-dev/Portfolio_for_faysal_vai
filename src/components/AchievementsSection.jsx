import React, { useState } from 'react';
import { recentAchievements, projects } from '../data/projectsData';

export default function AchievementsSection({ onSelectProject, onOpenLightbox }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const achievement = recentAchievements[0];

  const winningProject = projects.find(p => p.id === achievement.projectId);

  const galleryItems = [
    {
      id: "archfest-winner-board",
      src: achievement.images.winnerWithBoard,
      title: "Winner with Project Board",
      caption: "Faysal Ahmed holding the Winner Trophy in front of his project board 'Between Water & Home : Toward an Inclusive and Adaptive Korail'",
      tag: "Best Design Award",
      objectPosition: "object-[50%_20%]",
      sheetNumber: "HONOR 01/03"
    },
    {
      id: "archfest-trophy",
      src: achievement.images.trophy,
      title: "ARCHFEST 2026 Trophy & Inscription",
      caption: "Award of Excellence for Outstanding Achievement in Architectural Design Competition (Conceptual to Execution)",
      tag: "Trophy Closeup",
      sheetNumber: "HONOR 02/03"
    },
    {
      id: "archfest-ceremony",
      src: achievement.images.ceremony,
      title: "Official Award Ceremony on Stage",
      caption: "Presented on stage by Department of Architecture faculty members and university dignitaries at Daffodil International University",
      tag: "Stage Ceremony",
      sheetNumber: "HONOR 03/03"
    }
  ];

  const achievementSheets = galleryItems.map((item, idx) => ({
    id: item.id || `achievement-doc-${idx + 1}`,
    title: item.title,
    projectTitle: `${achievement.competition} (${achievement.year})`,
    sheetNumber: item.sheetNumber || `HONOR 0${idx + 1}/03`,
    category: "Achievement",
    full: item.src,
    optimized: item.src,
    src: item.src,
    description: item.caption,
    tag: item.tag
  }));

  const handlePhotoClick = (photo, idx = 0) => {
    if (onOpenLightbox) {
      const targetSheet = achievementSheets[idx] || {
        id: photo.id || `achievement-doc-${idx + 1}`,
        title: photo.title,
        projectTitle: `${achievement.competition} (${achievement.year})`,
        sheetNumber: photo.sheetNumber || `HONOR 0${idx + 1}/03`,
        category: "Achievement",
        full: photo.src,
        optimized: photo.src,
        src: photo.src,
        description: photo.caption
      };
      onOpenLightbox(targetSheet, achievementSheets);
    } else {
      setSelectedPhoto(photo);
    }
  };

  return (
    <section id="achievements" className="py-20 border-b border-studio-200 dark:border-white/10 bg-white dark:bg-[#101214] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-600 dark:text-[#ffb81c] font-semibold mb-2">
            <span className="w-2.5 h-2.5 bg-amber-500 dark:bg-[#ffb81c] rounded-full animate-pulse"></span>
            HONORS & RECENT ACHIEVEMENTS // COMPETITION VICTORIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-studio-950 dark:text-white uppercase tracking-tight">
            Recent Architectural Achievements
          </h2>
          <p className="text-sm sm:text-base text-studio-600 dark:text-[#9aa1a8] mt-2 font-sans">
            Competition victories, jury awards, and academic honors at DIU.
          </p>
        </div>

        {/* Featured Main Achievement Showcase Card */}
        <div className="bg-[#FAFAF8] dark:bg-[#181b1e] rounded-2xl border border-studio-300 dark:border-white/10 overflow-hidden shadow-2xl">
          
          {/* Architectural Deep Slate & Brass Header */}
          <div className="bg-studio-950 dark:bg-black text-white px-6 sm:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 dark:bg-[#ffb81c]/20 flex items-center justify-center shrink-0 border border-amber-500/40 dark:border-[#ffb81c]/40 text-2xl text-amber-400 dark:text-[#ffb81c] shadow-inner">
                <i className="bx bxs-trophy"></i>
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-white/15 text-white uppercase tracking-wider">
                    {achievement.event}
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/20 dark:bg-[#ffb81c]/20 text-amber-300 dark:text-[#ffb81c] uppercase tracking-wider border border-amber-500/30 dark:border-[#ffb81c]/30">
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
                <div className="text-xs font-mono font-semibold uppercase tracking-widest text-amber-400 dark:text-[#ffb81c]">
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
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-8 space-y-8">
            
            {/* 3 Interactive Photo Gallery Cards */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-studio-500 dark:text-[#9aa1a8] uppercase tracking-wider flex items-center gap-1.5">
                  <i className="bx bx-images text-base text-amber-500 dark:text-[#ffb81c]"></i>
                  Ceremony & Exhibition Documentation (Click to Inspect)
                </span>
                <span className="text-[11px] font-mono text-studio-400 dark:text-[#9aa1a8]">
                  3 Photos
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {galleryItems.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => handlePhotoClick(item, idx)}
                    className="group relative bg-white dark:bg-[#101214] rounded-xl overflow-hidden border border-studio-200 dark:border-white/10 hover:border-amber-400 dark:hover:border-[#ffb81c] transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-between"
                  >
                    <div 
                      className="relative aspect-[4/3] overflow-hidden bg-studio-100 dark:bg-[#101214]"
                      onContextMenu={(e) => e.preventDefault()}
                    >
                      <img
                        src={item.src}
                        alt={item.title}
                        className={`w-full h-full object-cover ${item.objectPosition || "object-center"} group-hover:scale-105 transition-transform duration-500`}
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
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
                      <p className="text-[11px] text-studio-500 dark:text-[#9aa1a8] leading-snug line-clamp-2 font-sans">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inscription & Recognition Details */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-4 border-t border-studio-200 dark:border-white/10">
              
              {/* Left Side: Summary & Citation */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <div className="text-[10px] font-mono text-amber-600 dark:text-[#ffb81c] uppercase tracking-widest font-semibold mb-1">
                    OFFICIAL JURY CITATION
                  </div>
                  <blockquote className="p-4 rounded-xl bg-amber-50/70 dark:bg-[#101214] border-l-4 border-amber-500 dark:border-l-[#ffb81c] border-y border-r border-studio-200/60 dark:border-white/10 text-xs sm:text-sm text-studio-900 dark:text-[#eceeef] italic leading-relaxed shadow-2xs font-sans">
                    "{achievement.citation}"
                  </blockquote>
                </div>

                <p className="text-xs sm:text-sm text-studio-600 dark:text-[#9aa1a8] leading-relaxed font-sans">
                  {achievement.summary}
                </p>

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-mono font-semibold text-studio-900 dark:text-white uppercase tracking-wider">
                    Key Highlights:
                  </div>
                  <ul className="space-y-1.5 text-xs text-studio-600 dark:text-[#9aa1a8] font-sans">
                    {achievement.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <i className="bx bx-check-double text-base text-emerald-500 dark:text-[#ffb81c] shrink-0 mt-0.5"></i>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Winning Project Card */}
              <div className="lg:col-span-5 bg-white dark:bg-[#101214] p-5 rounded-xl border border-studio-200 dark:border-white/10 space-y-3.5 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-blueprint-600 dark:text-[#ffb81c] uppercase tracking-wider font-semibold">
                    WINNING PROJECT
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-100 dark:bg-[#ffb81c]/20 text-amber-800 dark:text-[#ffb81c] rounded font-semibold border dark:border-[#ffb81c]/30">
                    Project 02
                  </span>
                </div>

                <div 
                  className="aspect-[16/9] rounded-lg overflow-hidden bg-studio-100 dark:bg-[#181b1e] border border-studio-200 dark:border-white/10"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <img
                    src="./images/optimized/project2-sheet1.jpg"
                    alt={achievement.winningProject}
                    className="w-full h-full object-cover"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </div>

                <div>
                  <div className="font-display font-bold text-sm sm:text-base text-studio-950 dark:text-white">
                    Between Water & Home
                  </div>
                  <div className="text-xs text-blueprint-600 dark:text-[#ffb81c] font-medium">
                    Toward an Inclusive and Adaptive Korail
                  </div>
                  <p className="text-xs text-studio-500 dark:text-[#9aa1a8] mt-1 line-clamp-2 font-sans">
                    Circular waste-to-craft cooperative and engineered bio-filtration wetland island mitigating lake eutrophication.
                  </p>
                </div>

                {winningProject && onSelectProject && (
                  <button
                    onClick={() => onSelectProject(winningProject)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] bg-studio-950 text-white dark:bg-[#ffb81c] dark:text-[#101214] hover:bg-blueprint-600 dark:hover:bg-white rounded-lg text-sm font-bold transition-colors shadow-xs"
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