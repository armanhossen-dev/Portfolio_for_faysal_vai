import React, { useState } from 'react';
import { projects, projectCategories, allSheets } from '../data/projectsData';

export default function ProjectsSection({ onSelectProject, onOpenSheetLightbox, onOpenSheetReview }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 border-b border-studio-200 dark:border-studio-800 bg-[#FAFAF8] dark:bg-studio-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-studio-200 dark:border-studio-800">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-blueprint-600 dark:text-blueprint-400 font-semibold mb-2">
              <span className="w-2 h-2 bg-blueprint-500 rounded-xs"></span>
              PORTFOLIO SELECTION // STUDIO PROJECTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-studio-950 dark:text-white uppercase tracking-tight">
              Featured Architectural Work
            </h2>
            <p className="text-sm sm:text-base text-studio-600 dark:text-studio-400 mt-2 max-w-2xl">
              Curated studio projects addressing urban informal settlements, high-density housing, industrial zoning ecology, and phenomenological heritage.
            </p>
          </div>

          <div className="mt-4 md:mt-0 font-mono text-xs text-studio-500">
            SHOWING {filteredProjects.length} OF {projects.length} PROJECTS
          </div>
        </div>

        {/* Category Filters with accessible 44px touch targets */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-semibold">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 min-h-[44px] rounded-full border whitespace-nowrap transition-all flex items-center justify-center ${
                selectedCategory === cat
                  ? 'bg-studio-950 text-white dark:bg-white dark:text-studio-950 border-studio-950 dark:border-white shadow-sm'
                  : 'bg-white dark:bg-studio-900 text-studio-700 dark:text-studio-300 border-studio-200 dark:border-studio-800 hover:border-blueprint-500 hover:text-studio-950 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const projectSheets = project.sheets
              .map(id => allSheets.find(s => s.id === id))
              .filter(Boolean);

            return (
              <div
                key={project.id}
                className="group bg-white dark:bg-studio-900 rounded-lg border border-studio-200 dark:border-studio-800 overflow-hidden shadow-xs hover:shadow-xl hover:border-blueprint-400/60 dark:hover:border-blueprint-500/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image Thumbnail */}
                  <div 
                    className="relative aspect-[1.414/1] overflow-hidden bg-studio-100 dark:bg-studio-800 cursor-pointer"
                    onClick={() => onSelectProject(project)}
                  >
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Architectural Sheet Stamp */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <div className="font-mono text-[10px] font-bold px-2 py-1 bg-studio-950/80 text-white rounded backdrop-blur-xs border border-white/10">
                        PROJECT {project.projectNumber}
                      </div>
                      {project.award && (
                        <div className="font-mono text-[10px] font-bold px-2 py-1 bg-amber-500 text-white rounded backdrop-blur-xs flex items-center gap-1 shadow-md">
                          <i className="bx bxs-trophy"></i>
                          <span>WINNER</span>
                        </div>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 font-mono text-[10px] px-2 py-1 bg-blueprint-600/90 text-white rounded backdrop-blur-xs">
                      {project.sheets.length} SHEETS
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-studio-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (projectSheets[0]) onOpenSheetLightbox(projectSheets[0]);
                        }}
                        className="p-2.5 bg-studio-900/90 text-white rounded-full hover:bg-blueprint-600 transition-colors shadow-lg flex items-center justify-center"
                        title="Inspect technical drawing in high resolution"
                      >
                        <i className="bx bx-fullscreen text-lg text-white"></i>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                        className="px-3 py-2 bg-white text-studio-900 rounded-md font-mono text-xs font-semibold hover:bg-blueprint-50 transition-colors shadow-lg flex items-center gap-1.5"
                      >
                        <i className="bx bx-show text-base"></i> View Details
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Typology and Location */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-studio-500 dark:text-studio-400 mb-2">
                      <span className="truncate max-w-[65%]">{project.typology}</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => onSelectProject(project)}
                      className="font-display font-bold text-lg text-studio-950 dark:text-white group-hover:text-blueprint-600 dark:group-hover:text-blueprint-400 transition-colors cursor-pointer leading-snug mb-1"
                    >
                      {project.title}
                    </h3>
                    <div className="text-xs font-medium text-ochre-600 dark:text-ochre-400 mb-3">
                      {project.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-studio-600 dark:text-studio-400 line-clamp-3 leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>

                    {/* Sheet Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-studio-100 dark:border-studio-800">
                      {projectSheets.map((sh, idx) => (
                        <button
                          key={sh.id}
                          onClick={() => onOpenSheetLightbox(sh)}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-studio-100 dark:bg-studio-800 text-studio-700 dark:text-studio-300 hover:bg-blueprint-100 dark:hover:bg-blueprint-900/60 hover:text-blueprint-600 transition-colors border border-studio-200 dark:border-studio-700"
                          title={`Inspect ${sh.sheetNumber}`}
                        >
                          {sh.sheetNumber}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3 bg-studio-50/80 dark:bg-studio-950/60 border-t border-studio-100 dark:border-studio-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-studio-500 dark:text-studio-400 flex items-center gap-1">
                    <i className="bx bx-map text-sm text-ochre-500"></i>
                    <span className="truncate max-w-[130px]">{project.location}</span>
                  </span>
                  
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-blueprint-600 dark:text-blueprint-400 font-semibold hover:underline flex items-center gap-1"
                  >
                    <span>Explore</span>
                    <i className="bx bx-link-external text-xs"></i>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
