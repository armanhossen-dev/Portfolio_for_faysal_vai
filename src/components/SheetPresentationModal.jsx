import React, { useState, useEffect, useRef } from 'react';
import { allSheets } from '../data/projectsData';

export default function SheetPresentationModal({ 
  isOpen, 
  initialSheetIndex = 0, 
  onClose,
  onOpenLightbox
}) {
  const [currentIndex, setCurrentIndex] = useState(initialSheetIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [showInfo, setShowInfo] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialSheetIndex);
      setZoomLevel(1);
    }
  }, [isOpen, initialSheetIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  if (!isOpen) return null;

  const currentSheet = allSheets[currentIndex];

  const handleNext = () => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev < allSheets.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setZoomLevel(1);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : allSheets.length - 1));
  };

  const handleZoomIn = () => setZoomLevel((z) => Math.min(z + 0.4, 3));
  const handleZoomOut = () => setZoomLevel((z) => Math.max(z - 0.4, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-studio-950/95 text-white flex flex-col backdrop-blur-md select-none"
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-studio-800 bg-studio-900/80">
        
        {/* Left: Sheet Title and Number */}
        <div className="flex items-center gap-3">
          <div className="px-2.5 py-1 bg-[#ffb81c]/20 border border-[#ffb81c]/40 text-[#ffb81c] font-mono text-xs font-bold rounded">
            {currentSheet.sheetNumber}
          </div>
          <div>
            <h3 className="font-display font-semibold text-sm sm:text-base text-white truncate max-w-xs sm:max-w-md">
              {currentSheet.title}
            </h3>
            <p className="text-xs font-mono text-studio-400">
              {currentSheet.projectTitle} • {currentSheet.year}
            </p>
          </div>
        </div>

        {/* Right: Controls & Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center bg-studio-800/80 rounded border border-studio-700 p-0.5 font-mono text-xs">
            <button 
              onClick={handleZoomOut} 
              className="p-1.5 hover:text-[#ffb81c] hover:bg-studio-700 rounded transition-colors flex items-center justify-center cursor-pointer"
              title="Zoom out (-)"
            >
              <i className="bx bx-zoom-out text-base"></i>
            </button>
            <span className="px-2 text-studio-300 min-w-[48px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button 
              onClick={handleZoomIn} 
              className="p-1.5 hover:text-[#ffb81c] hover:bg-studio-700 rounded transition-colors flex items-center justify-center cursor-pointer"
              title="Zoom in (+)"
            >
              <i className="bx bx-zoom-in text-base"></i>
            </button>
            {zoomLevel !== 1 && (
              <button 
                onClick={handleResetZoom} 
                className="p-1.5 text-[#ffb81c] hover:bg-studio-700 rounded transition-colors border-l border-studio-700 ml-1 flex items-center justify-center cursor-pointer"
                title="Reset zoom"
              >
                <i className="bx bx-reset text-base"></i>
              </button>
            )}
          </div>

          {/* Toggle info button */}
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`p-1.5 rounded border transition-colors flex items-center justify-center cursor-pointer ${
              showInfo 
                ? 'bg-[#ffb81c]/20 border-[#ffb81c]/50 text-[#ffb81c]' 
                : 'border-studio-700 text-studio-400 hover:bg-studio-800'
            }`}
            title="Toggle sheet details"
          >
            <i className="bx bx-info-circle text-lg"></i>
          </button>

          {/* Fullscreen button */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded border border-studio-700 text-studio-400 hover:bg-studio-800 transition-colors hidden sm:flex items-center justify-center cursor-pointer"
            title="Toggle fullscreen"
          >
            {isFullscreen ? (
              <i className="bx bx-exit-fullscreen text-lg"></i>
            ) : (
              <i className="bx bx-fullscreen text-lg"></i>
            )}
          </button>

          {/* Open in full lightbox */}
          <button
            onClick={() => {
              onClose();
              onOpenLightbox(currentSheet);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-studio-800 hover:bg-studio-700 border border-studio-700 rounded transition-colors cursor-pointer text-white hover:text-[#ffb81c]"
            title="Deep pan & high-res inspect"
          >
            <i className="bx bx-link-external text-[#ffb81c] text-xs"></i>
            <span className="hidden md:inline">Inspect High-Res</span>
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-red-500/20 hover:text-red-400 border border-transparent hover:border-red-500/40 text-studio-400 transition-colors ml-1 flex items-center justify-center cursor-pointer"
            title="Close Sheet Review (Esc)"
          >
            <i className="bx bx-x text-2xl leading-none"></i>
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative flex-1 overflow-hidden flex items-center justify-center p-2 sm:p-6 bg-studio-950">
        
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-studio-900/80 hover:bg-blueprint-600 text-white border border-studio-700 shadow-xl transition-all transform hover:scale-110 focus:outline-hidden flex items-center justify-center"
          title="Previous Sheet (Left Arrow)"
        >
          <i className="bx bx-chevron-left text-2xl"></i>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-studio-900/80 hover:bg-blueprint-600 text-white border border-studio-700 shadow-xl transition-all transform hover:scale-110 focus:outline-hidden flex items-center justify-center"
          title="Next Sheet (Right Arrow)"
        >
          <i className="bx bx-chevron-right text-2xl"></i>
        </button>

        {/* Architectural Sheet Display */}
        <div className="w-full h-full flex items-center justify-center overflow-auto p-2">
          <div 
            className="transition-transform duration-200 ease-out max-w-full max-h-full flex items-center justify-center shadow-2xl rounded-sm overflow-hidden border border-studio-800 bg-white"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <img
              src={currentSheet.optimized}
              alt={currentSheet.title}
              className="max-h-[75vh] w-auto object-contain select-none shadow-2xl"
              draggable="false"
            />
          </div>
        </div>

        {/* Floating Sheet Information Card */}
        {showInfo && (
          <div className="absolute bottom-24 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-20 bg-studio-900/90 backdrop-blur-md border border-studio-700 p-4 rounded-lg shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-studio-800">
              <span className="font-mono text-xs text-[#ffb81c] font-semibold">
                ARCHITECTURAL BRIEF
              </span>
              <span className="font-mono text-[11px] text-studio-400">
                {currentIndex + 1} of {allSheets.length}
              </span>
            </div>
            <h4 className="font-display font-bold text-sm text-white mb-1">
              {currentSheet.title}
            </h4>
            <p className="text-xs text-studio-300 leading-relaxed font-sans mb-3">
              {currentSheet.description}
            </p>
            <div className="flex items-center justify-between text-[11px] font-mono text-studio-400 pt-2 border-t border-studio-800">
              <span>CATEGORY: {currentSheet.category}</span>
              <a 
                href={currentSheet.full} 
                target="_blank" 
                rel="noreferrer" 
                className="text-[#ffb81c] hover:underline flex items-center gap-1"
              >
                <i className="bx bx-download text-xs"></i> Full File
              </a>
            </div>
          </div>
        )}

      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="border-t border-studio-800 bg-studio-900/95 py-2.5 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <div className="text-xs font-mono text-studio-400 whitespace-nowrap hidden md:block">
            SHEET NAVIGATION [{currentIndex + 1}/{allSheets.length}]
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            {allSheets.map((sheet, idx) => (
              <button
                key={sheet.id}
                onClick={() => {
                  setZoomLevel(1);
                  setCurrentIndex(idx);
                }}
                className={`relative flex-shrink-0 rounded overflow-hidden aspect-[1.414/1] w-14 sm:w-16 border-2 transition-all cursor-pointer ${
                  currentIndex === idx 
                    ? 'border-[#ffb81c] scale-105 shadow-md ring-2 ring-[#ffb81c]/40' 
                    : 'border-studio-700 opacity-60 hover:opacity-100 hover:border-studio-500'
                }`}
                title={`${sheet.sheetNumber}: ${sheet.title}`}
              >
                <img
                  src={sheet.thumb}
                  alt={sheet.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 inset-x-0 bg-studio-950/80 text-[8px] font-mono text-center text-white py-0.5 truncate">
                  {sheet.sheetNumber}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 whitespace-nowrap text-xs font-mono text-studio-400">
            <span className="hidden lg:inline">USE [←] [→] KEYS</span>
          </div>

        </div>
      </div>
    </div>
  );
}
