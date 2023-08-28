import React, { useState } from 'react';
import { Box, Heading, Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import styles from './login.module.css';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginResult, setLoginResult] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('https://guided-aftermath-7976-users.onrender.com/users');
      const users = await response.json();

      const user = users.find(user => user.email === email && user.password === password);

      if (user) {
        login(user.name);
        setLoginResult('success');
        setTimeout(() => {
          navigate('/');
        }, 1500);
      } else {
        setLoginResult('fail');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  if (isAuthenticated()) {
    navigate('/');
  }

  return (
    <Box className={styles['login-box']}>
      <Heading className={styles['login-heading']}>Login Page</Heading>
      {/* Email Input */}
      <Input
        className={styles['login-input']}
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* Password Input */}
      <Input
        className={styles['login-input']}
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* Login Button */}
      <Button className={styles['login-button']} onClick={handleLogin}>Login</Button>

      {/* Display login result */}
      {loginResult === 'success' && 
        <p className={`${styles['login-result']} ${styles['login-success']}`}>
          Login successful! Redirecting to home...
        </p>}
      {loginResult === 'fail' && 
      <p className={`${styles['login-result']} ${styles['login-fail']}`}>
        Login failed. Please check your credentials.
      </p>}
    </Box>
  );
};

export default LoginPage;
