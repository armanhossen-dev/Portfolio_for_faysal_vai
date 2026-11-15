import React from 'react';

export default function ThemeSwitcherFloatingPill({ activeTheme, onOpenStudio }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 select-none animate-fadeIn">
      <button
        onClick={onOpenStudio}
        className="group flex items-center gap-2.5 px-3.5 py-2.5 bg-studio-900/90 dark:bg-studio-900/90 text-white rounded-full shadow-2xl hover:shadow-blueprint-500/20 border border-studio-700/80 hover:border-blueprint-400 backdrop-blur-md transition-all duration-300 transform hover:scale-105 active:scale-95"
        title="Open UI Style Studio (Choose from 57 UI Design System Styles)"
        aria-label="Open UI Style Studio"
      >
        <span className="w-6 h-6 rounded-full bg-blueprint-600 flex items-center justify-center text-white shadow-xs group-hover:rotate-45 transition-transform duration-300">
          <i className="bx bx-palette text-sm"></i>
        </span>

        <div className="text-left font-mono">
          <div className="text-[9px] text-blueprint-400 font-semibold tracking-wider uppercase leading-none">
            UI DESIGN SYSTEM
          </div>
          <div className="text-xs font-bold text-white flex items-center gap-1 leading-tight">
            <span>{activeTheme ? activeTheme.name : '57 UI Styles'}</span>
            <i className="bx bx-chevron-up text-xs text-studio-400 group-hover:text-white transition-colors"></i>
          </div>
        </div>

        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-studio-800 text-studio-300 border border-studio-700">
          57
        </span>
      </button>
    </div>
  );
}
