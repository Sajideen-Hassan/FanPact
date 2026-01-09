import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { players, teams } from '../../data/mockData';
import './Shop.css';

export default function PlayersPage() {
    const { teamId } = useParams();
    const currentTeam = teams.find(t => t.id === teamId);
    const filteredPlayers = players.filter(player => player.teamId === teamId);

    if (!currentTeam) {
        return <div className="page-container"><h1>Team not found</h1></div>;
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">{currentTeam.name} Roster</h1>
                <p className="page-subtitle">Select a player to view their exclusive gear</p>
            </div>

            <div className="selection-grid">
                {filteredPlayers.map((player, index) => (
                    <motion.div
                        key={player.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link to={`/player/${player.id}`} className="selection-card player-entry">
                            <img src={player.image} alt={player.name} className="card-image" />
                            <div className="card-overlay">
                                <h2 className="card-title">{player.name}</h2>
                                <p className="card-subtitle">{player.position}</p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
                {filteredPlayers.length === 0 && (
                    <p>No players found for this team.</p>
                )}
            </div>
        </div>
    );
}
