import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RiStarFill } from 'react-icons/ri';

/**
 * Testimonials Component
 * Auto-sliding carousel with dot navigation + prev/next arrows
 * 7 testimonial cards with star ratings and glassmorphism design
 */
const testimonials = [
  {
    quote: "Aero Ocean X has been a game-changer for our exports to the UAE. Their focus on trust and timing is unmatched in the industry.",
    name: 'Prakash Sharma',
    company: 'Prakash Textiles',
  },
  {
    quote: "Their real-time tracking and customs handling are world-class. We never have to worry about our heavy machinery shipments again.",
    name: 'Suresh Gupta',
    company: 'Global Engineering Ltd',
  },
  {
    quote: "Fast, secure, and reliable—exactly what they promise. Our perishables always arrive fresh and on schedule.",
    name: 'Ananya Iyer',
    company: 'Fresh Harvest Exports',
  },
  {
    quote: "Professionalism at its peak. Our air freight costs reduced significantly thanks to their optimized logistics strategy.",
    name: 'Vikram Rathore',
    company: 'Auto Component Hub',
  },
  {
    quote: "Highly recommend for Middle East and Africa logistics. Their local knowledge of the African trade lanes is invaluable.",
    name: 'Mohammed Al-Fayed',
    company: 'Trade Masters Inc',
  },
  {
    quote: "Seamless door-to-door delivery. No more clearance headaches or hidden charges. A truly transparent logistics partner.",
    name: 'Rahul Deshmukh',
    company: 'Smart Electronics',
  },
  {
    quote: "Trustworthy partner for precision-driven supply chain management. They treat our small shipments with the same care as bulk orders.",
    name: 'Sunita Reddy',
    company: 'Industrial Sol. India',
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goTo = useCallback((index) => setCurrent(index), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);
  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p className="section-label">05 — Testimonials</p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="section-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ textAlign: 'center' }}
        >
          Stories from Clients
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="section-subtext"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ textAlign: 'center', margin: '0 auto 60px' }}
        >
          Real experiences, genuine feedback—discover how our solutions have transformed businesses.
        </motion.p>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Testimonial Card */}
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            position: 'relative',
          }}>
            <div className="glass-card" style={{
              padding: '40px',
              textAlign: 'center',
              minHeight: '260px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {/* Stars */}
              <div className="star-rating" style={{ marginBottom: '20px' }}>
                {[...Array(5)].map((_, i) => (
                  <RiStarFill key={i} />
                ))}
              </div>

              {/* Quote */}
              <p style={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                marginBottom: '24px',
                transition: 'opacity 0.3s ease',
              }}>
                "{testimonials[current].quote}"
              </p>

              {/* Author */}
              <div>
                <p style={{
                  fontWeight: 700,
                  color: 'var(--primary)',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-heading)',
                }}>
                  {testimonials[current].name}
                </p>
                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  marginTop: '4px',
                }}>
                  {testimonials[current].company}
                </p>
              </div>
            </div>

            {/* Arrows */}
            <button
              className="carousel-arrow"
              onClick={prev}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft />
            </button>
            <button
              className="carousel-arrow"
              onClick={next}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              aria-label="Next testimonial"
            >
              <FiChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '32px',
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === current ? 'active' : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive arrow positioning */}
      <style>{`
        @media (max-width: 868px) {
          .carousel-arrow {
            position: static !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
