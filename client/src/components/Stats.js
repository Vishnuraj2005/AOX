import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import StarBackground from './StarBackground';

/**
 * Stats Component
 * Count-up animated counters with IntersectionObserver,
 * dark section with radial gradient and subtle stars
 */

/** Custom hook for count-up animation */
const useCountUp = (target, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    const numericTarget = parseInt(target, 10);

    if (isNaN(numericTarget)) {
      // For non-numeric values like "24/7"
      setCount(target);
      return;
    }

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, shouldStart]);

  return count;
};

const stats = [
  { target: 5000, display: 'K+', suffix: '5K+', label: 'Global shipments handled annually' },
  { target: 30, display: '+', suffix: '30+', label: 'Export-import focus countries' },
  { target: null, display: '24/7', suffix: '24/7', label: 'Real-time coordination and support' },
];

const StatCounter = ({ stat, shouldAnimate }) => {
  const count = useCountUp(
    stat.target || 0,
    2000,
    shouldAnimate
  );

  const displayValue = stat.target === null
    ? '24/7'
    : stat.target >= 1000
      ? `${Math.floor(count / 1000)}K+`
      : `${count}+`;

  return (
    <motion.div
      className="glass-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        textAlign: 'center',
        padding: '40px 32px',
      }}
    >
      <h3 style={{
        fontSize: '3.2rem',
        fontWeight: 800,
        background: 'var(--gradient-primary)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '8px',
        fontFamily: 'var(--font-heading)',
      }}>
        {displayValue}
      </h3>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '0.95rem',
        lineHeight: 1.5,
      }}>
        {stat.label}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const scrollTo = useCallback((id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="section"
      style={{
        position: 'relative',
        background: 'radial-gradient(ellipse at center, rgba(var(--primary-rgb), 0.08) 0%, var(--bg-primary) 70%)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle Stars */}
      <StarBackground starCount={80} opacity={0.5} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p className="section-label">04 — Stats & Facts</p>
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
          Reliable Logistics Solutions You Can Trust.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="section-subtext"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: 'center', margin: '0 auto 60px' }}
        >
          We understand that logistics is not just transportation — it is trust, timing,
          and transparency.
        </motion.p>

        {/* Counter Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {stats.map((stat, index) => (
            <StatCounter key={index} stat={stat} shouldAnimate={isVisible} />
          ))}
        </div>

        {/* CTA Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: 'center' }}
        >
          <button
            className="btn-secondary"
            onClick={() => scrollTo('#about')}
          >
            Who We Are
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
