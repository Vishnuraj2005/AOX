import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import {
  RiPlaneLine,
  RiShipLine,
  RiFileTextLine,
  RiShieldCheckLine,
} from 'react-icons/ri';

const services = [
  {
    icon: RiPlaneLine,
    title: 'Air Freight Services',
    description: 'Fast transit times with real-time coordination and priority handling.',
    color: 'var(--primary)',
    img: require('../images/img-2.jpeg'),
  },
  {
    icon: RiShipLine,
    title: 'Sea Freight Services',
    description: 'Cost-effective solutions for bulk shipments with global route presence.',
    color: 'var(--secondary)',
    img: require('../images/img-3.jpeg'),
  },
  {
    icon: RiShieldCheckLine,
    title: 'Customs Clearance',
    description: 'Hassle-free documentation and compliance for seamless movement.',
    color: 'var(--primary)',
    img: require('../images/img-4.jpeg'),
  },
  {
    icon: RiFileTextLine,
    title: 'Documentation Support',
    description: 'Expert paperwork handling including Certificates of Origin and Bills of Lading.',
    color: 'var(--secondary)',
    img: require('../images/img-5.jpeg'),
  },
];


const TiltCard = ({ children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="tilt-card-inner"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease' }}
    >
      {children}
    </div>
  );
};

const Services = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">02 — Services</p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          OUR SERVICES
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="section-subtext"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '60px' }}
        >
          Aero Ocean X provides comprehensive global logistics solutions designed to support
          modern international trade.
        </motion.p>

        {/* Service Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="tilt-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <TiltCard>
                <div className="glass-card glow-border" style={{ height: '100%', padding: '0', overflow: 'hidden' }}>
                  {/* Image Header */}
                  <div style={{
                    width: '100%',
                    height: '180px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={service.img} 
                      alt={service.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                      }}
                      onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: '0',
                      background: 'linear-gradient(to top, rgba(10, 17, 40, 0.9) 0%, transparent 100%)'
                    }} />
                  </div>
                  
                  <div style={{ padding: '24px' }}>
                    {/* Icon */}
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '14px',
                      background: `rgba(${service.color === 'var(--primary)' ? 'var(--primary-rgb)' : 'var(--secondary-rgb)'}, 0.1)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      color: service.color,
                      fontSize: '1.5rem',
                      marginTop: '-52px',
                      position: 'relative',
                      zIndex: 1,
                      backdropFilter: 'blur(10px)',
                      border: '1px solid var(--glass-border)'
                    }}>
                      <service.icon />
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                      fontFamily: 'var(--font-heading)',
                    }}>
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.92rem',
                      lineHeight: 1.6,
                    }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <button
            className="btn-secondary"
            onClick={() => scrollTo('#specialties')}
          >
            Explore All Services
            <FiArrowRight />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
