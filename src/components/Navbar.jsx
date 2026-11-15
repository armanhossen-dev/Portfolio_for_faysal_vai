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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Technical sheets', href: '#sheets' },
    { name: 'Research & heritage', href: '#research' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`nav-pill ${isScrolled ? 'stuck' : ''}`} id="nav">
      {/* Brand: Architectural Mark + Name */}
      <a className="nav-brand" href="#top" aria-label="Faysal Ahmed, home">
        <span className="nav-mark" aria-hidden="true">
          <svg viewBox="0 0 16 16" fill="none" stroke="#ffb81c" strokeWidth="1.8" strokeLinejoin="round">
            <path d="M1.5 13.5 5.5 3l3 6 2-3 3.5 7.5z" />
          </svg>
        </span>
        <span>{studentProfile.name}</span>
      </a>

      {/* Desktop Navigation Links */}
      <nav className="nav-links hidden lg:flex" aria-label="Primary">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Social Links: LinkedIn & Facebook — Clean Icons without round borders */}
      <a
        className="nav-ico hidden sm:grid"
        href={studentProfile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        title="View LinkedIn Profile"
      >
        <svg viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 10v6M8 7.5v.01M12 16v-6M12 12.5a2.5 2.5 0 0 1 5 0V16" />
        </svg>
      </a>

      <a
        className="nav-ico hidden sm:grid"
        href={studentProfile.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        title="View Facebook Profile"
      >
        <svg viewBox="0 0 24 24">
          <path d="M14 8h2V4.5h-2.5A3.5 3.5 0 0 0 10 8v2H8v3.5h2V21h3.5v-7.5H16l.5-3.5h-3V8.5c0-.3.2-.5.5-.5z" />
        </svg>
      </a>

      {/* Review Sheets Signature Yellow CTA */}
      <button
        onClick={() => onOpenSheetReview(0)}
        className="nav-cta"
        title="Open Portfolio Sheet Review"
      >
        <svg viewBox="0 0 24 24">
          <path d="M3 5.5C5 4 8 4 12 6c4-2 7-2 9-.5V19c-2-1.5-5-1.5-9 .5-4-2-7-2-9-.5z" />
          <path d="M12 6v13.5" />
        </svg>
        <span className="hidden sm:inline">Review sheets</span>
      </button>

      {/* Dark / Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="nav-ico"
        aria-label="Toggle dark mode"
        title={darkMode ? "Switch to Architectural White" : "Switch to Studio Graphite"}
      >
        {darkMode ? (
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5z" />
          </svg>
        )}
      </button>

      {/* Mobile Burger Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="nav-ico lg:hidden"
        aria-label="Open menu"
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? (
          <svg viewBox="0 0 24 24">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <path d="M4 8h16M4 16h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white/95 dark:bg-studio-900/95 backdrop-blur-xl border border-studio-200 dark:border-studio-800 rounded-2xl p-3 shadow-xl flex flex-col gap-1 lg:hidden animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-studio-900 dark:text-white hover:bg-studio-100 dark:hover:bg-studio-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-studio-100 dark:border-studio-800 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <a
                href={studentProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-studio-700 dark:text-studio-300 hover:text-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <i className="bx bxl-linkedin text-xl"></i>
              </a>
              <a
                href={studentProfile.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-studio-700 dark:text-studio-300 hover:text-[#1877F2]"
                aria-label="Facebook"
              >
                <i className="bx bxl-facebook text-xl"></i>
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSheetReview(0);
              }}
              className="px-4 py-2 rounded-full bg-[#ffb81c] text-[#15181b] text-xs font-bold"
            >
              Review sheets
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
