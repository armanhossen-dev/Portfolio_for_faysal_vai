import React from 'react';

export default function CommunityCommonsIllustration({ className = "w-full h-auto max-w-md mx-auto" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 520 380" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Community commons modular architecture illustration"
    >
      <defs>
        <radialGradient id="commGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="timberGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>

        <linearGradient id="chalkboardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
      </defs>

      {/* Warm Background Halo */}
      <circle cx="260" cy="190" r="170" fill="url(#commGlow)" />

      {/* Informal Lane Brick Pavement Grid */}
      <path 
        d="M 50 290 L 470 290 L 430 360 L 90 360 Z" 
        fill="#F1F5F9" 
        stroke="#E2E8F0" 
        strokeWidth="1.5" 
      />
      {/* Brick Texture Lines */}
      <g stroke="#CBD5E1" strokeWidth="1" strokeOpacity="0.7">
        <line x1="80" y1="310" x2="440" y2="310" />
        <line x1="90" y1="330" x2="430" y2="330" />
        <line x1="100" y1="350" x2="420" y2="350" />
        {/* Vertical brick divisions */}
        <line x1="140" y1="290" x2="140" y2="310" />
        <line x1="220" y1="290" x2="220" y2="310" />
        <line x1="300" y1="290" x2="300" y2="310" />
        <line x1="380" y1="290" x2="380" y2="310" />
        <line x1="180" y1="310" x2="180" y2="330" />
        <line x1="260" y1="310" x2="260" y2="330" />
        <line x1="340" y1="310" x2="340" y2="330" />
      </g>

      {/* Tactical Modular Framework Pavilion (Timber / Recycled Pipe Kit) */}
      <g transform="translate(140, 110)">
        {/* Modular Roof Canopy (Fabric / Timber Slat Shade) */}
        <polygon points="10,40 120,10 230,35 120,65" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5" />
        <line x1="65" y1="25" x2="175" y2="50" stroke="#F59E0B" strokeWidth="1.2" />

        {/* 4 Timber Corner Posts */}
        <line x1="20" y1="42" x2="20" y2="180" stroke="url(#timberGrad)" strokeWidth="6" strokeLinecap="round" />
        <line x1="120" y1="65" x2="120" y2="195" stroke="url(#timberGrad)" strokeWidth="6" strokeLinecap="round" />
        <line x1="220" y1="37" x2="220" y2="175" stroke="url(#timberGrad)" strokeWidth="6" strokeLinecap="round" />
        <line x1="120" y1="12" x2="120" y2="140" stroke="#78350F" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.4" />

        {/* Community Learning Board (Module 01) */}
        <g transform="translate(30, 70)">
          <rect x="0" y="0" width="75" height="55" rx="3" fill="url(#chalkboardGrad)" stroke="#64748B" strokeWidth="1.5" />
          <line x1="10" y1="15" x2="65" y2="15" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.8" strokeLinecap="round" />
          <line x1="10" y1="25" x2="50" y2="25" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="10" y1="35" x2="58" y2="35" stroke="#FDE047" strokeWidth="1.5" strokeLinecap="round" />
          {/* Alphabet / Diagram icon */}
          <circle cx="20" cy="45" r="4" fill="#34D399" />
          <circle cx="34" cy="45" r="4" fill="#F43F5E" />
        </g>

        {/* Fold-Out Tea & Sitting Bench (Module 02) */}
        <g transform="translate(135, 110)">
          {/* Bench Seat */}
          <polygon points="0,20 60,10 75,22 15,32" fill="#B45309" stroke="#78350F" strokeWidth="1" />
          {/* Bench Legs */}
          <line x1="10" y1="25" x2="10" y2="60" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          <line x1="68" y1="16" x2="68" y2="52" stroke="#475569" strokeWidth="3" strokeLinecap="round" />
          {/* Traditional Clay Tea Cups (Cha) */}
          <ellipse cx="35" cy="18" rx="4" ry="2" fill="#D97706" />
          <ellipse cx="48" cy="15" rx="4" ry="2" fill="#D97706" />
        </g>

        {/* Hanging Herb Garden / Vertical Planters */}
        <g transform="translate(10, 45)">
          <line x1="45" y1="0" x2="45" y2="18" stroke="#64748B" strokeWidth="1" />
          <rect x="35" y="18" width="20" height="10" rx="2" fill="#B45309" />
          <circle cx="40" cy="17" r="5" fill="#10B981" />
          <circle cx="48" cy="16" r="6" fill="#34D399" />
          <circle cx="44" cy="14" r="5" fill="#059669" />
        </g>
      </g>

      {/* Floating Tactical Urbanism Tags */}
      <g transform="translate(60, 80)">
        <rect x="0" y="0" width="85" height="24" rx="4" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1" />
        <text x="10" y="16" fill="#0284C7" fontSize="10" fontFamily="monospace" fontWeight="bold">MODULE 01</text>
      </g>
      <g transform="translate(380, 140)">
        <rect x="0" y="0" width="85" height="24" rx="4" fill="#FFFFFF" stroke="#D97706" strokeWidth="1" />
        <text x="10" y="16" fill="#D97706" fontSize="10" fontFamily="monospace" fontWeight="bold">STALL / BENCH</text>
      </g>
    </svg>
  );
}
