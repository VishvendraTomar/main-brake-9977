import React from 'react';
import { Box, Heading, Text, SimpleGrid, Image } from '@chakra-ui/react';
import styles from './bestSellers.module.css';

const BestSellersSection = () => {
  const bestSellers = [
    {
        "id": 17,
        "name": "ProRun Rider",
        "brand": "MarathonMasters",
        "price": 1399.99,
        "images": "https://dracobikes.com/wp-content/uploads/2022/05/DYEDbro-Frame-Protection-at-Draco-Bikes-Stormstatic-Lights-Camera-Action-3.jpg",
        "gender": "Men",
        "type": "MTB",
        "rating": 4.9,
        "review": 182,
        "bestFor": ["Long Distance ", "Race Training"],
        "features": [
          "Lightweight design",
          "Carbon fiber plate for energy return",
          "Responsive cushioning",
          "Breathable mesh upper",
          "Lace-up closure"
        ]
      },
      {
        "id": 18,
        "name": "DYEDBRO Gravel",
        "brand": "DYEDBRO",
        "price": 1099.99,
        "images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOuDokZC3Dc9kYdJ0M7wEPrXOu1TOPmeyFwouy5OTIYt2_by5h4nsgz8BAlQzDdfETrM&usqp=CAU",
        "gender": "Men",
        "type": "Evening Heels",
        "rating": 4.5,
        "review": 148,
        "bestFor": ["", ""],
        "features": [
          "",
          "Slip-on style"
        ]
      },
      {
        "id": 19,
        "name": "Transition Sentinel GX Carbon",
        "brand": "Transition",
        "price": 845.99,
        "images": "https://www.powderhoundak.com/cdn/shop/products/2021_SentinelCarbon_Gallery3.jpg?v=1656873412",
        "gender": "Unisex",
        "type": "Outdoor Sandals",
        "rating": 4.6,
        "review": 112,
        "bestFor": ["Hiking", "Water Activities"],
        "features": [
          "Lugged rubber outsole"
        ]
      }
  ];

  return (
    <Box className={styles.bestSellersSection}>
      <Heading className={styles.bestSellersHeading} size="lg" mb="4">
        Best Sellers
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="4">
        {bestSellers.map(product => (
          <Box key={product.id} className={styles.productCard}>
            <Image className={styles.productImage} src={product.images} alt={product.name} />
            <Box className={styles.productInfo}>
              <Text className={styles.productName} fontWeight="semibold">
                {product.name}
              </Text>
              <Text className={styles.productPrice} color="gray.500">
                Price : ${product.price}
              </Text>
              <Text className={styles.productRating} color="gray.500">
                Rating : {product.rating} stars ({product.review} reviews)
              </Text>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default BestSellersSection;