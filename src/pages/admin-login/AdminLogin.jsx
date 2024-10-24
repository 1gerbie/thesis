import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminLogin.scss';

function AdminLogin({ handleLogin }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '1' && password === '1') {
      handleLogin(true);
      if (rememberMe) {
        localStorage.setItem('adminLoggedIn', 'true');
      }
      navigate('/home', { replace: true });
    } else {
      setError('Invalid username or password');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-container">
        <div className="image-section">
          <img src="/path/to/your/image.jpg" alt="Admin Login" />
        </div>
        <div className="divider"></div>
        <div className="admin-login">
          <div className="login-icon">
            <img src="/path/to/your/icon.png" alt="Admin Login Icon" />
          </div>
          <h2>Admin Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <div className="button-group">
              <button type="submit">Login</button>
              <button type="button" onClick={handleCancel}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;