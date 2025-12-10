import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CyberCard from './CyberCard';
import { Mail, Phone, MapPin, Send, Terminal } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:bharathkumar50033@gmail.com?subject=Brief from ${formState.name}&body=${formState.message}%0D%0A%0D%0AFrom: ${formState.email}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-20 relative font-mono">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        <span className="text-primary mr-2">&gt;</span>
                        initiate_uplink
                    </h2>
                    <p className="text-gray-500 text-sm">Establishing secure connection...</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-stretch">

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <CyberCard className="p-0">
                            <div className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
                                <div className="p-3 bg-gray-900 border border-gray-700 rounded text-primary group-hover:border-primary transition-colors">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-widest">Phone</span>
                                    <span className="text-lg text-white font-bold">+91 99522 50033</span>
                                </div>
                            </div>
                        </CyberCard>

                        <CyberCard className="p-0">
                            <div className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
                                <div className="p-3 bg-gray-900 border border-gray-700 rounded text-primary group-hover:border-primary transition-colors">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-widest">Email</span>
                                    <span className="text-lg text-white font-bold break-all">bharathkumar50033@gmail.com</span>
                                </div>
                            </div>
                        </CyberCard>

                        <CyberCard className="p-0">
                            <div className="p-6 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group">
                                <div className="p-3 bg-gray-900 border border-gray-700 rounded text-primary group-hover:border-primary transition-colors">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <span className="block text-xs text-gray-500 uppercase tracking-widest">Location</span>
                                    <span className="text-lg text-white font-bold">Tiruppur, India</span>
                                </div>
                            </div>
                        </CyberCard>
                    </div>

                    {/* Contact Form */}
                    <CyberCard className="h-full">
                        <div className="p-6 h-full flex flex-col">
                            <div className="flex items-center gap-2 mb-6 text-primary border-b border-gray-800 pb-2">
                                <Terminal size={18} />
                                <span className="font-bold text-sm tracking-wider uppercase">Send Message</span>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4 flex-grow">
                                <div>
                                    <label className="text-xs text-gray-500 uppercase tracking-wider mb-1 block">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-sm"
                                        placeholder="Enter name..."
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 uppercase tracking-wider mb-1 block">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all font-mono text-sm"
                                        placeholder="user@domain.com"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 uppercase tracking-wider mb-1 block">Message</label>
                                    <textarea
                                        required
                                        rows="4"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-black border border-gray-700 rounded p-3 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none font-mono text-sm"
                                        placeholder="Input message payload..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3 bg-primary/10 border border-primary text-primary hover:bg-primary hover:text-black transition-all font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 mt-4"
                                >
                                    Execute Send <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </CyberCard>

                </div>
            </div>
        </section>
    );
};

export default Contact;
