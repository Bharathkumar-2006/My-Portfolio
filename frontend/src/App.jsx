import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import Footer from './components/Footer';

// Wrapper to conditionally render footer if not in Home (Home has its own footer at bottom)
// Actually Home includes Footer. Blog pages need Footer too.
// Let's make Navbar global. Footer global?
// Home page has sections.
// BlogList and BlogPost are separate pages.
// Let's add Footer to Layout or specific pages.
// Home already has Footer in my previous step.
// BlogList needs Footer.
// BlogPost needs Footer.

const Layout = ({ children }) => {
  return (
    <div className="bg-background min-h-screen text-gray-200 font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        {children}
      </main>
      {/* Conditionally render footer here if we remove it from Home? 
          Or just let pages handle their footers. 
          Home has scrolling sections so Footer is last section.
          Blog pages are standard.
      */}
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

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<PageWrapper><BlogList /></PageWrapper>} />
          <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
