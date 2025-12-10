import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../lib/posts';
import { Search, Tag, Calendar, Folder, ArrowRight, Shield, Globe } from 'lucide-react';

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('ctf'); // 'ctf' or 'realworld'
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const loadedPosts = getAllPosts();
            setPosts(loadedPosts);
        } catch (err) {
            console.error("Failed to load posts:", err);
            setError("Failed to load blog posts. Please check console for details.");
        }
    }, []);

    if (error) {
        return (
            <div className="min-h-screen bg-background pt-32 px-6 flex justify-center text-red-500">
                {error}
            </div>
        )
    }

    // Filter logic
    const filteredPosts = posts.filter(post => {
        if (!post) return false;

        try {
            // 1. Search Filter
            const titleMatch = post.title?.toLowerCase().includes(searchQuery.toLowerCase());
            const descMatch = post.description?.toLowerCase().includes(searchQuery.toLowerCase());
            const tagMatch = post.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesSearch = titleMatch || descMatch || tagMatch;

            if (!matchesSearch) return false;

            // 2. Section Filter (CTF vs Real World)
            const category = post.category ? post.category.toLowerCase() : 'uncategorized';
            // CTF: thm, htb, others, ctf
            // RealWorld: realworld, web, network, appsec

            const isRealWorld =
                category.includes('realworld') ||
                category.includes('web') ||
                category.includes('network') ||
                category.includes('appsec');

            const isCTF =
                category.includes('thm') ||
                category.includes('htb') ||
                category.includes('ctf') ||
                category.includes('others') ||
                !isRealWorld; // Default to CTF if not explicitly RealWorld? Or keep separate?
            // Let's keep separate for now. Logic:

            if (activeTab === 'ctf') {
                // Include explicit CTF categories OR if it's uncategorized but valid
                return category.includes('thm') || category.includes('htb') || category.includes('ctf') || category.includes('others') || category === 'uncategorized';
            }

            if (activeTab === 'realworld') {
                return isRealWorld;
            }

            return true;
        } catch (e) {
            console.warn("Error filtering post:", post, e);
            return false;
        }
    });

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6 relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

            <div className="container mx-auto max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">/logs</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Writeups</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Documentation of exploits, CTF solutions, and security research.
                    </p>
                </motion.div>

                {/* Main Section Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-surface/50 backdrop-blur p-1 rounded-xl border border-white/10 flex">
                        <button
                            onClick={() => setActiveTab('ctf')}
                            className={`px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${activeTab === 'ctf'
                                    ? 'bg-primary/20 text-primary shadow-[0_0_15px_rgba(0,209,255,0.2)]'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Shield size={18} /> CTF Writeups
                        </button>
                        <button
                            onClick={() => setActiveTab('realworld')}
                            className={`px-8 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${activeTab === 'realworld'
                                    ? 'bg-secondary/20 text-secondary shadow-[0_0_15px_rgba(0,255,148,0.2)]'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Globe size={18} /> Real-World
                        </button>
                    </div>
                </div>

                {/* Search */}
                <div className="max-w-md mx-auto mb-16 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder={`Search ${activeTab === 'ctf' ? 'CTF' : 'Real-World'} writeups...`}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-black/40 border border-gray-800 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,209,255,0.1)] transition-all placeholder:text-gray-600"
                    />
                </div>

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, idx) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-surface/40 backdrop-blur rounded-xl border border-white/5 overflow-hidden hover:border-primary/30 transition-all group hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col"
                        >
                            <div className="p-6 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`flex items-center gap-2 text-xs font-mono px-2 py-1 rounded border ${activeTab === 'ctf' ? 'text-primary bg-primary/10 border-primary/20' : 'text-secondary bg-secondary/10 border-secondary/20'}`}>
                                        <Folder size={12} />
                                        {post.category}
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                                        <Calendar size={12} />
                                        {post.date}
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold mb-3 text-gray-200 group-hover:text-primary transition-colors line-clamp-2">
                                    <Link to={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                                    {post.description}
                                </p>

                                <div className="flex items-center gap-2 mt-auto mb-6 flex-wrap">
                                    {post.tags && post.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-xs text-gray-400 bg-white/5 border border-white/10 px-2 py-1 rounded flex items-center gap-1 font-mono">
                                            <Tag size={10} /> {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    to={`/blog/${post.slug}`}
                                    className={`mt-4 block text-center py-2 rounded-lg bg-white/5 border border-white/5 hover:text-black transition-all text-sm font-bold flex items-center justify-center gap-2 group-hover:translate-y-1 ${activeTab === 'ctf' ? 'hover:bg-primary hover:border-primary' : 'hover:bg-secondary hover:border-secondary'}`}
                                >
                                    Read Walkthrough <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-20 bg-surface/30 rounded-2xl border border-white/5">
                        <p className="text-gray-500 text-lg font-mono">No writeups found in {activeTab === 'ctf' ? 'CTF' : 'Real-World'} section.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogList;
