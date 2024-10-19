import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links-grid">
          <div>
            <h3 className="footer-link-heading">Product</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Overview</a>
              <a href="#" className="footer-link">Features</a>
              <a href="#" className="footer-link">Solutions</a>
            </div>
          </div>

          <div>
            <h3 className="footer-link-heading">Company</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">About us</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Press</a>
            </div>
          </div>

          <div>
            <h3 className="footer-link-heading">Resources</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Blog</a>
              <a href="#" className="footer-link">Newsletter</a>
              <a href="#" className="footer-link">Events</a>
            </div>
          </div>

          <div>
            <h3 className="footer-link-heading">Use cases</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Startups</a>
              <a href="#" className="footer-link">Enterprise</a>
              <a href="#" className="footer-link">Government</a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <a href="#">
            <img className="footer-logo" src="../../public/images/movie-watchlist-icon.ico" alt="logo" />
          </a>
          <p className="footer-copyright">
            © Copyright 2023. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
