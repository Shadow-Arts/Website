// src/components/Login/Login.jsx
import React from 'react';
import AuthForm from '../Auth/AuthForm';

const Login = ({ onLogin }) => {
  return (
    <div>
      <AuthForm mode="login" onLogin={onLogin} />
    </div>
  );
};

export default Login;
