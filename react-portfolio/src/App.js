import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  // State management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [activeModal, setActiveModal] = useState(null);
  const [colorIndex, setColorIndex] = useState(0);
  
  const colors = ['bg-color-1', 'bg-color-2', 'bg-color-3', 'bg-color-4', 'bg-color-5'];

  // Handle form changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent successfully. We will send an email at ${formData.email} soon`);
    setFormData({ name: '', email: '', message: '' });
  };

  // Change background color
  const changeBackgroundColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  // Scroll animations
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    const handleSmoothScroll = (e) => {
      if (e.target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('load', animateOnScroll);
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  // Modal component
  const Modal = ({ id, title, children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-dialog modal-lg" onClick={e => e.stopPropagation()}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" onClick={onClose}>×</button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const styles = {
    ':root': {
      '--primary-color': '#2c3e50',
      '--secondary-color': '#3498db',
      '--accent-color': '#e74c3c',
      '--text-color': '#2c3e50',
      '--bg-light': '#f8f9fa'
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#2c3e50' }}>
      <style>{`
        :root {
          --primary-color: #2c3e50;
          --secondary-color: #3498db;
          --accent-color: #e74c3c;
          --text-color: #2c3e50;
          --bg-light: #f8f9fa;
        }

        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          color: var(--text-color);
        }

        .navbar-brand {
          font-weight: bold;
          font-size: 1.5rem;
          color: var(--primary-color) !important;
        }

        .navbar-nav .nav-link {
          font-weight: 500;
          margin: 0 10px;
          transition: color 0.3s ease;
        }

        .navbar-nav .nav-link:hover {
          color: var(--secondary-color) !important;
        }

        .hero-section {
          background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://i.pinimg.com/originals/f3/e0/a5/f3e0a5eb29a20721639973c480793e8a.gif);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: white;
          padding: 100px;
          text-align: center;
        }

        .hero-section h1 {
          font-size: 3.5rem;
          margin-bottom: 20px;
          font-weight: bold;
        }

        .hero-section p {
          font-size: 1.3rem;
          margin-bottom: 30px;
        }

        .portfolio-section {
          padding: 80px 0;
          background-color: var(--bg-light);
          transition: background-color 0.5s ease;
        }

        .section-title {
          text-align: center;
          margin-bottom: 50px;
          font-size: 2.5rem;
          font-weight: bold;
          color: var(--primary-color);
        }

        .project-card {
          border: none;
          border-radius: 15px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-bottom: 30px;
          height: 100%;
          background: white;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .project-card img {
          height: 250px;
          object-fit: cover;
          transition: transform 0.3s ease;
          width: 100%;
        }

        .project-card:hover img {
          transform: scale(1.05);
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: bold;
          color: var(--primary-color);
          cursor: pointer;
          transition: color 0.3s ease;
          margin-bottom: 15px;
        }

        .project-title:hover {
          color: var(--secondary-color);
        }

        .project-description {
          color: #666;
          margin-bottom: 20px;
        }

        .btn-custom {
          background-color: var(--secondary-color);
          border-color: var(--secondary-color);
          border-radius: 25px;
          padding: 10px 25px;
          transition: all 0.3s ease;
          border: none;
          color: white;
        }

        .btn-custom:hover {
          background-color: var(--primary-color);
          border-color: var(--primary-color);
          transform: translateY(-2px);
        }

        .contact-section {
          padding: 80px 0;
          background-color: white;
        }

        .contact-form {
          background-color: var(--bg-light);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .form-control {
          border-radius: 10px;
          border: 2px solid #e9ecef;
          padding: 12px 15px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          width: 100%;
        }

        .form-control:focus {
          border-color: var(--secondary-color);
          box-shadow: 0 0 0 0.2rem rgba(52, 152, 219, 0.25);
          outline: none;
        }

        .form-label {
          font-weight: 600;
          color: var(--primary-color);
          margin-bottom: 8px;
        }

        .footer {
          background-color: var(--primary-color);
          color: white;
          text-align: center;
          padding: 30px 0;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .bg-color-1 { background-color: #fff5f5; }
        .bg-color-2 { background-color: #1A2A80; }
        .bg-color-3 { background-color: #3B38A0; }
        .bg-color-4 { background-color: #7A85C1; }
        .bg-color-5 { background-color: #B2B0E8; }

        .modal-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1050;
          overflow-y: auto;
          padding: 20px;
        }

        .modal-dialog {
          max-width: 800px;
          width: 90%;
          max-height: 90vh;
          margin: auto;
          display: flex;
          align-items: center;
          min-height: calc(100vh - 40px);
        }

        .modal-content {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          max-height: 85vh;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .modal-header {
          padding: 20px;
          border-bottom: 1px solid #eee;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-shrink: 0;
        }

        .modal-body {
          padding: 20px;
          overflow-y: auto;
          flex: 1;
          max-height: calc(85vh - 140px);
        }

        .modal-title {
          margin: 0;
          font-size: 1.25rem;
          font-weight: bold;
        }

        .btn-close {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
        }

        .navbar {
          background-color: white !important;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 1030;
          padding: 1rem 0;
        }

        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 15px;
          width: 100%;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
          width: 100%;
        }

        .col-lg-4 {
          flex: 0 0 33.33%;
          max-width: 33.33%;
          padding: 0 15px;
          box-sizing: border-box;
        }

        .col-lg-8 {
          flex: 0 0 66.67%;
          max-width: 66.67%;
          padding: 0 15px;
          box-sizing: border-box;
        }

        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
          box-sizing: border-box;
        }

        .mb-3 {
          margin-bottom: 1rem;
        }

        .mb-4 {
          margin-bottom: 1.5rem;
        }

        .text-center {
          text-align: center;
        }

        .btn-lg {
          padding: 12px 24px;
          font-size: 1.125rem;
        }

        .btn-light {
          background-color: white;
          color: #333;
          border: 1px solid #ddd;
          text-decoration: none;
          display: inline-block;
          border-radius: 25px;
          padding: 10px 25px;
          transition: all 0.3s ease;
        }

        .btn-light:hover {
          background-color: #f8f9fa;
          transform: translateY(-2px);
        }

        .img-fluid {
          max-width: 100%;
          height: auto;
        }

        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 2.5rem;
          }
          .hero-section p {
            font-size: 1.1rem;
          }
          .section-title {
            font-size: 2rem;
          }
          .col-lg-4, .col-lg-8, .col-md-6 {
            flex: 0 0 100%;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <i className="fas fa-code" style={{ marginRight: '8px' }}></i> MyPortfolio
          </a>
          <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ margin: '0 10px' }}>
              <a className="nav-link" href="#home" style={{ textDecoration: 'none', color: '#2c3e50', fontWeight: '500' }}>Home</a>
            </li>
            <li style={{ margin: '0 10px' }}>
              <a className="nav-link" href="#portfolio" style={{ textDecoration: 'none', color: '#2c3e50', fontWeight: '500' }}>Portfolio</a>
            </li>
            <li style={{ margin: '0 10px' }}>
              <a className="nav-link" href="#contact" style={{ textDecoration: 'none', color: '#2c3e50', fontWeight: '500' }}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-lg-8">
              <h1 className="fade-in">Welcome to My Portfolio</h1>
              <p className="fade-in">I Create Random things based on my Passions!</p>
              <a href="#portfolio" className="btn btn-light btn-lg fade-in">Check out my works</a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`portfolio-section ${colors[colorIndex]}`}>
        <div className="container">
          <h2 className="section-title fade-in">The Current Projects I'm working on....</h2>
          <div className="row">
            
            {/* Project 1 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="project-card fade-in">
                <img src="https://www.enworld.org/attachments/screenshot-2024-08-27-at-5-32-09%E2%80%AFpm-png.377881" alt="DnD" />
                <div style={{ padding: '20px' }}>
                  <h5 className="project-title" onClick={changeBackgroundColor}>World Building Project</h5>
                  <p className="project-description">This is definetly one of my biggest projects currently, it is a DnD inspired lorebook that will be the foundations of a book I want to publish eventually.</p>
                  <button type="button" className="btn btn-custom" onClick={() => setActiveModal('project1')}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="project-card fade-in">
                <img src="https://i.pinimg.com/736x/90/56/4d/90564d01470a5b6190387f991abdb5f6.jpg" alt="Tensura" />
                <div style={{ padding: '20px' }}>
                  <h5 className="project-title" onClick={changeBackgroundColor}>The Tensura Learning Mod?!</h5>
                  <p className="project-description">This one here is a concept addon mod I wanted to create for the popular Tensura: Reincarnated mod in Minecraft. While there is no code, there is defintely a master document containing the concepts that I wanted to implement.</p>
                  <button type="button" className="btn btn-custom" onClick={() => setActiveModal('project2')}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="project-card fade-in">
                <img src="https://pbs.twimg.com/media/E8c4RkVXsAUWgDs?format=jpg&name=medium" alt="OSHA" />
                <div style={{ padding: '20px' }}>
                  <h5 className="project-title" onClick={changeBackgroundColor}>This Building is not up to Code!!</h5>
                  <p className="project-description">This one right here is a short story based on my worldbuilding project, it is still in the most barebone form, however I already have a rough draft on how it will go.</p>
                  <button type="button" className="btn btn-custom" onClick={() => setActiveModal('project3')}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title fade-in">Want To Contact Me?</h2>
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="col-lg-8">
              <div className="contact-form fade-in">
                <div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Name *</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleFormChange}
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Email *</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        id="email" 
                        value={formData.email}
                        onChange={handleFormChange}
                        required 
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea 
                      className="form-control" 
                      id="message" 
                      name="message" 
                      rows="5" 
                      placeholder="Tell me about what you think?"
                      value={formData.message}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div className="text-center">
                    <button type="button" className="btn btn-custom btn-lg" onClick={handleFormSubmit}>
                      <i className="fas fa-paper-plane"></i> Send Message
                    </button>
                  </div>
                </div>
              </div>
                      
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>And More projects to come! (If I get motivated....)</p>
        </div>
      </footer>

      {/* Modals */}
      <Modal 
        id="project1Modal" 
        title="Code Name: Ardonia (Worldbuilding Project)"
        isOpen={activeModal === 'project1'}
        onClose={() => setActiveModal(null)}
      >
        <img src="https://preview.redd.it/i-love-agnes-tachyon-v0-5u39q0fkbm9f1.jpeg?width=1080&crop=smart&auto=webp&s=3eaa168bb408b79db97dd12b4b1a5634aed7ddf4" className="img-fluid mb-3" alt="i-love-agnes-tachyon" />
        <h6><b>Project Overview:</b></h6>
        <p><i>The World of Ardonia (Working Title) is one of the most detailed writing projects I have currently, it currently has only a master document that contains all of the important lore and history of the world I am building. The master document includes:</i></p>
        <h6><strong>Key Distinctions to other works of fiction:</strong></h6>
        <ul>
          <li>The World has a magic tier system</li>
          <li>The World is governed by pseudo science based magic</li>
          <li>There are two types of people in this world, the Conduits <b>(Which can only absorb magic)</b> and the Manipulators <b>(Which can only manipulate and shape Magic)</b></li>
          <li>Crestline Magic, Magic that get stronger with each generation! (Which is very unique to my setting)</li>
          <li>The Domain system that governs the cosmic principles of this world</li>
          <li>The Blight (Which is the antagonist of this setting)</li>
          <li>And a whole lot more Important history!</li>
        </ul>
        <h6><b>Overall The setting is very:</b></h6>
        <p><strong>Fantasy Oriented</strong> (Imagine Magic meets science!)</p>
        <p><strong>Sci-Fi Adjacent</strong> (I wonder when I will add spaceships?)</p>
        <p><strong>And was that Fate reference?!</strong> (I am the bone of my sword)</p>
        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <button type="button" className="btn" style={{ marginRight: '10px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', padding: '8px 16px' }} onClick={() => setActiveModal(null)}>Close</button>
          <a href="https://docs.google.com/document/d/13-e6Mhth2I9jEqAmkxVgr6-NmErXJ-NnObfYqY7u8gA/edit?usp=sharing" target="_blank" className="btn btn-custom">View Live Demo</a>
        </div>
      </Modal>

      <Modal 
        id="project2Modal" 
        title="Tensura Learning Mod!"
        isOpen={activeModal === 'project2'}
        onClose={() => setActiveModal(null)}
      >
        <img src="https://preview.redd.it/i-love-agnes-tachyon-v0-5u39q0fkbm9f1.jpeg?width=1080&crop=smart&auto=webp&s=3eaa168bb408b79db97dd12b4b1a5634aed7ddf4" className="img-fluid mb-3" alt="i-love-agnes-tachyon" />
        <h6><b>Project Overview</b></h6>
        <p><i>There isnt too much to work with, however the concept of the unique skill that I wanted to implement in the Minecraft mod is very polished, there were Three evolution paths for this Unique skill, it was:</i></p>
        <h6><b>3 Very Fleshed out Unique Skills with its Kits:</b></h6>
        <ul>
          <li>The First in line: Processor</li>
          <li>The Second in line: Paragon</li>
          <li>And the Ultimate Skill version: Prometheus, Titan of Progress</li>
        </ul>
        <h6><i>The explanations are too lengthy so let me summarize what they do:</i></h6>
        <p><strong>Processor:</strong> Allows the player to summon clones that will help in learning skills faster!</p>
        <p><strong>Paragon:</strong> It does the same stuff as its previous version however it gets upgraded by allowing the player to manipulate Matter and Magicules!</p>
        <p><strong>Prometheus, Titan of Progress:</strong> It basically allows the player to master Magicules and Molecules at same time!</p>
        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <button type="button" className="btn" style={{ marginRight: '10px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', padding: '8px 16px' }} onClick={() => setActiveModal(null)}>Close</button>
          <a href="https://docs.google.com/document/d/1T4-LW0NSdvU59XGlgg2Tg_Hszxu4lrGQuSXe7vFi1R4/edit?usp=sharing" target="_blank" className="btn btn-custom">View Live Demo</a>
        </div>
      </Modal>

      <Modal 
        id="project3Modal" 
        title="Essentially Fantasy OSHA"
        isOpen={activeModal === 'project3'}
        onClose={() => setActiveModal(null)}
      >
        <img src="https://preview.redd.it/i-love-agnes-tachyon-v0-5u39q0fkbm9f1.jpeg?width=1080&crop=smart&auto=webp&s=3eaa168bb408b79db97dd12b4b1a5634aed7ddf4" className="img-fluid mb-3" alt="i-love-agnes-tachyon" />
        <h6><b>Project Overview</b></h6>
        <p>The Premise is simple, if magic is commonplace in a world, and it is set in the modern era how would people use magic? This short story will explore the following themes:</p>
        <h6><b>There will be 3 Main themes:</b></h6>
        <ul>
          <li>Building Code Architecture</li>
          <li>Magic in the most mundane Jobs</li>
          <li>Light hearted comedy that pokes fun at general fantasy tropes</li>
        </ul>
        <h6><b>And with that, it summarizes the general direction I want to take this specific project.</b></h6>
        <div style={{ marginTop: '20px', textAlign: 'right' }}>
          <button type="button" className="btn" style={{ marginRight: '10px', background: '#6c757d', color: 'white', border: 'none', borderRadius: '5px', padding: '8px 16px' }} onClick={() => setActiveModal(null)}>Close</button>
          <a href="#" className="btn btn-custom">View Live Demo</a>
        </div>
      </Modal>
    </div>
  );
};

export default Portfolio;