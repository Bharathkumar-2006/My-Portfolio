import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Footer from './components/Footer';
import CursorInteractiveBackground from './components/CursorInteractiveBackground';
import FloatingSocials from './components/FloatingSocials';
import CustomCursor from './components/CustomCursor';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen text-gray-200 font-sans cursor-none">
      <CustomCursor />
      <CursorInteractiveBackground />
      <Navbar />
      <FloatingSocials />
      <main className="relative z-10">
        {children}
      </main>
      {/* Footer is handled by pages or wrapper */}
    </div>
  );
};

// Simple wrapper for Blog pages to include Footer at bottom
const PageWrapper = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

const App = () => {
  // Removed BootSequence for faster, cleaner Web3 entry
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<PageWrapper><BlogList /></PageWrapper>} />
            <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
          </Routes>
        </Layout>
      </AnimatePresence>
    </Router>
  );
}

export default App;
