import React from 'react';
import { BrowserRouter, Route, Routes as RouterRoutes, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider, useAuth } from './AuthContext';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './HomePage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import CartPage from '../pages/CartPage';
import ProductPage from '../pages/ProductPage';
// Import other page components if needed 

const PrivateRoute = ({ element, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <RouterRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/cart" element={<PrivateRoute element={<CartPage />} />} />
            <Route path="/product" element={<ProductPage />} />
          </RouterRoutes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default AppRoutes;
