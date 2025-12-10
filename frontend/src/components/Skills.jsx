import React from 'react';
import { motion } from 'framer-motion';
import CyberCard from './CyberCard';
import { Code, Terminal, Globe, Shield } from 'lucide-react';

const skills = [
    {
        category: "Offensive Security",
        icon: <Shield size={24} />,
        items: ["Penetration Testing", "Burp Suite", "Metasploit", "Nmap", "Wireshark"],
        color: "text-red-500"
    },
    {
        category: "Web Security",
        icon: <Globe size={24} />,
        items: ["OWASP Top 10", "XSS", "SQL Injection", "CSRF", "IDOR"],
        color: "text-blue-400"
    },
    {
        category: "Programming",
        icon: <Code size={24} />,
        items: ["Python", "JavaScript", "Go", "C/C++", "SQL"],
        color: "text-green-400"
    },
    {
        category: "Infrastructure",
        icon: <Terminal size={24} />,
        items: ["Docker", "Kubernetes", "AWS", "Linux", "Git"],
        color: "text-purple-400"
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative font-mono">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        <span className="text-primary mr-2">&gt;</span>
                        capabilities
                    </h2>
                    <p className="text-gray-500 text-sm">/usr/bin/skills_check</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <CyberCard
                            key={index}
                            className="h-full"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="flex items-center gap-3 mb-4 border-b border-gray-800 pb-2">
                                    <div className={`${skill.color}`}>{skill.icon}</div>
                                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">{skill.category}</h3>
                                </div>

                                <ul className="space-y-2 mt-2">
                                    {skill.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                            <span className="text-primary/50 text-xs">./</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CyberCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
