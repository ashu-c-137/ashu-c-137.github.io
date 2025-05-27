import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import BlogPost from "./components/BlogPost";
import BlogList from "./components/BlogList";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <h1 className="logo">4shu.dev</h1>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#portfolio">Work</a></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>

        <footer className="footer">
          <div className="social-links">
            <a href="https://github.com/ashu-c-137" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/4shu" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com/ashutoshdubey" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
          <p className="copyright">© 2025 Ashutosh Dubey. Built with React.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;