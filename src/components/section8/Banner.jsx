import Stack from '@mui/material/Stack'
import React from 'react'
import Image from './Image'
import Text from './Text'
import Box from '@mui/material/Box'
import Heading from './Heading'

const Banner = () => {
  return (
    <Box>
      
      <Stack direction={{ xs: 'column', sm:'row', lg: 'row' }} spacing={2}
        sx={{
          width: '100%', height:'100%', maxWidth: '1280px',
          display: 'flex', alignItems:'flex-start'
        }}>
        <Image />
        <Text />
      </Stack>
    </Box>
  )
}

export default Banner
