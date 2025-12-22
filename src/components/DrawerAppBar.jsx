import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo1 from '/src/assets/lyftp.png';
import logo2 from '/src/assets/lyftb.png';
import { Height, MarginOutlined } from '@mui/icons-material';
import { useMediaQuery } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PositionedMenu from './PositionedMenu';
import BasicSelect from './BasicSelect';
import HeroSection from '/src/components/herosection/HeroSection.jsx';




//const drawerWidth = useWindowWidth();
const navItemsB = ['RIDER', 'DRIVER', 'BUSINESS', 'LOGIN', 'SIGN UP'];
const navItemsD = [{ name: 'RIDER', e1: 'Cities', e2: 'For Business', e3: 'Help', btn: 'Sign up to ride' }, { name: 'DRIVER', e1: 'Earnings', e2: 'Cities', e3: 'Help', btn: 'Apply to drive' }];
const navItemsDsingle = ['BUSINESS', 'LOGIN'];
const style = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: 'px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

function useWindowWidth() {
    const [width, setWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      // cleanup on unmount
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  }

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  const windowWidth=useWindowWidth();
  const drawerWidth=windowWidth;

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // const[logo, setLogo]=useStat({logo1});
  // const handleLogo=()=>{
  //   setLogo({logo}=={logo1}?{logo2}:{logo1})
  // }

  const drawer = (
    <Box sx={{ textAlign: 'center', overflow: 'auto', height: '100%'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box
            component="img"
            src={logo1}
            sx={{ height: '55px', marginLeft: '20px' }}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', marginRight: '20px' }}>
            <Button
              variant="outlined"
              sx={{
                borderRadius: '55rem',
                width: '115px',
                color: 'black',
                border: '1px solid black',
                height: '55px'
              }}
            >
              Log in
            </Button>
            <IconButton sx={{ color: 'black', height: '55px' }}>
              <CloseIcon onClick={handleDrawerToggle} sx={{ fontSize: '50' }} />
            </IconButton>
          </Box>
        </Box>
      </Typography>

      <List sx={style}>
        {navItemsD.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={item.name} />
            </ListItem>
            <ListItem>
              <ListItemText secondary={item.e1} />
            </ListItem>
            <ListItem>
              <ListItemText secondary={item.e2} />
            </ListItem>
            <ListItem>
              <ListItemText secondary={item.e3} />
            </ListItem>
            <ListItem>
              <ListItemText>
                <Button
                  variant="contained"
                  style={{
                    width: '200px',
                    height: '50px',
                    borderRadius: '50rem',
                    fontSize: '1rem',
                    backgroundColor: '#523BE4',
                  }}
                >
                  {item.btn}
                </Button>
              </ListItemText>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
      <List>
        {navItemsDsingle.map((item) => (
          <React.Fragment key={item}>
            <ListItem>
              <ListItemText primary={item} />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
      <BasicSelect></BasicSelect>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', height: '80px', border: '2px solid #c6c6cbff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', height: '80px' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Box component="img" src={logo1} sx={{ height: '55px', ml: { xs: '5px', sm: '5px', md: '5px', lg: '124px', xl: '126px' } }}></Box>
            {/* <img src={logo1} style={{ height: '55px' }} sx={{ marginLeft: { xs: 220, sm: 220, lg: 123, xl: 123 } }}></img> */}
          </Typography>
          <Button variant='contained' sx={{ fontWeight: { xs: '600', lg: '800' }, borderRadius: '55rem', marginRight: '15px', bgcolor: '#523BE4', height: { xs: '30px', sm: '45px', md: '50px', lg: '50px' }, width: { xs: '120px', lg: '135px' } }}>Get a ride</Button>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' } }}>
            {navItemsB.map((item) => (
              <Button key={item} sx={{ color: 'black', fontSize: '1rem', border: '1px solid #dddde3ff', borderRadius: 0, height: '80px', padding: '30px', fontWeight: 'bolder' }}>
                {item}
              </Button>
            ))}
            <PositionedMenu />

          </Box>
          <Box style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 0, display: { sm: 'block', md: 'block', lg: 'none', } }}
            >
              <MenuIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor='right'
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'flex', sm: 'flex' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width:drawerWidth},
          }}

        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main">
        <Toolbar sx={{height:'100%', width:'100%', margin:'80px'}}>
           <HeroSection/>
        </Toolbar>
      </Box> */}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
