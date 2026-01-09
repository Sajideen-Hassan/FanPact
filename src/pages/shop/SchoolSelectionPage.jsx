import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { schools, sports } from '../../data/mockData';
import './Shop.css';

export default function SchoolSelectionPage() {
    const { sportId } = useParams();
    const currentSport = sports.find(s => s.id === sportId);
    const filteredSchools = schools.filter(school => school.sportId === sportId);

    if (!currentSport) {
        return <div className="page-container"><h1>Sport not found</h1></div>;
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">{currentSport.name} Schools</h1>
                <p className="page-subtitle">Select a verified school to view their teams</p>
            </div>

            <div className="selection-grid">
                {filteredSchools.map((school, index) => (
                    <motion.div
                        key={school.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link to={`/shop/school/${school.id}`} className="selection-card">
                            <img src={school.image} alt={school.name} className="card-image" />
                            <div className="card-overlay">
                                <h2 className="card-title">{school.name}</h2>
                                <p className="card-subtitle">View Teams</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
                {filteredSchools.length === 0 && (
                    <p>No schools found for this sport.</p>
                )}
            </div>
        </div>
    );
}
