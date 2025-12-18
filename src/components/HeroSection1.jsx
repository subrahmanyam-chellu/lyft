import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react'
import Hero from './Hero'
import Imagess from './Imagess'
import image1 from '/src/assets/one.png';

const HeroSection1 = (prop) => {
  return (
    <Stack direction='row' spacing={2} justifyContent='space-between' 
    sx={{display:{xs:'block', sm:'block',md:'flex', lg:'flex'}, 
    backgroundColor:'#acbed7ff',
    mt:'10px'}}>
        <Box sx={{flex:'1'}}>
            <Imagess src={prop.image}/>
        </Box>
        <Box sx={{flex:'1'}} >
            <Hero></Hero>
        </Box>
    </Stack>
  )
}

export default HeroSection1
