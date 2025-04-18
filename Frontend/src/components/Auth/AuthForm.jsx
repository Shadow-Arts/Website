import { useState } from 'react';
import './AuthForm.css';
import googleIcon from './google-icon-logo-svgrepo-com.svg';

const AuthForm = ({ mode = 'login', onLogin, onSignup }) => {
  const [isLogin, setIsLogin] = useState(mode === 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill all fields');
      return;
    }

    const credentials = { email, password };

    try {
      if (isLogin) {
        if (typeof onLogin === 'function') {
          onLogin(credentials);
        } else {
          throw new Error('onLogin is not a function');
        }
      } else {
        if (typeof onSignup === 'function') {
          onSignup(credentials);
        } else {
          throw new Error('onSignup is not a function');
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-card">
      <h1>Shadow Arts</h1>

      <div className="toggle-buttons">
        <button
          className={isLogin ? 'active' : ''}
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </button>
        <button
          className={!isLogin ? 'active' : ''}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>

      {error && <div className="error-box">{error}</div>}

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <div className="options">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit" className="submit-btn">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <hr />

      <button className="google-btn">
        <img src={googleIcon} alt="Google" />
        Sign in with Google
      </button>
    </div>
  );
};

export default AuthForm;
