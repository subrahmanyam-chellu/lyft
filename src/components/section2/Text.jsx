import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react'
import Link from '@mui/material/Link';

const Text = () => {
  return (
    <Box sx={{paddingTop:{lg:'105px'}}}>
            <Box sx={{
                maxWidth: '520px', height: '100%', 
                width:'100%', display: 'flex', flexDirection: 'column', 
                marginLeft:{lg:'128px'}, marginRight:{lg:'16px'},
                // alignItems:'flex-start'
            }}>
                <Typography sx={{fontWeight:'700', fontSize:'16px', textAlign:{xs:'center', lg:'start'}}}>RIDE WITH LYFT</Typography>
                <Box>
                    <Typography sx={{ typography:{xs:'h5',sm:'h4', lg:'h4'}, fontSize:'36px', fontWeight:'900', marginBottom:'16px', marginTop:'11px', textAlign:{xs:'center', lg:'start'} }}>A few quick taps, one great trip</Typography>
                </Box>
                <Box>
                    <Typography sx={{marginTop:{}, marginBottom:{xs:'15px', lg:'27px'}, textAlign:{xs:'center', lg:'start'}}}>No matter your destination, we’ll get you where you need to go</Typography>
                </Box>
                <Typography sx={{fontWeight:'700', fontSize:'16px', marginBottom:{xs:'15px', lg:'34px'}}}>Get a reliable ride in minutes</Typography>
                <Typography sx={{fontWeight:'700', fontSize:'16px', marginBottom:{xs:'15px', lg:'34px'}}}>Schedule your ride in advance</Typography>
                <Typography sx={{fontWeight:'700', fontSize:'16px', marginBottom:{xs:'30px', lg:'48px'}}}>Earn rewards on every ride</Typography>
                <Box sx={{ maxWidth:'399px', maxHeight:'52px', display:'flex', flexDirection:{xs:'column', md:'row'}, gap:{xs:'15px', lg:'20px'}, justifyContent:{xs:'center',lg:'space-between'},
                     alignItems:'center', marginBottom: '59px', marginTop: '24px'}}>
                    <Button variant='contained' sx={{ 
                    backgroundColor:'#523BE4', borderRadius:'55rem', width:'189px', height:'48px', fontWeight:'650', textTransform:'none',
                    fontSize:'20px', alignSelf:{xs:'center', lg:'flex-start'}, marginBottom:{xs:'15px', lg:'48px'}

                    }}>Sign up to ride</Button>
                    <Link style={{display:'flex', alignSelf:'center', maxHeight:'48px', maxWidth:{xs:'399px', lg:'207px'}, color:'black', fontWeight:'700'}}>learn more about riding with Lyft→</Link>
                </Box>
            </Box>
        </Box>
  )
}

export default Text
