import React from 'react'
import image from '/src/assets/two.png';
import Box from '@mui/material/Box'
import { Typography } from '@mui/material';
import PositionedMenu from '../PositionedMenu';
import BasicSelect from '../LanguageAccordion';
import LanguageAccordion from '../LanguageAccordion';

const Lyft = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-start', width: { lg: '53px' }, paddingTop: '10px', backgroundColor: '#ffff' }}>
      <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
        <PositionedMenu />
      </Box>
      <Box sx={{ display: { xs: 'flex', lg: 'none' }, mt:{xs:'45px'}, width:'100%' }}>
        <LanguageAccordion />
      </Box>
    </Box>
  )
}

export default Lyft
