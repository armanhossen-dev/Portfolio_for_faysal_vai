import React from 'react';

export default function ArchitectContactIllustration({ className = "w-full h-auto max-w-sm mx-auto" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 460 360" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Architect studio collaboration and messaging illustration"
    >
      <defs>
        <radialGradient id="contactGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="envelopeFront" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        <linearGradient id="envelopeFold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#94A3B8" />
        </linearGradient>
      </defs>

      {/* Background Soft Glow */}
      <circle cx="230" cy="180" r="160" fill="url(#contactGlow)" />

      {/* Floating Blueprint Document Emerging from Envelope */}
      <g transform="translate(130, 70)">
        {/* Document Shadow */}
        <rect x="4" y="6" width="200" height="150" rx="6" fill="#000000" fillOpacity="0.15" />
        {/* Blueprint Sheet */}
        <rect x="0" y="0" width="200" height="150" rx="6" fill="#0284C7" stroke="#38BDF8" strokeWidth="2" />
        
        {/* Blueprint Lines & Technical Sketches */}
        <g stroke="#BAE6FD" strokeWidth="1" strokeOpacity="0.6">
          <line x1="20" y1="30" x2="180" y2="30" />
          <line x1="20" y1="50" x2="180" y2="50" />
          <line x1="20" y1="70" x2="180" y2="70" />
          <line x1="20" y1="90" x2="180" y2="90" />
          <line x1="20" y1="110" x2="180" y2="110" />
          <line x1="20" y1="130" x2="180" y2="130" />
        </g>

        {/* Floor Plan Elevation Sketch on Sheet */}
        <polygon points="40,110 80,70 120,110" fill="none" stroke="#FFFFFF" strokeWidth="2" />
        <rect x="50" y="110" width="60" height="25" fill="none" stroke="#FFFFFF" strokeWidth="2" />
        <line x1="70" y1="110" x2="70" y2="135" stroke="#FDE047" strokeWidth="1.5" />
        
        {/* Stamp Circle */}
        <circle cx="160" cy="95" r="14" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
        <text x="151" y="99" fill="#FFFFFF" fontSize="9" fontFamily="monospace" fontWeight="bold">DIU</text>
      </g>

      {/* Architectural Studio Envelope */}
      <g transform="translate(90, 160)">
        {/* Shadow */}
        <ellipse cx="140" cy="160" rx="130" ry="16" fill="#000000" fillOpacity="0.18" />

        {/* Envelope Back Plate */}
        <rect x="20" y="30" width="240" height="130" rx="8" fill="#64748B" />

        {/* Envelope Front Left & Right Wings */}
        <polygon points="20,30 140,110 20,160" fill="url(#envelopeFold)" />
        <polygon points="260,30 140,110 260,160" fill="url(#envelopeFold)" />

        {/* Envelope Bottom Wing */}
        <polygon points="20,160 140,90 260,160" fill="url(#envelopeFront)" stroke="#CBD5E1" strokeWidth="1" />
      </g>

      {/* Floating Inquiry Notification Badges (Icons8 Style) */}
      <g transform="translate(60, 110)">
        <rect x="0" y="0" width="46" height="46" rx="12" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.08))" />
        <circle cx="23" cy="23" r="14" fill="#10B981" />
        <path d="M 17 23 L 21 27 L 29 19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>

      {/* Floating LinkedIn / Network Badge */}
      <g transform="translate(350, 90)">
        <rect x="0" y="0" width="50" height="50" rx="14" fill="#0A66C2" stroke="#38BDF8" strokeWidth="1.5" filter="drop-shadow(0 4px 8px rgba(10,102,194,0.3))" />
        <text x="18" y="33" fill="#FFFFFF" fontSize="22" fontFamily="sans-serif" fontWeight="bold">in</text>
      </g>

      {/* Small Decorative Floating Compass Star */}
      <g transform="translate(370, 240)">
        <polygon points="15,0 20,10 30,15 20,20 15,30 10,20 0,15 10,10" fill="#F59E0B" />
      </g>
    </svg>
  );
}
