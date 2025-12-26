import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react'
import image1 from '/src/assets/qr2.png';
import image2 from '/src/assets/driver.png';

const Text = () => {
    return (
        <Box sx={{ marginRight: '232px' }}>
            <Box sx={{
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
                maxWidth: '415px', maxHeight: '323px'
            }}>
                <Box component="img" src={image1} alt="qr1" sx={{ display: { xs: 'none', md: 'flex' }, width: '100%' }} />
                <Box component="img" src={image2} alt="qr1" sx={{ display: { xs: 'flex', sm: 'none' }, width: '60%' ,marginBottom:{xs:'25px'}}} />
                <Typography sx={{ display: { xs: 'none' }, marginTop: '22px', marginBottom: '47px' }}>Scan the QR code to download</Typography>
                <a style={{ fontWeight:'700', marginBottom: '16px' }}>Download the driver app →</a>
            </Box>
        </Box>
    )
}

export default Text
