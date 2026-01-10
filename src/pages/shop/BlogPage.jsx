import React from 'react';
import './Blog.css';

const BlogPage = () => {
    const posts = [
        {
            id: 1,
            title: "Building a Brand in College Sports: Tips from Athletes Crushing NIL",
            excerpt: "Explaining the strategies student-athletes use to build their personal brands and maximize NIL opportunities.",
            date: "Oct 24, 2025",
            image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000&auto=format&fit=crop",
            link: "/blog/building-a-brand"
        },
        {
            id: 2,
            title: "The Future of Fan Engagement in the NIL Era",
            excerpt: "How fans are connecting directly with their favorite college athletes like never before.",
            date: "Nov 12, 2025",
            image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=1000",
            link: "/blog/future-fan-engagement"
        },
        {
            id: 3,
            title: "Essential Gear for Student-Athletes: From Tech to Apparel",
            excerpt: "A curated list of must-have products for any athlete looking to balance academics and sports.",
            date: "Dec 05, 2025",
            image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000",
            link: "/blog/essential-gear"
        }
    ];

    return (
        <div className="blog-page">
            <div className="blog-header">
                <h1>FanPact Blog</h1>
                <p>Insights, Stories, and Tips from the World of NIL & Athlete Branding</p>
            </div>

            <div className="blog-container">
                <div className="blog-grid">
                    {posts.map(post => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-card-image">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="blog-card-content">
                                <span className="blog-date">{post.date}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <button className="read-more">Read More</button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
