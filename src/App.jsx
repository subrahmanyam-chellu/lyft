import React from 'react';
import DrawerAppBar from './components/DrawerAppBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import image1 from '/src/assets/one.png';
import HeroSection1 from './components/HeroSection1.jsx';
import image2 from '/src/assets/two.png';
import image3 from '/src/assets/three.png';
import image4 from '/src/assets/four.png';
import image5 from '/src/assets/five.png';
import image6 from '/src/assets/six.png';
import Carousel from './components/Carousel.jsx';
import { Box } from '@mui/material';

const App = () => {
  return (
    <Box>
      <DrawerAppBar/>
      <HeroSection1 image={image1}/>
      <HeroSection  image={image2}/>
      <HeroSection1 image={image3}/>
      <Carousel/>
      <HeroSection image={image4}/>
      <HeroSection1 image={image5}/>
      <HeroSection image={image6}/>
    </Box>
  )
}

export default App
