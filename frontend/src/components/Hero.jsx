import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Globe, Lock, Terminal } from 'lucide-react';
import MatrixBackground from './MatrixBackground';
import GlitchText from './GlitchText';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-background">
            <MatrixBackground />

            {/* Decorative Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface/50 border border-primary/30 text-sm text-primary mb-6 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        System Online
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        I am <br />
                        <GlitchText text="Bharathkumar" className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent" />
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-4 font-mono">
                        <span className="text-secondary">&gt;</span> Application Security & Cybersecurity Enthusiast
                    </p>

                    <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                        Breaking, securing, learning — repeat. Dedicated to making the digital world safer one vulnerability at a time.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-black rounded font-medium transition-all flex items-center gap-2 group"
                        >
                            Initialize Contact <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 border border-gray-800 hover:border-white text-gray-400 hover:text-white rounded font-medium transition-all"
                        >
                            View Data
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Cyber Ring Visual */}
                    <div className="relative w-[500px] h-[500px] mx-auto">
                        <div className="absolute inset-0 rounded-full border border-gray-800 animate-spin-slow opacity-30"></div>
                        <div className="absolute inset-4 rounded-full border border-dashed border-primary/30 animate-[spin_10s_linear_infinite_reverse]"></div>

                        {/* Floating Tech Icons */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-surface shadow-[0_0_50px_rgba(0,209,255,0.3)] z-20">
                                <img
                                    src="https://ui-avatars.com/api/?name=Bharath+Kumar&background=0a0a0a&color=00D1FF&size=256"
                                    alt="Bharathkumar"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Orbiting Elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute w-full h-full"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-surface p-3 rounded-lg border border-gray-700 shadow-lg">
                                    <Shield className="text-secondary w-6 h-6" />
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute w-[80%] h-[80%]"
                            >
                                <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-6 bg-surface p-3 rounded-lg border border-gray-700 shadow-lg">
                                    <Terminal className="text-primary w-6 h-6" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
