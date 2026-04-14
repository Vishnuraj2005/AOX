import React from 'react';
import { motion } from 'framer-motion';
import {
  FiPhone,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import {
  RiLinkedinFill,
  RiInstagramLine,
  RiWhatsappLine,
} from 'react-icons/ri';
import logoDark from '../images/Aero Ocean X logo.png';
import logoLight from '../images/Aero Ocean X logo-02.png';


const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

const majorRoutes = ['UAE', 'SAUDI ARABIA', 'AFRICA', 'SINGAPORE', 'USA', 'EUROPE'];

const Footer = ({ theme }) => {
  const handleNavClick = (e, href) => {
    if (href.startsWith('#') && href.length > 1) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{ background: 'var(--bg-primary)', position: 'relative' }}>
      {/* Glowing Divider */}
      <hr className="glow-divider" />

      <div className="container" style={{ padding: '60px 24px 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Footer Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}>
            {/* Column 1: Logo & Tagline */}
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}>
                <img src={theme === 'light' ? logoLight : logoDark} alt="Aero Ocean X" style={{ height: '36px', width: 'auto' }} />
              </div>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                Precision-driven global logistics solutions supporting modern international
                trade from India to key international markets.
              </p>
              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { icon: RiLinkedinFill, href: '#', label: 'LinkedIn' },
                  { icon: RiInstagramLine, href: '#', label: 'Instagram' },
                  { icon: RiWhatsappLine, href: 'https://wa.me/918220992053', label: 'WhatsApp' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--glass-bg)',
                      border: '1px solid var(--glass-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary)';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.background = 'rgba(var(--primary-rgb), 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.borderColor = 'var(--glass-border)';
                      e.currentTarget.style.background = 'var(--glass-bg)';
                    }}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
                fontSize: '1.05rem',
              }}>
                Quick Links
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {quickLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h4 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
                fontSize: '1.05rem',
              }}>
                Contact
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a href="tel:6369448993" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  color: 'var(--text-secondary)', fontSize: '0.9rem',
                }}>
                  <FiPhone style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  6369448993
                </a>
                <a href="mailto:AOX@aerooceanx.com" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  color: 'var(--text-secondary)', fontSize: '0.9rem',
                }}>
                  <FiMail style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  AOX@aerooceanx.com
                </a>
                <a href="mailto:Aox@aerooceanx.com" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  color: 'var(--text-secondary)', fontSize: '0.9rem',
                }}>
                  <FiMail style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  Aox@aerooceanx.com
                </a>
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: '10px',
                  color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6,
                }}>
                  <FiMapPin style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '3px' }} />
                  <span>No:17/6, Indira Nagar, Rayanoor, Karur 639005</span>
                </div>
              </div>

              {/* Major Routes */}
              <h4 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '12px',
                marginTop: '24px',
                fontSize: '1.05rem',
              }}>
                Major Routes
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {majorRoutes.map((route, i) => (
                  <span
                    key={i}
                    className={i % 2 === 0 ? 'pill-tag' : 'pill-tag pill-tag-purple'}
                    style={{ fontSize: '0.75rem', padding: '4px 12px' }}
                  >
                    {route}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <hr className="glow-divider" style={{ marginBottom: '20px' }} />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          paddingBottom: '20px',
        }}>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.82rem',
          }}>
            © 2026 Aero Ocean X. All rights reserved.
          </p>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.82rem',
          }}>
            Designed with love for global trade by the AOX Team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
