import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
    {
        name: 'Certified Ethical Hacker (CEH)',
        provider: 'EC-Council',
        date: 'In Progress',
        link: '#',
        color: 'border-secondary/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(0,255,148,0.2)]'
    },
    {
        name: 'Certified Network Security Practitioner (CNSP)',
        provider: 'The SecOps Group',
        date: 'In Progress',
        link: '#',
        color: 'border-primary/50',
        glow: 'group-hover:shadow-[0_0_30px_rgba(0,209,255,0.2)]'
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-32 bg-surface relative overflow-hidden">
            {/* Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="text-secondary font-mono text-sm tracking-wider uppercase mb-2 block">/achievements</span>
                    <h2 className="text-3xl md:text-5xl font-bold">Certifications</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certifications.map((cert, idx) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className={`group relative bg-background/60 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all ${cert.glow}`}
                        >
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-4 bg-white/5 rounded-xl border ${cert.color}`}>
                                        <Award size={32} className="text-white" strokeWidth={1.5} />
                                    </div>
                                    <a
                                        href={cert.link}
                                        className="p-2 text-gray-500 hover:text-white transition-colors bg-white/5 rounded-lg hover:bg-white/10"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                </div>

                                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{cert.name}</h3>
                                <p className="text-lg text-gray-400 mb-6 font-mono border-l-2 border-gray-700 pl-4">{cert.provider}</p>

                                <div className="flex items-center gap-2 text-sm text-gray-500 bg-black/20 w-fit px-3 py-1 rounded-full border border-white/5">
                                    <Calendar size={14} />
                                    <span>{cert.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
