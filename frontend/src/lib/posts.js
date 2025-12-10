import matter from 'gray-matter';

// Get all markdown files from writeups directory
const modules = import.meta.glob('../writeups/**/*.md', { query: '?raw', import: 'default', eager: true });

export const getAllPosts = () => {
    const posts = Object.keys(modules).map((path) => {
        try {
            const slug = path.split('/').pop().replace('.md', '');

            // Robust category extraction
            const relativePath = path.replace('../writeups/', '');
            const parts = relativePath.filter ? relativePath.split('/') : relativePath.toString().split('/');
            if (parts.length > 1) {
                parts.pop(); // remove filename
            } else {
                // File is at root of writeups
            }

            const categoryPath = parts.length > 0 && path.includes('/') ? parts.join('/') : 'uncategorized';

            const fileContent = modules[path];
            if (typeof fileContent !== 'string') {
                console.error(`Post content for ${path} is not a string. Received:`, typeof fileContent);
                return null;
            }

            const { data, content } = matter(fileContent);

            return {
                slug,
                path,
                category: categoryPath || 'uncategorized',
                title: data.title || slug,
                date: data.date || 'Unknown Date',
                description: data.description || 'No description available.',
                tags: Array.isArray(data.tags) ? data.tags : [],
                content
            };
        } catch (error) {
            console.error("Error parsing post:", path, error);
            return null;
        }
    })
        .filter(post => post !== null); // Remove failed posts

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getPostBySlug = (slug) => {
    const posts = getAllPosts();
    return posts.find((post) => post.slug === slug);
};
