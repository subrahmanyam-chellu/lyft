import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react'

const Text = () => {
    return (
        <Box sx={{paddingRight:{lg:'132px'}}}>
            <Box sx={{
                maxWidth: '504px', height: '100%',
                width: '100%', display: 'flex', flexDirection: 'column',
                justifyContent: { lg: 'flex-start' },
            }}>
                <Box sx={{ display:'flex', marginBottom: {xs:'25px', lg: '16px' } , justifyContent:{xs:'center', lg:'start'}, mt:{xs:'25px'}}}>
                    <Typography sx={{ typography: { xs: 'h5', sm: 'h4', lg: 'h4' }, fontSize: '36px', fontWeight: '900' }}>Your ride, refined</Typography>
                </Box>
                <Box sx={{ marginBottom: { xs:'20px', lg: '16px' } }}>
                    <Typography sx={{ marginTop: {}, marginBottom: { lg: '27px' } }}>Join Lyft Pink to enjoy complimentary upgrades on Priority Pickup, exclusive savings, and preferential pricing on XL, Extra Comfort, Black, and Black SUV rides. Members save an average of $23/month.</Typography>
                </Box>
                <Box sx={{ marginBottom: { xs:'20px',  lg: '27px' } }}>
                    <Typography sx={{ fontWeight: '700', fontSize: '16px' }}>Free Priority Pickup upgrades</Typography>
                    <Typography>Get picked up faster and save $3-4 per ride on average</Typography>
                </Box>
                <Box sx={{ marginBottom: {xs:'20px',  lg: '27px' } }}>
                    <Typography sx={{ fontWeight: '700', fontSize: '16px' }}>Exclusive savings</Typography>
                    <Typography>Enjoy 5% off on Extra Comfort and Lyft XL rides</Typography>
                </Box>
                <Box sx={{ marginBottom: {xs:'40px',  lg: '40px' } }}>
                    <Typography sx={{ fontWeight: '700', fontSize: '16px' }}>Cancellation forgiveness</Typography>
                    <Typography>Cancel up to 3x/month for free</Typography>
                </Box>
                <Box sx={{ maxWidth: '504px', maxHeight: '48px', display: 'flex', flexDirection: 'column', justifyContent: { xs: 'flex-start', lg: 'center' }, marginBottom:{xs:'40px', lg:'32px'} }}>
                    <Button variant='contained' sx={{
                        backgroundColor: '#523BE4', borderRadius: '55rem', maxWidth: '131px', maxHeight: '48px', fontWeight: '650', textTransform: 'none',
                        fontSize: '20px', alignItems: { xs: 'flext-start' }, marginBottom: { lg: '16px' }

                    }}>Join now</Button>
                    <Typography sx={{ fontSize: '14px' }}>
                        <span>Subject to the </span>
                        <a style={{color:'blue'}}>Lyft Pink Terms & Conditions</a>
                        <span> and </span>
                        <a style={{color:'blue'}}>Lyft Terms of Service</a>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Text
