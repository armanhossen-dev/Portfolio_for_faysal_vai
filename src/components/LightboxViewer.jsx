import React, { useState, useEffect, useRef } from 'react';

export default function LightboxViewer({ sheet, onClose, onNavigateNext, onNavigatePrev }) {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [magnifierActive, setMagnifierActive] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, inside: false });
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const LOUPE_SIZE = 190;
  const ZOOM_FACTOR = 2.6;

  useEffect(() => {
    // Reset zoom, position, and loupe when sheet changes
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setMousePos({ x: 0, y: 0, inside: false });
  }, [sheet]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sheet) return;
      if (e.key === 'Escape') onClose();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-' || e.key === '_') handleZoomOut();
      if (e.key === '0') handleReset();
      if (e.key === 'm' || e.key === 'M') setMagnifierActive((prev) => !prev);
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
    setMousePos({ x: 0, y: 0, inside: false });
  };

  // Mouse drag handlers for panning (when zoom > 1)
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

  // Circle magnifier handlers (when zoom === 1)
  const handleImgMouseMove = (e) => {
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

  const handleImgMouseEnter = (e) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    setImgDimensions({ width: rect.width, height: rect.height });
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      inside: true
    });
  };

  const handleImgMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, inside: false }));
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
          {/* Toggle Loupe Magnifier */}
          <button
            onClick={() => setMagnifierActive(!magnifierActive)}
            className={`p-1.5 rounded border transition-colors flex items-center justify-center cursor-pointer ${
              magnifierActive 
                ? 'bg-[#ffb81c] text-[#101214] border-[#ffb81c] shadow-xs' 
                : 'text-studio-300 hover:text-white bg-studio-800 hover:bg-studio-700 border-studio-700'
            }`}
            title={magnifierActive ? "Circle Magnifier Active (Press M to toggle)" : "Enable Circle Magnifier (Press M)"}
          >
            <i className="bx bx-search-alt text-base"></i>
          </button>

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

        {/* The Technical Image with Circle Magnifier Loupe */}
        <div
          className="relative transition-transform duration-75 ease-out select-none flex items-center justify-center shadow-2xl rounded-sm bg-white border border-studio-800"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transformOrigin: 'center center'
          }}
          onMouseMove={zoom === 1 ? handleImgMouseMove : undefined}
          onMouseEnter={zoom === 1 ? handleImgMouseEnter : undefined}
          onMouseLeave={zoom === 1 ? handleImgMouseLeave : undefined}
        >
          <img
            ref={imgRef}
            src={sheet.full || sheet.optimized}
            alt={sheet.title}
            className={`max-h-[85vh] max-w-[92vw] object-contain select-none shadow-2xl rounded-sm ${
              magnifierActive && zoom === 1 ? 'cursor-crosshair' : ''
            }`}
            draggable="false"
          />

          {/* Precision Architectural Circle Magnifier Loupe */}
          {magnifierActive && mousePos.inside && zoom === 1 && (
            <div
              className="pointer-events-none absolute rounded-full border-2 border-[#ffb81c] shadow-[0_0_35px_rgba(0,0,0,0.85)] z-30 transition-transform duration-75 ease-out"
              style={{
                width: `${LOUPE_SIZE}px`,
                height: `${LOUPE_SIZE}px`,
                left: `${mousePos.x - LOUPE_SIZE / 2}px`,
                top: `${mousePos.y - LOUPE_SIZE / 2}px`,
                backgroundImage: `url(${sheet.full || sheet.optimized})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${imgDimensions.width * ZOOM_FACTOR}px ${imgDimensions.height * ZOOM_FACTOR}px`,
                backgroundPosition: `${-(mousePos.x * ZOOM_FACTOR - LOUPE_SIZE / 2)}px ${-(mousePos.y * ZOOM_FACTOR - LOUPE_SIZE / 2)}px`,
                backgroundColor: '#ffffff'
              }}
            >
              {/* Precision Crosshair Center Point */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-2 h-2 rounded-full border border-black/70 bg-[#ffb81c] shadow-xs"></div>
              </div>
              {/* Glass Optical Glare */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none"></div>
              {/* Loupe HUD Tag */}
              <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-black/85 text-[10px] font-mono font-bold text-[#ffb81c] border border-white/20 shadow-md">
                2.6×
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Footer Status Bar */}
      <div className="px-6 py-2 border-t border-studio-800 bg-studio-900/90 flex items-center justify-between font-mono text-[11px] text-studio-400 z-20">
        <div>
          ARCHITECTURAL INSPECTION MODE // {sheet.sheetNumber}
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span className="text-[#ffb81c]">[M] MAGNIFIER {magnifierActive ? 'ON' : 'OFF'}</span>
          <span>ZOOM: {Math.round(zoom * 100)}%</span>
          <span>KEYBOARD: [+][-] ZOOM • [ESC] CLOSE</span>
        </div>
      </div>
    </div>
  );
}
