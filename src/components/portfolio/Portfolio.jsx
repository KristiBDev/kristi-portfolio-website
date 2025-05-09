import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio-container">
        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src={`${import.meta.env.BASE_URL}it-inv-banner.png`} alt="IT Inventory System" />
            </div>
            <div className="portfolio-text">
              <h2>IT Inventory Management System</h2>
              <p>Developed a modern web application for tracking and managing IT assets within organizations. Features include a metrics dashboard, CRUD operations for inventory items, categorization by department/status/type, QR code generation for physical asset tracking, activity logging, and maintenance records.</p>
              <div className="portfolio-tools">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
                <span>Tailwind CSS</span>
              </div>
              <a href="http://inventory.kristibeka.com/" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src="/project1.png" alt="Project 1" />
            </div>
            <div className="portfolio-text">
              <h2>Future-Proof Local Email Archival Solution</h2>
              <p>Developed a Python-based email archiving tool that retrieves, compresses, and stores emails locally in HTML format for long-term access. The project included API integration, efficient data compression techniques, and a user-friendly interface for searching and viewing archived emails.</p>
              <div className="portfolio-tools">
                <span>Python</span>
                <span>HTML</span>
                <span>JavaScript</span>
              </div>
              <a href="https://kristibdev.github.io/case-study/" target="_blank" rel="noopener noreferrer">Case Study →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
              <img src={`${import.meta.env.BASE_URL}ml-bank-project.png`} alt="Banking ML Project" />
            </div>
            <div className="portfolio-text">
              <h2>Banking ML Case Study: Early Loan Payoff Prediction</h2>
              <p>Developed a machine learning solution to predict which loans will be paid off early by customers, helping financial institutions prepare for disruptions in expected interest income. Implemented and compared multiple ML models including Logistic Regression, Random Forest, XGBoost, and LightGBM, achieving 93% accuracy with the final tuned model.</p>
              <div className="portfolio-tools">
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>XGBoost</span>
                <span>Pandas</span>
                <span>NumPy</span>
              </div>
              <a href="https://kristibdev.github.io/ml-bank-early-payoff/" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="portfolio-item">
            <div className="portfolio-img">
            <img src={`${import.meta.env.BASE_URL}project2.png`} alt="Project 2" />
            </div>
            <div className="portfolio-text">
              <h2>Portfolio Website</h2>
              <p>Developed an interactive portfolio website using React, Three.js, JavaScript, HTML, and CSS, featuring smooth animations and 3D elements for an engaging user experience. The site showcases projects, skills, and contact information, optimized for responsiveness and performance. Deployed via GitHub Pages for easy access.</p>
              <div className="portfolio-tools">
                <span>React.js</span>
                <span>Three.js</span>
                <span>Framer Motion</span>
              </div>
              <a href="https://github.com/KristiBDev/kristi-portfolio-website" target="_blank" rel="noopener noreferrer">View Project →</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
