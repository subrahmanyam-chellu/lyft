import React from 'react'
import Banner from './Banner'
import { Box } from '@mui/material'
import Heading from './Heading'

const Section8 = () => {
  return (
    <Box sx={{paddingX:{xs:'20px', sm:'80px', lg:'120px'}, paddingTop:{lg:'64px'}, 
    paddingBottom:{xs:'64px'}, backgroundColor:'#f4f4fA', boxShadow: '0 8px 12px rgba(0,0,0,0.25)'}}>
        <Heading/>
        <Banner/>
    </Box>
  )
}

export default Section8
