import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

export default function Navbar() {
    const { user, logout } = useAuth();
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    PLAYER<span className="text-primary">GEAR</span>
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-links desktop-only">
                    <Link to="/shop" className="nav-link">Shop</Link>
                    <Link to="/shop/sport/football" className="nav-link">Football</Link>
                    <Link to="/shop/sport/basketball" className="nav-link">Basketball</Link>
                    {user?.role === 'admin' && <Link to="/admin" className="nav-link">Admin</Link>}
                </div>

                <div className="navbar-actions">
                    <Link to="/cart" className="action-btn relative">
                        <ShoppingCart size={24} />
                        {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>

                    {user ? (
                        <div className="user-menu">
                            <span className="user-name desktop-only">{user.name}</span>
                            <button onClick={handleLogout} className="action-btn" title="Logout">
                                <LogOut size={24} />
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="action-btn">
                            <User size={24} />
                        </Link>
                    )}

                    <button
                        className="mobile-menu-btn mobile-only"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/shop" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Shop</Link>
                    <Link to="/shop/sport/football" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Football</Link>
                    <Link to="/shop/sport/basketball" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Basketball</Link>
                    {user?.role === 'admin' && (
                        <Link to="/admin" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Admin</Link>
                    )}
                </div>
            )}
        </nav>
    );
}
