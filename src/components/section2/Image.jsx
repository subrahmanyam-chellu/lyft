import React from 'react'
import image from '/src/assets/three.png';
import Box from '@mui/material/Box'

const Image = () => {
  return (
    <Box sx={{ display:'flex', justifyContent:'flex-start', paddingRight:{xs:'0px', lg:'128px'},
    paddingX:{xs:'80px'}
    
    }}>
      <Box sx={{
        maxWidth: '291px', 
        display: 'flex', justifyContent:{xs:'center', lg:'flex-start'},
        marginX:{lg:'54px'}
      }}>
        <img src={image} alt='no image' style={{ width: '100%' }} />
      </Box>
    </Box>
  )
}

export default Image
