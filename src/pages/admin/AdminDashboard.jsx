import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart2, Users, ShoppingBag, Plus, Trash2, Edit, X, LogOut
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const { user, isAdmin, logout } = useAuth();
  const { players, items, addItem, deleteItem, addPlayer, teams } = useData();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);

  // Form States
  const [newItem, setNewItem] = useState({ name: '', price: '', description: '', playerId: '', image: '' });
  const [newPlayer, setNewPlayer] = useState({ name: '', position: '', teamId: '', bio: '', image: '' });

  if (!user || user.role !== 'admin') {
    return (
      <div className="page-container" style={{ textAlign: 'center' }}>
        <h2>Access Denied</h2>
        <p>You must be an admin to view this page.</p>
        <button onClick={() => navigate('/login')} className="secondary-btn">Login as Admin</button>
      </div>
    );
  }

  const handleAddItem = (e) => {
    e.preventDefault();
    addItem({ ...newItem, price: Number(newItem.price), image: newItem.image || 'https://via.placeholder.com/300' });
    setShowAddItem(false);
    setNewItem({ name: '', price: '', description: '', playerId: '', image: '' });
  };

  const handleAddPlayer = (e) => {
    e.preventDefault();
    addPlayer({
      ...newPlayer,
      image: newPlayer.image || 'https://via.placeholder.com/300',
      sponsors: ['Nike'], // Default
      routine: [{ time: '08:00 AM', activity: 'Wake Up' }]
    });
    setShowAddPlayer(false);
    setNewPlayer({ name: '', position: '', teamId: '', bio: '', image: '' });
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="sidebar-menu">
          <button
            className={`sidebar-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <BarChart2 size={20} /> Overview
          </button>
          <button
            className={`sidebar-item ${activeTab === 'players' ? 'active' : ''}`}
            onClick={() => setActiveTab('players')}
          >
            <Users size={20} /> Players
          </button>
          <button
            className={`sidebar-item ${activeTab === 'items' ? 'active' : ''}`}
            onClick={() => setActiveTab('items')}
          >
            <ShoppingBag size={20} /> Items
          </button>
        </div>
        <button className="logout-btn" onClick={() => { logout(); navigate('/'); }}>
          <LogOut size={20} /> Logout
        </button>
      </div>

      <div className="admin-content">
        <div className="admin-header">
          <h1 className="admin-title">Dashboard</h1>
          <p>Welcome back, {user.name}</p>
        </div>

        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="stats-grid">
              <div className="stat-card">
                <p className="stat-label">Total Revenue</p>
                <p className="stat-value">$12,450</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Orders</p>
                <p className="stat-value">45</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Total Items</p>
                <p className="stat-value">{items.length}</p>
              </div>
              <div className="stat-card">
                <p className="stat-label">Active Players</p>
                <p className="stat-value">{players.length}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'players' && (
          <div className="players-section admin-section">
            <div className="section-actions">
              <h2>Players Management</h2>
              <button className="add-btn" onClick={() => setShowAddPlayer(true)}>
                <Plus size={16} /> Add Player
              </button>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {players.map(player => (
                  <tr key={player.id}>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                    <td className="table-actions">
                      <Edit size={16} className="action-icon" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'items' && (
          <div className="items-section admin-section">
            <div className="section-actions">
              <h2>Inventory</h2>
              <button className="add-btn" onClick={() => setShowAddItem(true)}>
                <Plus size={16} /> Add Item
              </button>
            </div>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Player</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id}>
                    <td><img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} /></td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{players.find(p => p.id === item.playerId)?.name || item.playerId}</td>
                    <td className="table-actions">
                      <Trash2 size={16} className="action-icon delete" onClick={() => deleteItem(item.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Player Modal */}
      {showAddPlayer && (
        <div className="form-modal">
          <div className="form-card">
            <div className="section-actions">
              <h2>Add New Player</h2>
              <button onClick={() => setShowAddPlayer(false)}><X size={20} /></button>
            </div>
            <form onSubmit={handleAddPlayer} className="auth-form">
              <input
                placeholder="Name"
                value={newPlayer.name}
                onChange={e => setNewPlayer({ ...newPlayer, name: e.target.value })}
                className="auth-input" required
              />
              <input
                placeholder="Position"
                value={newPlayer.position}
                onChange={e => setNewPlayer({ ...newPlayer, position: e.target.value })}
                className="auth-input" required
              />
              <select
                value={newPlayer.teamId}
                onChange={e => setNewPlayer({ ...newPlayer, teamId: e.target.value })}
                className="auth-input" required
              >
                <option value="">Select Team</option>
                {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
              <textarea
                placeholder="Bio"
                value={newPlayer.bio}
                onChange={e => setNewPlayer({ ...newPlayer, bio: e.target.value })}
                className="auth-input"
              />
              <button className="auth-btn">Add Player</button>
            </form>
          </div>
        </div>
      )}

      {/* Add Item Modal */}
      {showAddItem && (
        <div className="form-modal">
          <div className="form-card">
            <div className="section-actions">
              <h2>Add New Item</h2>
              <button onClick={() => setShowAddItem(false)}><X size={20} /></button>
            </div>
            <form onSubmit={handleAddItem} className="auth-form">
              <input
                placeholder="Item Name"
                value={newItem.name}
                onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                className="auth-input" required
              />
              <input
                type="number"
                placeholder="Price"
                value={newItem.price}
                onChange={e => setNewItem({ ...newItem, price: e.target.value })}
                className="auth-input" required
              />
              <select
                value={newItem.playerId}
                onChange={e => setNewItem({ ...newItem, playerId: e.target.value })}
                className="auth-input" required
              >
                <option value="">Select Player</option>
                {players.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
              <button className="auth-btn">Add Item</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}