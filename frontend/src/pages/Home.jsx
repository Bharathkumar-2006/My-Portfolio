import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Certifications />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
