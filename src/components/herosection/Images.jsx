import { Box } from '@mui/material'
import React from 'react'
import image from '/src/assets/hero.webp'
import { FormatAlignJustify } from '@mui/icons-material'
const Images = () => {
  return (
    <Box sx={{maxHeight:'325px', width:{lg:'584px'}, display:'flex', justifyContent:'flex-start', marginLeft:{xs:'15px', lg:'24px'}}}>
        <img src={image} style={{ height:'100%', width:'100%', display:'flex', paddingBottom:'6px', paddingRight:'16px'
         }} />
    </Box>
  )
}

export default Images
