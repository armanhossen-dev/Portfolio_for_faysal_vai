import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import TechnicalSheetsSection from './components/TechnicalSheetsSection';
import ResearchHeritageSection from './components/ResearchHeritageSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import SheetPresentationModal from './components/SheetPresentationModal';
import LightboxViewer from './components/LightboxViewer';
import { allSheets } from './data/projectsData';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('faysal_arch_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Modals state
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxSheet, setLightboxSheet] = useState(null);
  const [sheetReviewOpen, setSheetReviewOpen] = useState(false);
  const [initialSheetIndex, setInitialSheetIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem('faysal_arch_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenSheetReview = (index = 0) => {
    setInitialSheetIndex(index);
    setSheetReviewOpen(true);
  };

  const handleOpenLightbox = (sheet) => {
    setLightboxSheet(sheet);
  };

  const handleLightboxNext = () => {
    if (!lightboxSheet) return;
    const currentIndex = allSheets.findIndex(s => s.id === lightboxSheet.id);
    const nextIndex = currentIndex < allSheets.length - 1 ? currentIndex + 1 : 0;
    setLightboxSheet(allSheets[nextIndex]);
  };

  const handleLightboxPrev = () => {
    if (!lightboxSheet) return;
    const currentIndex = allSheets.findIndex(s => s.id === lightboxSheet.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : allSheets.length - 1;
    setLightboxSheet(allSheets[prevIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenSheetReview={handleOpenSheetReview}
      />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenSheetReview={handleOpenSheetReview}
          onSelectSheet={handleOpenLightbox}
        />

        {/* Featured Studio Projects */}
        <ProjectsSection 
          onSelectProject={setSelectedProject}
          onOpenSheetLightbox={handleOpenLightbox}
          onOpenSheetReview={handleOpenSheetReview}
        />

        {/* Technical Drawing Sheets Archive */}
        <TechnicalSheetsSection 
          onSelectSheet={handleOpenLightbox}
          onOpenSheetReview={handleOpenSheetReview}
        />

        {/* In-depth Research (Commons Module) & Heritage (Teota Jomidar Bari) */}
        <ResearchHeritageSection 
          onOpenSheetLightbox={handleOpenLightbox}
        />

        {/* About Faysal Ahmed & CV */}
        <AboutSection />

        {/* Contact & Inquiries */}
        <ContactSection 
          onOpenSheetReview={handleOpenSheetReview}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenSheetReview={handleOpenSheetReview}
      />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onOpenSheetLightbox={handleOpenLightbox}
        />
      )}

      {/* Sequential Sheet Presentation Modal (Flipbook / Crit Mode) */}
      <SheetPresentationModal 
        isOpen={sheetReviewOpen}
        initialSheetIndex={initialSheetIndex}
        onClose={() => setSheetReviewOpen(false)}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Dedicated Pan / Zoom High-Res Lightbox */}
      {lightboxSheet && (
        <LightboxViewer 
          sheet={lightboxSheet}
          onClose={() => setLightboxSheet(null)}
          onNavigateNext={handleLightboxNext}
          onNavigatePrev={handleLightboxPrev}
        />
      )}
    </div>
  );
}
