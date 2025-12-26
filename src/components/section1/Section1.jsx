import React from 'react'
import Banner from './Banner'
import { Box } from '@mui/material'

const Section1 = () => {
  return (
    <Box sx={{paddingX:{xs:'20px', sm:'80px', lg:'80px'}, marginY:{xs:'80px'}, backgroundColor:'#f4f4fA'}}>
        <Banner/>
    </Box>
  )
}

export default Section1
