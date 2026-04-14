import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Specialties from '../components/Specialties';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import GlobalRoutes from '../components/GlobalRoutes';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = ({ theme, toggleTheme }) => {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Specialties />
        <Stats />
        <Testimonials />
        <GlobalRoutes />
        <Contact />
      </main>
      <Footer theme={theme} />
    </>
  );
};

export default Home;
