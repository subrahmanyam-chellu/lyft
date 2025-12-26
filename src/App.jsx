import React from 'react';
import DrawerAppBar from './components/DrawerAppBar.jsx';
import image1 from '/src/assets/one.png';
import HeroSection1 from './components/herosection1/HeroSection1.jsx';
import image2 from '/src/assets/two.png';
import image3 from '/src/assets/three.png';
import image4 from '/src/assets/four.png';
import image5 from '/src/assets/five.png';
import image6 from '/src/assets/six.png';
import Carousel from './components/Carousel.jsx';
import { Box } from '@mui/material';
import HeroSection from './components/herosection/HeroSection.jsx';
import Section1 from './components/section1/Section1.jsx';
import Section2 from './components/section2/Section2.jsx';
import Section3 from './components/section3/Section3.jsx';
import Section4 from './components/section4/Section4.jsx';
import Section5 from './components/section5/Section5.jsx';
import Section6 from './components/section6/Section6.jsx';
import Section7 from './components/section7/Section7.jsx';
import Section8 from './components/section8/Section8.jsx';
import Footer from './components/footer/Footer.jsx'


const App = () => {
  return (
    <Box>
      <DrawerAppBar />
      <HeroSection1 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
      {/* <HeroSection sx={{margin:'80px'}}/> */}
      {/* <HeroSection  image={image2}/>
      <HeroSection1 image={image3}/>
      <Carousel/>
      <HeroSection image={image4}/>
      <HeroSection1 image={image5}/>
      <HeroSection image={image6}/>  */}

    </Box>
  )
}

export default App
