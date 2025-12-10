import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { getPostBySlug } from '../lib/posts';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const foundPost = getPostBySlug(slug);
        setPost(foundPost);
    }, [slug]);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 font-sans bg-transparent text-gray-200">
            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                {/* Back Button */}
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group">
                    <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    </div>
                    <span>Back</span>
                </Link>

                {/* Hero Header */}
                <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 mb-12">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10">
                        <div className="flex flex-wrap gap-4 mb-6">
                            <span className="px-3 py-1 rounded-full bg-primary text-black text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                                {post.category}
                            </span>
                            <span className="flex items-center gap-2 text-sm text-gray-400">
                                <Calendar size={14} /> {post.date}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap gap-2">
                            {post.tags && post.tags.map(tag => (
                                <span key={tag} className="flex items-center gap-1 text-xs text-gray-400 bg-black/40 px-3 py-1.5 rounded-full border border-white/5 hover:border-white/20 transition-colors">
                                    <Tag size={12} /> {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none 
                    prose-headings:text-white prose-headings:font-bold
                    prose-p:text-gray-300 prose-p:leading-8
                    prose-a:text-primary prose-a:font-medium prose-a:underline-offset-4 hover:prose-a:text-secondary
                    prose-code:text-primary prose-code:bg-secondary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-black/80 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-pre:shadow-2xl"
                >
                    <ReactMarkdown
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <div className="relative my-8 group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                        <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                            </div>
                                            <span className="text-xs text-gray-500 font-mono uppercase">{match[1]}</span>
                                        </div>
                                        <SyntaxHighlighter
                                            style={dracula}
                                            language={match[1]}
                                            PreTag="div"
                                            customStyle={{
                                                background: 'rgba(0,0,0,0.6)',
                                                backdropFilter: 'blur(20px)',
                                                margin: 0,
                                                padding: '1.5rem',
                                            }}
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    </div>
                                ) : (
                                    <code className={`${className} font-mono`} {...props}>
                                        {children}
                                    </code>
                                );
                            },
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </motion.article>
        </div>
    );
};

export default BlogPost;
