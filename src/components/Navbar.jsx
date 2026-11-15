import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Moon, 
  BookOpen, 
  Menu, 
  X, 
  Layers, 
  Compass, 
  Mail, 
  FileText 
} from 'lucide-react';
import { studentProfile } from '../data/projectsData';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  onOpenSheetReview, 
  activeSection 
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
                  {studentProfile.studentId}
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
            {/* LinkedIn Profile */}
            <a
              href={studentProfile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md text-studio-600 dark:text-studio-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-studio-100 dark:hover:bg-studio-800 border border-studio-200 dark:border-studio-800 transition-colors"
              title="View Faysal Ahmed on LinkedIn"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
              </svg>
            </a>

            {/* Sheet Presentation Mode Button */}
            <button
              onClick={() => onOpenSheetReview(0)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium bg-blueprint-50 dark:bg-blueprint-950/60 text-blueprint-700 dark:text-blueprint-300 border border-blueprint-200 dark:border-blueprint-800 rounded-md hover:bg-blueprint-100 dark:hover:bg-blueprint-900 transition-colors shadow-sm"
              title="Open Architectural Portfolio Flipbook / Sheet Review"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Review Sheets</span>
              <span className="sm:hidden">Sheets</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md text-studio-600 dark:text-studio-300 hover:bg-studio-100 dark:hover:bg-studio-800 border border-studio-200 dark:border-studio-800 transition-colors"
              aria-label="Toggle theme"
              title={darkMode ? "Switch to Architectural White" : "Switch to Studio Graphite"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-studio-700" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md lg:hidden text-studio-700 dark:text-studio-300 hover:bg-studio-100 dark:hover:bg-studio-800 border border-studio-200 dark:border-studio-800"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                  onOpenSheetReview(0);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-mono font-medium bg-blueprint-600 text-white rounded-md shadow"
              >
                <BookOpen className="w-4 h-4" />
                Open Portfolio Sheet Review
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
