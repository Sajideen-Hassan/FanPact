import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Star } from 'lucide-react';
import { items } from '../../data/mockData';
import './LandingPage.css';

export default function LandingPage() {
  const featuredItems = items.slice(0, 3);

  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OWN THE MOMENT
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Authentic match-worn gear from your favorite athletes. 
            Verified, exclusive, and ready for your collection.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/shop" className="cta-button">
              Explore Collections <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <ShieldCheck size={48} className="feature-icon" />
            <h3>100% Verified</h3>
            <p>Every item is authenticated by the team and player.</p>
          </div>
          <div className="feature-card">
            <Zap size={48} className="feature-icon" />
            <h3>Match Worn</h3>
            <p>Gear that has seen the heat of the battle.</p>
          </div>
          <div className="feature-card">
            <Star size={48} className="feature-icon" />
            <h3>Exclusive</h3>
            <p>Limited edition items you won't find anywhere else.</p>
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2 className="section-title">Fresh from the Field</h2>
        <div className="showcase-grid">
          {featuredItems.map((item) => (
            <Link to={`/player/`} key={item.id} className="item-card">
              <div className="item-image-container">
                <img src={item.image} alt={item.name} className="item-image" />
              </div>
              <div className="item-info">
                <h4>{item.name}</h4>
                <p className="item-price">${item.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="center-btn">
          <Link to="/shop" className="secondary-btn">View All Items</Link>
        </div>
      </section>
    </div>
  );
}
