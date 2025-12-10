import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ArrowLeft, Calendar, Tag, Folder } from 'lucide-react';
import { getPostBySlug } from '../lib/posts';
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
            <div className="min-h-screen bg-background flex items-center justify-center text-white">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Log not found</h2>
                    <Link to="/blog" className="text-primary hover:underline font-mono">/return_to_logs</Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen bg-background pt-32 pb-20 px-6 relative"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

            <article className="container mx-auto max-w-4xl relative z-10">
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary mb-8 transition-colors font-mono text-sm group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> /back_to_logs
                </Link>

                <header className="mb-12 border-b border-gray-800 pb-12">
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 font-mono">
                        <span className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded text-primary border border-primary/20">
                            <Folder size={14} /> {post.category}
                        </span>
                        <span className="flex items-center gap-2 bg-surface px-3 py-1 rounded border border-white/10">
                            <Calendar size={14} /> {post.date}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        {post.title}
                    </h1>

                    {post.tags && (
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="text-xs text-secondary bg-secondary/5 border border-secondary/10 px-3 py-1 rounded-full flex items-center gap-1 font-mono">
                                    <Tag size={12} /> {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                <div className="prose prose-invert prose-lg max-w-none 
            prose-headings:text-gray-100 prose-headings:font-bold
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-bold
            prose-code:text-secondary prose-code:font-mono prose-code:bg-secondary/10 prose-code:px-1 prose-code:rounded
            prose-pre:bg-[#0d0d0d] prose-pre:border prose-pre:border-gray-800 prose-pre:rounded-xl">
                    <ReactMarkdown
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '')
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        style={vscDarkPlus}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                        customStyle={{ background: 'transparent', margin: 0 }}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                )
                            }
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>
        </motion.div>
    );
};

export default BlogPost;
