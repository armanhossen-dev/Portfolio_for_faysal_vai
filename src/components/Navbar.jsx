import React, { useState, useEffect } from 'react';
import { studentProfile } from '../data/projectsData';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  onOpenSheetReview, 
  activeTheme,
  onOpenThemeStudio
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Technical Sheets', href: '#sheets' },
    { name: 'Research & Heritage', href: '#research' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-studio-950/90 backdrop-blur-md shadow-sm border-b border-studio-200 dark:border-studio-800 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Architectural Masthead */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-studio-900 dark:border-white flex flex-col items-center justify-center font-mono font-bold text-xs leading-none bg-white dark:bg-studio-900 group-hover:border-blueprint-500 transition-colors">
              <span className="text-blueprint-600 dark:text-blueprint-400">FA</span>
              <span className="text-[9px] text-studio-500">ARCH</span>
            </div>
            <div>
              <div className="font-display font-bold text-base sm:text-lg tracking-tight uppercase flex items-center gap-2">
                <span>{studentProfile.name}</span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 bg-studio-100 dark:bg-studio-800 text-studio-600 dark:text-studio-300 rounded border border-studio-200 dark:border-studio-700">
                  B.ARCH
                </span>
              </div>
              <p className="text-[11px] font-mono text-studio-500 dark:text-studio-400 uppercase tracking-widest hidden sm:block">
                B.Arch Portfolio • Daffodil Int. University
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-studio-600 dark:text-studio-300 hover:text-blueprint-600 dark:hover:text-blueprint-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blueprint-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Toggles */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* 57 UI Design System Themes Switcher Button */}
            <button
              onClick={onOpenThemeStudio}
              className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] text-xs font-bold bg-studio-100 dark:bg-studio-800 text-studio-800 dark:text-studio-100 border border-studio-200 dark:border-studio-700 rounded-lg hover:border-blueprint-500 transition-colors shadow-2xs"
              title="Switch UI Style (Choose from 57 UI Design System Styles)"
            >
              <i className="bx bx-palette text-base leading-none text-blueprint-600 dark:text-blueprint-400"></i>
              <span className="hidden md:inline">{activeTheme ? activeTheme.name : '57 UI Styles'}</span>
              <span className="md:hidden">57 Styles</span>
            </button>

            {/* Social Links: LinkedIn & Facebook with accessible 44x44px touch targets */}
            <a
              href={studentProfile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-lg text-studio-700 dark:text-studio-200 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-studio-100 dark:hover:bg-studio-800 border border-studio-200 dark:border-studio-700 transition-colors flex items-center justify-center"
              title="View Faysal Ahmed on LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <i className="bx bxl-linkedin text-lg leading-none"></i>
            </a>

            <a
              href={studentProfile.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-lg text-studio-700 dark:text-studio-200 hover:text-[#1877F2] dark:hover:text-[#1877F2] hover:bg-studio-100 dark:hover:bg-studio-800 border border-studio-200 dark:border-studio-700 transition-colors flex items-center justify-center"
              title="View Faysal Ahmed on Facebook"
              aria-label="Facebook Profile"
            >
              <i className="bx bxl-facebook text-lg leading-none"></i>
            </a>

            {/* Sheet Presentation Mode Button */}
            <button
              onClick={() => onOpenSheetReview(0)}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 min-h-[44px] text-xs font-bold bg-studio-950 dark:bg-white text-white dark:text-studio-950 hover:bg-blueprint-600 dark:hover:bg-blueprint-500 dark:hover:text-white rounded-lg transition-colors shadow-xs"
              title="Open Architectural Portfolio Flipbook / Sheet Review"
            >
              <i className="bx bx-book-open text-base leading-none"></i>
              <span>Review Sheets</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-11 h-11 rounded-lg text-studio-700 dark:text-studio-200 hover:bg-studio-100 dark:hover:bg-studio-800 border border-studio-200 dark:border-studio-700 transition-colors flex items-center justify-center"
              aria-label="Toggle theme"
              title={darkMode ? "Switch to Architectural White" : "Switch to Studio Graphite"}
            >
              {darkMode ? (
                <i className="bx bx-sun text-amber-400 text-lg leading-none"></i>
              ) : (
                <i className="bx bx-moon text-studio-800 text-lg leading-none"></i>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 rounded-lg lg:hidden text-studio-800 dark:text-studio-200 hover:bg-studio-100 dark:hover:bg-studio-800 border border-studio-200 dark:border-studio-700 flex items-center justify-center"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <i className="bx bx-x text-xl leading-none"></i>
              ) : (
                <i className="bx bx-menu text-xl leading-none"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-studio-900 border-b border-studio-200 dark:border-studio-800 px-6 py-5 shadow-xl animate-fadeIn">
          <div className="flex flex-col gap-4 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-studio-700 dark:text-studio-200 hover:text-blueprint-600 dark:hover:text-blueprint-400 py-1 border-b border-studio-100 dark:border-studio-800"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenThemeStudio();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-mono font-medium bg-amber-500 text-white rounded-md shadow"
              >
                <i className="bx bx-palette text-base leading-none"></i>
                Choose UI Style ({activeTheme ? activeTheme.name : '57 Themes'})
              </button>
              
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSheetReview(0);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-mono font-medium bg-blueprint-600 text-white rounded-md shadow"
              >
                <i className="bx bx-book-open text-base leading-none"></i>
                Open Portfolio Sheet Review
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
