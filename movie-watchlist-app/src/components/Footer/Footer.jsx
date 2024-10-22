import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer rajdhani-bold">
      <div className="footer-container">
        <hr className="footer-divider" />
        <div className="footer-links-grid">
          <div>
            <h3 className="footer-link-heading">Congratulations, you've reached the bottom. Still no movie? Maybe tomorrow.</h3>
            <div className="footer-links">
                <p>Don’t worry, we only have movies you've actually heard of. Well, most of the time.</p>
            </div>
          </div>

          <div>
            <h3 className="footer-link-heading">Can't find the sequel? Hollywood is probably working on the 10th one already</h3>
            <div className="footer-links">
            <p>If only picking a movie was as easy as pretending to be a film critic.</p>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />

        <div className="footer-bottom">
          <a href="/">
            <img className="footer-logo" src="../../public/images/movie-watchlist-icon.ico" alt="logo" />
          </a>
          <p className="footer-copyright">
            © Copyright 2024. All Rights Reserved to Prathvi Singh Tomar.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
