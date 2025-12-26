import Stack from '@mui/material/Stack'
import React from 'react'
import Image from './Image'
import Text from './Text'
import Box from '@mui/material/Box'

const Banner = () => {
  return (
    <Box sx={{paddingX:{lg:'40px'}, paddingY:{lg:'80px'}}}>
      <Stack direction={{ xs: 'column', sm:'row', lg: 'row' }} spacing={2}
        sx={{
          width: '100%', maxWidth: '1280px', height: '100%',
          display: 'flex', justifyContent: 'flex-start'
        }}>
        <Image />
        <Text />
      </Stack>
    </Box>
  )
}

export default Banner
