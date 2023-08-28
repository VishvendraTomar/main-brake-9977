import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import ImageSlider from './ImageSlider' ;
import BestSellersSection from './BestSellersSection';
import CustomerReviewsSection from './CustomerReviewsSection';
import styles from './HomePage.module.css';

const HomePage = () => {
  const images = [
    "https://images.pexels.com/photos/8926943/pexels-photo-8926943.jpeg",
    "https://images.pexels.com/photos/14413953/pexels-photo-14413953.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/14413953/pexels-photo-14413953.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <Box className={styles.homePage}>
      <Container maxW="container.lg" mt="4">
      
        <div className={styles.sliderContainer}>
          <ImageSlider images={images} />
        </div>

       

        <div className={styles.bestSellersSection}>
          <BestSellersSection />
        </div>

        <div className={styles.customerReviewsSection}>
          <CustomerReviewsSection />
        </div>
      </Container>
    </Box>
  );
};

export default HomePage;
