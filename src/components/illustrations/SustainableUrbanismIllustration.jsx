import React from 'react';

export default function SustainableUrbanismIllustration({ className = "w-full h-auto max-w-lg mx-auto" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 560 380" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Sustainable urbanism and ecological architecture illustration"
    >
      <defs>
        <radialGradient id="skyAura" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
        </radialGradient>
        
        <linearGradient id="solarGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>

        <linearGradient id="terraceGreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        <linearGradient id="wetlandWater" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0284C7" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Sky Aura Background */}
      <circle cx="280" cy="180" r="180" fill="url(#skyAura)" />

      {/* Sun / Solar Radiation Vector */}
      <g transform="translate(430, 60)">
        <circle cx="0" cy="0" r="24" fill="#F59E0B" fillOpacity="0.2" />
        <circle cx="0" cy="0" r="16" fill="#F59E0B" />
        {/* Sun radiation rays */}
        <line x1="0" y1="-28" x2="0" y2="-22" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="-20" x2="15" y2="-15" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="28" y1="0" x2="22" y2="0" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="20" x2="15" y2="15" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-20" y1="-20" x2="-15" y2="-15" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="-28" y1="0" x2="-22" y2="0" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Floating Wind Ventilation Arrows (Monsoon breeze vectors) */}
      <path 
        d="M 50 140 Q 110 120 180 135 T 280 130" 
        stroke="#0284C7" 
        strokeWidth="2" 
        strokeDasharray="4 4" 
        fill="none" 
      />
      <path 
        d="M 70 170 Q 140 150 220 165 T 320 160" 
        stroke="#0284C7" 
        strokeWidth="2" 
        strokeDasharray="4 4" 
        fill="none" 
      />
      <polygon points="280,130 270,125 272,135" fill="#0284C7" />
      <polygon points="320,160 310,155 312,165" fill="#0284C7" />

      {/* Ground Plane & Bio-Filtration Wetland Landscape */}
      <path 
        d="M 40 310 Q 180 290 320 310 T 520 300 L 520 340 L 40 340 Z" 
        fill="#E2E8F0" 
        stroke="#CBD5E1" 
        strokeWidth="1.5" 
      />
      {/* Wetland Water Bed */}
      <path 
        d="M 70 315 Q 150 300 230 318 T 380 312 Q 280 335 150 330 Z" 
        fill="url(#wetlandWater)" 
      />
      {/* Aquatic Reeds / Bio-filtration Plants */}
      <g stroke="#059669" strokeWidth="2" strokeLinecap="round">
        <line x1="90" y1="316" x2="88" y2="295" />
        <line x1="94" y1="318" x2="96" y2="290" />
        <line x1="99" y1="316" x2="103" y2="298" />
        
        <line x1="210" y1="319" x2="208" y2="296" />
        <line x1="215" y1="320" x2="218" y2="290" />
        <line x1="220" y1="318" x2="225" y2="299" />
      </g>

      {/* Main Climate-Responsive Tower (Uttara / Agro Nexus Inspired) */}
      <g transform="translate(180, 100)">
        {/* Tower Base Solid Structure */}
        <polygon points="30,70 120,30 120,200 30,220" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
        <polygon points="120,30 190,50 190,195 120,200" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1.5" />
        
        {/* Rooftop Photovoltaic Solar Array */}
        <polygon points="20,70 110,30 180,50 90,90" fill="url(#solarGlass)" stroke="#38BDF8" strokeWidth="1.5" />
        <line x1="65" y1="50" x2="135" y2="70" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.8" />
        <line x1="42" y1="60" x2="112" y2="80" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.8" />
        <line x1="87" y1="40" x2="157" y2="60" stroke="#38BDF8" strokeWidth="1" strokeOpacity="0.8" />

        {/* Level 3 Cantilevered Shaded Green Balcony */}
        <polygon points="10,110 80,78 80,105 10,130" fill="url(#terraceGreen)" />
        <polygon points="80,78 120,88 120,115 80,105" fill="#047857" />
        <circle cx="35" cy="105" r="7" fill="#10B981" />
        <circle cx="55" cy="98" r="9" fill="#34D399" />

        {/* Level 2 Shaded Balcony */}
        <polygon points="10,150 80,118 80,145 10,170" fill="url(#terraceGreen)" />
        <polygon points="80,118 120,128 120,155 80,145" fill="#047857" />
        <circle cx="45" cy="138" r="8" fill="#10B981" />
        <circle cx="68" cy="132" r="7" fill="#34D399" />

        {/* Architectural Window Fenestrations (Passive Daylight) */}
        <g fill="#0284C7" fillOpacity="0.7">
          <rect x="95" y="105" width="16" height="24" rx="2" />
          <rect x="95" y="145" width="16" height="24" rx="2" />
          <rect x="140" y="70" width="18" height="22" rx="2" />
          <rect x="140" y="110" width="18" height="22" rx="2" />
          <rect x="140" y="150" width="18" height="22" rx="2" />
        </g>
      </g>

      {/* Secondary Modular Community Block (Loft Farming & Greenhouse) */}
      <g transform="translate(370, 180)">
        {/* Structure */}
        <polygon points="15,45 65,25 65,120 15,130" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.2" />
        <polygon points="65,25 105,38 105,115 65,120" fill="#94A3B8" stroke="#64748B" strokeWidth="1.2" />
        {/* Glasshouse Slanted Roof */}
        <polygon points="15,45 65,25 105,38 55,58" fill="#BAE6FD" stroke="#0284C7" strokeWidth="1.2" fillOpacity="0.8" />
        <line x1="40" y1="35" x2="80" y2="48" stroke="#0284C7" strokeWidth="1" />
        {/* Vegetation Inside/Balcony */}
        <circle cx="35" cy="80" r="12" fill="#10B981" />
        <circle cx="48" cy="74" r="9" fill="#34D399" />
      </g>

      {/* Sustainable Pedestrian & Cycle Pathway with Trees */}
      <g transform="translate(390, 270)">
        <line x1="0" y1="40" x2="10" y2="20" stroke="#78350F" strokeWidth="3" strokeLinecap="round" />
        <circle cx="10" cy="12" r="14" fill="#059669" />
        <circle cx="14" cy="8" r="10" fill="#34D399" />
      </g>
      <g transform="translate(130, 260)">
        <line x1="0" y1="50" x2="5" y2="25" stroke="#78350F" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="5" cy="18" r="18" fill="#047857" />
        <circle cx="9" cy="12" r="13" fill="#10B981" />
      </g>
    </svg>
  );
}
