import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react'

const Text = () => {
  return (
    <Box sx={{display:'flex', marginRight:{xs:'0px', lg:'16px'}, maxHeight:'342px'}}>
            <Box sx={{
                maxWidth: '399px', height: '100%', 
                width:'100%', display: 'flex', flexDirection: 'column',
                marginLeft:{lg:'128px'},
                alignItems:'flex-start'
            }}>
                <Box>
                    <Typography sx={{ typography:{xs:'h5',sm:'h4', lg:'h4'}, fontSize:'36px', fontWeight:'900', marginBottom:'16px', marginTop:'59px' }}>Helping your business go places, literally</Typography>
                </Box>
                <Box>
                    <Typography sx={{fontWeight:'400', maxHeight:'88px', marginBottom:{xs:'30px'}, justifyContent:{xs:'center', lg:'start'}}}>Provide reliable rides for the people who matter to your business. Whether it’s team members heading into work or traveling to client meetings, conferences or training sessions.

</Typography>
                </Box>
                <Box sx={{ maxWidth:'451px', maxHeight:'52px', display:'flex', justifyContent:{xs:'center',lg:'space-between'}, marginBottom: '39px', marginTop: '24px'}}>
                    <Button variant='contained' sx={{ 
                    backgroundColor:'#523BE4', borderRadius:'55rem', maxWidth:'207px', maxHeight:'48px', fontWeight:'650', textTransform:'none',
                    fontSize:'20px', alignItems:{xs:'flext-start'}, display:'flex', flexDirection:{xs:'column', lg:'row'}

                    }}>Get started today</Button>
                    <a style={{display:'flex', maxHeight:'44px', maxWidth:'201px', color:'black', fontWeight:'700', marginLeft:{lg:'130px'}}}>Explore solutions →</a>
                </Box>
            </Box>
        </Box>
  )
}

export default Text
