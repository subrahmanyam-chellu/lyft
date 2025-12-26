import { Typography, Box, Button } from '@mui/material'
import React from 'react'

const Text = () => {
    return (
        <Box sx={{marginRight:{xs:'0px', lg:'16px'}}}>
            <Box sx={{
                maxWidth: '471px', height: '100%', 
                width:'100%', display: 'flex', flexDirection: 'column',
                marginRight:{lg:'170px'},
                alignItems:{xs:'center', lg:'flex-start'}
            }}>
                <Box>
                    <Typography sx={{ typography:{xs:'h4',sm:'h3', lg:'h3'}, fontWeight:'600', marginBottom:'40px', marginTop:'40px' }}>The world awaits</Typography>
                </Box>
                <Box>
                    <Typography sx={{fontWeight:'400', maxHeight:'66px', justifyContent:{xs:'center', lg:'start'}}}>No matter where you’re headed, we’ll help you get there. On-demand, scheduled ahead, late night, or morning commute. Plus, earn rewards on every ride.</Typography>
                </Box>
                <Box sx={{}}>
                    <Button variant='contained' sx={{ marginBottom: '40px', marginTop: '40px', maxWidth:'181.5px', maxHeight:'48px',
                    backgroundColor:'#523BE4', borderRadius:'55rem', fontWeight:'400', fontSize:'1rem', textTransform:'none'

                    }}>Sign up to ride</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Text
