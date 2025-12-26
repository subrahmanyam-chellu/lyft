import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function LanguageAccordion() {
  return (
    <Accordion sx={{ width: '100%' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="language-content"
        id="language-header"
      >
        <Typography>🌐 EN</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{marginBottom:{xs:'5px', lg:'8px'}}}>English (US)</Typography>
        <Typography sx={{marginBottom:{xs:'5px', lg:'8px'}}}>Español (Estados Unidos)</Typography>
        <Typography sx={{marginBottom:{xs:'5px', lg:'8px'}}}>Français (Canada)</Typography>
        <Typography sx={{marginBottom:{xs:'5px', lg:'8px'}}}>Português (Brasil)</Typography>
      </AccordionDetails>
    </Accordion>
  );
}