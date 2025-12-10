import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "", delay = 0, hoverEffect = true }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6, ease: "easeOut" }}
            className={`
        relative overflow-hidden rounded-3xl
        bg-white/5 backdrop-blur-2xl 
        border border-white/10 shadow-xl
        ${hoverEffect ? 'hover:border-primary/30 hover:shadow-[0_0_30px_rgba(112,0,255,0.15)] transition-all duration-500' : ''}
        ${className}
      `}
        >
            {/* Glossy Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default GlassCard;
