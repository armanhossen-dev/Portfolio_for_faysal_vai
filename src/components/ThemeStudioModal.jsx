import React, { useState } from 'react';
import { UI_THEMES, THEME_CATEGORIES } from '../themes/themeConfig';

export default function ThemeStudioModal({ 
  isOpen, 
  onClose, 
  activeThemeId, 
  onSelectTheme 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  if (!isOpen) return null;

  const filteredThemes = UI_THEMES.filter((theme) => {
    const matchesSearch = 
      theme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      theme.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'All' || theme.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="fixed inset-0 z-50 bg-studio-950/80 backdrop-blur-md overflow-y-auto flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white dark:bg-studio-900 rounded-xl shadow-2xl border border-studio-200 dark:border-studio-700 overflow-hidden my-6 flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-studio-200 dark:border-studio-800 bg-studio-50 dark:bg-studio-950/60">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blueprint-600 text-white flex items-center justify-center shadow-sm">
              <i className="bx bx-palette text-xl"></i>
            </div>
            <div>
              <h2 className="font-display font-bold text-lg sm:text-xl text-studio-900 dark:text-white leading-tight flex items-center gap-2">
                <span>UI Style Studio</span>
                <span className="text-xs font-mono px-2 py-0.5 bg-blueprint-100 dark:bg-blueprint-900/60 text-blueprint-700 dark:text-blueprint-300 rounded font-normal">
                  57 UI Styles
                </span>
              </h2>
              <p className="text-xs text-studio-500 dark:text-studio-400 font-mono">
                Transform the entire portfolio into any design system aesthetic
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-studio-500 hover:text-studio-900 dark:hover:text-white hover:bg-studio-200 dark:hover:bg-studio-800 transition-colors flex items-center justify-center"
            title="Close (Esc)"
          >
            <i className="bx bx-x text-2xl leading-none"></i>
          </button>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="p-4 sm:p-6 border-b border-studio-100 dark:border-studio-800 space-y-3 bg-white dark:bg-studio-900">
          {/* Search Input */}
          <div className="relative">
            <i className="bx bx-search absolute left-3.5 top-1/2 -translate-y-1/2 text-studio-400 text-base"></i>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 57 styles (e.g. matrix, claymorphism, neobrutalism, terracotta, ant, vintage, glass)..."
              className="w-full pl-10 pr-4 py-2 text-xs bg-studio-50 dark:bg-studio-950 border border-studio-200 dark:border-studio-700 rounded-lg focus:border-blueprint-500 focus:outline-hidden dark:text-white font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-studio-400 hover:text-studio-700 dark:hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[11px] font-mono">
            {THEME_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-studio-900 text-white dark:bg-blueprint-600 dark:text-white font-bold shadow-xs'
                    : 'bg-studio-100 dark:bg-studio-800 text-studio-600 dark:text-studio-300 hover:bg-studio-200 dark:hover:bg-studio-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Themes Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredThemes.map((theme) => {
            const isActive = activeThemeId === theme.id;

            return (
              <div
                key={theme.id}
                onClick={() => onSelectTheme(theme)}
                className={`group p-3.5 rounded-lg border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                  isActive
                    ? 'border-blueprint-500 ring-2 ring-blueprint-500/30 bg-blueprint-50/50 dark:bg-blueprint-950/40 shadow-sm'
                    : 'border-studio-200 dark:border-studio-800 bg-[#FAFAF8] dark:bg-studio-950/60 hover:border-blueprint-400 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Bar: Name & Swatch */}
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-display font-bold text-sm text-studio-900 dark:text-white group-hover:text-blueprint-600 dark:group-hover:text-blueprint-400">
                        {theme.name}
                      </span>
                      {isActive && (
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 bg-blueprint-600 text-white rounded">
                          ACTIVE
                        </span>
                      )}
                    </div>

                    {/* Color Swatches */}
                    <div className="flex items-center gap-1">
                      <span 
                        className="w-3 h-3 rounded-full border border-black/10"
                        style={{ backgroundColor: theme.colors.primary }}
                        title={`Primary: ${theme.colors.primary}`}
                      ></span>
                      <span 
                        className="w-3 h-3 rounded-full border border-black/10"
                        style={{ backgroundColor: theme.colors.secondary }}
                        title={`Secondary: ${theme.colors.secondary}`}
                      ></span>
                      <span 
                        className="w-3 h-3 rounded-full border border-black/10"
                        style={{ backgroundColor: theme.colors.surface }}
                        title={`Surface: ${theme.colors.surface}`}
                      ></span>
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="text-[10px] font-mono text-studio-500 dark:text-studio-400 mb-2">
                    {theme.category}
                  </div>

                  {/* Description */}
                  <p className="text-[11px] text-studio-600 dark:text-studio-400 line-clamp-2 leading-relaxed font-sans mb-3">
                    {theme.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-2 border-t border-studio-100 dark:border-studio-800/80 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-studio-400 text-[10px]">
                    style: {theme.id}
                  </span>
                  <span className={`font-semibold flex items-center gap-1 ${
                    isActive ? 'text-blueprint-600 dark:text-blueprint-400' : 'text-studio-500 group-hover:text-blueprint-500'
                  }`}>
                    {isActive ? 'Applied' : 'Apply Style'} 
                    <i className="bx bx-check text-xs"></i>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-studio-50 dark:bg-studio-950 border-t border-studio-200 dark:border-studio-800 flex items-center justify-between text-xs font-mono">
          <div className="text-studio-500 dark:text-studio-400">
            Showing {filteredThemes.length} of {UI_THEMES.length} styles
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelectTheme(null)}
              className="px-3 py-1.5 rounded text-studio-600 dark:text-studio-400 hover:bg-studio-200 dark:hover:bg-studio-800 transition-colors"
            >
              Reset to Default Architecture Studio
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-studio-900 dark:bg-white text-white dark:text-studio-900 rounded font-medium hover:bg-blueprint-600 dark:hover:bg-blueprint-400 transition-colors"
            >
              Done
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
