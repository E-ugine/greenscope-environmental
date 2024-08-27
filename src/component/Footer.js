import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faTwitter, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>GreenScopeEnvironment</h3>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/real-estate-projects">Services</Link></li>
                        <li><Link to="/real-estate-agents">Our Team</Link></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h3>Follow us on:</h3>
                    <div className="social-media-icons">
                        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTiktok} size="2x" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                    </div>
                </div>
                
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Phone: +254 793 309 621 | +254 7XX XXX XXX</p>
                    <p>Address: 13th Floor, Business Towers,Westlands, Nairobi</p>
                </div>
                
                <div className="footer-bottom">
                    <p>© 2024 GreenScopeEnvironment | <Link to="/privacy-policy">Privacy Policy</Link> | <Link to="/terms">Terms</Link></p>
                </div>
            </div>
        </footer>
    );
}
