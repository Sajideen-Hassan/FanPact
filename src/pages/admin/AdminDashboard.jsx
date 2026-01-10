import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BarChart2, Users, ShoppingBag, Plus, Trash2, Edit, X, LogOut, Link as LinkIcon, ExternalLink, TrendingUp, DollarSign
} from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell
} from 'recharts';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const { players, items, addItem, deleteItem, addPlayer, teams, categories } = useData();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const [showAddItem, setShowAddItem] = useState(false);
  const [addMethod, setAddMethod] = useState('manual'); // 'manual' or 'link'

  // Form States
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    description: '',
    playerId: '',
    categoryId: 'apparel',
    image: '',
    externalLink: ''
  });
  const [newPlayer, setNewPlayer] = useState({ name: '', position: '', teamId: '', bio: '', image: '' });

  // Mock Profit Data
  const profitData = [
    { name: 'Mon', profit: 450, sales: 1200 },
    { name: 'Tue', profit: 520, sales: 1500 },
    { name: 'Wed', profit: 380, sales: 1100 },
    { name: 'Thu', profit: 610, sales: 1800 },
    { name: 'Fri', profit: 890, sales: 2400 },
    { name: 'Sat', profit: 950, sales: 2800 },
    { name: 'Sun', profit: 720, sales: 2100 },
  ];

  const categoryProfitData = [
    { name: 'Apparel', value: 5400, color: '#ff4c29' },
    { name: 'Electronics', value: 3100, color: '#ffd700' },
    { name: 'Experiences', value: 2500, color: '#1DB954' },
    { name: 'Collectibles', value: 1450, color: '#58a6ff' },
  ];

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
    addItem({
      ...newItem,
      price: Number(newItem.price),
      image: newItem.image || 'https://placehold.co/300',
      type: addMethod === 'link' ? 'external' : 'manual'
    });
    setShowAddItem(false);
    setNewItem({
      name: '',
      price: '',
      description: '',
      playerId: '',
      categoryId: 'apparel',
      image: '',
      externalLink: ''
    });
  };

  const handleAddPlayer = (e) => {
    e.preventDefault();
    addPlayer({
      ...newPlayer,
      image: newPlayer.image || 'https://placehold.co/300',
      sponsors: ['Nike'], // Default
      routine: [{ time: '08:00 AM', activity: 'Wake Up' }]
    });
    setShowAddPlayer(false);
    setNewPlayer({ name: '', position: '', teamId: '', bio: '', image: '' });
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <div className="sidebar-brand">
          <Link to="/" className="navbar-logo">
            FAN<span className="text-primary">PACT</span>
          </Link>
          <span className="admin-subtitle">ADMIN PORTAL</span>
        </div>
        <div className="sidebar-menu">
          <button
            className={`sidebar-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <TrendingUp size={20} /> Profit & Analytics
          </button>
          <button
            className={`sidebar-item ${activeTab === 'players' ? 'active' : ''}`}
            onClick={() => setActiveTab('players')}
          >
            <Users size={20} /> Add/Manage Players
          </button>
          <button
            className={`sidebar-item ${activeTab === 'items' ? 'active' : ''}`}
            onClick={() => setActiveTab('items')}
          >
            <ShoppingBag size={20} /> Add/Manage Products
          </button>
        </div>
        <button className="logout-btn" onClick={() => { logout(); navigate('/'); }}>
          <LogOut size={20} /> Logout
        </button>
      </div>

      <div className="admin-content">
        <div className="admin-header">
          <div className="header-info">
            <h1 className="admin-title">Dashboard Overview</h1>
          </div>
          <div className="header-actions">
            {/* Context-specific buttons are now inside sections */}
          </div>
        </div>

        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="stats-grid">
              <div className="stat-card gold-border">
                <div className="stat-icon-wrapper profit"><DollarSign size={20} /></div>
                <div>
                  <p className="stat-label">Total Net Profit</p>
                  <p className="stat-value">$12,450</p>
                  <span className="stat-trend positive">+12.5% vs last month</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-wrapper"><ShoppingBag size={20} /></div>
                <div>
                  <p className="stat-label">Total Sales</p>
                  <p className="stat-value">452</p>
                  <span className="stat-trend positive">+8% this week</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-wrapper"><Users size={20} /></div>
                <div>
                  <p className="stat-label">Total Athletes</p>
                  <p className="stat-value">{players.length}</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon-wrapper"><ShoppingBag size={20} /></div>
                <div>
                  <p className="stat-label">Inventory Items</p>
                  <p className="stat-value">{items.length}</p>
                </div>
              </div>
            </div>

            <div className="charts-container">
              <div className="chart-card">
                <h3>Weekly Profit Analysis</h3>
                <div className="chart-wrapper">
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={profitData}>
                      <defs>
                        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ff4c29" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#ff4c29" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2d333b" vertical={false} />
                      <XAxis dataKey="name" stroke="#8b949e" />
                      <YAxis stroke="#8b949e" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#161b22', border: '1px solid #30363d' }}
                        itemStyle={{ color: '#ff4c29' }}
                      />
                      <Area type="monotone" dataKey="profit" stroke="#ff4c29" fillOpacity={1} fill="url(#colorProfit)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="chart-card">
                <h3>Profit by Category</h3>
                <div className="chart-wrapper">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={categoryProfitData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {categoryProfitData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: '#161b22', border: '1px solid #30363d' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="pie-legend">
                    {categoryProfitData.map((item) => (
                      <div key={item.name} className="legend-item">
                        <span className="dot" style={{ backgroundColor: item.color }}></span>
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="chart-card">
                <h3>Sales Breakdown</h3>
                <div className="chart-wrapper">
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={profitData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#2d333b" vertical={false} />
                      <XAxis dataKey="name" stroke="#8b949e" />
                      <YAxis stroke="#8b949e" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#161b22', border: '1px solid #30363d' }}
                      />
                      <Bar dataKey="sales" fill="#ffd700" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'players' && (
          <div className="players-section admin-section">
            <div className="section-actions">
              <h2>Player Management</h2>
              <button className="add-btn" onClick={() => setShowAddPlayer(true)}>
                <Plus size={16} /> Add New Athlete
              </button>
            </div>
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Team</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map(player => (
                    <tr key={player.id}>
                      <td><img src={player.image} alt={player.name} className="table-img" /></td>
                      <td>{player.name}</td>
                      <td>{player.position}</td>
                      <td>{teams.find(t => t.id === player.teamId)?.name || 'N/A'}</td>
                      <td className="table-actions">
                        <button className="icon-btn"><Edit size={16} /></button>
                        <button className="icon-btn delete"><Trash2 size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'items' && (
          <div className="items-section admin-section">
            <div className="section-actions">
              <h2>Inventory Control</h2>
              <button className="add-btn" onClick={() => setShowAddItem(true)}>
                <Plus size={16} /> Add Product
              </button>
            </div>
            <div className="table-responsive">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Association</th>
                    <th>Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map(item => (
                    <tr key={item.id}>
                      <td className="product-td">
                        <img src={item.image} alt={item.name} className="table-img" />
                        <span>{item.name}</span>
                      </td>
                      <td>${item.price}</td>
                      <td className="capitalize">{item.categoryId || 'NIL'}</td>
                      <td>{players.find(p => p.id === item.playerId)?.name || 'General'}</td>
                      <td>
                        {item.externalLink ?
                          <span className="badge-link"><ExternalLink size={12} /> External</span> :
                          <span className="badge-manual">Manual</span>
                        }
                      </td>
                      <td className="table-actions">
                        <button className="icon-btn delete" onClick={() => deleteItem(item.id)}>
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Add Player Modal */}
      {showAddPlayer && (
        <div className="form-modal">
          <div className="form-card animate-slide-up">
            <div className="section-actions">
              <h2>Add New Athlete</h2>
              <button className="close-btn" onClick={() => setShowAddPlayer(false)}><X size={20} /></button>
            </div>
            <form onSubmit={handleAddPlayer} className="admin-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    placeholder="e.g. Stephen Curry"
                    value={newPlayer.name}
                    onChange={e => setNewPlayer({ ...newPlayer, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Position</label>
                  <input
                    placeholder="e.g. Point Guard"
                    value={newPlayer.position}
                    onChange={e => setNewPlayer({ ...newPlayer, position: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Collegiate Team</label>
                <select
                  value={newPlayer.teamId}
                  onChange={e => setNewPlayer({ ...newPlayer, teamId: e.target.value })}
                  required
                >
                  <option value="">Select Team</option>
                  {teams.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Photo URL</label>
                <input
                  placeholder="https://images.unsplash.com/..."
                  value={newPlayer.image}
                  onChange={e => setNewPlayer({ ...newPlayer, image: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Athlete Bio</label>
                <textarea
                  placeholder="Brief history and achievements..."
                  value={newPlayer.bio}
                  onChange={e => setNewPlayer({ ...newPlayer, bio: e.target.value })}
                  rows="4"
                />
              </div>
              <button type="submit" className="submit-btn-admin">Register Athlete</button>
            </form>
          </div>
        </div>
      )}

      {/* Add Item Modal */}
      {showAddItem && (
        <div className="form-modal">
          <div className="form-card animate-slide-up">
            <div className="section-actions">
              <h2>Add New Product</h2>
              <button className="close-btn" onClick={() => setShowAddItem(false)}><X size={20} /></button>
            </div>

            <div className="method-selector">
              <button
                className={addMethod === 'manual' ? 'active' : ''}
                onClick={() => setAddMethod('manual')}
              >
                Manual Entry
              </button>
              <button
                className={addMethod === 'link' ? 'active' : ''}
                onClick={() => setAddMethod('link')}
              >
                External Link
              </button>
            </div>

            <form onSubmit={handleAddItem} className="admin-form">
              <div className="form-group">
                <label>Product Title</label>
                <input
                  placeholder="e.g. Signed Basketball"
                  value={newItem.name}
                  onChange={e => setNewItem({ ...newItem, name: e.target.value })}
                  required
                />
              </div>

              {addMethod === 'link' && (
                <div className="form-group">
                  <label>External Website URL</label>
                  <div className="input-with-icon">
                    <LinkIcon size={16} />
                    <input
                      placeholder="https://example.com/product/..."
                      value={newItem.externalLink}
                      onChange={e => setNewItem({ ...newItem, externalLink: e.target.value })}
                      required
                    />
                  </div>
                  <p className="form-hint">Paste the link to the product on another website.</p>
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label>Price ($)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={newItem.price}
                    onChange={e => setNewItem({ ...newItem, price: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Category</label>
                  <select
                    value={newItem.categoryId}
                    onChange={e => setNewItem({ ...newItem, categoryId: e.target.value })}
                    required
                  >
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Associated Athlete</label>
                <select
                  value={newItem.playerId}
                  onChange={e => setNewItem({ ...newItem, playerId: e.target.value })}
                >
                  <option value="">None (General Product)</option>
                  {players.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label>Image URL</label>
                <input
                  placeholder="https://images.unsplash.com/..."
                  value={newItem.image}
                  onChange={e => setNewItem({ ...newItem, image: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea
                  placeholder="Product features and details..."
                  value={newItem.description}
                  onChange={e => setNewItem({ ...newItem, description: e.target.value })}
                  rows="3"
                />
              </div>

              <button type="submit" className="submit-btn-admin">
                {addMethod === 'link' ? 'Add Linked Product' : 'Add to Inventory'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}