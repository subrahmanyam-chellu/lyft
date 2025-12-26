import Stack from '@mui/material/Stack'
import React from 'react'
import Image from './Image'
import Text from './Text'
import Box from '@mui/material/Box'

const Banner = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between', paddingX:{lg:'40px'}, paddingY:{lg:'80px'}}}>
      <Stack direction={{ xs: 'column-reverse', sm:'row', lg: 'row' }} spacing={2}
        sx={{
          width: '100%', maxWidth: '1280px', height: '100%',
          display: 'flex', justifyContent: 'space-between'
        }}>
        <Text />
        <Image />
      </Stack>
    </Box>
  )
}

export default Banner
