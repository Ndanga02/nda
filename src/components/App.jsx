import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [email, setEmail] = useState("");

  // Essays data
  const essays = [
    {
      id: 1,
      date: "DECEMBER 15, 2024",
      title: "The Convergence of Econometrics and Machine Learning",
      excerpt:
        "How traditional economic analysis methods are being enhanced by modern ML techniques...",
    },
    {
      id: 2,
      date: "NOVEMBER 28, 2024",
      title: "Automating Corporate Actions: A Case Study",
      excerpt:
        "Reducing manual processing time by 60% through intelligent document classification...",
    },
    {
      id: 3,
      date: "OCTOBER 10, 2024",
      title: "Building Resilient Trading Systems",
      excerpt:
        "Lessons learned from developing algorithmic trading platforms in emerging markets...",
    },
  ];

  const books = [
    {
      id: 1,
      year: "2025",
      title: "From Economics to Data Science",
      subtitle: "A Practitioner's Guide",
      description:
        "A comprehensive guide for economists transitioning into data science roles, with practical examples from financial markets.",
    },
    {
      id: 2,
      year: "2024",
      title: "Algorithmic Thinking in Finance",
      subtitle: "Building Automated Trading Systems",
      description:
        "Technical insights into building robust, scalable trading systems with risk management at their core.",
    },
  ];

  const handleSubscribe = () => {
    if (email) {
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  // Projects data
  const projects = [
    {
      id: 1,
      title: "Algorithmic Trading Platform",
      category: "FINANCIAL TECHNOLOGY",
      description:
        "Full-stack trading system with real-time market analysis, risk management, and automated execution capabilities. Built with Python, FastAPI, and React.",
      technologies: ["Python", "FastAPI", "React", "PostgreSQL", "Redis"],
      link: "#",
    },
    {
      id: 2,
      title: "Corporate Actions Automation System",
      category: "MACHINE LEARNING",
      description:
        "ML-powered system that reduced manual processing time by 60% through intelligent document classification and extraction using NLP techniques.",
      technologies: ["Python", "TensorFlow", "scikit-learn", "Flask", "Docker"],
      link: "#",
    },
    {
      id: 3,
      title: "Economic Indicators Dashboard",
      category: "DATA VISUALIZATION",
      description:
        "Interactive Power BI dashboard visualizing South African economic indicators with predictive analytics and trend analysis capabilities.",
      technologies: ["Power BI", "R", "SQL Server", "Azure", "DAX"],
      link: "#",
    },
  ];

  const HomePage = () => (
    <div className="home-container">
      <div className="hero-section">
        <div className="quote-container">
          <h1 className="main-quote">
            "Data-driven insights paired with economic intuition create the most
            powerful business solutions."
          </h1>
        </div>
        <div className="hero-text">
          <p>
            Ndanganeni Nedzamba has been at the forefront of applying data
            science to financial markets and corporate operations. His work
            spans from building algorithmic trading systems to automating
            complex corporate actions processes, demonstrating how modern
            technology can transform traditional financial services.
          </p>
        </div>
      </div>
    </div>
  );

  const EssaysPage = () => (
    <div className="essays-container">
      <div className="essays-header">
        <h1>Essays</h1>
      </div>
      <div className="essays-list">
        {essays.map((essay) => (
          <article key={essay.id} className="essay-item">
            <div className="essay-date">{essay.date}</div>
            <h2 className="essay-title">
              <a href={`#essay-${essay.id}`}>{essay.title}</a>
            </h2>
            <p className="essay-excerpt">{essay.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );

  const BooksPage = () => (
    <div className="books-container">
      <div className="books-header">
        <h1>Books</h1>
        <p className="books-intro">
          Ndanganeni Nedzamba shares his insights on the intersection of
          economics, data science, and financial technology through his
          published works.
        </p>
      </div>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-item">
            <div className="book-year">{book.year}</div>
            <h2 className="book-title">{book.title}</h2>
            <h3 className="book-subtitle">{book.subtitle}</h3>
            <p className="book-description">{book.description}</p>
            <a href="#" className="book-link">
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="about-container">
      <div className="about-header">
        <h1>The Life of Ndanganeni Nedzamba</h1>
      </div>
      <div className="about-content">
        <div className="about-section">
          <h2>Early Years and Education</h2>
          <p>
            Born in 2002 in South Africa, Ndanganeni Nedzamba showed an early
            aptitude for mathematics and analytical thinking. His journey into
            economics began at the University of Johannesburg, where he pursued
            a BCom in Economics and Econometrics, graduating in 2024.
          </p>
        </div>
        <div className="about-section">
          <h2>Career at Computershare</h2>
          <p>
            Starting as a Graduate Corporate Actions Analyst at Computershare,
            Ndanganeni quickly distinguished himself through his innovative
            approach to problem-solving. During his rotation in the Projects
            team, he discovered his passion for automation and machine learning,
            building Power BI reports and Python scripts that transformed
            business processes.
          </p>
        </div>
        <div className="about-section">
          <h2>Bridging Economics and Technology</h2>
          <p>
            Currently pursuing BCom Honours in Econometrics (2026), Ndanganeni
            is focused on the intersection of traditional economic theory and
            modern data science. His work demonstrates how econometric
            principles can enhance machine learning models, particularly in
            financial applications.
          </p>
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="projects-container">
      <div className="projects-header">
        <h1>Projects</h1>
        <p className="projects-intro">
          A selection of data science and financial technology projects
          demonstrating the practical application of econometric principles to
          modern business challenges.
        </p>
      </div>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-category">{project.category}</div>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="project-link">
              View project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case "essays":
        return <EssaysPage />;
      case "projects":
        return <ProjectsPage />;
      case "books":
        return <BooksPage />;
      case "about":
        return <AboutPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Georgia, 'Times New Roman', serif;
          color: #000;
          background-color: #fff;
          line-height: 1.5;
        }

        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Header Styles */
        .header {
          border-bottom: 1px solid #000;
        }

        .header-top {
          padding: 24px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .site-name {
          font-size: 24px;
          font-weight: normal;
          color: #000;
          text-decoration: none;
          letter-spacing: 0.5px;
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        /* Navigation Styles */
        .nav {
          background-color: #f5f5f5;
          border-bottom: 1px solid #ddd;
        }

        .nav-container {
          display: flex;
          align-items: center;
          padding: 0 40px;
          position: relative;
        }

        .nav-links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          margin: 0;
        }

        .nav-link {
          display: block;
          padding: 16px 20px;
          text-decoration: none;
          color: #000;
          font-family: Arial, sans-serif;
          font-size: 14px;
          letter-spacing: 0.5px;
          transition: background-color 0.2s;
          cursor: pointer;
          background: none;
          border: none;
          height: 100%;
        }

        .nav-link:hover {
          background-color: #e8e8e8;
        }
        
        .nav-link {
          color: #c41230;  /* Red color matching georgesoros.com */
        }

        .nav-link.active {
          background-color: #ddd;
        }

        /* Language Dropdown */
        .language-dropdown {
          margin-left: auto;
          position: relative;
        }

        .language-button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 16px 20px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: Arial, sans-serif;
          font-size: 13px;
          color: #666;
          transition: background-color 0.2s;
        }

        .language-button:hover {
          background-color: #e8e8e8;
        }

        .language-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          border: 1px solid #ddd;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          min-width: 200px;
          z-index: 1000;
        }

        .language-option {
          display: block;
          width: 100%;
          padding: 12px 20px;
          text-align: left;
          background: none;
          border: none;
          cursor: pointer;
          font-family: Arial, sans-serif;
          font-size: 13px;
          color: #333;
          transition: background-color 0.2s;
        }

        .language-option:hover {
          background-color: #f5f5f5;
        }

        /* Main Content */
        .main-content {
          flex: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 40px;
          width: 100%;
        }

        /* Home Page Styles */
        .home-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-section {
          text-align: center;
        }

        .quote-container {
          margin-bottom: 40px;
        }

        .main-quote {
          font-size: 42px;
          font-weight: normal;
          line-height: 1.3;
          font-style: italic;
          color: #000;
          letter-spacing: -0.5px;
        }

        .hero-text {
          margin-top: 40px;
        }

        .hero-text p {
          font-size: 18px;
          line-height: 1.7;
          color: #333;
          text-align: left;
          font-family: Arial, sans-serif;
        }

        /* Essays Page Styles */
        .essays-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .essays-header {
          margin-bottom: 50px;
          padding-bottom: 30px;
          border-bottom: 1px solid #ddd;
        }

        .essays-header h1 {
          font-size: 36px;
          font-weight: normal;
          color: #000;
        }

        .essays-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .essay-item {
          padding-bottom: 40px;
          border-bottom: 1px solid #eee;
        }

        .essay-item:last-child {
          border-bottom: none;
        }

        .essay-date {
          font-family: Arial, sans-serif;
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .essay-title {
          font-size: 28px;
          font-weight: normal;
          margin-bottom: 15px;
        }

        .essay-title a {
          color: #c41230;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .essay-title a:hover {
          color: #8a0c1f;  /* Darker red on hover */
        }
        .essay-excerpt {
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #555;
        }

        /* Books Page Styles */
        .books-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .books-header {
          margin-bottom: 50px;
          padding-bottom: 30px;
          border-bottom: 1px solid #ddd;
        }

        .books-header h1 {
          font-size: 36px;
          font-weight: normal;
          color: #000;
          margin-bottom: 20px;
        }

        .books-intro {
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #555;
        }

        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 40px;
        }

        .book-item {
          padding: 30px;
          background: #f9f9f9;
          border: 1px solid #eee;
        }

        .book-year {
          font-family: Arial, sans-serif;
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .book-title {
          font-size: 24px;
          font-weight: normal;
          margin-bottom: 10px;
          color: #000;
        }

        .book-subtitle {
          font-size: 18px;
          font-weight: normal;
          font-style: italic;
          color: #555;
          margin-bottom: 20px;
        }

        .book-description {
          font-family: Arial, sans-serif;
          font-size: 15px;
          line-height: 1.6;
          color: #555;
          margin-bottom: 20px;
        }

        .book-link {
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #c41230;
          text-decoration: none;
        }

        .book-link:hover {
          text-decoration: underline;
        }
        /* Projects Page Styles */
        .projects-container {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .projects-header {
          margin-bottom: 50px;
          padding-bottom: 30px;
          border-bottom: 1px solid #ddd;
        }
        
        .projects-header h1 {
          font-size: 36px;
          font-weight: normal;
          color: #000;
          margin-bottom: 20px;
        }
        
        .projects-intro {
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #555;
        }
        
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 50px;
        }
        
        .project-item {
          padding-bottom: 50px;
          border-bottom: 1px solid #eee;
        }
        
        .project-item:last-child {
          border-bottom: none;
        }
        
        .project-category {
          font-family: Arial, sans-serif;
          font-size: 12px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }
        
        .project-title {
          font-size: 32px;
          font-weight: normal;
          margin-bottom: 20px;
          color: #000;
        }
        
        .project-description {
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #333;
          margin-bottom: 25px;
        }
        
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }
        
        .tech-tag {
          padding: 6px 12px;
          background-color: #f5f5f5;
          border: 1px solid #ddd;
          font-family: Arial, sans-serif;
          font-size: 13px;
          color: #555;
        }
        
        .project-link {
          font-family: Arial, sans-serif;
          font-size: 14px;
          color: #c41230;
          text-decoration: none;
        }
        
        .project-link:hover {
          text-decoration: underline;
        }
        /* About Page Styles */
        .about-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .about-header {
          margin-bottom: 50px;
          padding-bottom: 30px;
          border-bottom: 1px solid #ddd;
        }

        .about-header h1 {
          font-size: 36px;
          font-weight: normal;
          color: #000;
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .about-section {
          padding-bottom: 40px;
          border-bottom: 1px solid #eee;
        }

        .about-section:last-child {
          border-bottom: none;
        }

        .about-section h2 {
          font-size: 24px;
          font-weight: normal;
          margin-bottom: 20px;
          color: #000;
        }

        .about-section p {
          font-family: Arial, sans-serif;
          font-size: 16px;
          line-height: 1.7;
          color: #333;
        }

        /* Newsletter Section */
        .newsletter {
          background-color: #f5f5f5;
          border-top: 1px solid #ddd;
          padding: 40px;
          text-align: center;
        }

        .newsletter-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .newsletter h3 {
          font-family: Arial, sans-serif;
          font-size: 16px;
          font-weight: normal;
          margin-bottom: 20px;
          color: #333;
        }

        .newsletter-form {
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .newsletter-input {
          padding: 10px 15px;
          border: 1px solid #ccc;
          font-size: 14px;
          font-family: Arial, sans-serif;
          width: 300px;
        }

        .newsletter-button {
          padding: 10px 25px;
          background-color: #333;
          color: white;
          border: none;
          font-size: 14px;
          font-family: Arial, sans-serif;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .newsletter-button:hover {
          background-color: #555;
        }

        /* Footer */
        .footer {
          background-color: #333;
          color: white;
          padding: 40px;
          font-family: Arial, sans-serif;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 30px;
          list-style: none;
          margin-bottom: 20px;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          font-size: 14px;
        }

        .footer-links a:hover {
          text-decoration: underline;
        }

        .footer-text {
          font-size: 13px;
          color: #ccc;
          margin-bottom: 10px;
        }

        .footer-text a {
          color: #ccc;
          text-decoration: none;
        }

        .footer-text a:hover {
          text-decoration: underline;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .header-top {
            padding: 20px;
          }

          .site-name {
            font-size: 20px;
          }

          .mobile-menu-button {
            display: block;
          }

          .nav {
            display: ${mobileMenuOpen ? "block" : "none"};
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: white;
            z-index: 9999;
          }

          .nav-container {
            flex-direction: column;
            padding: 0;
          }

          .nav-links {
            flex-direction: column;
            width: 100%;
          }

          .nav-link {
            padding: 20px;
            border-bottom: 1px solid #eee;
          }

          .language-dropdown {
            width: 100%;
            margin: 0;
          }

          .language-button {
            width: 100%;
            padding: 20px;
            border-bottom: 1px solid #eee;
          }

          .main-content {
            padding: 40px 20px;
          }

          .main-quote {
            font-size: 28px;
          }

          .hero-text p {
            font-size: 16px;
          }

          .essay-title {
            font-size: 22px;
          }

          .books-grid {
            grid-template-columns: 1fr;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .newsletter-input {
            width: 100%;
          }

          .footer-links {
            flex-direction: column;
            gap: 15px;
          }
        }

        /* Mobile Menu Close Button */
        .mobile-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 10000;
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="header-top">
          <a
            href="#"
            className="site-name"
            onClick={() => setCurrentPage("home")}
          >
            Ndanganeni Nedzamba
          </a>
          <button
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        {mobileMenuOpen && (
          <button
            className="mobile-close"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        )}
        <div className="nav-container">
          <ul className="nav-links">
            <li>
              <button
                className={`nav-link ${currentPage === "home" ? "active" : ""}`}
                onClick={() => {
                  setCurrentPage("home");
                  setMobileMenuOpen(false);
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${
                  currentPage === "essays" ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentPage("essays");
                  setMobileMenuOpen(false);
                }}
              >
                Essays
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${
                  currentPage === "projects" ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentPage("projects");
                  setMobileMenuOpen(false);
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${
                  currentPage === "books" ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentPage("books");
                  setMobileMenuOpen(false);
                }}
              >
                Books
              </button>
            </li>
            <li>
              <button
                className={`nav-link ${
                  currentPage === "about" ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentPage("about");
                  setMobileMenuOpen(false);
                }}
              >
                The Life of Ndanganeni Nedzamba
              </button>
            </li>
          </ul>
          <div className="language-dropdown">
            <button
              className="language-button"
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
            >
              Choose your language
              <ChevronDown size={16} />
            </button>
            {languageDropdownOpen && (
              <div className="language-menu">
                <button className="language-option">English</button>
                <button className="language-option">Español</button>
                <button className="language-option">Français</button>
                <button className="language-option">Deutsch</button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">{renderPage()}</main>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h3>Receive Ndanganeni Nedzamba's articles and essays by mail</h3>
          <div className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="newsletter-button" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <ul className="footer-links">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="https://linkedin.com">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com">GitHub</a>
            </li>
          </ul>
          <p className="footer-text">
            Ndanganeni works at{" "}
            <a href="https://www.computershare.com">Computershare</a>, a global
            leader in financial services.
          </p>
          <p className="footer-text">
            © 2025 Ndanganeni Nedzamba. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
