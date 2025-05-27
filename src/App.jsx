import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";
import BlogPost from "./components/BlogPost";
import BlogList from "./components/BlogList";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <motion.h1 
            className="logo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            4shu.dev
          </motion.h1>
          <ul className="nav-links">
            <li>
              <ScrollLink 
                to="home" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-100}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="about" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-100}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="portfolio" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-100}
              >
                Work
              </ScrollLink>
            </li>
            <li>
              <ScrollLink 
                to="resume" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-100}
              >
                Resume
              </ScrollLink>
            </li>
            <li>
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li>
              <ScrollLink 
                to="contact" 
                spy={true} 
                smooth={true} 
                duration={500} 
                offset={-100}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </AnimatePresence>

        <footer className="footer">
          <div className="social-links">
            <motion.a 
              href="https://github.com/ashu-c-137" 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#fff" }}
            >
              GitHub
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/4shu" 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#fff" }}
            >
              LinkedIn
            </motion.a>
            <motion.a 
              href="https://twitter.com/ashutoshdubey" 
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#fff" }}
            >
              Twitter
            </motion.a>
          </div>
          <p className="copyright">© 2025 Ashutosh Dubey. Built with React.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;