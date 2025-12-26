import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react'

const Text = () => {
  return (
    
    <Box sx={{display:'flex', justifyContent:{lg:'flex-start'}, marginRight:{xs:'0px', lg:'16px'}, marginTop:{xs:'0px', lg:'39px'}, maxHeight:'342px'}}>
            <Box sx={{
                maxWidth: '399px', height: '100%', 
                width:'100%', display: 'flex', flexDirection: 'column',
                marginLeft:{lg:'128px'},
                alignItems:'flex-start'
            }}>
                <Box>
                    <Typography sx={{ typography:{xs:'h5',sm:'h4', lg:'h4'}, fontSize:'36px', fontWeight:'900', marginBottom:'16px', marginTop:'33px' }}>Safety never takes a backseat</Typography>
                </Box>
                <Box>
                    <Typography sx={{fontWeight:'400', maxHeight:'88px', marginBottom:{xs:'30px'}, justifyContent:{xs:'center', lg:'start'}}}>We want to level up every single ride—and it starts with safety. With always-on protection from before you ride and customizable tools for added peace of mind, we’re a community built on putting safety first.</Typography>
                </Box>
                <Box sx={{ maxWidth:'451px', maxHeight:'52px', display:'flex', justifyContent:{xs:'center',lg:'space-between'}, marginBottom: '59px', marginTop: '24px'}}>
                    <Button variant='contained' sx={{ 
                    backgroundColor:'#523BE4', borderRadius:'55rem', maxWidth:'152px', maxHeight:'48px', fontWeight:'650', textTransform:'none',
                    fontSize:'20px', alignItems:{xs:'flext-start'}

                    }}>Learn more</Button>
                    <a style={{maxHeight:'48px', maxWidth:'188px', color:'black', fontWeight:'700', marginLeft:{lg:'130px'}}}>Community gudielines →</a>
                </Box>
            </Box>
        </Box>
  )
}

export default Text
