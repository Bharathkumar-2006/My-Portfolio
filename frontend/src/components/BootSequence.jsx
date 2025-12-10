import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BootSequence = ({ onComplete }) => {
    const [lines, setLines] = useState([]);

    const bootLines = [
        "INITIALIZING SYSTEM KERNEL...",
        "LOADING MEMORY MODULES: OK",
        "CHECKING SECURITY PROTOCOLS... [VERIFIED]",
        "ESTABLISHING SECURE CONNECTION...",
        "DECRYPTING USER INTERFACE...",
        "MOUNTING FILE SYSTEM: /home/bharathkumar",
        "LOADING ASSETS...",
        "SYSTEM READY."
    ];

    useEffect(() => {
        let delay = 0;
        bootLines.forEach((line, index) => {
            const randomDelay = Math.random() * 300 + 100;
            delay += randomDelay;
            setTimeout(() => {
                setLines(prev => [...prev, line]);
                // Scroll to bottom?
            }, delay);
        });

        setTimeout(() => {
            onComplete();
        }, delay + 800);
    }, []);

    return (
        <div className="fixed inset-0 bg-black z-[10000] flex items-center justify-center font-mono text-primary p-10 cursor-none">
            <div className="w-full max-w-2xl">
                <div className="mb-4 border-b border-primary/30 pb-2 flex justify-between">
                    <span>BIOS v4.0.1</span>
                    <span>MEM: 64528KB OK</span>
                </div>
                <div className="flex flex-col gap-1">
                    {lines.map((line, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-sm md:text-base text-gray-300"
                        >
                            <span className="text-primary mr-2">&gt;</span>
                            {line}
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="mt-4 w-4 h-6 bg-primary"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                />
            </div>
        </div>
    );
};

export default BootSequence;
