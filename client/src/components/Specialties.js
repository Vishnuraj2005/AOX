import React from 'react';
import { motion } from 'framer-motion';
import {
  RiPlaneLine,
  RiShipLine,
  RiShieldCheckLine,
  RiFileTextLine,
} from 'react-icons/ri';


const specialties = [
  {
    icon: RiPlaneLine,
    title: 'Air Freight Solutions',
    tags: ['Airport-to-Airport', 'Cargo Door-to-Door', 'Express Delivery', 'Consolidated Shipments', 'Perishable Handling'],
    img: require('../images/img-6.jpeg'),
  },
  {
    icon: RiShipLine,
    title: 'Sea Freight Logistics',
    tags: ['FCL & LCL', 'Break Bulk', 'Project Cargo', 'Port-to-Port', 'End-to-End Logistics'],
    img: require('../images/img-7.jpeg'),
  },
  {
    icon: RiShieldCheckLine,
    title: 'Customs Clearance',
    tags: ['Export Clearance', 'Import Clearance', 'HS Code Support', 'Compliance Advisory'],
    img: require('../images/img-8.jpeg'),
  },
  {
    icon: RiFileTextLine,
    title: 'Documentation Support',
    tags: ['Shipping Bill', 'Bill of Lading', 'Certificate of Origin', 'Inspection Docs'],
    img: require('../images/img-9.jpeg'),
  },
];

const Specialties = () => {
  return (
    <section id="specialties" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">03 — Specialties</p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Specialized Logistics Solutions
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
          A glimpse into our diverse expertise—exploring innovative freight categories
          and successful global delivery models.
        </motion.p>

        {/* Specialty Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="glass-card glow-border"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }}
              style={{ padding: '0', overflow: 'hidden' }}
            >
              <div style={{
                width: '100%',
                height: '160px',
                position: 'relative'
              }}>
                <img 
                  src={specialty.img}
                  alt={specialty.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'linear-gradient(to top, rgba(10, 17, 40, 0.95) 0%, transparent 100%)'
                }} />
              </div>

              <div style={{ padding: '24px' }}>
                {/* Icon */}
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: index % 2 === 0
                    ? 'rgba(var(--primary-rgb), 0.1)'
                    : 'rgba(var(--secondary-rgb), 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  marginTop: '-49px',
                  position: 'relative',
                  zIndex: 1,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid var(--glass-border)',
                  color: index % 2 === 0 ? 'var(--primary)' : 'var(--secondary)',
                  fontSize: '1.4rem',
                }}>
                  <specialty.icon />
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  fontFamily: 'var(--font-heading)',
                }}>
                  {specialty.title}
                </h3>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                }}>
                  {specialty.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={tagIndex % 2 === 0 ? 'pill-tag' : 'pill-tag pill-tag-purple'}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
