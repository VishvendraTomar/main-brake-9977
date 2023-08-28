import React, { useState, useEffect } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import FiltersAndSort from '../components/FiltersAndSort';
import ProductList from '../components/ProductList';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({ brand: '', type: '' });
  const [sortOption, setSortOption] = useState('');
  const productsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonserver-g2j1.onrender.com/products');
        const data = response.data;
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const navigate = useNavigate();

  const addToCart = (productId) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItems.includes(productId)) {
      const proceedToCart = window.confirm(
        'This item is already in your cart. Do you want to proceed to your cart?'
      );

      if (proceedToCart) {
        navigate('/cart');
      }

      return;
    }

    const updatedCart = [...cartItems, productId];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <Box>
      <Container maxW="container.lg" mt="4">
        <Flex>
         
          <ProductList
            products={currentProducts}
            filters={filters}
            sortOption={sortOption}
            onAddToCart={addToCart}
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default ProductPage;
