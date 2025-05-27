import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="blog-post">
        <h1>Post not found</h1>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <Link to="/blog" style={{ display: "inline-block", marginBottom: "2rem" }}>← Back to Blog</Link>
      <h1 className="blog-post-title">{post.title}</h1>
      <div className="blog-post-meta">
        Published on {post.date}
      </div>
      <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;