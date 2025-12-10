import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const FloatingSocials = () => {
    const socials = [
        { icon: <Github size={20} />, href: "https://github.com/Bharathkumar-2006", label: "GitHub" },
        { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/bharathkumar006", label: "LinkedIn" },
        { icon: <Twitter size={20} />, href: "https://x.com/realXpL0itX", label: "Twitter" }
    ];

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        >
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300 relative group"
                    aria-label={social.label}
                >
                    {social.icon}

                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {social.label}
                    </span>
                </a>
            ))}

            {/* Divider */}
            <div className="w-px h-4 bg-white/20"></div>

            <span className="text-xs font-mono text-gray-500">
                FOLLOW
            </span>
        </motion.div>
    );
};

export default FloatingSocials;
