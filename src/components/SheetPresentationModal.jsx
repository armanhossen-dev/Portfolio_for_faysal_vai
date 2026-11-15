import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Download, 
  Maximize2, 
  Minimize2, 
  Layers, 
  Info, 
  ExternalLink 
} from 'lucide-react';
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
          <div className="px-2.5 py-1 bg-blueprint-600/30 border border-blueprint-500/40 text-blueprint-400 font-mono text-xs font-bold rounded">
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
              className="p-1.5 hover:text-blueprint-400 hover:bg-studio-700 rounded transition-colors"
              title="Zoom out (-)"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="px-2 text-studio-300 min-w-[48px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button 
              onClick={handleZoomIn} 
              className="p-1.5 hover:text-blueprint-400 hover:bg-studio-700 rounded transition-colors"
              title="Zoom in (+)"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            {zoomLevel !== 1 && (
              <button 
                onClick={handleResetZoom} 
                className="p-1.5 text-ochre-400 hover:bg-studio-700 rounded transition-colors border-l border-studio-700 ml-1"
                title="Reset zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Toggle info button */}
          <button
            onClick={() => setShowInfo(!showInfo)}
            className={`p-2 rounded border transition-colors ${
              showInfo 
                ? 'bg-blueprint-600/30 border-blueprint-500 text-blueprint-300' 
                : 'border-studio-700 text-studio-400 hover:bg-studio-800'
            }`}
            title="Toggle sheet details"
          >
            <Info className="w-4 h-4" />
          </button>

          {/* Fullscreen button */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded border border-studio-700 text-studio-400 hover:bg-studio-800 transition-colors hidden sm:block"
            title="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          {/* Open in full lightbox */}
          <button
            onClick={() => {
              onClose();
              onOpenLightbox(currentSheet);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-studio-800 hover:bg-studio-700 border border-studio-700 rounded transition-colors"
            title="Deep pan & high-res inspect"
          >
            <ExternalLink className="w-3.5 h-3.5 text-blueprint-400" />
            <span className="hidden md:inline">Inspect High-Res</span>
          </button>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-red-500/20 hover:text-red-400 border border-transparent hover:border-red-500/40 text-studio-400 transition-colors ml-1"
            title="Close Sheet Review (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative flex-1 overflow-hidden flex items-center justify-center p-2 sm:p-6 bg-studio-950">
        
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-studio-900/80 hover:bg-blueprint-600 text-white border border-studio-700 shadow-xl transition-all transform hover:scale-110 focus:outline-hidden"
          title="Previous Sheet (Left Arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-studio-900/80 hover:bg-blueprint-600 text-white border border-studio-700 shadow-xl transition-all transform hover:scale-110 focus:outline-hidden"
          title="Next Sheet (Right Arrow)"
        >
          <ChevronRight className="w-6 h-6" />
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
              <span className="font-mono text-xs text-blueprint-400 font-semibold">
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
                className="text-blueprint-400 hover:underline flex items-center gap-1"
              >
                <Download className="w-3 h-3" /> Full File
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
                className={`relative flex-shrink-0 rounded overflow-hidden aspect-[1.414/1] w-14 sm:w-16 border-2 transition-all ${
                  currentIndex === idx 
                    ? 'border-blueprint-400 scale-105 shadow-md ring-2 ring-blueprint-500/40' 
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
