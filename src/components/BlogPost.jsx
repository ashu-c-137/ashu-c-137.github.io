import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === id);

  if (!post) {
    return (
      <div className="blog-post">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="nav-link" style={{ display: "inline-block", marginBottom: "1rem" }}>
            ← Back to Home
          </Link>
          <h1 className="blog-post-title">Post not found</h1>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" className="nav-link" style={{ display: "inline-block", marginBottom: "1rem" }}>
          ← Back to Home
        </Link>
        <h1 className="blog-post-title">{post.title}</h1>
        <div className="blog-post-meta">
          Published on {post.date}
        </div>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </motion.div>
    </div>
  );
};

export default BlogPost;