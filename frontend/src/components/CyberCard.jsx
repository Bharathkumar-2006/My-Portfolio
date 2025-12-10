import React from 'react';
import { motion } from 'framer-motion';

const CyberCard = ({ children, className = "", delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            className={`relative group rounded-3xl overflow-hidden ${className}`}
        >
            {/* Glowing Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-purple-500/30 to-blue-500/50 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Inner Glass Layer */}
            <div className="absolute inset-[1px] bg-black/40 backdrop-blur-xl rounded-[23px] z-10"></div>

            {/* Content */}
            <div className="relative z-20 p-8 h-full">
                {children}
            </div>

            {/* Ambient Glow */}
            <div className="absolute -inset-4 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none z-0"></div>
        </motion.div>
    );
};

export default CyberCard;
