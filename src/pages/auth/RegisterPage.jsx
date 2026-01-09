import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="auth-title">Create Account</h1>
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-input-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" required className="auth-input" />
          </div>
          
          <div className="auth-input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required className="auth-input" />
          </div>
          
          <div className="auth-input-group">
            <label>Password</label>
            <input type="password" placeholder="" required className="auth-input" />
          </div>
          
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
        
        <div className="auth-footer">
          Already have an account? 
          <Link to="/login" className="auth-link">Login</Link>
        </div>
      </div>
    </div>
  );
}
