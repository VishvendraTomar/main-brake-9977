import React, { useState, useEffect } from 'react';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@oxygen-ui/react-icons';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box position="relative">
      {/* <Image src='https://images.pexels.com/photos/9596282/pexels-photo-9596282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' /> */}
      <Image src={images[currentImageIndex]} alt="Image Slider" h="300px" w="100%" objectFit="cover" />
      <IconButton
        icon={<ChevronLeftIcon />}
        onClick={goToPreviousImage}
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        bg="gray.800"
        color="white"
      />
      <IconButton
        icon={<ChevronRightIcon />}
        onClick={goToNextImage}
        position="absolute"
        right="0"
        top="50%"
        transform="translateY(-50%)"
        bg="gray.800"
        color="white"
      />
    </Box>
  );
};

export default ImageSlider;

// [
//   {
//     "id": 1,
//     "name": "Panther ",
//     "image": "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/2fa7b9466cc1567e571968bb0206d98b",
//     "review": 4.5
//   },
//   {
//     "id": 2,
//     "name": "Dirtwolf",
//     "image": "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/cce0d652a837a89211db9fb18590b538",
//     "review": 3.8
//   },
//   {
//     "id": 3,
//     "name": "PANTHER 27.5T - TURQUOISE",
//     "image": "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/4c97dfa3e3971f684832172212039e4e",
//     "review": 5.0
//   },
//   {
//     "id": 4,
//     "name": "MERAKI ULTRA 27.5T",
//     "image": "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/4c97dfa3e3971f684832172212039e4e",
//     "review": 4.2
//   },
//   {
//     "id": 5,
//     "name": "ROCKRIDER",
//     "image": "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/4c97dfa3e3971f684832172212039e4e",
//     "review": 4.7
//   },
//   {
//     "id": 6,
//     "name": "BTWIN",
//     "image": "https://contents.mediadecathlon.com/p2539202/k$77e849a8741215d9368b8a9a4a36abb4/mountain-bike-rockrider-st40-black.jpg?format=auto&quality=70&f=300x0",
//     "review": 3.5
//   }
// ]
