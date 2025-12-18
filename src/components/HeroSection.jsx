import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react'
import Hero from './Hero'
import Imagess from './Imagess'

const HeroSection = (prop) => {
  return (
    <Stack direction='row' spacing={2} justifyContent='space-between' sx={{display:{xs:'block', sm:'block',md:'flex'}}}>
        <Box sx={{flex:'1'}} >
            <Hero></Hero>
        </Box>
        <Box sx={{flex:'1'}}>
            <Imagess src={prop.image}/>
        </Box>   
    </Stack>
  )
}

export default HeroSection
