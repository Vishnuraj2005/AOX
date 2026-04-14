import React, { useState, useEffect, useCallback } from 'react';
import { FiArrowUp } from 'react-icons/fi';

/**
 * BackToTop Component
 * Floating button that appears after scrolling 400px
 * Smooth-scrolls to top on click
 */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <FiArrowUp />
    </button>
  );
};

export default BackToTop;
