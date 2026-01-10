import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>FAN<span className="text-primary">PACT</span></h3>
                        <p>Empowering student-athletes and engaging fans in the Name, Image, and Likeness (NIL) era.</p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="social-link" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="social-link" aria-label="Email">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Shop</h4>
                            <Link to="/shop">All Products</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/wishlist">Wishlist</Link>
                            <Link to="/login">Login</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Support</h4>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/shipping">Shipping Info</Link>
                            <Link to="/returns">Returns</Link>
                            <Link to="/faq">FAQ</Link>
                        </div>
                        <div className="footer-column">
                            <h4>Company</h4>
                            <Link to="/about">About Us</Link>
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Service</Link>
                            <Link to="/cookie-policy">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        &copy; {new Date().getFullYear()} FanPact. All rights reserved.
                    </p>
                    <div className="payment-methods">
                        <span>We Accept:</span>
                        <div className="payment-icon">VISA</div>
                        <div className="payment-icon">MC</div>
                        <div className="payment-icon">AMEX</div>
                        <div className="payment-icon">PYPL</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

