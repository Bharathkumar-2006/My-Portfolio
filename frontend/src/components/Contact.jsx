import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `mailto:bharathkumar50033@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
    };

    return (
        <section id="contact" className="py-32 bg-background relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-accent font-mono text-sm tracking-wider uppercase mb-2 block">/connect</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">Initialize <span className="text-accent text-glow">Communication</span></h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-8">Transmission Data</h3>
                        <p className="text-gray-400 mb-12 leading-relaxed text-lg">
                            I'm always open to discussing new projects, security audits, or opportunities to collaborate.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Phone, title: "Phone", value: "+91 99522 50033" },
                                { icon: Mail, title: "Email", value: "bharathkumar50033@gmail.com" },
                                { icon: MapPin, title: "Location", value: "Tamil Nadu, India" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-6 group">
                                    <div className="p-4 bg-surface rounded-xl border border-gray-800 text-primary group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,209,255,0.15)] transition-all">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-200 mb-1">{item.title}</h4>
                                        <p className="text-gray-400 font-mono text-sm">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-surface/30 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/5 relative"
                    >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="group">
                                <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/40 border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/40 border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-sm font-medium text-gray-400 mb-2 group-focus-within:text-primary transition-colors">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full bg-black/40 border border-gray-800 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all"
                                    placeholder="Enter your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary/10 text-primary border border-primary/50 font-bold py-4 rounded-lg hover:bg-primary hover:text-black hover:shadow-[0_0_20px_rgba(0,209,255,0.4)] transition-all flex items-center justify-center gap-2 group"
                            >
                                Send Transmission <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
