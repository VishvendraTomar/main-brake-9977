import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const CustomerReviewsSection = () => {
  return (
    <Box>
      <Heading as="h2" size="lg" mb="4">
      WHO WE ARE
      </Heading>
      {/* Include your customer reviews content here */}
      <Text>
      We are a small bike company created by riders to cover riders needs.As people who ride their bikes every day we know how much abuse bikes go through nowadays, that's why we offer you the best universal, easy to install frame protection. We make products that increase the life time of your bike, by protecting it from scratches and dings while also giving it a cool new look.
        {/* Add content for customer reviews */}
      </Text>
      <Text>
      We use eco friendly inks, recyclable packaging and we try to maximize resources and materials to reduce our impact on the planet. 

This sport has given us so much that we feel the need to give back, that’s why constantly we raise funds for bike related and  environmental organizations. To try promote biking and preserve our playgrounds. 

We want to protect your bike while contributing to a better world.
      </Text>
    </Box>
  );
};

export default CustomerReviewsSection;
