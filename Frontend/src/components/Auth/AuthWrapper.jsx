// src/components/AuthWrapper.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const AuthFormWrapper = () => {
  const navigate = useNavigate();

  const onLogin = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      setTimeout(() => navigate('/home'), 100);
    } catch (error) {
      alert(error.message);
    }
  };

  const onSignup = async ({ email, password }) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful!');
      setTimeout(() => navigate('/home'), 100);
    } catch (error) {
      alert(error.message);
    }
  };

  return <AuthForm onLogin={onLogin} onSignup={onSignup} />;
};

export default AuthFormWrapper;
