import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Flex, Box, Spacer, Button, HStack, Image, Heading, color } from '@chakra-ui/react';
import { useAuth } from './AuthContext';
import styles from './navbar.module.css';

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Flex className={styles.navbar} p="4" align="center">
      <Box>
        <Image src="data:image/png;base64,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" alt="Logo" h="40px" />
      </Box>
        <Heading > Ninja Bikes</Heading>
 
      <Spacer />

      <HStack spacing="4" className={styles.navLinks}>
        <NavLink to="/" exact activeClassName={styles.activeLink}>
          Home
        </NavLink>
        <NavLink to="/product" activeClassName={styles.activeLink}>
          Products
        </NavLink>
        <NavLink to="/cart" activeClassName={styles.activeLink}>
          Cart
        </NavLink>
        {user ? (
          <>
            <span className={styles.userWelcome}>Welcome, {user}!</span>
            <Button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </Button>
          </>
        ) : (
          <Box className={styles.loginLinks}>
            <Link to="/login">Login</Link> / <Link to="/signup">Signup</Link>
          </Box>
        )}
      </HStack>
    </Flex>
  );
};

export default Navbar;
