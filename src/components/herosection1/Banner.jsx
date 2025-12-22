import { Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Images from './Images'
import Text from './Text'

function useWindowWidth() {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      // cleanup on unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  }

const Banner = () => {

  const windowWidth=useWindowWidth();

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

