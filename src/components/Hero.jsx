import React from 'react';

export default function Hero({ onOpenSheetReview }) {
  return (
    <header id="top" className="hero">
      <h1>Faysal<br />Ahmed</h1>
      <p className="role">Architectural Designer &amp; Urban Researcher</p>
      <p className="tag">Final-year B.Arch at DIU, exploring ecological urbanism.</p>

      <div className="actions">
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

      <p className="facts">
        <span><b>ARCHFEST 2026</b> winner, Best Design</span>
        <span>Architecture, DIU</span>
        <span>Dhaka, Bangladesh</span>
        <span>From Chandpur, Chittagong</span>
      </p>
    </header>
  );
}
