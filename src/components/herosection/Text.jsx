import { Typography, Box, Button } from '@mui/material'
import React from 'react' 

const Text = () => {
    return (
        <Box sx={{width:{xs:'580', lg:'475px'}, height:{xs:'310px',lg:'325px'}, display:'flex',
             flexDirection:'column', marginRight:'24px', paddingTop:{sm:'55px', lg:'45px'}
        }}>
            <Box>
                <Typography variant='h3' sx={{ textAlign:{xs:'center', lg:'left'}
                    , marginBottom:'20px', fontSize:'48px', fontWeight:'600', fontFamily:'sans-serif'}}>The world awaits</Typography>
            </Box>
            <Box>
                <Typography sx={{textAlign:{xs:'center', lg:'left'}}}>No matter where you’re headed, we’ll help you get there. On-demand, scheduled ahead, late night, or morning commute. Plus, earn rewards on every ride.</Typography>
            </Box>
            <Box sx={{display:'flex', justifyContent:{xs:'center', lg:'flex-start'}}}>
                <Button variant='contained' sx={{width:'181px', height:'48px', borderRadius:'55em', 
                    marginTop:'45px', backgroundColor:'#523BE4', fontWeight:'bolder', textTransform:'none',
                    fontFamily:'proxima-nova ,sans-serif'}}>Sign up to ride</Button>
            </Box>
        </Box>
    )
}

export default Text
