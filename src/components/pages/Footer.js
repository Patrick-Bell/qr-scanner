import { Box, Typography, Grid, TextField, IconButton, Divider } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import Logo from '../assets/qr-logo.png'

const Footer = () => {

  return (
    <Box
      sx={{
        background: "#5271FF",
        borderRadius: "20px",
        margin: "30px",
        padding: "40px 20px",
        position: "relative",
        zIndex: 1,
        overflow: 'hidden',
      }}
    >

      {/* Footer Content */}
      <Grid sx={{ width: '75%', margin: 'auto' }} container spacing={3}>
        {/* Product Section */}
        <Grid item xs={12} md={3}>
          <Typography fontWeight={800} sx={{ textTransform: 'uppercase', color: 'white' }}>Product</Typography>
          <Typography color="white">All Scanners</Typography>
          <Typography color="white">Web Scanners</Typography>
          <Typography color="white">vCard Scanners</Typography>
          <Typography color="white">Email Scanners</Typography>
        </Grid>

        {/* Information Section */}
        <Grid item xs={12} md={3}>
          <Typography fontWeight={800} sx={{ textTransform: 'uppercase', color: 'white' }}>Information</Typography>
          <Typography color="white">FAQ</Typography>
          <Typography color="white">Blog</Typography>
          <Typography color="white">Support</Typography>
        </Grid>

        {/* Company Section */}
        <Grid item xs={12} md={3}>
          <Typography fontWeight={800} sx={{ textTransform: 'uppercase', color: 'white' }}>Company</Typography>
          <Typography color="white">About Us</Typography>
          <Typography color="white">Careers</Typography>
          <Typography color="white">Contact Us</Typography>
          <Typography color="white">Connect</Typography>
        </Grid>

        {/* Subscribe Section */}
        <Grid item xs={12} md={3}>
          <Box sx={{
            borderRadius: '20px',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            boxShadow: 3,
          }}>
            <Typography fontWeight={800} sx={{ mb: 2 }}>Subscribe</Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              fullWidth
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SendIcon />
                  </IconButton>
                ),
              }}
            />
            <Typography variant="caption" sx={{ display: 'block', marginTop: '10px' }}>
              QRLite is your go-to solution for QR Code generation.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />

      {/* Footer Bottom Section */}
      <Grid sx={{ width: '75%', margin: 'auto auto', alignItems: 'center' }} container spacing={2}>
        {/* Logo Section */}
        <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={Logo} style={{ height: '100px', borderRadius: '20px', background:'white' }} alt="QR Lite Logo" />
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Typography color="white">Terms</Typography>
            <Typography color="white">Privacy</Typography>
            <Typography color="white">Cookies</Typography>
          </Box>
        </Grid>

        {/* Social Icons Section */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <IconButton sx={{ color: 'white' }}><Facebook /></IconButton>
            <IconButton sx={{ color: 'white' }}><Instagram /></IconButton>
            <IconButton sx={{ color: 'white' }}><LinkedIn /></IconButton>
            <IconButton sx={{ color: 'white' }}><Twitter /></IconButton>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2 }} />
        <Typography variant="caption" sx={{display:'flex', alignItems:'center', justifyContent:'center', color:'white'}}>© QRLite 2025</Typography>

    </Box>
  );
};

export default Footer;
