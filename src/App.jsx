import React from 'react';
import Card from './components/Card.jsx';
import LandingAppBar from './components/DrawerAppBar.jsx';
import DrawerAppBar from './components/DrawerAppBar.jsx';
import Hero from './components/Hero.jsx';
import HeroSection from './components/HeroSection.jsx';
import image1 from '/src/assets/one.png';
import HeroSection1 from './components/HeroSection1.jsx';
import image2 from '/src/assets/two.png';
import image3 from '/src/assets/three.png';
import image4 from '/src/assets/four.png';
import image5 from '/src/assets/five.png';
import image6 from '/src/assets/six.png';
import Carousel from './components/Carousel.jsx';

const App = () => {
  return (
    <div sx={{displar:'flex'}}>
      <DrawerAppBar/>
      <HeroSection1 image={image1}/>
      <HeroSection  image={image2}/>
      <HeroSection1 image={image3}/>
      <Carousel/>
      <HeroSection image={image4}/>
      <HeroSection1 image={image5}/>
      <HeroSection image={image6}/>
    </div>
  )
}

export default App
