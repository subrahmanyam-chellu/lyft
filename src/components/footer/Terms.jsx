import { Box } from '@mui/material'
import React from 'react'

const Terms = () => {
  return (
    <Box sx={{display:{xs:'none', lg:'flex'}, flexDirection:'row', justifyContent:'center', width:'100%', heigth:'34px'}}>
        <a style={{fontSize:'8px', color:'black'}}>Terms</a>
        <a style={{fontSize:'8px', color:'black'}}>privacy</a>
        <a style={{fontSize:'8px', color:'black'}}>Accessbility Statement</a>
    </Box>
  )
}

export default Terms
