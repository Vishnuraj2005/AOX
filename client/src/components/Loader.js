import React, { useState, useEffect } from 'react';

/**
 * Loader Component
 * Full-screen loading animation with "Aero Ocean X" branding
 * Auto-dismisses after 2 seconds with fade-out transition
 */
const Loader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Start fade out after 1.5s
    const fadeTimer = setTimeout(() => setFadeOut(true), 1500);
    // Fully remove after 2s
    const removeTimer = setTimeout(() => {
      setHidden(true);
      if (onComplete) onComplete();
    }, 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div className={`loader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loader-spinner"></div>
      <div className="loader-text">AERO OCEAN X</div>
      <p style={{
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
        marginTop: '12px',
        letterSpacing: '2px',
        fontWeight: 400
      }}>
        GLOBAL LOGISTICS
      </p>
    </div>
  );
};

export default Loader;
