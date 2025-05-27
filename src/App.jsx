import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <h1 className="logo">4shu.dev</h1>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#portfolio">Work</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <section className="section" id="about">
          <h2 className="section-title">About Me</h2>
          <p className="bio">
            Hi, I'm <span className="highlight">Ashutosh Dubey</span>, a passionate Software Engineer specializing in React Native development with 3+ years of experience in building scalable e-commerce and social media applications.
          </p>
          <p className="bio">
            I thrive on crafting performant, user-centric mobile experiences that combine clean code with intuitive design. My expertise lies in developing complex, feature-rich applications that scale efficiently and provide seamless user experiences.
          </p>
          <p className="bio">Ready to bring your mobile app vision to life! 🚀</p>
          
          <h3 className="subheading">Tech Stack</h3>
          <div className="tech-grid">
            <span className="tech-item">React Native</span>
            <span className="tech-item">React.js</span>
            <span className="tech-item">JavaScript</span>
            <span className="tech-item">TypeScript</span>
            <span className="tech-item">Redux</span>
            <span className="tech-item">Node.js</span>
          </div>
        </section>

        <section className="section" id="portfolio">
          <h2 className="section-title">Featured Work</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>6thStreet App</h3>
              <p>A feature-rich e-commerce mobile app built with React Native. Implemented complex UI components, real-time inventory management, and seamless payment integration.</p>
              <a href="https://apps.apple.com/us/app/6thstreet-com/id1370217070" className="project-link" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
            <div className="project-card">
              <h3>CoolingLabs</h3>
              <p>Modern web platform for a tech cooling solutions company. Built with React.js, featuring interactive product showcases and real-time temperature monitoring.</p>
              <a href="https://coolinglabs.co.in" className="project-link" target="_blank" rel="noopener noreferrer">Visit Website →</a>
            </div>
            <div className="project-card">
              <h3>Petochat Application</h3>
              <p>Social networking app for pet lovers with features like real-time chat, photo sharing, and event organization. Built using React Native and Firebase.</p>
              <a href="#" className="project-link">Case Study →</a>
            </div>
          </div>
        </section>

        <section className="section" id="blog">
          <h2 className="section-title">Technical Blog</h2>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-content">
                <h3 className="blog-title">Setting Up React Native in 2025</h3>
                <p className="blog-excerpt">
                  A comprehensive guide to setting up a new React Native project using the latest CLI, best practices for project structure, and essential configurations for both iOS and Android platforms.
                </p>
                <p className="blog-meta">Published on March 15, 2025</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-content">
                <h3 className="blog-title">Optimizing FlatList Performance</h3>
                <p className="blog-excerpt">
                  Deep dive into FlatList optimization techniques including windowSize, maxToRenderPerBatch, updateCellsBatchingPeriod, and implementing efficient item rendering with Pure Components.
                </p>
                <p className="blog-meta">Published on March 10, 2025</p>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-content">
                <h3 className="blog-title">Pure Components in React Native</h3>
                <p className="blog-excerpt">
                  Understanding Pure Components, when to use them, their impact on performance, and common pitfalls to avoid. Includes real-world examples and performance benchmarks.
                </p>
                <p className="blog-meta">Published on March 5, 2025</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="resume">
          <h2 className="section-title">Experience</h2>
          <div className="resume-content">
            <h3>Ashutosh Dubey</h3>
            <p>Senior React Native Developer</p>
            <p>contact@4shu.dev | India</p>
            
            <h4>Professional Experience</h4>
            <ul>
              <li>Led development of multiple successful e-commerce and social media applications</li>
              <li>Implemented complex UI components and custom animations</li>
              <li>Optimized app performance and reduced load times by 40%</li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
            
            <h4>Technical Skills</h4>
            <ul>
              <li>React Native, React.js, JavaScript, TypeScript</li>
              <li>Redux, Context API, React Navigation</li>
              <li>REST APIs, GraphQL, Firebase</li>
              <li>CI/CD, Git, Agile methodologies</li>
            </ul>
            
            <h4>Education</h4>
            <p>MCA'22 (IMS Ghaziabad)</p>
          </div>
        </section>

        <section className="section" id="contact">
          <h2 className="section-title">Let's Connect</h2>
          <p className="bio">I'm always interested in hearing about new projects and opportunities.</p>
          <p>📧 <a href="mailto:contact@4shu.dev" className="contact-link">contact@4shu.dev</a></p>
          <p>📍 Based in India | Open to Remote Opportunities</p>
        </section>
      </main>

      <footer className="footer">
        <div className="social-links">
          <a href="https://github.com/ashu-c-137" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/4shu" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/ashutoshdubey" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <p className="copyright">© 2025 Ashutosh Dubey. Built with React.</p>
      </footer>
    </div>
  );
};

export default App;