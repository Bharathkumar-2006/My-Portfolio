import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, MousePointer2 } from 'lucide-react';

const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden font-sans text-gray-100 bg-transparent">

            {/* Soft Ambient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* Left: Text Content */}
                <div className="order-2 lg:order-1 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
                    >
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-sm font-medium tracking-wide">Available for Projects</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400"
                    >
                        Bharathkumar
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl md:text-3xl font-medium text-primary mb-8 flex items-center justify-center lg:justify-start gap-3"
                    >
                        <span className="text-secondary">Security Researcher</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
                    >
                        Crafting secure digital experiences and hardened infrastructure. Bridging the gap between offensive security and elegant engineering.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                    >
                        <a href="#contact" className="px-8 py-4 rounded-full bg-primary text-black font-bold hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all flex items-center gap-2 group">
                            Start Collaboration <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="https://drive.google.com/drive/folders/1sujtGjnE25-p9duGoIbHy3oWlkvG0hfe?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm transition-all font-medium flex items-center gap-2">
                            Access Resume <MousePointer2 size={18} />
                        </a>
                    </motion.div>
                </div>

                {/* Right: Floating Avatar */}
                <div className="order-1 lg:order-2 flex justify-center perspective-[1000px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="relative"
                    >
                        {/* Spinning Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-10 border border-dashed border-primary/30 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border border-secondary/30 rounded-full"
                        />

                        {/* Avatar Container */}
                        <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_50px_rgba(112,0,255,0.3)] bg-black/50 backdrop-blur-sm flex items-center justify-center group">
                            {/* Photo */}
                            <img
                                src="/profile.jpg"
                                alt="Bharathkumar"
                                className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700 hover:grayscale-0 grayscale-[20%]"
                            />

                            {/* Reflection Overlay */}
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none mix-blend-overlay"></div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
