import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Star, Sparkles, Heart, Mail, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useData } from '../../context/DataContext';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import './LandingPage.css';

export default function LandingPage() {
  const { items, categories } = useData();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const featuredItems = items.slice(0, 6);
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const toggleWishlist = (e, item) => {
    e.preventDefault();
    if (isInWishlist(item.id)) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist(item);
    }
  };

  const benefits = [
    {
      icon: <Zap size={40} />,
      title: 'Quick Delivery',
      description: 'Fast shipping on all collegiate apparel and tech.'
    },
    {
      icon: <ShieldCheck size={40} />,
      title: 'Authentic Gear',
      description: '100% authentic NIL merchandise from student-athletes.'
    },
    {
      icon: <Star size={40} />,
      title: 'Exclusive Access',
      description: 'Unique items you won\'t find anywhere else.'
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Student Support',
      description: 'Directly support athletes through every purchase.'
    }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-badge">Official NIL Marketplace</span>
            <h1 className="hero-title">
              Support Your
              <span className="gradient-text"> Favorite Athletes</span>
            </h1>
            <p className="hero-description">
              The premier destination for authentic collegiate merchandise,
              tech accessories, and exclusive fan experiences.
            </p>
            <div className="hero-buttons">
              <Link to="/market" className="cta-button primary">
                Shop Marketplace <ArrowRight size={20} />
              </Link>
              <Link to="/blog" className="cta-button secondary">
                Read Our Blog
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <strong>10K+</strong>
                <span>Student Athletes</span>
              </div>
              <div className="stat">
                <strong>500+</strong>
                <span>Colleges</span>
              </div>
              <div className="stat">
                <strong>4.8★</strong>
                <span>Fan Rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-product-card glass-card">
              <img
                src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=600&auto=format&fit=crop"
                alt="Featured Product"
              />
              <div className="floating-badge badge-1">
                <Sparkles size={16} />
                <span>Latest Arrival</span>
              </div>
              <div className="floating-badge badge-2">
                <Heart size={16} />
                <span>NIL Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">Browse our wide range of products</p>
          </motion.div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="category-icon">
                  <span style={{ fontSize: '3rem' }}>{category.icon}</span>
                </div>
                <h3>{category.name}</h3>
                <Link to="/market" className="category-link">
                  Shop Now <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Latest Arrivals</h2>
            <p className="section-subtitle">The freshest drops from top student-athletes</p>
          </motion.div>

          <div className="products-grid">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="product-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="product-image-wrapper">
                  <img src={item.image} alt={item.name} className="product-image" />
                  <div className="product-overlay">
                    <button
                      className={`wishlist-overlay-btn ${isInWishlist(item.id) ? 'active' : ''}`}
                      onClick={(e) => toggleWishlist(e, item)}
                    >
                      <Heart size={20} fill={isInWishlist(item.id) ? "white" : "none"} />
                    </button>
                    <button className="add-cart-overlay-btn" onClick={() => addToCart(item)}>
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                  <span className="product-badge">NIL Official</span>
                </div>
                <div className="product-info">
                  <Link to={item.playerId ? `/player/${item.playerId}` : "#"} className="product-name-link">
                    <h4 className="product-name">{item.name}</h4>
                  </Link>
                  <p className="product-description">{item.description}</p>
                  <div className="product-footer">
                    <span className="product-price">${item.price}</span>
                    <button className="quick-add-btn" onClick={() => addToCart(item)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="center-btn">
            <Link to="/market" className="view-all-btn">
              Explore All Gear <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">The Eshop Advantage</h2>
            <p className="section-subtitle">Empowering athletes, rewarding fans</p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card glass-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <motion.div
            className="newsletter-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="newsletter-icon">
              <Mail size={48} />
            </div>
            <h2>Join the Eshop Community</h2>
            <p>Get notified about new drops, athlete appearances, and NIL news.</p>
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-btn">
                Join Now <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

