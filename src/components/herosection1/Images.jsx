import { Box } from '@mui/material'
import React from 'react'
import image from '/src/assets/hero.webp'
import { FormatAlignJustify } from '@mui/icons-material'
const Images = () => {
  return (
    <Box sx={{paddingLeft:{xs:'0px', lg:'24px'}}}>
      <Box sx={{
        maxWidth: '584px',
        height: '100%',
        width:'100%',
        display: 'flex', justifyContent:{xs:'center', lg:'flex-start'}, paddingRight:{xs:'15px', lg:'16px'}, paddingBottom:{xs:'0px', lg:'6px'}
      }}>
        <img src={image} alt='hero image' style={{ width: '100%' }} />
      </Box>
    </Box>
  )
}

export default Images
