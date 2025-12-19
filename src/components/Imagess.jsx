import * as React from 'react'
import logo from '/src/assets/lyftb.png';
import { Box } from '@mui/material';

const Imagess = (prop) => {
   
  return (
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      height:'500px',
      padding:'55px'
    }}>
      <Box component="img" src={prop.src} sx={{height:'350px', width:{xs:'370px',sm:'450px',md:'600px'}}} alt="no image"></Box>
    </Box>
  )
}

export default Imagess
