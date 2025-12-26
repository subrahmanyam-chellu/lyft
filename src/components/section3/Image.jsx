import React from 'react'
import image1 from '/src/assets/four.png';
import image2 from '/src/assets/four2.png';
import Box from '@mui/material/Box'

const Image = () => {
  return (
    <Box sx={{ display:'flex', justifyContent:'flex-start', paddingLeft:{lg:'128px'},
       paddingRight:{lg:'104px'}
    }}>
      <Box sx={{
        maxWidth: '415px',
        display: 'flex', justifyContent:{sm:'center', lg:'flex-start'},
        paddingRight:{lg:'16px'}, paddingBottom:{lg:'41px'}
      }}>
        <img src={image1} alt='no image' style={{ width: '100%' }} />
        <picture>
          <source media="(max-width:600px)" srcSet={image1} />
          <source media="(min-width:1200px)" srcSet={image2} />
          <img src={image1} alt="no image" style={{ width: '100%' }} />
        </picture>

      </Box>
    </Box>
  )
}

export default Image
