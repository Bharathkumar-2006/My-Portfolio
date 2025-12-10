import React from 'react';
import { motion } from 'framer-motion';

const Web3Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-background">
            {/* Deep Gradient Globs */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px] animate-blob mix-blend-screen opacity-60"></div>
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen opacity-60"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-screen opacity-60"></div>

            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"></div>

            {/* Noise Texture for Texture/Premium feel */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}></div>
        </div>
    );
};

export default Web3Background;
