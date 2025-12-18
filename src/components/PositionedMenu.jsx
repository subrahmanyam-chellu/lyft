import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { heIL } from '@mui/material/locale';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{fontWeight:'bolder', fontSize:'1rem', color:'black', justifyContent:'flex-start', height:'80px', width:'130px'}}
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        🌐 EN
      </Button>
      <Menu
        top="50px"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        <MenuItem  onClick={handleClose} sx={{border:'2px solid black',selected:true}}>English</MenuItem>
        <MenuItem onClick={handleClose} sx={{border:'2px solid black'}}>Espanol(Estados Unidos)</MenuItem>
        <MenuItem onClick={handleClose} sx={{border:'2px solid black'}}>Francias(Canada)</MenuItem>
        <MenuItem onClick={handleClose} sx={{border:'2px solid black'}}>Portugues(Brasil)</MenuItem>
      </Menu>
    </div>
  );
}
