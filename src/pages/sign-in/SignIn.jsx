import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./signIn.scss";

function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === '' && password === '') {
      setError('Invalid username or password');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-container">
        <div className="image-section">
        <img src="/Labmanager.png" alt="Sign In" />
        </div>
        <div className="divider"></div>
        <div className="sign-in">
          <div className="login-icon">
            <img src="/logo1.png" alt="User Sign In" />
          </div>
          <h2>Sign In</h2>
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
              <button type="submit">Sign In</button>
              <Link to="/" className="back-link">Back to Login</Link>
            </div>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default SignIn;