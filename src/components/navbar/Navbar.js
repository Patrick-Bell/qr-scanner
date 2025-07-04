import { useState } from "react";
import { Box, Button, Menu, MenuItem, List, ListItem, ListItemAvatar, ListItemText, Avatar, Grid } from "@mui/material"
import Logo from '../assets/qr-logo.png'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { useNavigate } from "react-router-dom";
 
  const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (

    <>
    <Box sx={{margin:'30px', maxWidth:'100%',  position: "relative", borderRadius:'20px'}}>

    <Box 
  sx={{
    position: 'absolute', 
    top: -150,  // Move it further up
    right: -100, // Move it further right
    height: '600px', 
    width: '700px', 
    borderRadius: '50%', 
    background: '#5271FF',  
    overflow: 'hidden',
    zIndex:0
  }} 
/>

      

   

      <Box sx={{background:'#f9f9f9f9', display:'flex', alignItems:'center', justifyContent:'space-between', borderRadius:'20px', position:'relative', zIndex:10}}>
        


      <img onClick={() => navigate('/')} src={Logo} style={{height:'75px', marginLeft:'30px',}} />

      <Box>
      <Button onClick={handleClick} endIcon={<ArrowUpwardIcon sx={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }} />}>Scanners</Button>

        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center', // Center the menu horizontally
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center', // Align the menu to the center of its own width
        }}
      >
        <List sx={{ p:1 }}>
        <Grid container maxWidth={700}>
        <Grid item xs={12} sm={6}>
              <ListItem onClick={() => navigate('/web')} sx={{ borderRadius: '10px', mb: 1, "&:hover": { background:'#729BFF', cursor:'pointer'}}}>
                <ListItemAvatar>
                  <Avatar sx={{ borderRadius: '10px', border:'1px solid lightgrey', background:'white', color:'black' }}>
                    <QrCodeScannerIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={'Webpage Scanner'}
                  secondary={'Generates a QR Code that will direct users to another webpage webpage'}
                  sx={{ color: 'black', '& .MuiListItemText-secondary': { color: 'black' } }}
                />
              </ListItem>
            </Grid>
            <Grid item xs={12} sm={6}>
            <ListItem onClick={() => navigate('/web')} sx={{ borderRadius: '10px', mb: 1, "&:hover": { background:'#729BFF', cursor:'pointer'}}}>
            <ListItemAvatar>
                  <Avatar sx={{ borderRadius: '10px', border:'1px solid lightgrey', background:'white', color:'black', }}>
                    <QrCodeScannerIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={'vCard Scanner'}
                  secondary={'Generates a QR Code that will add a contact to your contact list'}
                  sx={{ color: 'black', '& .MuiListItemText-secondary': { color: 'black' } }}
                />
              </ListItem>
              </Grid>
              <Grid item xs={12} sm={6}>
              <ListItem onClick={() => navigate('/web')} sx={{ borderRadius: '10px', mb: 1, "&:hover": { background:'#729BFF', cursor:'pointer'}}}>
                <ListItemAvatar>
                  <Avatar sx={{ borderRadius: '10px', border:'1px solid lightgrey', background:'white', color:'black' }}>
                    <QrCodeScannerIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={'Email Scanner'}
                  secondary={'Generates a QR Code that will automatically fill out an email'}
                  sx={{ color: 'black', '& .MuiListItemText-secondary': { color: 'black' } }}
                />
              </ListItem>
              </Grid>
              <Grid item xs={12} sm={6}>
              <ListItem onClick={() => navigate('/web')} sx={{ borderRadius: '10px', mb: 1, "&:hover": { background:'#729BFF', cursor:'pointer'}}}>
                <ListItemAvatar>
                  <Avatar sx={{ borderRadius: '10px', border:'1px solid lightgrey', background:'white', color:'black', }}>
                    <QrCodeScannerIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={'More Scanners'}
                  secondary={'We are currently building more scanners that can be used soon!'}
                  sx={{ color: 'black', '& .MuiListItemText-secondary': { color: 'black' } }}
                />
              </ListItem>
              </Grid>
              </Grid>
            </List>
      </Menu>

      </Box>

      <Box sx={{marginRight:'30px'}}>
        <Button variant="contained">Login</Button>
      </Box>

      </Box>
      </Box>
    </>
  )
}


export default Navbar