import React from 'react'
import Banner from './Banner'
import { Box } from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{paddingX:{xs:'20px', sm:'80px', lg:'120px'}, backgroundColor:'#ffff', boxShadow: 'inset 0 40px 20px -10px rgba(0,0,0,0.08)'

}}>
        <Banner/>
    </Box>
  )
}

export default Footer
