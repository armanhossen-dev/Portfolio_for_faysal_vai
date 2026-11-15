import React, { useState, useRef } from 'react';
import { allSheets } from '../data/projectsData';

export default function ProjectDetailModal({ project, onClose, onOpenSheetLightbox }) {
  const [activeSheetTab, setActiveSheetTab] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, inside: false });
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);

  const LOUPE_SIZE = 180;
  const ZOOM_FACTOR = 2.5;

  if (!project) return null;

  // Find sheet objects belonging to this project
  const projectSheets = project.sheets.map(id => allSheets.find(s => s.id === id)).filter(Boolean);
  const currentSheet = projectSheets[activeSheetTab] || projectSheets[0];

  const handleMouseMove = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
      setMousePos({ x, y, inside: true });
      setImgDimensions({ width: rect.width, height: rect.height });
    } else {
      setMousePos((prev) => ({ ...prev, inside: false }));
    }
  };

  const handleMouseEnter = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    setImgDimensions({ width: rect.width, height: rect.height });
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      inside: true
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, inside: false }));
  };

  return (
    <div className="fixed inset-0 z-50 bg-studio-950/80 backdrop-blur-md overflow-y-auto flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white dark:bg-[#181b1e] rounded-xl shadow-2xl border border-studio-200 dark:border-white/10 overflow-hidden my-6">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-studio-200 dark:border-white/10 bg-studio-50 dark:bg-[#101214]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-studio-900 text-white dark:bg-[#ffb81c] dark:text-[#101214] rounded">
              PROJECT {project.projectNumber}
            </span>
            <div>
              <h2 className="font-display font-bold text-lg sm:text-xl text-studio-900 dark:text-white leading-tight">
                {project.title}
              </h2>
              <p className="text-xs font-mono text-blueprint-600 dark:text-[#ffb81c]">
                {project.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-studio-500 hover:text-studio-900 dark:hover:text-white hover:bg-studio-200 dark:hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer"
            title="Close (Esc)"
          >
            <i className="bx bx-x text-2xl leading-none"></i>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-studio-600 dark:text-[#eceeef] pb-4 border-b border-studio-100 dark:border-white/10">
            <span className="flex items-center gap-1.5">
              <i className="bx bx-layer text-blueprint-500 dark:text-[#ffb81c] text-sm"></i>
              <strong>Typology:</strong> {project.typology}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="bx bxs-map text-ochre-500 dark:text-[#ffb81c] text-sm"></i>
              <strong>Location:</strong> {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <i className="bx bx-calendar text-emerald-500 dark:text-[#ffb81c] text-sm"></i>
              <strong>Semester:</strong> {project.year}
            </span>
          </div>

          {/* Interactive Technical Sheets Viewport */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-semibold text-sm sm:text-base text-studio-900 dark:text-white flex items-center gap-2">
                <i className="bx bx-file text-blueprint-500 dark:text-[#ffb81c] text-base"></i>
                Technical Portfolio Sheets ({projectSheets.length})
              </h3>
              
              {/* Sheet Switcher Tabs if multiple */}
              {projectSheets.length > 1 && (
                <div className="flex items-center gap-1 p-1 bg-studio-100 dark:bg-[#101214] rounded-md font-mono text-xs border border-transparent dark:border-white/10">
                  {projectSheets.map((sh, idx) => (
                    <button
                      key={sh.id}
                      onClick={() => setActiveSheetTab(idx)}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeSheetTab === idx
                          ? 'bg-white dark:bg-[#ffb81c] text-blueprint-600 dark:text-[#101214] shadow-xs font-bold'
                          : 'text-studio-600 dark:text-[#9aa1a8] hover:text-studio-900 dark:hover:text-white'
                      }`}
                    >
                      {sh.sheetNumber}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Current Sheet Card */}
            {currentSheet && (
              <div className="relative group bg-studio-100 dark:bg-[#101214] rounded-lg overflow-hidden border border-studio-200 dark:border-white/10">
                <div 
                  className="relative aspect-[1.414/1] max-h-[460px] w-full flex items-center justify-center cursor-crosshair overflow-hidden"
                  onClick={() => onOpenSheetLightbox(currentSheet)}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    ref={imgRef}
                    src={currentSheet.optimized}
                    alt={currentSheet.title}
                    className="w-full h-full object-contain select-none"
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />

                  {/* Circular Magnifier Loupe */}
                  {mousePos.inside && (
                    <div
                      className="pointer-events-none absolute rounded-full border-2 border-[#ffb81c] shadow-[0_0_30px_rgba(0,0,0,0.85)] z-30 transition-transform duration-75 ease-out"
                      style={{
                        width: `${LOUPE_SIZE}px`,
                        height: `${LOUPE_SIZE}px`,
                        left: `${mousePos.x - LOUPE_SIZE / 2}px`,
                        top: `${mousePos.y - LOUPE_SIZE / 2}px`,
                        backgroundImage: `url(${currentSheet.full || currentSheet.optimized})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: `${imgDimensions.width * ZOOM_FACTOR}px ${imgDimensions.height * ZOOM_FACTOR}px`,
                        backgroundPosition: `${-(mousePos.x * ZOOM_FACTOR - LOUPE_SIZE / 2)}px ${-(mousePos.y * ZOOM_FACTOR - LOUPE_SIZE / 2)}px`,
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-1.5 h-1.5 rounded-full border border-black/70 bg-[#ffb81c]"></div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none"></div>
                      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/85 text-[9px] font-mono font-bold text-[#ffb81c] border border-white/20 shadow-md">
                        2.5×
                      </span>
                    </div>
                  )}

                  {/* Action Hint Overlay */}
                  <div className="absolute top-3 right-3 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                    <span className="flex items-center gap-1.5 px-3 py-1 bg-black/80 text-[11px] font-mono text-[#ffb81c] rounded-full border border-white/15 backdrop-blur-md shadow-md">
                      <i className="bx bx-search-alt text-xs"></i>
                      <span>Hover Magnifier • Click to Inspect</span>
                    </span>
                  </div>
                </div>

                {/* Sheet Title Bar */}
                <div className="p-3 bg-white dark:bg-[#181b1e] border-t border-studio-200 dark:border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-mono font-bold text-blueprint-600 dark:text-[#ffb81c] mr-2">
                      {currentSheet.sheetNumber}
                    </span>
                    <span className="font-medium text-studio-900 dark:text-white">
                      {currentSheet.title}
                    </span>
                  </div>
                  <button
                    onClick={() => onOpenSheetLightbox(currentSheet)}
                    className="inline-flex items-center gap-1 font-mono text-blueprint-600 dark:text-[#ffb81c] hover:underline"
                  >
                    <i className="bx bx-show text-sm"></i>
                    <span>Inspect Sheet</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Architectural Concept & Narrative */}
          <div className="space-y-3">
            <h3 className="font-display font-bold text-base text-studio-900 dark:text-white uppercase tracking-wider text-xs border-b border-studio-200 dark:border-white/10 pb-2">
              Architectural Concept & Spatial Narrative
            </h3>
            <p className="text-sm sm:text-base text-studio-700 dark:text-[#eceeef] leading-relaxed font-sans">
              {project.conceptStatement}
            </p>
          </div>

          {/* Key Strategies & Spatial Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Key Strategies */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-studio-900 dark:text-white pb-2 border-b border-studio-200 dark:border-white/10">
                Key Design Strategies
              </h4>
              <ul className="space-y-2.5">
                {project.keyStrategies.map((strat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-studio-600 dark:text-[#eceeef] leading-relaxed">
                    <i className="bx bxs-check-circle text-emerald-500 dark:text-[#ffb81c] text-sm flex-shrink-0 mt-0.5"></i>
                    <span>{strat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Spatial Programs */}
            <div className="space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-studio-900 dark:text-white pb-2 border-b border-studio-200 dark:border-white/10">
                Spatial Programming
              </h4>
              <div className="space-y-2">
                {project.spatialPrograms.map((prog, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-studio-50 dark:bg-[#101214] border border-studio-200 dark:border-white/10 text-xs">
                    <div className="font-display font-semibold text-studio-900 dark:text-white mb-0.5">
                      {prog.name}
                    </div>
                    <div className="text-studio-600 dark:text-[#9aa1a8]">
                      {prog.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Technical Specifications Table */}
          {project.technicalData && (
            <div className="space-y-3">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-studio-900 dark:text-white pb-2 border-b border-studio-200 dark:border-white/10">
                Technical Data & Project Metrics
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {Object.entries(project.technicalData).map(([key, val]) => (
                  <div key={key} className="p-3 bg-white dark:bg-[#101214] rounded border border-studio-200 dark:border-white/10 font-mono text-xs">
                    <div className="text-studio-400 dark:text-[#9aa1a8] uppercase text-[10px] tracking-wider mb-1">
                      {key.replace(/([A-Z])/g, ' $1')}
                    </div>
                    <div className="font-medium text-studio-900 dark:text-white">
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-studio-50 dark:bg-[#101214] border-t border-studio-200 dark:border-white/10">
          <div className="font-mono text-xs text-studio-500 dark:text-[#9aa1a8]">
            Faysal Ahmed • B.Arch Portfolio
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono font-medium bg-studio-900 dark:bg-[#ffb81c] text-white dark:text-[#101214] rounded hover:bg-blueprint-600 dark:hover:bg-white transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
