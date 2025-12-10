import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalWindow = () => {
    const [history, setHistory] = useState([
        { type: 'info', content: 'System initialized.' },
        { type: 'success', content: 'Welcome, Guest.' },
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'input', content: input }];

            // Simple Logic for demo
            if (cmd === 'clear') {
                setHistory([]);
            } else if (cmd === 'help') {
                newHistory.push({ type: 'info', content: 'Commands: help, about, skills, contact, clear' });
            } else if (cmd === 'about') {
                newHistory.push({ type: 'success', content: 'Bharathkumar: Cyber Security Enthusiast & Developer.' });
            } else {
                if (cmd) newHistory.push({ type: 'error', content: `Command not found: ${cmd}` });
            }

            if (cmd !== 'clear') setHistory(newHistory);
            setInput('');
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl backdrop-blur-2xl bg-black/40 border border-white/10">
            {/* Glass Header */}
            <div className="bg-white/5 px-6 py-4 flex items-center gap-4">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                </div>
                <div className="text-xs font-medium text-gray-400 tracking-wide ml-2">Console Session</div>
            </div>

            {/* Glass Output Area */}
            <div className="p-8 h-[400px] overflow-y-auto custom-scrollbar font-mono text-sm leading-relaxed">
                {history.map((line, i) => (
                    <div key={i} className="mb-2 animate-fade-in-up">
                        {line.type === 'input' && <span className="text-primary mr-2">➜</span>}
                        <span className={
                            line.type === 'error' ? 'text-red-400' :
                                line.type === 'success' ? 'text-green-400' :
                                    line.type === 'input' ? 'text-white' :
                                        'text-blue-300'
                        }>
                            {line.content}
                        </span>
                    </div>
                ))}

                <div className="flex items-center mt-4">
                    <span className="text-primary mr-2">➜</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="bg-transparent border-none outline-none text-white w-full placeholder-gray-600"
                        placeholder="Type 'help'..."
                        autoFocus
                    />
                </div>
                <div ref={bottomRef}></div>
            </div>
        </div>
    );
};

export default TerminalWindow;
