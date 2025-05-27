import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const BlogList = () => {
  return (
    <div className="blog-post">
      <h1 className="blog-post-title">Technical Blog</h1>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <p className="blog-meta">Published on {post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogList;