import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, X, Clock, Award } from 'lucide-react';
import { players, items, teams } from '../../data/mockData';
import { useCart } from '../../context/CartContext';
import './PlayerDetailsPage.css';

export default function PlayerDetailsPage() {
  const { playerId } = useParams();
  const { addToCart } = useCart();
  const [selectedItem, setSelectedItem] = useState(null);

  const player = players.find(p => p.id === playerId);
  const playerItems = items.filter(i => i.playerId === playerId);
  const team = teams.find(t => t.id === player?.teamId);

  if (!player) return <div className="page-container"><h1>Player not found</h1></div>;

  return (
    <div className="player-details-page">
      {/* Player Header */}
      <section className="player-hero">
        <div className="player-hero-content">
          <div className="player-image-wrapper">
            <motion.img 
              src={player.image} 
              alt={player.name} 
              className="player-profile-img"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="player-info">
            <motion.h1 
               initial={{ x: 50, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 0.2 }}
            >
              {player.name}
            </motion.h1>
            <p className="player-meta">{team?.name}  {player.position}</p>
            <p className="player-bio">{player.bio}</p>
            
            <div className="sponsors">
              <h3>Sponsors</h3>
              <div className="sponsor-list">
                {player.sponsors.map(sponsor => (
                  <span key={sponsor} className="sponsor-tag">{sponsor}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Routine Timeline */}
      <section className="routine-section">
        <h2 className="section-heading">Daily Routine</h2>
        <div className="timeline">
          {player.routine.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} // Should trigger once when in view
              transition={{ delay: index * 0.2 }}
            >
              <div className="timeline-time">{item.time}</div>
              <div className="timeline-content">
                <Clock size={20} className="timeline-icon" />
                <span>{item.activity}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Items for Sale */}
      <section className="items-section">
        <h2 className="section-heading">Exclusive Gear</h2>
        <div className="items-grid">
          {playerItems.map((item) => (
            <motion.div 
              key={item.id}
              className="product-card"
              whileHover={{ y: -10, rotateX: 5, zIndex: 10 }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="product-image-container">
                 <img src={item.image} alt={item.name} className="product-image" />
              </div>
              <div className="product-info">
                <h4>{item.name}</h4>
                <p className="product-price"></p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedItem(null)}>
                <X size={24} />
              </button>
              <div className="modal-body">
                <img src={selectedItem.image} alt={selectedItem.name} className="modal-image" />
                <div className="modal-details">
                  <h2>{selectedItem.name}</h2>
                  <p className="modal-price"></p>
                  <p className="modal-desc">{selectedItem.description}</p>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => {
                      addToCart(selectedItem);
                      setSelectedItem(null);
                    }}
                  >
                    <ShoppingCart size={20} /> Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}