import React from 'react'
import image from '/src/assets/seven.png';
import Box from '@mui/material/Box'

const Image = () => {
  return (
    <Box sx={{ display:'flex', justifyContent:{xs:'center', lg:'flex-start'}, paddingRight:{xs:'0px', sm:'20px', lg:'116px'}}}>
      <Box sx={{
        maxWidth: '520px', height: '100%',
        display: 'flex', justifyContent:{sm:'center', lg:'flex-start'}, paddingRight: { xs: '0px', lg: '16px' }, paddingBottom: { xs: '0px', lg: '6px' }
        
      }}>
        <img src={image} alt='no image' style={{ width: '100%' }} />
      </Box>
    </Box>
  )
}

export default Image
