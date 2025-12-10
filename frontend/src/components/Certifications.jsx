import React from 'react';
import { motion } from 'framer-motion';
import CyberCard from './CyberCard';
import { Award, CheckCircle } from 'lucide-react';

const certifications = [
    {
        name: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        id: "ECC-34294521",
        status: "Verified",
        color: "text-primary"
    },
    {
        name: "Certified Network Security Practitioner",
        issuer: "The SecOps Group",
        id: "CNSP-882103",
        status: "Verified",
        color: "text-secondary"
    },
    {
        name: "Junior Cybersecurity Analyst",
        issuer: "Cisco",
        id: "CS-992102",
        status: "In Progress",
        color: "text-red-500"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative font-mono">
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        <span className="text-primary mr-2">&gt;</span>
                        credentials
                    </h2>
                    <p className="text-gray-500 text-sm">/var/log/certs</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <CyberCard
                            key={index}
                            className="group"
                        >
                            <div className="p-6 relative overflow-hidden">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`text-xs font-bold tracking-wider uppercase ${cert.color}`}>[{cert.issuer}]</span>
                                    <Award className={`opacity-50 ${cert.color}`} size={20} />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-4 h-12 leading-tight">{cert.name}</h3>

                                <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
                                    <span className="text-xs text-gray-500 font-mono">ID: {cert.id}</span>
                                    <div className="flex items-center gap-1.5 text-xs text-white">
                                        <span className={`w-2 h-2 rounded-full ${cert.status === 'Verified' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></span>
                                        {cert.status}
                                    </div>
                                </div>
                            </div>
                        </CyberCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
