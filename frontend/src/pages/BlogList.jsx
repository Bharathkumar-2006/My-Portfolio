import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/posts';
import { Folder, Search, Database, ArrowRight } from 'lucide-react';
import CyberCard from '../components/CyberCard';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [mainTab, setMainTab] = useState('ctf');
    const [ctfSubTab, setCtfSubTab] = useState('thm');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        try {
            const loadedPosts = getAllPosts();
            setPosts(loadedPosts);
        } catch (err) {
            console.error("Failed to load posts:", err);
        }
    }, []);

    const filteredPosts = posts.filter(post => {
        if (!post) return false;
        console.log("Checking post:", post.title, post.category, post.tags); // DEBUG LOG

        // Combine category and tags into a single searchable string for allocation
        const allocString = `${post.category} ${post.tags.join(' ')}`.toLowerCase();

        let passesTab = false;
        if (mainTab === 'security') {
            // Check for security-blogs, realworld, or generic security terms
            passesTab = allocString.includes('security-blogs') ||
                allocString.includes('security') ||
                allocString.includes('realworld') ||
                allocString.includes('web') ||
                allocString.includes('appsec') ||
                allocString.includes('network');
        } else if (mainTab === 'ctf') {
            if (ctfSubTab === 'thm') {
                passesTab = allocString.includes('thm') || allocString.includes('tryhackme');
            } else if (ctfSubTab === 'htb') {
                passesTab = allocString.includes('htb') || allocString.includes('hackthebox');
            } else if (ctfSubTab === 'other') {
                passesTab = allocString.includes('other') ||
                    (!allocString.includes('thm') &&
                        !allocString.includes('tryhackme') &&
                        !allocString.includes('htb') &&
                        !allocString.includes('hackthebox') &&
                        (allocString.includes('ctf') || allocString.includes('pwn') || allocString.includes('re')));
            } else {
                passesTab = true;
            }
        }

        const passesSearch = post.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description?.toLowerCase().includes(searchQuery.toLowerCase());

        return passesTab && passesSearch;
    });

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 font-sans text-gray-200 bg-transparent">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-secondary mb-4"
                    >
                        Knowledge Base
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        Documenting the journey through offensive security operations and research.
                    </motion.p>
                </div>

                {/* Glass Tabs Container */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white/5 backdrop-blur-xl p-2 rounded-2xl border border-white/10">

                    {/* Main Tabs switch */}
                    <div className="flex bg-black/40 rounded-xl p-1 w-full md:w-auto">
                        <button
                            onClick={() => setMainTab('ctf')}
                            className={`px-8 py-3 rounded-lg font-medium transition-all ${mainTab === 'ctf'
                                ? 'bg-gradient-to-r from-primary/80 to-secondary/80 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            CTF Writeups
                        </button>
                        <button
                            onClick={() => setMainTab('security')}
                            className={`px-8 py-3 rounded-lg font-medium transition-all ${mainTab === 'security'
                                ? 'bg-gradient-to-r from-primary/80 to-secondary/80 text-white shadow-lg'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Security Research
                        </button>
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            placeholder="Search articles..."
                        />
                    </div>
                </div>

                {/* CTF Sub Filter Pills */}
                {mainTab === 'ctf' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-center gap-3 mb-10"
                    >
                        {[
                            { id: 'thm', label: 'TryHackMe' },
                            { id: 'htb', label: 'HackTheBox' },
                            { id: 'other', label: 'Other Challenges' }
                        ].map((sub) => (
                            <button
                                key={sub.id}
                                onClick={() => setCtfSubTab(sub.id)}
                                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all ${ctfSubTab === sub.id
                                    ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                                    : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {sub.label}
                            </button>
                        ))}
                    </motion.div>
                )}

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, idx) => (
                        <Link to={`/blog/${post.slug}`} key={idx} className="block h-full transform hover:-translate-y-1 transition-transform duration-300">
                            <CyberCard className="h-full">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide border border-primary/20">{post.category}</span>
                                        <span className="text-sm text-gray-500">{post.date}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                                        {post.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                        <div className="flex gap-2">
                                            {post.tags && post.tags.slice(0, 2).map((tag, i) => (
                                                <span key={i} className="text-xs text-gray-500 font-medium">#{tag}</span>
                                            ))}
                                        </div>
                                        <span className="text-primary text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                                            Read Article <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </CyberCard>
                        </Link>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="py-24 text-center">
                        <div className="inline-flex p-6 rounded-full bg-white/5 mb-6 text-gray-500">
                            <Database size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">No Entries Found</h3>
                        <p className="text-gray-500">Try adjusting your search criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogList;
