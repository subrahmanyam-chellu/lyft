import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Driver from './Driver.jsx'
import Rider from './Rider.jsx'
import Lyft from './Lyft.jsx'
import Lan from './Lan.jsx'
import Buttons from './Buttons'
import Terms from './terms.jsx'

const Banner = () => {
  return (
    <Box sx={{maxHeight:'502px', paddingX:{lg:'128px'}, paddingY:{xs:'80px', lg:'32px'}, backgroundColor:'#ffff', boxShadow: 'inset 0 40px 20px -10px rgba(0,0,0,0.08)'}}>
      <Stack direction={{ xs: 'column', sm:'row', lg: 'row' }}
        sx={{
          width: '100%', maxWidth: '1280px',
          display: 'flex', justifyContent: 'flex-start'
        }}>
        <Driver/>
        <Rider/>
        <Lyft/>
        <Buttons/>
        <Lan/>
      </Stack>
      <Terms/>
    </Box>
  )
}

export default Banner
