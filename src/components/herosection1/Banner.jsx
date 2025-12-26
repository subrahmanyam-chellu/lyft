import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Images from './Images'
import Text from './Text'

const Banner = () => {
  return (
    <Stack direction={{xs:'column-reverse', lg:'row'}} spacing={2}
           sx={{width:'100%', maxWidth:'1360px', 
                display:'flex', justifyContent:'space-between', 
                margin:{xs:'10px', lg:'80px'}}}>
        <Images/>
        <Text/>
    </Stack>
  )
}

export default Banner

