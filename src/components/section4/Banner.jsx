import Stack from '@mui/material/Stack'
import React from 'react'
import Image from './Image'
import Text from './Text'
import Box from '@mui/material/Box'

const Banner = () => {
  return (
    <Box sx={{paddingX:{lg:'128px'}}}>
      <Stack direction={{ xs: 'column-reverse', sm:'row', lg: 'row' }} spacing={2}
        sx={{
          width: '100%', maxWidth: '1280px',
          display: 'flex', justifyContent: 'space-between'
        }}>
        <Text />
      </Stack>
    </Box>
  )
}

export default Banner
