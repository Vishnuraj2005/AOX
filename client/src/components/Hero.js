import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';
import StarBackground from './StarBackground';

const words = ['Fast.', 'Secure.', 'Reliable.', 'Global.'];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, 120);
      } else {
        // Pause at complete word
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, 60);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
      }}
    >
      {/* Stars Canvas */}
      <StarBackground starCount={200} opacity={1} />

      {/* Floating Orbs */}
      <div
        className="floating-orb orb-blue animate-float"
        style={{ width: '400px', height: '400px', top: '-100px', right: '-100px' }}
      />
      <div
        className="floating-orb orb-purple animate-float-slow"
        style={{ width: '350px', height: '350px', bottom: '-80px', left: '-80px' }}
      />
      <div
        className="floating-orb orb-blue animate-float-delayed"
        style={{ width: '200px', height: '200px', top: '40%', left: '60%' }}
      />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'inline-block',
            padding: '10px 24px',
            borderRadius: '50px',
            background: 'rgba(var(--primary-rgb), 0.08)',
            border: '1px solid rgba(var(--primary-rgb), 0.2)',
            marginBottom: '32px',
          }}
        >
          <span style={{
            fontSize: '0.85rem',
            color: 'var(--text-secondary)',
            fontWeight: 500,
          }}>
            We deliver precision-driven global logistics solutions for modern international trade.
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 900,
            background: 'var(--gradient-primary)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '24px',
            lineHeight: 1.1,
          }}
        >
          Aero Ocean X
        </motion.h1>

        {/* Typing Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
            color: 'var(--text-primary)',
            minHeight: '60px',
            marginBottom: '40px',
          }}
        >
          <span className="typing-cursor">{displayText}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <button
            className="btn-primary"
            onClick={() => scrollTo('#services')}
          >
            OUR SERVICES
            <FiArrowRight />
          </button>
          <button
            className="btn-secondary"
            onClick={() => scrollTo('#about')}
          >
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <div
        className="animate-bounce-down"
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          cursor: 'pointer',
          color: 'var(--text-muted)',
        }}
        onClick={() => scrollTo('#about')}
      >
        <FiChevronDown size={28} />
      </div>
    </section>
  );
};

export default Hero;
