import React, { useState, useEffect, useCallback } from 'react';
import { FiMenu, FiX, FiPhone, FiSun, FiMoon } from 'react-icons/fi';
import logoDark from '../images/Aero Ocean X logo.png';
import logoLight from '../images/Aero Ocean X logo-02.png';

/**
 * Navbar Component
 * Sticky navigation with blur backdrop, dark/light toggle,
 * mobile hamburger drawer, and animated link underlines
 */
const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <img
            src={theme === 'light' ? logoLight : logoDark}
            alt="Aero Ocean X"
            style={{ height: '42px', width: 'auto' }}
          />
        </a>

        {/* Desktop Nav Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          {/* Call Now CTA - Desktop */}
          <a
            href="tel:8220992053"
            className="btn-primary desktop-only"
            style={{ padding: '10px 24px', fontSize: '0.85rem' }}
          >
            <FiPhone size={14} />
            CALL NOW
          </a>

          {/* Hamburger - Mobile */}
          <button
            className="theme-toggle mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={(e) => handleNavClick(e, link.href)}
              style={{ fontSize: '1.05rem', padding: '8px 0' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:8220992053"
            className="btn-primary"
            style={{
              textAlign: 'center',
              justifyContent: 'center',
              marginTop: '8px',
            }}
          >
            <FiPhone size={14} />
            CALL NOW
          </a>
        </div>
      </div>

      {/* Inline responsive styles */}
      <style>{`
        .desktop-nav {
          display: flex !important;
        }
        .desktop-only {
          display: inline-flex !important;
        }
        .mobile-only {
          display: none !important;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .desktop-only {
            display: none !important;
          }
          .mobile-only {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
