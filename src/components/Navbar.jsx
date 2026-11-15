import React, { useState, useEffect } from 'react';
import { studentProfile } from '../data/projectsData';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  onOpenSheetReview
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
        ? 'bg-white/95 dark:bg-studio-950/95 backdrop-blur-md shadow-sm border-b border-studio-200 dark:border-studio-800 py-3' 
        : 'bg-white/85 dark:bg-studio-950/85 backdrop-blur-md border-b border-studio-200/80 dark:border-studio-800/80 shadow-2xs py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Name Only - Clean, Bold Architectural Typographic Masthead */}
          <a href="#" className="group inline-flex items-center">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-studio-950 dark:text-white uppercase transition-colors group-hover:text-blueprint-600 dark:group-hover:text-blueprint-400">
              {studentProfile.name}
            </span>
          </a>

          {/* Desktop Nav Links — Architectural Frosted Capsule for Maximum Contrast in White & Dark Mode */}
          <nav className="hidden lg:flex items-center gap-1 bg-studio-100/95 dark:bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-studio-200 dark:border-white/15 shadow-2xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1 rounded-full text-xs font-bold text-studio-950 dark:text-white hover:text-white hover:bg-studio-950 dark:hover:bg-white dark:hover:text-studio-950 transition-all tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Toggles */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Social Links: LinkedIn & Facebook with accessible 44x44px touch targets */}
            <a
              href={studentProfile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-lg text-studio-900 dark:text-studio-100 bg-white/80 dark:bg-studio-900/80 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-studio-100 dark:hover:bg-studio-800 border border-studio-300 dark:border-studio-700 transition-colors flex items-center justify-center shadow-2xs"
              title="View Faysal Ahmed on LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <i className="bx bxl-linkedin text-lg leading-none"></i>
            </a>

            <a
              href={studentProfile.facebook}
              target="_blank"
              rel="noreferrer"
              className="w-11 h-11 rounded-lg text-studio-900 dark:text-studio-100 bg-white/80 dark:bg-studio-900/80 hover:text-[#1877F2] dark:hover:text-[#1877F2] hover:bg-studio-100 dark:hover:bg-studio-800 border border-studio-300 dark:border-studio-700 transition-colors flex items-center justify-center shadow-2xs"
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
              className="w-11 h-11 rounded-lg text-studio-900 dark:text-studio-100 bg-white/80 dark:bg-studio-900/80 hover:bg-studio-100 dark:hover:bg-studio-800 border border-studio-300 dark:border-studio-700 transition-colors flex items-center justify-center shadow-2xs"
              aria-label="Toggle theme"
              title={darkMode ? "Switch to Architectural White" : "Switch to Studio Graphite"}
            >
              {darkMode ? (
                <i className="bx bx-sun text-amber-400 text-lg leading-none"></i>
              ) : (
                <i className="bx bx-moon text-studio-950 text-lg leading-none"></i>
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
                className="text-base font-bold text-studio-950 dark:text-white hover:text-blueprint-600 dark:hover:text-blueprint-400 py-1 border-b border-studio-100 dark:border-studio-800"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSheetReview(0);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold bg-studio-950 dark:bg-white text-white dark:text-studio-950 rounded-lg shadow-sm"
              >
                <i className="bx bx-book-open text-base leading-none"></i>
                <span>Open Portfolio Sheet Review</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
