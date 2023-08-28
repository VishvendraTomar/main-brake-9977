import React, { useState, useEffect } from 'react';
import { Box, Select, Checkbox, Stack, Button } from '@chakra-ui/react';
import axios from 'axios';

const FiltersAndSort = ({ onFilterSort }) => {
  const [brands, setBrands] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [sortByPrice, setSortByPrice] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://guided-aftermath-7976-data.onrender.com/shoes');
        const data = response.data;

        const uniqueBrands = [...new Set(data.map(product => product.brand))];
        const uniqueTypes = [...new Set(data.map(product => product.type))];

        setBrands(uniqueBrands);
        setTypes(uniqueTypes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleFilterSort = () => {
    const filters = {
      brand: selectedBrand,
      type: selectedType,
    };

    const sort = sortByPrice === 'asc' ? 'price' : sortByPrice === 'desc' ? '-price' : '';

    onFilterSort(filters, sort);
  };

  return (
    <Box w="30%" p="4">
      <Select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
        <option value="">Select Brand</option>
        {brands.map(brand => (
          <option key={brand} value={brand}>{brand}</option>
        ))}
      </Select>

      <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">Select Type</option>
        {types.map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </Select>

      <Stack direction="row" spacing={2} mt={4}>
        <Checkbox isChecked={sortByPrice === 'asc'} onChange={() => setSortByPrice('asc')}>
          Ascending Price
        </Checkbox>
        <Checkbox isChecked={sortByPrice === 'desc'} onChange={() => setSortByPrice('desc')}>
          Descending Price
        </Checkbox>
      </Stack>

      <Button colorScheme="cyan" mt={4} onClick={handleFilterSort}>
        Apply Filters & Sort
      </Button>
    </Box>
  );
};

export default FiltersAndSort;
