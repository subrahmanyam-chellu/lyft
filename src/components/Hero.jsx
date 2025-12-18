import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import logo from '/src/assets/lyftb.png';

const Hero = () => {
  return (
        <Box sx={{width:'100%', 
        height:'500px',
         display:'flex', 
         justifyContent:'center',
          alignItems:'center',
          padding:'55px'
          }}>
            <Typography variant='h6'>
                     El mundo te espera

No importa a dónde vayas, te ayudaremos a llegar. Ya sea en el momento, programado con anticipación, por la noche o para tus traslados diarios. Además, gana recompensas en cada viaje.

            </Typography>
        </Box>
  )
}

export default Hero
