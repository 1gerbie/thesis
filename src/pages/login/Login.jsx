import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import "./login.scss";

function Login() {
  useEffect(() => {
    const featuresLinks = document.querySelectorAll('.features-link');
    const featuresSection = document.querySelector('#features');

    if (featuresLinks && featuresSection) {
      featuresLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          featuresSection.scrollIntoView({ behavior: 'smooth' });
        });
      });
    }
  }, []);

  return (
    <div className="login-page">
      <header>
        <div className="logo">
          <h1><span>LAB</span> manager</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features" className="features-link">Features</a></li>
            <li><Link to="/sign-in" className="sign-in-btn">Sign In</Link></li>
            <li><Link to="/admin-login" className="admin-login-btn">Admin Login</Link></li>
          </ul>
        </nav>
      </header>

      <main id="home">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/lab1.png" alt="Laboratory Equipment" />
          </div>
          <div className="hero-text">
            <h2>Laboratory Equipment Management System</h2>
            <p>Enhance accountability, improve efficiency, and simplify operations</p>
          </div>
        </div>
      </main>

      <section id="features" className="features">
        <h3>Key Features of LAB manager</h3>
        <div className="feature-list">
          <div className="feature-item">
            <img src="/icon-inventory.png" alt="Inventory icon" />
            <h4>Inventory Tracking</h4>
            <p>Keep track of all laboratory equipment in real-time</p>
          </div>
          <div className="feature-item">
            <img src="/icon-maintenance.png" alt="Maintenance icon" />
            <h4>Maintenance Scheduling</h4>
            <p>Automate maintenance schedules for all equipment</p>
          </div>
          <div className="feature-item">
            <img src="/icon-analytics.png" alt="Analytics icon" />
            <h4>Usage Analytics</h4>
            <p>Generate insightful reports on equipment usage</p>
          </div>
          <div className="feature-item">
            <img src="/icon-calibration.png" alt="Calibration icon" />
            <h4>Calibration Management</h4>
            <p>Track and manage equipment calibration schedules</p>
          </div>
        </div>
        
        <h3>What Our Users Say</h3>
        <div className="testimonials">
          <blockquote>"LAB manager has revolutionized how we manage our lab equipment."</blockquote>
          <cite>- Dr. Jane Smith, Research Lead</cite>
        </div>
        
        <h3>Frequently Asked Questions</h3>
        <div className="faq">
          <details>
            <summary>How secure is my lab data?</summary>
            <p>We use industry-standard encryption to ensure your data is always protected.</p>
          </details>
          <details>
            <summary>Can I customize the system for my specific lab needs?</summary>
            <p>Yes, LAB manager offers customization options to fit the unique requirements of your laboratory.</p>
          </details>
          <details>
            <summary>Is there a mobile app available?</summary>
            <p>Yes, we offer mobile apps for both iOS and Android devices for on-the-go access to your lab management system.</p>
          </details>
        </div> </section>
      <Footer />
    </div>
  );
}

export default Login;