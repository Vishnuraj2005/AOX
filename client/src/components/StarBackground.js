import React, { useRef, useEffect, useCallback } from 'react';

const StarBackground = ({ starCount = 150, opacity = 1 }) => {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationRef = useRef(null);

  const initStars = useCallback((width, height) => {
    const stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        alphaSpeed: Math.random() * 0.008 + 0.002,
        alphaDirection: Math.random() > 0.5 ? 1 : -1,
      });
    }
    starsRef.current = stars;
  }, [starCount]);

  const starColorRef = useRef('255, 255, 255');

  useEffect(() => {
   
    const updateColor = () => {
      const color = getComputedStyle(document.documentElement)
        .getPropertyValue('--star-color')
        .trim();
      if (color) {
        starColorRef.current = color;
      }
    };
    
    //fetch
    updateColor();

    setTimeout(updateColor, 100);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          updateColor();
        }
      });
    });
    
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  // Animation loop
  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;

    ctx.clearRect(0, 0, width, height);

    starsRef.current.forEach((star) => {
      
      star.alpha += star.alphaSpeed * star.alphaDirection;
      if (star.alpha >= 1) {
        star.alpha = 1;
        star.alphaDirection = -1;
      } else if (star.alpha <= 0.1) {
        star.alpha = 0.1;
        star.alphaDirection = 1;
      }

    
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${starColorRef.current}, ${star.alpha * opacity})`;
      ctx.fill();
    });

    animationRef.current = requestAnimationFrame(animate);
  }, [opacity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      initStars(canvas.width, canvas.height);
    };

    handleResize();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, initStars]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default StarBackground;
