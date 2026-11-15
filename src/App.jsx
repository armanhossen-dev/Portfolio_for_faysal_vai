import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import AchievementsSection from './components/AchievementsSection';
import TechnicalSheetsSection from './components/TechnicalSheetsSection';
import ResearchHeritageSection from './components/ResearchHeritageSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import SheetPresentationModal from './components/SheetPresentationModal';
import LightboxViewer from './components/LightboxViewer';
import ScrollToTopButton from './components/ScrollToTopButton';
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
  const [lightboxGallery, setLightboxGallery] = useState(null);
  const [sheetReviewOpen, setSheetReviewOpen] = useState(false);
  const [initialSheetIndex, setInitialSheetIndex] = useState(0);

  // Initialize Lenis High-Performance Smooth Scroll Engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.3,
      infinite: false,
    });

    window.__lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global smooth intercept for hash anchor links
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      if (href === '#' || href === '#top') {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.1 });
        return;
      }

      const targetEl = document.querySelector(href);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: -56, duration: 1.1 });
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Global protection: prevent dragging and right-click context menu on all photos/images
    const handleImageContextMenu = (e) => {
      const isImage = 
        e.target.tagName === 'IMG' || 
        e.target.closest('img') || 
        e.target.closest('.photo') || 
        e.target.closest('.stage') ||
        e.target.closest('[data-photo]');
      if (isImage) {
        e.preventDefault();
      }
    };

    const handleImageDragStart = (e) => {
      const isImage = 
        e.target.tagName === 'IMG' || 
        e.target.closest('img') || 
        e.target.closest('.photo') || 
        e.target.closest('.stage') ||
        e.target.closest('[data-photo]');
      if (isImage) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleImageContextMenu);
    document.addEventListener('dragstart', handleImageDragStart);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('contextmenu', handleImageContextMenu);
      document.removeEventListener('dragstart', handleImageDragStart);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Pause Lenis background scrolling when any modal/lightbox is active
  useEffect(() => {
    const isModalOpen = Boolean(selectedProject || sheetReviewOpen || lightboxSheet);
    if (isModalOpen) {
      window.__lenis?.stop();
    } else {
      window.__lenis?.start();
    }
  }, [selectedProject, sheetReviewOpen, lightboxSheet]);

  // Sync Dark Mode
  useEffect(() => {
    localStorage.setItem('faysal_arch_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Clean up any old theme attributes
    localStorage.removeItem('faysal_ui_theme');
    document.documentElement.removeAttribute('data-ui-theme');
  }, [darkMode]);

  const handleOpenSheetReview = (index = 0) => {
    setInitialSheetIndex(index);
    setSheetReviewOpen(true);
  };

  const handleOpenLightbox = (sheet, customGallery = null) => {
    setLightboxSheet(sheet);
    setLightboxGallery(customGallery || sheet?.gallery || null);
  };

  const handleLightboxNext = () => {
    if (!lightboxSheet) return;
    const activeList = lightboxGallery || lightboxSheet.gallery || allSheets;
    const currentIndex = activeList.findIndex(
      (s) =>
        (s.id && lightboxSheet.id && s.id === lightboxSheet.id) ||
        (s.full && (s.full === lightboxSheet.full || s.full === lightboxSheet.src)) ||
        (s.src && (s.src === lightboxSheet.full || s.src === lightboxSheet.src)) ||
        s.title === lightboxSheet.title
    );
    if (currentIndex !== -1 && activeList.length > 1) {
      const nextIndex = (currentIndex + 1) % activeList.length;
      const nextItem = activeList[nextIndex];
      setLightboxSheet({
        ...nextItem,
        gallery: activeList
      });
    }
  };

  const handleLightboxPrev = () => {
    if (!lightboxSheet) return;
    const activeList = lightboxGallery || lightboxSheet.gallery || allSheets;
    const currentIndex = activeList.findIndex(
      (s) =>
        (s.id && lightboxSheet.id && s.id === lightboxSheet.id) ||
        (s.full && (s.full === lightboxSheet.full || s.full === lightboxSheet.src)) ||
        (s.src && (s.src === lightboxSheet.full || s.src === lightboxSheet.src)) ||
        s.title === lightboxSheet.title
    );
    if (currentIndex !== -1 && activeList.length > 1) {
      const prevIndex = (currentIndex - 1 + activeList.length) % activeList.length;
      const prevItem = activeList[prevIndex];
      setLightboxSheet({
        ...prevItem,
        gallery: activeList
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-studio-900 dark:bg-[#101214] dark:text-[#eceeef] selection:bg-[#ffb81c] selection:text-[#101214] transition-colors duration-300">
      
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

        {/* Recent Architectural Achievements (ARCHFEST 2026 Winner) */}
        <AchievementsSection 
          onSelectProject={setSelectedProject}
          onOpenLightbox={handleOpenLightbox}
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
          onClose={() => {
            setLightboxSheet(null);
            setLightboxGallery(null);
          }}
          onNavigateNext={handleLightboxNext}
          onNavigatePrev={handleLightboxPrev}
        />
      )}

      {/* Floating Side Right Scroll-to-Top Button */}
      <ScrollToTopButton />

    </div>
  );
}
