import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/** Custom hook for count-up animation */
const useCountUp = (target, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime = null;
    const numericTarget = parseInt(target, 10);

    if (isNaN(numericTarget)) {
      setCount(target);
      return;
    }

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
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

const AboutStatCounter = ({ stat, index, isVisible }) => {
  const count = useCountUp(stat.target || 0, 2000, isVisible);
  const displayValue = `${count}${stat.suffix}`;

  return (
    <motion.div
      className="glass-card glow-border"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
      style={{ textAlign: 'center', padding: '24px' }}
    >
      <h3 style={{
        fontSize: '2.5rem',
        fontWeight: 800,
        background: 'var(--gradient-primary)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '8px',
      }}>
        {displayValue}
      </h3>
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '0.85rem',
        lineHeight: 1.4,
      }}>
        {stat.label}
      </p>
    </motion.div>
  );
};

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const stats = [
    { target: 100, suffix: '%', label: 'Reliability & Commitment' },
    { target: 500, suffix: '+', label: 'Successful global deliveries monthly' },
    { target: 238, suffix: '+', label: 'Brands served worldwide' },
  ];

  return (
    <section id="about" ref={sectionRef} className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">01 — About Us</p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          ABOUT AERO OCEAN X
        </motion.h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 500px' }}>
            {/* Body Text */}
            <motion.p
              className="section-subtext"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ marginBottom: '40px' }}
            >
              At Aero Ocean X, we deliver precision-driven global logistics solutions designed to support
              modern international trade. With a strong global partner network and deep industry expertise,
              we provide end-to-end Export-Import management, including seamless freight forwarding and expert
              customs clearance, connecting Indian businesses to key international markets. We understand that
              logistics is not just transportation — it is trust, timing, and transparency.
            </motion.p>

            {/* Stat Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
            }}>
              {stats.map((stat, index) => (
                <AboutStatCounter key={index} stat={stat} index={index} isVisible={isVisible} />
              ))}
            </div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ flex: '1 1 400px' }}
          >
            <div className="glow-border" style={{ borderRadius: '24px', padding: '8px', background: 'var(--glass-bg)' }}>
              <img 
                src={require('../images/img 1.jpeg')} 
                alt="Logistics Operations" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '16px',
                  display: 'block'
                }} 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
