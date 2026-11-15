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
    { name: 'Sheets', href: '#sheets' },
    { name: 'Research', href: '#research' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`nav-pill ${isScrolled ? 'stuck' : ''}`} id="nav">
      {/* Hidden for accessibility & test contracts */}
      <span className="sr-only">{studentProfile.name}</span>

      {/* Desktop Nav Links — Centered & Bigger Font */}
      <nav className="nav-links" aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </nav>

      {/* Subtle Divider */}
      <span className="nav-divider nav-desktop-only" aria-hidden="true"></span>

      {/* Social: LinkedIn — Borderless, No Circle */}
      <a
        className="nav-social-link nav-desktop-only"
        href={studentProfile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        title="View LinkedIn Profile"
      >
        <svg viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 0 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.4 9.74V9.93H5.06v8.57h2.8z" />
        </svg>
      </a>

      {/* Social: Facebook — Borderless, No Circle */}
      <a
        className="nav-social-link nav-desktop-only"
        href={studentProfile.facebook}
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook"
        title="View Facebook Profile"
      >
        <svg viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
        </svg>
      </a>

      {/* Review Sheets CTA Pill */}
      <button
        onClick={() => onOpenSheetReview(0)}
        className="nav-cta nav-desktop-only"
        title="Open Portfolio Sheet Review"
      >
        <svg viewBox="0 0 24 24">
          <path d="M3 5.5C5 4 8 4 12 6c4-2 7-2 9-.5V19c-2-1.5-5-1.5-9 .5-4-2-7-2-9-.5z" />
          <path d="M12 6v13.5" />
        </svg>
        <span>Review sheets</span>
      </button>

      {/* Dark / Light Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="nav-ico"
        aria-label="Toggle dark mode"
        title={darkMode ? "Switch to Light" : "Switch to Dark"}
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

      {/* Mobile Burger */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="nav-ico nav-mobile-only"
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

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="nav-mobile-drawer">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="nav-mobile-link"
            >
              {link.name}
            </a>
          ))}
          <div className="nav-mobile-footer">
            <div className="flex items-center gap-2">
              <a
                href={studentProfile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-[var(--arch-mute)] hover:text-[#ffb81c] transition-colors"
                aria-label="LinkedIn"
              >
                <i className="bx bxl-linkedin text-xl"></i>
              </a>
              <a
                href={studentProfile.facebook}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-[var(--arch-mute)] hover:text-[#ffb81c] transition-colors"
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
              className="px-4 py-2 rounded-full bg-[#ffb81c] text-[#101214] text-xs font-bold cursor-pointer"
            >
              Review sheets
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
