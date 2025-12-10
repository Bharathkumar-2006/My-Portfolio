import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Core Competencies',
        skills: ['AppSec', 'Web Security', 'Network Security', 'Linux', 'Threat Analysis', 'Secure Coding']
    },
    {
        title: 'Tools & Utilities',
        skills: ['Nmap', 'Burp Suite', 'Wireshark', 'Nikto', 'Gobuster', 'Metasploit', 'Nessus', 'Hydra', 'Dirsearch']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-32 bg-background relative overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">/skills</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-primary text-glow">Arsenal</span></h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                        >
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="h-1 w-8 bg-gradient-to-r from-primary to-transparent rounded-full"></span>
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {category.skills.map((skill, i) => (
                                    <motion.div
                                        key={skill}
                                        whileHover={{ scale: 1.05, borderColor: '#00D1FF' }}
                                        className="bg-surface/50 backdrop-blur border border-gray-800 p-4 rounded-lg flex flex-col items-center justify-center text-center gap-2 group transition-colors hover:bg-white/5 hover:shadow-[0_0_15px_rgba(0,209,255,0.15)] cursor-default"
                                    >
                                        <div className="h-1 w-8 bg-gray-700 rounded-full overflow-hidden group-hover:w-full transition-all duration-500">
                                            <div className="h-full bg-gradient-to-r from-primary to-secondary w-full"></div>
                                        </div>
                                        <span className="font-medium text-gray-300 group-hover:text-white transition-colors text-sm">{skill}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
