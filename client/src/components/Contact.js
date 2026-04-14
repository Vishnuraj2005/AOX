import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiCheckCircle,
} from 'react-icons/fi';
import { RiWhatsappLine } from 'react-icons/ri';
import axios from 'axios';

const contactInfo = [
  {
    icon: FiPhone,
    title: 'Phone',
    details: ['6369448993'],
    link: 'tel:6369448993',
  },
  {
    icon: FiMail,
    title: 'Email',
    details: ['AOX@aerooceanx.com', 'Aox@aerooceanx.com'],
    link: 'mailto:AOx@aerooceanx.com',
  },
  {
    icon: FiMapPin,
    title: 'Address',
    details: ['No:17/6, Indira Nagar,', 'Rayanoor,', 'Karur 639005'],
    link: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('https://aox.onrender.com/api/contact', formData);
      if (response.status === 201) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p className="section-label">07 — Contact Us</p>
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
          Get In Touch
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
          Let's Move Your Business Forward. Whether you're an exporter, importer,
          or trader, we're here to help.
        </motion.p>

        {/* Contact Info Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '48px',
        }}>
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="glass-card glow-border"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              style={{ textAlign: 'center', cursor: info.link ? 'pointer' : 'default' }}
              onClick={() => info.link && window.open(info.link, '_self')}
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'rgba(var(--primary-rgb), 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                color: 'var(--primary)',
                fontSize: '1.2rem',
              }}>
                <info.icon />
              </div>
              <h4 style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '8px',
              }}>
                {info.title}
              </h4>
              {info.details.map((detail, i) => (
                <p
                  key={i}
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                  }}
                >
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <a
            href="https://wa.me/918220992053"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <RiWhatsappLine size={22} />
            SEND VIA WHATSAPP
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="form-input"
                rows={5}
                required
                style={{ resize: 'vertical' }}
              />
              {error && <p style={{ color: '#ff4d4f', textAlign: 'center', margin: '8px 0' }}>{error}</p>}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  justifyContent: 'center',
                  width: '100%',
                  padding: '16px',
                  fontSize: '1rem',
                }}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
                <FiSend />
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            style={{
              position: 'fixed',
              bottom: '40px',
              left: '50%',
              background: 'var(--primary, #1e90ff)',
              color: '#fff',
              padding: '16px 32px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              zIndex: 1000,
              fontWeight: '600',
              fontFamily: 'var(--font-heading, "Inter", sans-serif)',
            }}
          >
            <FiCheckCircle size={24} />
            Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
