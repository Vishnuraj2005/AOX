import React from 'react';
import { motion } from 'framer-motion';

/**
 * GlobalRoutes Component
 * Infinite horizontal marquee/ticker of global routes,
 * country pill badges, and SVG world map with animated pulse dots
 */
const routes = [
  'UAE (Dubai, Sharjah, Abu Dhabi)',
  'Saudi Arabia (Jeddah, Riyadh, Dammam)',
  'Africa Countries',
  'Singapore',
  'Australia',
  'Malaysia',
  'USA',
  'Europe',
];

const countries = [
  'UAE', 'Saudi Arabia', 'Africa', 'Singapore',
  'Australia', 'Malaysia', 'USA', 'Europe',
];

/** Map dot positions (approximate % coords on SVG world map) */
const mapDots = [
  { cx: '60%', cy: '42%', label: 'UAE' },
  { cx: '58%', cy: '40%', label: 'Saudi Arabia' },
  { cx: '52%', cy: '55%', label: 'Africa' },
  { cx: '74%', cy: '58%', label: 'Singapore' },
  { cx: '82%', cy: '68%', label: 'Australia' },
  { cx: '75%', cy: '55%', label: 'Malaysia' },
  { cx: '22%', cy: '38%', label: 'USA' },
  { cx: '48%', cy: '32%', label: 'Europe' },
  { cx: '68%', cy: '48%', label: 'India' },
];

const GlobalRoutes = () => {
  // Duplicate routes for seamless marquee loop
  const marqueeItems = [...routes, ...routes];

  return (
    <section id="global-routes" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p className="section-label">06 — Global Reach</p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ textAlign: 'center' }}
        >
          OUR GLOBAL FOCUS ROUTES
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="section-subtext"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: 'center', margin: '0 auto 48px' }}
        >
          Strategic handling of cargo from India to key international markets.
          Specialized handling for Middle East trade lanes.
        </motion.p>
      </div>

      {/* Infinite Marquee Ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          overflow: 'hidden',
          padding: '20px 0',
          marginBottom: '48px',
          borderTop: '1px solid var(--glass-border)',
          borderBottom: '1px solid var(--glass-border)',
        }}
      >
        <div className="animate-marquee" style={{
          display: 'flex',
          gap: '48px',
          whiteSpace: 'nowrap',
          width: 'max-content',
        }}>
          {marqueeItems.map((route, index) => (
            <span
              key={index}
              style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-heading)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--primary)',
                boxShadow: '0 0 8px rgba(var(--primary-rgb), 0.5)',
                flexShrink: 0,
              }} />
              {route}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="container">
        {/* Country Pill Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '60px',
          }}
        >
          {countries.map((country, index) => (
            <span
              key={index}
              className={index % 2 === 0 ? 'pill-tag' : 'pill-tag pill-tag-purple'}
              style={{ padding: '8px 20px', fontSize: '0.85rem' }}
            >
              {country}
            </span>
          ))}
        </motion.div>

        {/* SVG World Map with Animated Dots */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="world-map-container"
          style={{ padding: '20px' }}
        >
          <svg
            viewBox="0 0 1000 500"
            style={{
              width: '100%',
              height: 'auto',
              opacity: 0.3,
            }}
          >
            {/* Simplified world map outline */}
            <path
              d="M150,120 Q200,80 250,100 Q280,110 300,95 Q330,75 370,90 Q400,100 420,85 Q450,70 480,90 Q500,100 520,95 L530,100 Q540,110 520,130 Q500,145 480,140 Q460,135 450,150 Q440,170 420,180 Q400,190 380,185 Q360,175 350,190 Q340,210 320,220 Q300,230 280,225 Q270,220 260,230 Q250,245 230,250 Q210,255 190,245 Q170,235 160,220 Q150,200 145,180 Q140,160 150,140 Z M460,100 Q490,95 510,105 Q530,115 550,110 Q570,105 590,115 Q600,120 610,110 Q630,95 660,100 Q680,108 700,100 Q720,92 740,105 Q750,112 745,125 Q740,140 730,150 Q720,160 700,165 Q680,170 660,160 Q640,150 620,160 Q600,175 580,180 Q560,182 540,175 Q520,165 510,150 Q500,135 490,130 Q480,125 470,115 Z M700,170 Q720,172 740,180 Q760,190 770,210 Q780,230 770,250 Q760,265 740,270 Q720,275 700,265 Q690,258 685,245 Q680,230 685,215 Q690,200 700,190 Z M500,200 Q530,195 550,210 Q565,225 575,245 Q585,265 595,290 Q600,310 590,330 Q575,350 555,360 Q535,365 515,355 Q500,345 495,325 Q490,305 500,290 Q510,275 505,260 Q500,240 495,220 Z M760,280 Q790,275 810,290 Q830,310 840,340 Q845,365 830,385 Q810,400 785,395 Q765,388 755,365 Q748,345 755,325 Q760,305 758,290 Z M200,260 Q220,255 240,265 Q250,275 245,295 Q240,315 250,335 Q260,355 255,375 Q245,395 225,400 Q205,405 185,395 Q170,385 165,365 Q160,345 170,325 Q180,305 185,285 Q190,270 200,260 Z"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="0.8"
              opacity="0.4"
            />
          </svg>

          {/* Animated Pulse Dots */}
          {mapDots.map((dot, index) => (
            <div
              key={index}
              className="map-dot"
              style={{
                left: dot.cx,
                top: dot.cy,
                animationDelay: `${index * 0.3}s`,
              }}
              title={dot.label}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalRoutes;
