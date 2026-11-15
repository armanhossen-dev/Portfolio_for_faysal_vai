import React from 'react';

export default function Hero({ onOpenSheetReview }) {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="role">Architectural Designer &amp; Urban Researcher</p>
        <h1>Faysal Ahmed</h1>
        <p className="sub">Final-year B.Arch at DIU</p>
        <p className="lede">Exploring ecological urbanism: how cities, climate and everyday life shape each other.</p>
        <div className="cta">
          <a className="btn primary" href="#projects">Explore projects</a>
          <a 
            className="btn" 
            href="#sheets"
            onClick={(e) => {
              if (onOpenSheetReview) {
                e.preventDefault();
                onOpenSheetReview(0);
              }
            }}
          >
            Review sheets
          </a>
        </div>
      </div>

      <div className="stage">
        {/* amber zigzag, echoing the department wall graphic */}
        <svg className="zig" viewBox="0 0 400 500" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="0,330 130,170 215,290 400,120 400,230 235,400 130,290 0,440" fill="#f5a623" />
        </svg>
        <div className="photo" onContextMenu={(e) => e.preventDefault()}>
          <img 
            src="./images/faysal-home.jpg" 
            alt="Faysal Ahmed with ARCHFEST 2026 Best Design Award" 
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
        <div className="badge"><b>ARCHFEST 2026</b>Winner, Best Design</div>
      </div>

      <dl className="facts">
        <div><dt>Studying</dt><dd>Architecture, DIU</dd></div>
        <div><dt>Based in</dt><dd>Dhaka, Bangladesh</dd></div>
        <div><dt>From</dt><dd>Chandpur, Chittagong</dd></div>
        <div><dt>Recognition</dt><dd className="win">ARCHFEST 2026 winner</dd></div>
      </dl>
    </section>
  );
}
