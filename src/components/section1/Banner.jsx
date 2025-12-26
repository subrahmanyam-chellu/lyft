import Stack from '@mui/material/Stack'
import React from 'react'
import Image from './Image'
import Text from './Text'
import Box from '@mui/material/Box'

const Banner = () => {
  return (
    <Box sx={{maxHeight:'502px', paddingX:{lg:'40px'}, paddingY:{lg:'80px'}, backgroundColor:'#f4f4fA'}}>
      <Stack direction={{ xs: 'column', sm:'row', lg: 'row' }} spacing={2}
        sx={{
          width: '100%', maxWidth: '1280px',
          display: 'flex', justifyContent: 'space-between'
        }}>
        <Text />
        <Image />
      </Stack>
    </Box>
  )
}

export default Banner
