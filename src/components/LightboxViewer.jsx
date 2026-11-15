import React, { useState, useEffect, useRef } from 'react';

export default function LightboxViewer({ sheet, onClose, onNavigateNext, onNavigatePrev }) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    // Reset zoom and position when sheet changes
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [sheet]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sheet) return;
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-' || e.key === '_') handleZoomOut();
      if (e.key === '0') handleReset();
      if (e.key === 'ArrowRight' && onNavigateNext) onNavigateNext();
      if (e.key === 'ArrowLeft' && onNavigatePrev) onNavigatePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sheet, zoom]);

  if (!sheet) return null;

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.5, 4));
  const handleZoomOut = () => {
    setZoom((z) => {
      const next = Math.max(z - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleReset = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  // Mouse drag handlers for panning
  const handleMouseDown = (e) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-studio-950/98 text-white flex flex-col backdrop-blur-xl select-none"
      onMouseUp={handleMouseUp}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-studio-800 bg-studio-900/90 z-20">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 font-mono text-xs font-bold bg-[#ffb81c] text-[#101214] rounded">
            {sheet.sheetNumber}
          </span>
          <div>
            <h3 className="font-display font-semibold text-sm sm:text-base text-white">
              {sheet.title}
            </h3>
            <p className="text-[11px] font-mono text-studio-400">
              {sheet.projectTitle} • Technical Sheet High-Resolution Inspection
            </p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="flex items-center bg-studio-800 rounded border border-studio-700 p-0.5 font-mono text-xs">
            <button 
              onClick={handleZoomOut} 
              className="p-1.5 hover:text-[#ffb81c] hover:bg-studio-700 rounded transition-colors flex items-center justify-center cursor-pointer"
              title="Zoom Out (-)"
            >
              <i className="bx bx-zoom-out text-base"></i>
            </button>
            <span className="px-3 min-w-[50px] text-center text-studio-200">
              {Math.round(zoom * 100)}%
            </span>
            <button 
              onClick={handleZoomIn} 
              className="p-1.5 hover:text-[#ffb81c] hover:bg-studio-700 rounded transition-colors flex items-center justify-center cursor-pointer"
              title="Zoom In (+)"
            >
              <i className="bx bx-zoom-in text-base"></i>
            </button>
            {zoom > 1 && (
              <button 
                onClick={handleReset} 
                className="p-1.5 text-[#ffb81c] hover:bg-studio-700 rounded transition-colors border-l border-studio-700 ml-1 flex items-center justify-center cursor-pointer"
                title="Reset View"
              >
                <i className="bx bx-reset text-base"></i>
              </button>
            )}
          </div>

          {/* Download Original Sheet */}
          <a
            href={sheet.full}
            download
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-studio-800 hover:bg-studio-700 border border-studio-700 text-white hover:text-[#ffb81c] rounded transition-colors"
            title="Download Full Resolution Sheet"
          >
            <i className="bx bx-download text-sm text-[#ffb81c]"></i>
            <span className="hidden sm:inline">Download</span>
          </a>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-red-500/20 hover:text-red-400 border border-transparent hover:border-red-500/30 text-studio-400 transition-colors flex items-center justify-center cursor-pointer"
            title="Close Lightbox (Esc)"
          >
            <i className="bx bx-x text-2xl leading-none"></i>
          </button>
        </div>
      </div>

      {/* Main Pan / Zoom Viewport */}
      <div 
        ref={containerRef}
        className={`relative flex-1 overflow-hidden flex items-center justify-center p-4 bg-[#0A0D14] ${
          zoom > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        {/* Navigation Arrows */}
        {onNavigatePrev && (
          <button
            onClick={onNavigatePrev}
            className="absolute left-4 z-20 p-3 rounded-full bg-studio-900/80 hover:bg-[#ffb81c] hover:text-[#101214] text-white border border-studio-700 shadow-xl transition-all flex items-center justify-center cursor-pointer"
            title="Previous Sheet"
          >
            <i className="bx bx-chevron-left text-2xl"></i>
          </button>
        )}

        {onNavigateNext && (
          <button
            onClick={onNavigateNext}
            className="absolute right-4 z-20 p-3 rounded-full bg-studio-900/80 hover:bg-[#ffb81c] hover:text-[#101214] text-white border border-studio-700 shadow-xl transition-all flex items-center justify-center cursor-pointer"
            title="Next Sheet"
          >
            <i className="bx bx-chevron-right text-2xl"></i>
          </button>
        )}

        {/* Drag Hint when Zoomed */}
        {zoom > 1 && (
          <div className="absolute top-4 left-4 z-20 font-mono text-xs bg-studio-900/80 px-2.5 py-1 rounded border border-studio-700 text-studio-300 flex items-center gap-1.5 pointer-events-none">
            <i className="bx bx-move text-[#ffb81c] text-sm"></i>
            <span>Click and drag to pan drawing</span>
          </div>
        )}

        {/* The Technical Image */}
        <div
          className="transition-transform duration-75 ease-out select-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transformOrigin: 'center center'
          }}
        >
          <img
            src={sheet.full || sheet.optimized}
            alt={sheet.title}
            className="max-h-[85vh] max-w-[92vw] object-contain shadow-2xl rounded-sm bg-white"
            draggable="false"
          />
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="px-6 py-2 border-t border-studio-800 bg-studio-900/90 flex items-center justify-between font-mono text-[11px] text-studio-400 z-20">
        <div>
          ARCHITECTURAL INSPECTION MODE // {sheet.sheetNumber}
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>ZOOM: {Math.round(zoom * 100)}%</span>
          <span>KEYBOARD: [+][-] ZOOM • [ESC] CLOSE</span>
        </div>
      </div>
    </div>
  );
}
