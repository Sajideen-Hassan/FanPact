import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teams, schools } from '../../data/mockData';
import './Shop.css';

export default function TeamSelectionPage() {
    const { schoolId } = useParams();
    const currentSchool = schools.find(s => s.id === schoolId);
    const filteredTeams = teams.filter(team => team.schoolId === schoolId);

    if (!currentSchool) {
        return <div className="page-container"><h1>School not found</h1></div>;
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">{currentSchool.name} Teams</h1>
                <p className="page-subtitle">Pick a team to see the roster</p>
            </div>

            <div className="selection-grid">
                {filteredTeams.map((team, index) => (
                    <motion.div
                        key={team.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link to={`/shop/team/${team.id}`} className="selection-card team-card">
                            <div className="team-logo-container" style={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: 'var(--color-surface)',
                                fontSize: '5rem'
                            }}>
                                {team.logo}
                            </div>
                            <div className="card-overlay">
                                <h2 className="card-title">{team.name}</h2>
                                <p className="card-subtitle">View Players</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
                {filteredTeams.length === 0 && (
                    <p>No teams found for this school.</p>
                )}
            </div>
        </div>
    );
}
