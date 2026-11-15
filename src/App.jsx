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
import ThemeStudioModal from './components/ThemeStudioModal';
import ThemeSwitcherFloatingPill from './components/ThemeSwitcherFloatingPill';
import { allSheets } from './data/projectsData';
import { UI_THEMES } from './themes/themeConfig';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('faysal_arch_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 57 UI Design System Themes State
  const [activeTheme, setActiveTheme] = useState(() => {
    const savedThemeId = localStorage.getItem('faysal_ui_theme');
    if (savedThemeId) {
      return UI_THEMES.find(t => t.id === savedThemeId) || null;
    }
    return null;
  });
  const [themeStudioOpen, setThemeStudioOpen] = useState(false);

  // Modals state
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxSheet, setLightboxSheet] = useState(null);
  const [sheetReviewOpen, setSheetReviewOpen] = useState(false);
  const [initialSheetIndex, setInitialSheetIndex] = useState(0);

  // Sync Dark Mode
  useEffect(() => {
    localStorage.setItem('faysal_arch_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sync 57 UI Themes
  useEffect(() => {
    if (activeTheme) {
      localStorage.setItem('faysal_ui_theme', activeTheme.id);
      document.documentElement.setAttribute('data-ui-theme', activeTheme.id);
      
      // Inject theme colors as CSS variables
      if (activeTheme.colors) {
        document.documentElement.style.setProperty('--theme-primary', activeTheme.colors.primary);
        document.documentElement.style.setProperty('--theme-secondary', activeTheme.colors.secondary);
        document.documentElement.style.setProperty('--theme-surface', activeTheme.colors.surface);
        document.documentElement.style.setProperty('--theme-text', activeTheme.colors.text);
      }
    } else {
      localStorage.removeItem('faysal_ui_theme');
      document.documentElement.removeAttribute('data-ui-theme');
      document.documentElement.style.removeProperty('--theme-primary');
      document.documentElement.style.removeProperty('--theme-secondary');
      document.documentElement.style.removeProperty('--theme-surface');
      document.documentElement.style.removeProperty('--theme-text');
    }
  }, [activeTheme]);

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
        activeTheme={activeTheme}
        onOpenThemeStudio={() => setThemeStudioOpen(true)}
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

      {/* Floating 57 UI Design System Switcher Pill */}
      <ThemeSwitcherFloatingPill 
        activeTheme={activeTheme}
        onOpenStudio={() => setThemeStudioOpen(true)}
      />

      {/* 57 UI Design System Theme Studio Modal */}
      <ThemeStudioModal 
        isOpen={themeStudioOpen}
        onClose={() => setThemeStudioOpen(false)}
        activeThemeId={activeTheme?.id || null}
        onSelectTheme={(theme) => setActiveTheme(theme)}
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
