import React from 'react';

export default function ArchitectWorkspaceIllustration({ className = "w-full h-auto max-w-md mx-auto" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 540 420" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Architect studio workspace illustration"
    >
      <defs>
        {/* Soft Background Radial Glow */}
        <radialGradient id="deskGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0284C7" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
        </radialGradient>

        {/* Blueprint Paper Gradient */}
        <linearGradient id="blueprintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </linearGradient>

        {/* Desk Surface Gradient */}
        <linearGradient id="deskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>

        {/* Lamp Light Glow */}
        <linearGradient id="lampCone" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>

        {/* 3D Massing Building Facet 1 */}
        <linearGradient id="buildingLight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>

        {/* 3D Massing Building Facet 2 */}
        <linearGradient id="buildingDark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
      </defs>

      {/* Ambient Backdrop Circle */}
      <circle cx="270" cy="210" r="190" fill="url(#deskGlow)" />

      {/* Floating Drafting Guidelines (Architectural Grid Lines) */}
      <g stroke="#0284C7" strokeOpacity="0.2" strokeDasharray="3 3" strokeWidth="1.2">
        <line x1="60" y1="90" x2="480" y2="90" />
        <line x1="60" y1="160" x2="480" y2="160" />
        <line x1="60" y1="230" x2="480" y2="230" />
        <line x1="140" y1="40" x2="140" y2="350" />
        <line x1="270" y1="40" x2="270" y2="350" />
        <line x1="400" y1="40" x2="400" y2="350" />
      </g>

      {/* Crosshair Registration Marks [+] */}
      <g fill="#0284C7" fillOpacity="0.6" fontSize="12" fontFamily="monospace">
        <text x="65" y="70">[+]</text>
        <text x="445" y="70">[+]</text>
        <text x="65" y="340">[+]</text>
        <text x="445" y="340">[+]</text>
        <text x="210" y="55" fontSize="10">SCALE: 1:100</text>
      </g>

      {/* Architectural Studio Desk Base (Perspective) */}
      <path 
        d="M 60 260 L 480 260 L 440 370 L 100 370 Z" 
        fill="url(#deskGrad)" 
        stroke="#475569" 
        strokeWidth="2"
      />
      {/* Desk Front Edge Depth */}
      <path d="M 100 370 L 440 370 L 440 384 L 100 384 Z" fill="#0F172A" />
      <line x1="130" y1="384" x2="130" y2="415" stroke="#334155" strokeWidth="6" strokeLinecap="round" />
      <line x1="410" y1="384" x2="410" y2="415" stroke="#334155" strokeWidth="6" strokeLinecap="round" />

      {/* Large Drafting Cutting Mat / Blueprint Sheet */}
      <g transform="translate(130, 240) rotate(-4)">
        {/* Paper Shadow */}
        <rect x="4" y="6" width="220" height="110" rx="4" fill="#000" fillOpacity="0.3" />
        {/* Blueprint Blue Base */}
        <rect x="0" y="0" width="220" height="110" rx="4" fill="url(#blueprintGrad)" stroke="#38BDF8" strokeWidth="1.5" />
        {/* White Architectural Drafting Grids on Blueprint */}
        <g stroke="#BAE6FD" strokeWidth="0.8" strokeOpacity="0.5">
          <line x1="10" y1="20" x2="210" y2="20" />
          <line x1="10" y1="40" x2="210" y2="40" />
          <line x1="10" y1="60" x2="210" y2="60" />
          <line x1="10" y1="80" x2="210" y2="80" />
          <line x1="10" y1="100" x2="210" y2="100" />
          
          <line x1="30" y1="10" x2="30" y2="100" />
          <line x1="70" y1="10" x2="70" y2="100" />
          <line x1="110" y1="10" x2="110" y2="100" />
          <line x1="150" y1="10" x2="150" y2="100" />
          <line x1="190" y1="10" x2="190" y2="100" />
        </g>
        {/* Floor Plan Drawings on Sheet */}
        <rect x="40" y="25" width="60" height="45" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
        <rect x="115" y="30" width="50" height="40" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
        <path d="M 40 45 L 80 45" stroke="#FDE047" strokeWidth="1.2" strokeDasharray="2 2" />
        <circle cx="70" cy="50" r="10" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="3 2" fill="none" />
      </g>

      {/* 3D Architectural Model Massing (Tower & Cantilever) */}
      <g transform="translate(330, 160)">
        {/* Shadow */}
        <ellipse cx="40" cy="115" rx="55" ry="14" fill="#000000" fillOpacity="0.35" />
        
        {/* Main Tower - Left Light Face */}
        <polygon points="10,40 50,20 50,110 10,125" fill="url(#buildingLight)" stroke="#CBD5E1" strokeWidth="1" />
        {/* Main Tower - Right Shaded Face */}
        <polygon points="50,20 90,38 90,120 50,110" fill="url(#buildingDark)" stroke="#94A3B8" strokeWidth="1" />
        {/* Tower Roof */}
        <polygon points="10,40 50,20 90,38 50,56" fill="#F1F5F9" />

        {/* Balcony / Cantilever Block */}
        <polygon points="25,55 65,37 65,70 25,85" fill="#38BDF8" stroke="#0284C7" strokeWidth="1" fillOpacity="0.9" />
        <polygon points="65,37 85,46 85,78 65,70" fill="#0369A1" />
        <polygon points="25,55 65,37 85,46 45,63" fill="#BAE6FD" />

        {/* Miniature Green Tree on Plinth */}
        <line x1="95" y1="110" x2="95" y2="122" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="95" cy="104" r="10" fill="#10B981" />
        <circle cx="98" cy="100" r="7" fill="#34D399" />
      </g>

      {/* Architectural Triangular Scale Ruler (30-60-90) */}
      <g transform="translate(180, 315) rotate(15)">
        <polygon points="0,0 70,0 70,35" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
        <polygon points="15,8 52,8 52,26" fill="#1E293B" />
        {/* Ticks */}
        <line x1="10" y1="0" x2="10" y2="4" stroke="#0284C7" strokeWidth="1" />
        <line x1="20" y1="0" x2="20" y2="4" stroke="#0284C7" strokeWidth="1" />
        <line x1="30" y1="0" x2="30" y2="5" stroke="#EF4444" strokeWidth="1" />
        <line x1="40" y1="0" x2="40" y2="4" stroke="#0284C7" strokeWidth="1" />
        <line x1="50" y1="0" x2="50" y2="4" stroke="#0284C7" strokeWidth="1" />
        <line x1="60" y1="0" x2="60" y2="5" stroke="#EF4444" strokeWidth="1" />
      </g>

      {/* Architectural Drafting Compass (Divider) */}
      <g transform="translate(265, 305) rotate(-35)">
        <circle cx="0" cy="0" r="4" fill="#E2E8F0" stroke="#64748B" strokeWidth="1" />
        {/* Leg 1 */}
        <path d="M 0 0 L -8 45 L -9 52" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
        {/* Leg 2 with needle */}
        <path d="M 0 0 L 12 42 L 14 50" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        <circle cx="2" cy="22" r="2.5" fill="#F59E0B" />
      </g>

      {/* Modern Studio Desk Lamp */}
      <g transform="translate(90, 140)">
        {/* Base */}
        <ellipse cx="20" cy="130" rx="18" ry="6" fill="#334155" stroke="#475569" strokeWidth="1.5" />
        {/* Articulated Arm */}
        <path d="M 20 130 L 35 60 L 80 40" stroke="#F59E0B" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="35" cy="60" r="5" fill="#B45309" />
        <circle cx="80" cy="40" r="5" fill="#B45309" />
        {/* Lamp Shade Head */}
        <polygon points="70,30 110,48 95,70 60,50" fill="#D97706" stroke="#B45309" strokeWidth="1.5" />
        {/* Light Cone */}
        <polygon points="80,58 135,170 30,170" fill="url(#lampCone)" />
      </g>

      {/* Rolled Blueprint Scrolls in Tube Holder */}
      <g transform="translate(430, 235)">
        {/* Cup/Holder */}
        <rect x="0" y="30" width="35" height="50" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
        {/* Scroll 1 (White) */}
        <rect x="6" y="-15" width="10" height="60" rx="3" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" transform="rotate(-6 6 15)" />
        {/* Scroll 2 (Blue) */}
        <rect x="18" y="-20" width="12" height="65" rx="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" transform="rotate(8 18 10)" />
      </g>
    </svg>
  );
}
