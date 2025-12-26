import React from 'react'
import Box from '@mui/material/Box'
import image1 from '/src/assets/qr1.png'
import image2 from '/src/assets/rider.png'
import { Typography } from '@mui/material';

const Image = () => {
  return (
    <Box sx={{paddingLeft:{lg:'128px'},marginRight:{xs:'0px', lg:'104px'}}}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
        marginRight: {xs:'0px', lg: '120px' }, maxWidth: '415px', maxHeight:'323px'
      }}>
        <Box component="img" src={image1} alt="qr1" sx={{display:{xs:'none',md:'flex'}, width: '100%'}} />
        <Box component="img" src={image2} alt="qr1" sx={{display:{xs:'flex',sm:'none'}, width: '60%', marginBottom:{xs:'25px'}}} />
        <Typography sx={{ display:{xs:'none'}, marginTop: '22px', marginBottom: '47px' }}>Scan the QR code to download</Typography>
        <a style={{fontWeight:'700', marginBottom:'16px'}}>Download the rider app →</a>
      </Box>
    </Box>
  )
}

export default Image
