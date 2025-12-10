import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Server, Terminal } from 'lucide-react';

const About = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5 }
        })
    };

    return (
        <section id="about" className="py-32 bg-surface relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <span className="h-px w-12 bg-primary shadow-[0_0_10px_#00D1FF]"></span>
                        <span className="text-primary font-mono tracking-wider uppercase text-sm">/whoami</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Securing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Frontier</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            { icon: User, title: "Student", desc: "BE CSE undergraduate building strong CS foundations.", color: "text-primary" },
                            { icon: Terminal, title: "Hacker", desc: "CTF player and bug bounty hunter.", color: "text-secondary" },
                            { icon: Server, title: "Researcher", desc: "Exploring AppSec & Network Defense.", color: "text-accent" }
                        ].map((item, idx) => (
                            <motion.div
                                key={item.title}
                                custom={idx}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={cardVariants}
                                whileHover={{ y: -5 }}
                                className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 hover:border-primary/30 transition-all group"
                            >
                                <item.icon className={`${item.color} w-8 h-8 mb-4 group-hover:scale-110 transition-transform`} />
                                <h3 className="text-xl font-bold mb-2 text-gray-200">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="prose prose-invert max-w-none text-gray-400 bg-black/20 p-8 rounded-2xl border border-gray-800">
                        <p className="text-lg leading-relaxed mb-6 font-light">
                            I am a dedicated cybersecurity enthusiast and a Computer Science Engineering student. My journey is driven by a curiosity to understand <span className="text-white font-medium">how systems break</span> and, more importantly, how to fix them.
                        </p>
                        <p className="text-lg leading-relaxed font-light">
                            I actively practice on platforms like <span className="text-secondary">TryHackMe</span> and <span className="text-secondary">HackTheBox</span>, constantly adding new tools to my arsenal. My goal is to leverage ethical hacking to contribute to a safer digital environment.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
