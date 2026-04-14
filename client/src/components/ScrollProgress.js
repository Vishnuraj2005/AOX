import React, { useState, useEffect, useCallback } from 'react';

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setScrollWidth(scrollPercent);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${scrollWidth}%` }}
    />
  );
};

export default ScrollProgress;
