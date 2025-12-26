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
                    <Typography sx={{ typography:{xs:'h5',sm:'h4', lg:'h4'}, fontSize:'36px', fontWeight:'900', marginBottom:'16px', marginTop:'59px' }}>Shift into earnings mode</Typography>
                </Box>
                <Box>
                    <Typography sx={{fontWeight:'400', maxHeight:'88px', justifyContent:{xs:'center', lg:'start'}}}>With Lyft, you can be your own boss, set your own schedule, and drive when it makes sense for you. You keep 100% of your tips, and can cash out instantly whenever you want.</Typography>
                </Box>
                <Box sx={{ maxWidth:'451px', maxHeight:'52px', display:'flex', justifyContent:{xs:'center',lg:'space-between'}, marginBottom: '59px', marginTop: '24px'}}>
                    <Button variant='contained' sx={{ 
                    backgroundColor:'#523BE4', borderRadius:'55rem', width:'166px', height:'52px', fontWeight:'650', textTransform:'none',
                    fontSize:'20px', alignItems:{xs:'flext-start'}

                    }}>Apply to drive</Button>
                    <a style={{display:'flex', justifyContent:'flex-end', maxHeight:'44px', maxWidth:'201px', color:'black', fontWeight:'700', marginLeft:{lg:'130px'}}}>learn more about earnings →</a>
                </Box>
            </Box>
        </Box>
  )
}

export default Text
