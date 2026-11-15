import React, { useState, useEffect } from 'react';
import { studentProfile } from '../data/projectsData';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  onOpenSheetReview
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sectionIds = ['projects', 'achievements', 'sheets', 'research', 'about', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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

  // Animated circular radial View Transition from button center
  const handleThemeToggle = (e) => {
    const nextDark = !darkMode;

    const applyTheme = () => {
      setDarkMode(nextDark);
      try {
        localStorage.setItem('faysal_arch_theme', nextDark ? 'dark' : 'light');
      } catch {}
      if (nextDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    if (
      typeof document === 'undefined' ||
      !('startViewTransition' in document) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      applyTheme();
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      applyTheme();
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];
      document.documentElement.animate(
        { clipPath },
        {
          duration: 750,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });
  };

  return (
    <header className={`nav-pill ${isScrolled ? 'stuck' : ''}`} id="nav">
      {/* Brand: Name Only — Left side, vertically centered */}
      <a className="nav-brand nav-desktop-only" href="#top" aria-label={`${studentProfile.name}, home`}>
        <span>{studentProfile.name}</span>
      </a>

      {/* Desktop Nav Links */}
      <nav className="nav-links" aria-label="Primary">
        {navLinks.map((link) => {
          const id = link.href.replace('#', '');
          const isActive = activeSection === id;
          return (
            <a
              key={link.name}
              href={link.href}
              className={isActive ? 'active' : ''}
              onClick={() => setActiveSection(id)}
            >
              {link.name}
            </a>
          );
        })}
      </nav>

      {/* Right Controls & Actions Group */}
      <div className="nav-actions">
        {/* Subtle Divider */}
        <span className="nav-divider nav-desktop-only" aria-hidden="true"></span>

        {/* Social: Behance — Borderless, No Circle */}
        <a
          className="nav-social-link nav-desktop-only"
          href={studentProfile.behance}
          target="_blank"
          rel="noreferrer"
          aria-label="Behance"
          title="View Behance Portfolio"
        >
          <svg viewBox="0 0 24 24">
            <path d="M7.6 11.2c.9-.4 1.4-1.2 1.4-2.1 0-1.8-1.4-2.6-3.3-2.6H1.5v11h4.4c2.2 0 3.6-1.1 3.6-2.9 0-1.5-.7-2.7-1.9-3.4zm-3.6-2.6h1.6c.9 0 1.5.3 1.5 1.1s-.6 1.1-1.5 1.1H4V8.6zm1.9 6.8H4v-2.6h1.9c1 0 1.7.4 1.7 1.3 0 1-.7 1.3-1.7 1.3zm13.3-2.2c0-2.3-1.6-4.2-4.1-4.2s-4.3 1.9-4.3 4.4c0 2.6 1.8 4.4 4.4 4.4 1.9 0 3.3-.9 3.9-2.5h-2.1c-.3.6-.9.9-1.8.9-1.2 0-2-.7-2.1-1.8h6c.1-.4.1-.8.1-1.2zm-6.1-.7c.2-1 .9-1.7 2-1.7s1.8.7 1.9 1.7h-3.9zM14.4 6h4.5v1.4h-4.5V6z" />
          </svg>
        </a>

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
          onClick={handleThemeToggle}
          className="nav-ico"
          aria-label="Toggle dark mode"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? (
            <svg viewBox="0 0 24 24" className="transition-transform duration-300 hover:rotate-45">
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
            <svg viewBox="0 0 24 24" className="transition-transform duration-300 hover:-rotate-12">
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
      </div>

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
                href={studentProfile.behance}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-[var(--arch-mute)] hover:text-[#ffb81c] transition-colors"
                aria-label="Behance"
              >
                <i className="bx bxl-behance text-xl"></i>
              </a>
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
