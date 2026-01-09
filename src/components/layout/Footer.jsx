import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>PLAYER<span className="text-primary">GEAR</span></h3>
                        <p>Authentic player-worn gear for the ultimate fan.</p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Shop</h4>
                            <a href="#">New Arrivals</a>
                            <a href="#">Best Sellers</a>
                            <a href="#">Teams</a>
                        </div>
                        <div className="footer-column">
                            <h4>Support</h4>
                            <a href="#">Contact Us</a>
                            <a href="#">Shipping</a>
                            <a href="#">Returns</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} PlayerGear. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
