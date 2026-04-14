import React, { useState, useEffect, useCallback } from 'react';
import Home from './pages/Home';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

/**
 * App Component — Root of the application
 * Manages theme state (dark/light) with localStorage persistence
 * Renders global utility components: Loader, CursorGlow, ScrollProgress, BackToTop
 */
function App() {
  // Theme state — default to dark, persist in localStorage
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('aox-theme');
    return saved || 'dark';
  });

  // Loading state — show loader on first load
  const [loading, setLoading] = useState(true);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aox-theme', theme);
  }, [theme]);

  // Toggle theme between dark and light
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  // Loader complete callback
  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {loading && <Loader onComplete={handleLoaderComplete} />}

      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Custom Cursor Glow */}
      <CursorGlow />

      {/* Main Content */}
      <Home theme={theme} toggleTheme={toggleTheme} />

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
}

export default App;
