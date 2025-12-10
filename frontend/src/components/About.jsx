import React from 'react';
import TerminalWindow from './TerminalWindow';

const About = () => {
    return (
        <section id="about" className="py-20 relative font-mono">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">
                        <span className="text-primary mr-2">&gt;</span>
                        whoami
                    </h2>
                    <p className="text-gray-500 text-sm">Target Identity Verification</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <TerminalWindow />
                </div>
            </div>
        </section>
    );
};

export default About;
