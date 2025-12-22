import { Box, Stack } from '@mui/material'
import React from 'react'
import Images from './herosection/Images'
import Text from './herosection/Text'
import { Padding } from '@mui/icons-material'

const Banner = () => {
  return (
    <Stack direction={{xs:"column-reverse", md:'row'}} sx={{height:{xs:'650px', lg:'325px'},
          display:'flex', justifyContent:'flex-end',maxWidth:'1360px', width:{sm:'600px', md:'900px', lg:'1200px'}, margin:'80px',
          mt:{xs:'80px'}
    }}>
        <Images/>
        <Box sx={{width:'97px',height:'100%', justifySelf:'center'}}></Box>
        <Text/>
    </Stack>
  )
}

export default Banner

