import React, { useState, useEffect, useCallback } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
  }, []);

  const handleMouseMove = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isTouchDevice, handleMouseMove]);

  if (isTouchDevice) return null;

  return (
    <div
      className="cursor-glow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

export default CursorGlow;
