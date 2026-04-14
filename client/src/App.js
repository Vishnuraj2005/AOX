import React, { useState, useEffect, useCallback } from 'react';
import Home from './pages/Home';
import Loader from './components/Loader';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';


function App() {
  // Theme state
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('aox-theme');
    return saved || 'dark';
  });

  // Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('aox-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

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
