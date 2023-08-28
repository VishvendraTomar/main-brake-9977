import React from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard'; // Create ProductCard.jsx
import Pagination from './Pagination'; // Create Pagination.jsx

const ProductList = ({ products, onAddToCart }) => {
  // Add your pagination functionality here

  return (
    <Box w="70%" p="4">
      <SimpleGrid columns={3} spacing="4">
        {/* Map through products and display ProductCard components */}
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </SimpleGrid>
      
      {/* Pagination component */}
      <Pagination />
    </Box>
  );
};

export default ProductList;
