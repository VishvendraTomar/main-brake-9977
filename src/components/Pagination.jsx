import React from 'react';
import { Box, Button } from '@chakra-ui/react';

const Pagination = ({ productsPerPage, totalProducts, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <Box mt="4">
      {/* Render pagination buttons */}
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          variant="outline"
          size="sm"
          onClick={() => onPageChange(index + 1)}
          disabled={currentPage === index + 1}
          mr="2"
        >
          {index + 1}
        </Button>
      ))}
    </Box>
  );
};

export default Pagination;
