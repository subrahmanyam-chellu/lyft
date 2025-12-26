import React from 'react'
import image from '/src/assets/two.png';
import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const details = ['Became a Driver', 'New Driver Guide', 'Earnings', 'Cities', 'Help', 'Safety', 'Applicaton Requiremens',
  'Express Drive', 'Bonus', 'Lyft Rewards', 'Go Electric', 'Insurance', 'Black Car Fleets', 'Driver Blog', 'Beta Program'
]

const Driver = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Accordion
      expanded={isLarge ? true : undefined} // force open on lg
      // expanded={true}
      defaultExpanded={isLarge}            // normal behavior on small screens
      sx={{
        width:{xs:'100%', lg:'246px'},
        boxShadow: isLarge ? 'none' : undefined,
        backgroundColor:'#ffff',
        '&:before': { display: 'none' }, 
        paddingTop:'16px',
        marginBottom:{lg:'25px'},// remove divider line
        textAlign:'start'
      }}
    >
      <AccordionSummary
        expandIcon={isLarge ? null : <ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          cursor: isLarge ? 'default' : 'pointer',
          minHeight: isLarge ? 'auto' : undefined,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          DRIVER
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: isLarge ? 0 : 4 }}>
        {details.map((detail) => (
          <Typography key={detail} sx={{marginBottom:'8px'}}>{detail}</Typography>
        ))}
      </AccordionDetails>
    </Accordion>

  );

}

export default Driver
