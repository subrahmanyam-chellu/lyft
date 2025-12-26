import React from 'react'
import image from '/src/assets/two.png';
import Box from '@mui/material/Box'

const Image = () => {
  return (
    <Box sx={{ display:'flex', justifyContent:'flex-start', paddingRight:{xs:'0px', sm:'20px', lg:'116px'}}}>
      <Box sx={{
        maxWidth: '520px', maxHeight: '342px',
        display: 'flex', justifyContent:{sm:'center', lg:'flex-start'}, paddingRight: { xs: '0px', lg: '16px' }, paddingBottom: { xs: '0px', lg: '6px' }
        
      }}>
        <img src={image} alt='no image' style={{ width: '100%' }} />
      </Box>
    </Box>
  )
}

export default Image
