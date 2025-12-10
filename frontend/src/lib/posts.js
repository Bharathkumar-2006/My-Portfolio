import matter from 'gray-matter';

// Get all markdown files from posts directory
const modules = import.meta.glob('../posts/*.md', { query: '?raw', import: 'default', eager: true });

export const getAllPosts = () => {
    const posts = Object.keys(modules).map((path) => {
        try {
            const slug = path.split('/').pop().replace('.md', '');
            const fileContent = modules[path];

            if (typeof fileContent !== 'string') {
                console.error(`Post content for ${path} is not a string.`);
                return null;
            }

            const { data, content } = matter(fileContent);

            // Normalize category for filtering
            // Main Categories: 'CTF', 'Security' (mapped from 'Real World' etc)
            // If user enters "TryHackMe", it works with the "thm" includes check in BlogList

            return {
                slug,
                path,
                category: data.category || 'Uncategorized', // Expecting Frontmatter 'category'
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
        .filter(post => post !== null);

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getPostBySlug = (slug) => {
    const posts = getAllPosts();
    return posts.find((post) => post.slug === slug);
};
