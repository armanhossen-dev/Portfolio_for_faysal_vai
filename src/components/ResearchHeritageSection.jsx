import React from 'react';
import { allSheets } from '../data/projectsData';
import CommunityCommonsIllustration from './illustrations/CommunityCommonsIllustration';

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
    <section id="research" className="py-20 border-b border-studio-200 dark:border-studio-800 bg-[#FAFAF8] dark:bg-studio-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* ========================================================
            PART 1: COMMONS MODULE RESEARCH
        ======================================================== */}
        <div>
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 font-mono text-xs text-ochre-600 dark:text-ochre-400 font-semibold mb-2">
              <span className="w-2 h-2 bg-ochre-500 rounded-xs"></span>
              URBAN RESEARCH & ETHNOGRAPHY // KORAIL LANES
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-studio-950 dark:text-white uppercase tracking-tight">
              Commons Module: Learning from the Lanes
            </h2>
            <p className="text-sm sm:text-base text-studio-600 dark:text-studio-400 mt-2 leading-relaxed">
              An empirical critique of socio-spatial disparity between affluent Gulshan/Banani and the informal settlement of Korail. Transforming the informal alley from a space of deficit into an architecture of communal intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left: Research Visuals & Posters */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Poster 1 */}
                {commonsSheet1 && (
                  <div
                    className="group relative bg-white dark:bg-studio-900 rounded-lg border border-studio-200 dark:border-studio-800 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all"
                    onClick={() => onOpenSheetLightbox(commonsSheet1)}
                  >
                    <div className="aspect-[1/1.414] overflow-hidden bg-studio-100 dark:bg-studio-800">
                      <img
                        src={commonsSheet1.optimized}
                        alt="Commons Module Poster 1"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 bg-white dark:bg-studio-900 border-t border-studio-100 dark:border-studio-800 flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-blueprint-600 dark:text-blueprint-400">POSTER 01: Socio-Spatial Analysis</span>
                      <i className="bx bx-fullscreen text-sm text-studio-400 group-hover:text-blueprint-500"></i>
                    </div>
                  </div>
                )}

                {/* Poster 2 */}
                {commonsSheet2 && (
                  <div
                    className="group relative bg-white dark:bg-studio-900 rounded-lg border border-studio-200 dark:border-studio-800 overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all"
                    onClick={() => onOpenSheetLightbox(commonsSheet2)}
                  >
                    <div className="aspect-[1/1.414] overflow-hidden bg-studio-100 dark:bg-studio-800">
                      <img
                        src={commonsSheet2.optimized}
                        alt="Commons Module Poster 2"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 bg-white dark:bg-studio-900 border-t border-studio-100 dark:border-studio-800 flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-blueprint-600 dark:text-blueprint-400">POSTER 02: Kit-of-Parts Modules</span>
                      <i className="bx bx-fullscreen text-sm text-studio-400 group-hover:text-blueprint-500"></i>
                    </div>
                  </div>
                )}

              </div>

              {/* Research Quote Callout — High Contrast in Light & Dark Theme */}
              <div className="p-4 sm:p-5 bg-blueprint-50/90 dark:bg-studio-900 border-l-4 border-blueprint-500 rounded-r-xl border-y border-r border-studio-200/80 dark:border-studio-800 text-xs sm:text-sm font-sans shadow-xs">
                <span className="font-bold block text-blueprint-700 dark:text-blueprint-400 mb-1.5 font-mono uppercase text-xs tracking-wider">
                  Socio-Spatial Disparity Statement:
                </span>
                <p className="leading-relaxed italic text-studio-900 dark:text-studio-100">
                  "Surrounding areas of Korail receive modern municipal services, infrastructure, and high living valuations, while residents of Korail receive almost none. Yet all are equal citizens of Bangladesh. This project poses the critical question: when we design multifunctional urban spaces, who do we build for, and how can tactical architecture rectify this divide?"
                </p>
              </div>
            </div>

            {/* Right: 8 Mapped Urban Crises & Modular Solutions */}
            <div className="lg:col-span-5 space-y-6">

              {/* Problem Map */}
              <div className="bg-white dark:bg-studio-900 p-5 rounded-lg border border-studio-200 dark:border-studio-800">
                <h3 className="font-display font-bold text-sm text-studio-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <i className="bx bx-error text-ochre-500 text-base"></i>
                  Korail Settlement: 8 Acute Spatial Crises
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {urbanProblems.map((prob) => (
                    <div key={prob.num} className="p-2 rounded bg-studio-50 dark:bg-studio-950 border border-studio-100 dark:border-studio-800/80">
                      <div className="font-mono text-[10px] font-bold text-ochre-600 dark:text-ochre-400">
                        {prob.num}. {prob.title}
                      </div>
                      <div className="text-[11px] text-studio-600 dark:text-studio-400 leading-snug mt-0.5">
                        {prob.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modular Kit-of-Parts Interventions */}
              <div className="bg-white dark:bg-studio-900 p-5 rounded-lg border border-studio-200 dark:border-studio-800">
                <h3 className="font-display font-bold text-sm text-studio-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <i className="bx bx-layer text-blueprint-500 text-base"></i>
                  Tactical Kit-of-Parts Modules
                </h3>

                {/* Community Modular Illustration */}
                <div className="mb-4 bg-studio-50 dark:bg-studio-950 p-2 rounded-lg border border-studio-200 dark:border-studio-800/80">
                  <CommunityCommonsIllustration className="w-full h-auto max-w-[280px] mx-auto" />
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 bg-studio-50 dark:bg-studio-950 rounded border border-studio-200 dark:border-studio-800">
                    <span className="font-mono font-bold text-studio-900 dark:text-white block mb-0.5">
                      01. CHILD ACTIVITY MODULE
                    </span>
                    <span className="text-studio-600 dark:text-studio-400">
                      Collapsible learning boards, tactile chalk surfaces, and child-safe play perches designed to slip safely into dense alleys.
                    </span>
                  </div>

                  <div className="p-3 bg-studio-50 dark:bg-studio-950 rounded border border-studio-200 dark:border-studio-800">
                    <span className="font-mono font-bold text-studio-900 dark:text-white block mb-0.5">
                      02. STALL & SITTING MODULE
                    </span>
                    <span className="text-studio-600 dark:text-studio-400">
                      Fold-out tea counter, dry goods shelf, and foldaway communal bench supporting informal livelihoods and social cohesion.
                    </span>
                  </div>

                  <div className="p-3 bg-studio-50 dark:bg-studio-950 rounded border border-studio-200 dark:border-studio-800">
                    <span className="font-mono font-bold text-studio-900 dark:text-white block mb-0.5">
                      03. COMMUNITY LEARNING BOARD
                    </span>
                    <span className="text-studio-600 dark:text-studio-400">
                      Public notice surface communicating disaster flood warnings, hygiene protocols, and literacy schedules.
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>


        {/* ========================================================
            PART 2: HERITAGE EXPLORATION - TEOTA JOMIDAR BARI
        ======================================================== */}
        <div className="pt-12 border-t border-studio-200 dark:border-studio-800">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Text & Phenomenological Manifesto */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs text-blueprint-600 dark:text-blueprint-400 font-semibold">
                <span className="w-2 h-2 bg-blueprint-500 rounded-xs"></span>
                HISTORICAL RE-IMAGINATION // PHENOMENOLOGY
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-studio-950 dark:text-white uppercase tracking-tight">
                Time Transitions & Contrasts
              </h2>

              <div className="text-sm font-mono text-ochre-600 dark:text-ochre-400">
                Manikganj Teota Jomidar Bari • Heritage Studio
              </div>

              <p className="text-sm sm:text-base text-studio-600 dark:text-studio-300 leading-relaxed font-sans">
                "In this spatial inquiry, we want to feel a space that moves seamlessly between <strong className="text-studio-900 dark:text-white">Present, Past, and Future</strong>. Navigating an axial hallway, the visitor experiences an embodied journey—from the tactile weight of historic Bengal masonry to soaring contemporary light volumes."
              </p>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-3 bg-white dark:bg-studio-900 rounded border border-studio-200 dark:border-studio-800 flex items-center justify-between">
                  <span className="text-studio-500">EXPERIENTIAL AXIS:</span>
                  <span className="font-semibold text-studio-900 dark:text-white">Past → Present → Future Promenade</span>
                </div>
                <div className="p-3 bg-white dark:bg-studio-900 rounded border border-studio-200 dark:border-studio-800 flex items-center justify-between">
                  <span className="text-studio-500">VERTICAL DEVICE:</span>
                  <span className="font-semibold text-studio-900 dark:text-white">Ascension Stairs Framing Skyward Vistas</span>
                </div>
                <div className="p-3 bg-white dark:bg-studio-900 rounded border border-studio-200 dark:border-studio-800 flex items-center justify-between">
                  <span className="text-studio-500">ARCHITECTURAL BOARD:</span>
                  <span className="font-semibold text-blueprint-600 dark:text-blueprint-400">Board BUC074 (High-Res 6496 × 9449 px)</span>
                </div>
              </div>

              {heritageSheet && (
                <button
                  onClick={() => onOpenSheetLightbox(heritageSheet)}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-bold bg-studio-900 dark:bg-white text-white dark:text-studio-900 rounded hover:bg-blueprint-600 dark:hover:bg-blueprint-400 transition-colors shadow-md"
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
                  className="group relative bg-white dark:bg-studio-900 p-3 rounded-xl border border-studio-300 dark:border-studio-700 shadow-xl cursor-pointer"
                  onClick={() => onOpenSheetLightbox(heritageSheet)}
                >
                  <div className="relative aspect-[1/1.45] max-h-[580px] w-full overflow-hidden rounded-lg bg-studio-950 flex items-center justify-center">
                    <img
                      src={heritageSheet.optimized}
                      alt="Manikganj Teota Jomidar Bari Architectural Board"
                      className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-studio-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                      <span className="p-3 bg-blueprint-600 rounded-full shadow-lg mb-2 flex items-center justify-center">
                        <i className="bx bx-fullscreen text-2xl"></i>
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider">
                        Click to Zoom Technical Board
                      </span>
                      <span className="font-mono text-[10px] text-studio-300">
                        Resolution: 6496 × 9449 px
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs font-mono px-2">
                    <span className="font-bold text-studio-900 dark:text-white">
                      BOARD BUC074 // MANIKGANJ TEOTA JOMIDAR BARI
                    </span>
                    <span className="text-blueprint-600 dark:text-blueprint-400 flex items-center gap-1">
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
