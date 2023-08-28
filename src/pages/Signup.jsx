import React, { useState } from 'react';
import { Box, Heading, Input, Button, FormControl, FormLabel, InputGroup, InputRightElement } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import styles from './signup.module.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleSignup = async () => {
    try {
      const response = await fetch('https://guided-aftermath-7976-users.onrender.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        login(data.name);
        
        setSignupSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <Box className={styles['signup-container']}>
      <Heading className={styles['signup-heading']}>Signup Page</Heading>
      {/* Name Input */}
      <FormControl mb="4">
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles['signup-input']}
        />
      </FormControl>
      {/* Email Input */}
      <FormControl mb="4">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles['signup-input']}
        />
      </FormControl>
      {/* Password Input */}
      <FormControl mb="4">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles['signup-input']}
          />
          {/* Show/Hide Password Button */}
          <InputRightElement width="4.5rem">
            <Button size="sm" onClick={() => {}}>
              Show
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      {/* Signup Button */}
      <Button onClick={handleSignup} className={styles['signup-button']}>Signup</Button>

      {/* Display success message after successful signup */}
      {signupSuccess && (
        <p className={`${styles['signup-result']} ${styles['signup-success']}`}>Signup successful! Redirecting to login...</p>
      )}
    </Box>
  );
};

export default SignupPage;
