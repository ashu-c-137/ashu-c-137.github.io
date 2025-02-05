import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">4shu.dev</h1>
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* About Section */}
        <section className="section" id="about">
          <h2 className="section-title">About Me</h2>
          <p className="bio">
            Hi, I'm <span className="highlight">Ashutosh Dubey</span>, a passionate Software Engineer with 3+ years of experience in frontend development.
            I specialize in building scalable, high-performance applications using React, React Native, Redux, JavaScript, HTML, and CSS.
          </p>
          <p className="bio">
            I love crafting clean, efficient code and designing seamless user experiences that make technology intuitive and accessible. 
            Whether it's developing interactive web applications or feature-rich mobile apps, I focus on delivering responsive, visually appealing, and user-friendly solutions.
          </p>
          <p className="bio">Let's connect and build something amazing together! 🚀</p>
          
          <h3 className="subheading">What I Do</h3>
          <div className="tech-grid">
            <span className="tech-item">Mobile App Development</span>
            <span className="tech-item">Web Applications</span>
            <span className="tech-item">UI/UX Design</span>
          </div>
        </section>

        {/* Resume Section */}
        <section className="section" id="resume">
          <h2 className="section-title">Resume</h2>
          <div className="resume-content">
            <h3>Ashutosh Dubey</h3>
            <p>Software Engineer | Frontend Developer</p>
            <p>Email: contact@4shu.dev | Location: India</p>
            <h4>Experience</h4>
            <ul>
              <li>Software Engineer - 3+ years in frontend development</li>
              <li>Expert in React, React Native, JavaScript, HTML, CSS</li>
            </ul>
            <h4>Education</h4>
            <p>MCA'22(IMS Ghaziabad)</p>
            <h4>Skills</h4>
            <p>React, React Native, Redux, JavaScript, HTML, CSS, UI/UX Design</p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="section" id="portfolio">
          <h2 className="section-title">Portfolio</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>6thStreet App</h3>
              <p>A feature-rich e-commerce mobile app.</p>
              <a href="https://apps.apple.com/us/app/6thstreet-com/id1370217070" className="project-link" target="_blank" rel="noopener noreferrer">Download Application →</a>
            </div>
            <div className="project-card">
              <h3>CoolingLabs</h3>
              <p>Website for a tech-based cooling solutions company.</p>
              <a href="https://coolinglabs.co.in" className="project-link" target="_blank" rel="noopener noreferrer">Visit Website →</a>
            </div>
            <div className="project-card">
              <h3>Minimal Todo Web App</h3>
              <p>A simple and clean to-do list web application.</p>
              <a href="#" className="project-link">View Project →</a>
            </div>
            <div className="project-card">
              <h3>Petochat Application</h3>
              <p>A chat application tailored for pet lovers.</p>
              <a href="#" className="project-link">View Project →</a>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="section" id="blog">
          <h2 className="section-title">Blog</h2>
        </section>

        {/* Contact Section */}
        <section className="section" id="contact">
          <h2 className="section-title">Get in Touch</h2>
          <p>📧 <a href="mailto:contact@4shu.dev" className="contact-link">contact@4shu.dev</a></p>
          <p>📍 Based in India | Available for global opportunities</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com/ashu-c-137" className="social-link">GitHub</a>
          <a href="https://linkedin.com/in/4shu" className="social-link">LinkedIn</a>
          <a href="https://twitter.com/ashutoshdubey" className="social-link">Instagram</a>
        </div>
        <p className="copyright">© 2025 Ashutosh Dubey. All code is open-source.</p>
      </footer>
    </div>
  );
};

export default App;
