import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (item) => {
        setIsOpen(false);
        if (item.path) {
            navigate(item.path);
        } else {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(item.id);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const element = document.getElementById(item.id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled
                    ? 'bg-background/70 backdrop-blur-xl border-white/10 py-4 supports-[backdrop-filter]:bg-background/60'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div
                    className="flex items-center gap-2 font-bold text-2xl cursor-pointer group"
                    onClick={() => handleNavClick({ id: 'home' })}
                >
                    <div className="p-2 bg-primary/10 rounded border border-primary/20 group-hover:border-primary/50 transition-colors">
                        <Terminal className="text-primary h-6 w-6" />
                    </div>
                    <span className="text-white font-mono">Mr.<span className="text-primary">BK</span></span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavClick(item)}
                            className="text-gray-400 hover:text-primary transition-colors text-sm uppercase tracking-wider font-medium relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-surface border-b border-white/10 md:hidden overflow-hidden backdrop-blur-xl"
                    >
                        <div className="flex flex-col py-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavClick(item)}
                                    className="py-4 px-6 text-left text-gray-300 hover:text-primary hover:bg-white/5 transition-colors font-mono"
                                >
                                    <span className="text-secondary mr-2">&gt;</span>{item.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
