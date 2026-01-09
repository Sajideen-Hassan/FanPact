import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sports } from '../../data/mockData';
import './Shop.css';

export default function SportsSelectionPage() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">Select Your Sport</h1>
                <p className="page-subtitle">Choose a sport to find your favorite team's gear</p>
            </div>

            <div className="selection-grid">
                {sports.map((sport, index) => (
                    <motion.div
                        key={sport.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link to={`/shop/sport/${sport.id}`} className="selection-card">
                            <img src={sport.image} alt={sport.name} className="card-image" />
                            <div className="card-overlay">
                                <h2 className="card-title">{sport.name}</h2>
                                <p className="card-subtitle">Browse Schools & Teams</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
