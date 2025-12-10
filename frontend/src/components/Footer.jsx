import React from 'react';
import { Github, Linkedin, Twitter, Terminal } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 bg-background border-t border-white/5 relative z-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-gray-400">
                    <Terminal size={18} className="text-primary" />
                    <span className="font-mono text-sm">&copy; {new Date().getFullYear()} Bharathkumar. Executed successfully.</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="https://github.com/Bharathkumar-2006" target="_blank" rel="noopener noreferrer" className="p-2 bg-surface rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"><Github size={20} /></a>
                    <a href="https://linkedin.com/in/bharathkumar006" target="_blank" rel="noopener noreferrer" className="p-2 bg-surface rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"><Linkedin size={20} /></a>
                    <a href="https://x.com/realXpL0itX" target="_blank" rel="noopener noreferrer" className="p-2 bg-surface rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"><Twitter size={20} /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
