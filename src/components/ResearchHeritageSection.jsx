import React from 'react';
import { allSheets } from '../data/projectsData';

export default function ResearchHeritageSection({ onOpenSheetLightbox }) {
  const commonsSheet1 = allSheets.find(s => s.id === 'commons-1');
  const commonsSheet2 = allSheets.find(s => s.id === 'commons-2');
  const heritageSheet = allSheets.find(s => s.id === 'heritage-1');

  const urbanProblems = [
    { num: '01', title: 'Water Pollution', desc: 'Untreated greywater & municipal runoff directly choking surrounding lake margins.' },
    { num: '02', title: 'Air Pollution', desc: 'Dense particulate accumulation & absence of natural vegetative dispersion channels.' },
    { num: '03', title: 'Solid Waste', desc: 'Accumulation of unsegregated plastics, discarded cables, and organic refuse.' },
    { num: '04', title: 'Low Land Flooding', desc: 'Monsoon inundation due to clogged drainage courses and lack of retention basins.' },
    { num: '05', title: 'Cable Soil Contamination', desc: 'Hazardous web of makeshift overhead and buried wiring degrading subsoil.' },
    { num: '06', title: 'Loss of Green Spaces', desc: 'Near zero vegetative canopy causing severe urban heat island effect.' },
    { num: '07', title: 'Sound Pollution', desc: 'High acoustic pressure in narrow 1-meter informal corridors.' },
    { num: '08', title: 'Public Health Hazards', desc: 'Waterborne diseases, respiratory vulnerabilities, and acute sanitation deficit.' }
  ];

  return (
    <section id="research" className="py-20 border-b border-studio-200 dark:border-white/10 bg-[#FAFAF8] dark:bg-[#101214]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ========================================================
            PART 1: COMMONS MODULE RESEARCH
        ======================================================== */}
        <div>
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 font-mono text-xs text-ochre-600 dark:text-[#ffb81c] font-semibold mb-2">
              <span className="w-2 h-2 bg-ochre-500 dark:bg-[#ffb81c] rounded-xs"></span>
              URBAN RESEARCH & ETHNOGRAPHY // KORAIL LANES
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-studio-950 dark:text-white uppercase tracking-tight">
              Commons Module: Learning from the Lanes
            </h2>
            <p className="text-sm sm:text-base text-studio-600 dark:text-[#9aa1a8] mt-2 leading-relaxed font-sans">
              Urban field research investigating socio-spatial disparity and community tactics in Korail settlement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left: Research Visuals & Posters */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Poster 1 */}
                {commonsSheet1 && (
                  <div
                    className="group relative bg-white dark:bg-[#181b1e] rounded-lg border border-studio-200 dark:border-white/10 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg hover:border-blueprint-400 dark:hover:border-[#ffb81c] transition-all"
                    onClick={() => onOpenSheetLightbox(commonsSheet1)}
                  >
                    <div className="aspect-[1/1.414] overflow-hidden bg-studio-100 dark:bg-[#101214]">
                      <img
                        src={commonsSheet1.optimized}
                        alt="Commons Module Poster 1"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                      />
                    </div>
                    <div className="p-3 bg-white dark:bg-[#181b1e] border-t border-studio-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-blueprint-600 dark:text-[#ffb81c]">POSTER 01: Socio-Spatial Analysis</span>
                      <i className="bx bx-fullscreen text-sm text-studio-400 group-hover:text-blueprint-500 dark:group-hover:text-[#ffb81c]"></i>
                    </div>
                  </div>
                )}

                {/* Poster 2 */}
                {commonsSheet2 && (
                  <div
                    className="group relative bg-white dark:bg-[#181b1e] rounded-lg border border-studio-200 dark:border-white/10 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg hover:border-blueprint-400 dark:hover:border-[#ffb81c] transition-all"
                    onClick={() => onOpenSheetLightbox(commonsSheet2)}
                  >
                    <div className="aspect-[1/1.414] overflow-hidden bg-studio-100 dark:bg-[#101214]">
                      <img
                        src={commonsSheet2.optimized}
                        alt="Commons Module Poster 2"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                      />
                    </div>
                    <div className="p-3 bg-white dark:bg-[#181b1e] border-t border-studio-100 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-blueprint-600 dark:text-[#ffb81c]">POSTER 02: Kit-of-Parts Modules</span>
                      <i className="bx bx-fullscreen text-sm text-studio-400 group-hover:text-blueprint-500 dark:group-hover:text-[#ffb81c]"></i>
                    </div>
                  </div>
                )}

              </div>

              {/* Research Quote Callout — High Contrast in Light & Dark Theme */}
              <div className="p-4 sm:p-5 bg-blueprint-50/90 dark:bg-[#181b1e] border-l-4 border-blueprint-500 dark:border-l-[#ffb81c] rounded-r-xl border-y border-r border-studio-200/80 dark:border-white/10 text-xs sm:text-sm font-sans shadow-xs">
                <span className="font-bold block text-blueprint-700 dark:text-[#ffb81c] mb-1.5 font-mono uppercase text-xs tracking-wider">
                  Socio-Spatial Disparity Statement:
                </span>
                <p className="leading-relaxed italic text-studio-900 dark:text-[#eceeef]">
                  "Surrounding areas of Korail receive modern municipal services, infrastructure, and high living valuations, while residents of Korail receive almost none. Yet all are equal citizens of Bangladesh. This project poses the critical question: when we design multifunctional urban spaces, who do we build for, and how can tactical architecture rectify this divide?"
                </p>
              </div>
            </div>

            {/* Right: 8 Mapped Urban Crises & Modular Solutions */}
            <div className="lg:col-span-5 space-y-6">

              {/* Problem Map */}
              <div className="bg-white dark:bg-[#181b1e] p-5 rounded-lg border border-studio-200 dark:border-white/10">
                <h3 className="font-display font-bold text-sm text-studio-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <i className="bx bx-error text-ochre-500 dark:text-[#ffb81c] text-base"></i>
                  Korail Settlement: 8 Acute Spatial Crises
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {urbanProblems.map((prob) => (
                    <div key={prob.num} className="p-2.5 rounded bg-studio-50 dark:bg-[#101214] border border-studio-100 dark:border-white/10">
                      <div className="font-mono text-[10px] font-bold text-ochre-600 dark:text-[#ffb81c]">
                        {prob.num}. {prob.title}
                      </div>
                      <div className="text-[11px] text-studio-600 dark:text-[#9aa1a8] leading-snug mt-0.5 font-sans">
                        {prob.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modular Kit-of-Parts Interventions */}
              <div className="bg-white dark:bg-[#181b1e] p-5 rounded-lg border border-studio-200 dark:border-white/10">
                <h3 className="font-display font-bold text-sm text-studio-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <i className="bx bx-layer text-blueprint-500 dark:text-[#ffb81c] text-base"></i>
                  Tactical Kit-of-Parts Modules
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-sans">
                  <div className="p-3 bg-studio-50 dark:bg-[#101214] rounded-lg border border-studio-200 dark:border-white/10 flex flex-col justify-between hover:border-[#ffb81c]/50 transition-colors">
                    <div>
                      <span className="font-mono font-bold text-studio-900 dark:text-white block mb-1 text-[11px] leading-snug">
                        01. CHILD ACTIVITY MODULE
                      </span>
                      <span className="text-studio-600 dark:text-[#9aa1a8] text-[11px] leading-relaxed block">
                        Collapsible learning boards, tactile chalk surfaces, and child-safe play perches designed to slip safely into dense alleys.
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-studio-50 dark:bg-[#101214] rounded-lg border border-studio-200 dark:border-white/10 flex flex-col justify-between hover:border-[#ffb81c]/50 transition-colors">
                    <div>
                      <span className="font-mono font-bold text-studio-900 dark:text-white block mb-1 text-[11px] leading-snug">
                        02. STALL & SITTING MODULE
                      </span>
                      <span className="text-studio-600 dark:text-[#9aa1a8] text-[11px] leading-relaxed block">
                        Fold-out tea counter, dry goods shelf, and foldaway communal bench supporting informal livelihoods and social cohesion.
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-studio-50 dark:bg-[#101214] rounded-lg border border-studio-200 dark:border-white/10 flex flex-col justify-between hover:border-[#ffb81c]/50 transition-colors">
                    <div>
                      <span className="font-mono font-bold text-studio-900 dark:text-white block mb-1 text-[11px] leading-snug">
                        03. COMMUNITY LEARNING BOARD
                      </span>
                      <span className="text-studio-600 dark:text-[#9aa1a8] text-[11px] leading-relaxed block">
                        Public notice surface communicating disaster flood warnings, hygiene protocols, and literacy schedules.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>


        {/* ========================================================
            PART 2: HERITAGE EXPLORATION - TEOTA JOMIDAR BARI
        ======================================================== */}
        <div
          className="relative rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden border shadow-2xl transition-all"
          style={{
            background: 'radial-gradient(circle at 85% 15%, rgba(144, 62, 22, 0.45) 0%, transparent 60%), radial-gradient(circle at 15% 85%, rgba(220, 90, 54, 0.25) 0%, transparent 50%), linear-gradient(145deg, #18080c 0%, #290f15 45%, #42161b 80%, #5e2413 100%)',
            borderColor: 'rgba(163, 70, 26, 0.45)',
            boxShadow: '0 25px 60px -15px rgba(24, 8, 12, 0.7), 0 0 40px -10px rgba(144, 62, 22, 0.3)'
          }}
        >
          {/* Subtle architectural grid watermark lines */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left: Text & Phenomenological Manifesto */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs font-semibold" style={{ color: '#e8958c' }}>
                <span className="w-2 h-2 rounded-xs" style={{ backgroundColor: '#dc5a36' }}></span>
                HISTORICAL RE-IMAGINATION // PHENOMENOLOGY
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#FAF3EB] uppercase tracking-tight">
                Time Transitions &amp; Contrasts
              </h2>

              <div className="text-sm font-mono font-medium" style={{ color: '#e27a56' }}>
                Manikganj Teota Jomidar Bari • Heritage Studio
              </div>

              <p className="text-sm sm:text-base leading-relaxed font-sans" style={{ color: '#e5d5cf' }}>
                "In this spatial inquiry, we want to feel a space that moves seamlessly between <strong className="text-white font-semibold">Present, Past, and Future</strong>. Navigating an axial hallway, the visitor experiences an embodied journey—from the tactile weight of historic Bengal masonry to soaring contemporary light volumes."
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                <div 
                  className="p-3.5 rounded-xl border flex items-center justify-between transition-colors backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(36, 14, 19, 0.75)',
                    borderColor: 'rgba(163, 70, 26, 0.35)'
                  }}
                >
                  <span style={{ color: '#d9857e' }}>EXPERIENTIAL AXIS:</span>
                  <span className="font-semibold text-[#FAF3EB]">Past → Present → Future Promenade</span>
                </div>
                <div 
                  className="p-3.5 rounded-xl border flex items-center justify-between transition-colors backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(36, 14, 19, 0.75)',
                    borderColor: 'rgba(163, 70, 26, 0.35)'
                  }}
                >
                  <span style={{ color: '#d9857e' }}>VERTICAL DEVICE:</span>
                  <span className="font-semibold text-[#FAF3EB]">Ascension Stairs Framing Skyward Vistas</span>
                </div>
                <div 
                  className="p-3.5 rounded-xl border flex items-center justify-between transition-colors backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(36, 14, 19, 0.75)',
                    borderColor: 'rgba(163, 70, 26, 0.35)'
                  }}
                >
                  <span style={{ color: '#d9857e' }}>ARCHITECTURAL BOARD:</span>
                  <span className="font-semibold" style={{ color: '#e8958c' }}>Board BUC074 (High-Res 6496 × 9449 px)</span>
                </div>
              </div>

              {heritageSheet && (
                <button
                  onClick={() => onOpenSheetLightbox(heritageSheet)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono font-bold text-white rounded-xl transition-all shadow-xl hover:brightness-110 active:scale-95 cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #a3461a 0%, #dc5a36 100%)',
                    boxShadow: '0 8px 24px -4px rgba(163, 70, 26, 0.6)'
                  }}
                >
                  <i className="bx bx-fullscreen text-base"></i>
                  <span>Inspect High-Res Heritage Drawing Board</span>
                </button>
              )}
            </div>

            {/* Right: Heritage Board Preview */}
            <div className="lg:col-span-7">
              {heritageSheet && (
                <div
                  className="group relative p-3 sm:p-4 rounded-2xl border shadow-2xl cursor-pointer transition-all duration-300 hover:border-[#dc5a36]/60 backdrop-blur-md"
                  style={{
                    backgroundColor: 'rgba(25, 9, 13, 0.85)',
                    borderColor: 'rgba(163, 70, 26, 0.4)'
                  }}
                  onClick={() => onOpenSheetLightbox(heritageSheet)}
                >
                  <div className="relative aspect-[1/1.45] max-h-[580px] w-full overflow-hidden rounded-xl bg-[#140609] flex items-center justify-center border border-[#903e16]/20">
                    <img
                      src={heritageSheet.optimized}
                      alt="Manikganj Teota Jomidar Bari Architectural Board"
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                    />

                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-[2px]"
                      style={{ backgroundColor: 'rgba(20, 7, 10, 0.65)' }}
                    >
                      <span 
                        className="p-3.5 rounded-full shadow-2xl mb-2.5 flex items-center justify-center text-white"
                        style={{ background: 'linear-gradient(135deg, #a3461a, #dc5a36)' }}
                      >
                        <i className="bx bx-fullscreen text-2xl"></i>
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#FAF3EB]">
                        Click to Zoom Technical Board
                      </span>
                      <span className="font-mono text-[10px] text-[#e8958c]">
                        Resolution: 6496 × 9449 px
                      </span>
                    </div>
                  </div>

                  <div className="mt-3.5 flex items-center justify-between text-xs font-mono px-2">
                    <span className="font-bold text-[#FAF3EB] tracking-wide">
                      BOARD BUC074 // MANIKGANJ TEOTA JOMIDAR BARI
                    </span>
                    <span 
                      className="flex items-center gap-1.5 font-semibold transition-colors"
                      style={{ color: '#e8958c' }}
                    >
                      <span>Inspect Board</span>
                      <i className="bx bx-link-external text-xs"></i>
                    </span>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}