import React from 'react'
import Banner from './Banner'
import { Box } from '@mui/material'

const Section2 = () => {
  return (
    <Box sx={{paddingX:{xs:'20px', sm:'80px', lg:'120px'}, marginTop:{xs:'128px', lg:'64px'}}}>
        <Banner/>
    </Box>
  )
}

export default Section2
