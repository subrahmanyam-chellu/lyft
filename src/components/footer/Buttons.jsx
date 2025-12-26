import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React from 'react'

const Buttons = () => {
    return (
        <Box sx={{width:{lg:'246px'}, display:'flex', flexDirection:'column', alignItems:{xs:'center', lg:'flex-start'}, backgroundColor:'#ffff'}}>
            <Box sx={{width:'137px', height:'32px', mb:'16px', paddingTop:{xs:'25px', lg:'40px'}, justifyContent:{xs:'center', lg:'flex-start'}}}>
                <Button variant='contained' sx={{width:{xs:'180px', lg:'137px'}, height:{lg:'52px'}, borderRadius:'55rem',
                backgroundColor:'#f4f4f4fA', fontSize:'11px', fontWeight:'700', color:'black', font:'proxima-nova'
            }}>Lyft driver app</Button>
            </Box>
            <Box sx={{width:'137px', height:'32px', paddingTop:{xs:'25px', lg:'60px'}, justifyContent:{xs:'center', lg:'flex-start'}}}>
                <Button variant='contained' sx={{width:{xs:'180px', lg:'137px'}, height:{lg:'52px'}, borderRadius:'55rem',
                backgroundColor:'#f4f4f4fA', fontSize:'11px', fontWeight:'700', color:'black', font:'proxima-nova'
            }}>Lyft rider app</Button>
            </Box>

        </Box>
    )
}

export default Buttons
