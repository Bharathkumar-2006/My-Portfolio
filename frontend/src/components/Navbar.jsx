import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/#about' },
        { name: 'Skills', path: '/#skills' },
        { name: 'Work', path: '/#certifications' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/#contact' },
    ];

    const handleNavClick = (path) => {
        setIsOpen(false);
        if (path.startsWith('/#')) {
            const id = path.replace('/#', '');
            if (location.pathname !== '/') {
                // If not on home, waiting for nav might be tricky without global state or context, 
                // but simpler to use standard anchor navigation behavior for now.
            } else {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4'
            : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg group-hover:shadow-[0_0_20px_rgba(112,0,255,0.4)] transition-all">
                        <span className="font-mono text-lg">B</span>
                    </div>
                    <span className="text-white hidden sm:block">Bharath<span className="text-gray-400 font-normal">.kumar</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => handleNavClick(link.path)}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <a
                        href="https://drive.google.com/drive/folders/1sujtGjnE25-p9duGoIbHy3oWlkvG0hfe?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-white"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => handleNavClick(link.path)}
                                    className="text-lg font-medium text-gray-300 hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
