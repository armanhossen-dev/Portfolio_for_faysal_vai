import React from 'react';
import { allSheets } from '../data/projectsData';

export default function TechnicalSheetsSection({ onSelectSheet, onOpenSheetReview }) {
  return (
    <section id="sheets" className="py-20 border-b border-studio-200 dark:border-white/10 bg-white dark:bg-[#101214] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-studio-200 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-blueprint-600 dark:text-[#ffb81c] font-semibold mb-2">
              <span className="w-2 h-2 bg-blueprint-500 dark:bg-[#ffb81c] rounded-xs"></span>
              PORTFOLIO ATLAS // DRAWINGS ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-studio-950 dark:text-white uppercase tracking-tight">
              Technical Drawing Sheets
            </h2>
            <p className="text-sm sm:text-base text-studio-600 dark:text-[#9aa1a8] mt-2 max-w-2xl font-sans">
              Complete folio of masterplans, unit layouts, building sections, environmental zoning diagrams, and large-format concept boards.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => onOpenSheetReview(0)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[44px] bg-studio-950 text-white dark:bg-[#ffb81c] dark:text-[#101214] hover:bg-blueprint-600 dark:hover:bg-white text-xs font-bold rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <i className="bx bx-book-open text-base"></i>
              <span>Full Portfolio Presentation Mode</span>
            </button>
          </div>
        </div>

        {/* Sheets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allSheets.map((sheet, index) => (
            <div
              key={sheet.id}
              className="group bg-[#FAFAF8] dark:bg-[#181b1e] rounded-lg border border-studio-200 dark:border-white/10 overflow-hidden hover:border-blueprint-400 dark:hover:border-[#ffb81c] transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-lg"
            >
              <div>
                {/* Thumbnail */}
                <div 
                  className="relative aspect-[1.414/1] overflow-hidden bg-studio-100 dark:bg-[#101214] cursor-pointer"
                  onClick={() => onSelectSheet(sheet)}
                >
                  <img
                    src={sheet.thumb}
                    alt={sheet.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  
                  {/* Sheet Number Badge */}
                  <div className="absolute top-2 left-2 font-mono text-[10px] font-bold px-2 py-0.5 bg-studio-900/90 dark:bg-black/90 text-white rounded border border-studio-700 dark:border-white/20 backdrop-blur-xs">
                    {sheet.sheetNumber}
                  </div>

                  {/* Category Stamp */}
                  <div className="absolute top-2 right-2 font-mono text-[9px] font-bold px-1.5 py-0.5 bg-blueprint-600/80 dark:bg-[#ffb81c] text-white dark:text-[#101214] rounded">
                    {sheet.category}
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute inset-0 bg-studio-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-2 bg-studio-900 dark:bg-[#101214] text-white dark:text-[#ffb81c] rounded-full shadow-lg border border-studio-700 dark:border-white/20 flex items-center justify-center">
                      <i className="bx bx-fullscreen text-base"></i>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="text-[11px] font-mono text-blueprint-600 dark:text-[#ffb81c] font-semibold mb-1 truncate">
                    {sheet.projectTitle}
                  </div>
                  <h4 
                    onClick={() => onSelectSheet(sheet)}
                    className="font-display font-bold text-sm text-studio-900 dark:text-white line-clamp-1 group-hover:text-blueprint-600 dark:group-hover:text-[#ffb81c] cursor-pointer transition-colors"
                  >
                    {sheet.title}
                  </h4>
                  <p className="text-[11px] text-studio-500 dark:text-[#9aa1a8] line-clamp-2 mt-1 leading-relaxed font-sans">
                    {sheet.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-4 py-2.5 bg-studio-100/60 dark:bg-[#101214]/60 border-t border-studio-200 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={() => onSelectSheet(sheet)}
                  className="text-studio-700 dark:text-white hover:text-blueprint-600 dark:hover:text-[#ffb81c] flex items-center gap-1 font-medium transition-colors"
                >
                  <i className="bx bx-show text-blueprint-500 dark:text-[#ffb81c] text-sm"></i>
                  <span>Inspect Drawing</span>
                </button>

                <button
                  onClick={() => onOpenSheetReview(index)}
                  className="text-studio-500 hover:text-studio-900 dark:text-[#9aa1a8] dark:hover:text-[#ffb81c] flex items-center transition-colors"
                  title="View in sequence"
                >
                  <i className="bx bx-right-arrow-alt text-base"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}