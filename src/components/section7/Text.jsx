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
                    <Typography sx={{ typography:{xs:'h5',sm:'h4', lg:'h4'}, fontSize:'36px', fontWeight:'900', marginBottom:'16px', marginTop:'59px' }}>Making rides more accessible</Typography>
                </Box>
                <Box>
                    <Typography sx={{fontWeight:'400', maxHeight:'88px', marginBottom:{xs:'40px'}, justifyContent:{xs:'center', lg:'start'}}}>A ride is more than just transportation: It’s access to job opportunities, community events, and essentials like groceries and healthcare. Lyft Up makes rides more accessible, bringing communities closer.</Typography>
                </Box>
                <Box sx={{ maxWidth:'451px', maxHeight:'52px', display:'flex', justifyContent:{xs:'center',lg:'flex-start'}, marginBottom: '59px', marginTop: '24px'}}>
                    {/* <Button variant='contained' sx={{ 
                    backgroundColor:'#523BE4', borderRadius:'55rem', maxWidth:'166px', maxHeight:'52px', fontWeight:'650', textTransform:'none',
                    fontSize:'20px', alignItems:{xs:'flext-start'}

                    }}>Apply to drive</Button> */}
                    <a style={{maxHeight:'48px', maxWidth:'311px', color:'black', fontWeight:'700', marginLeft:{lg:'130px'}, marginTop:{lg:'24px'}}}>learn more about Lyft Up program →</a>
                </Box>
            </Box>
        </Box>
  )
}

export default Text
