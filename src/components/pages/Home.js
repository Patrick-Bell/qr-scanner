import { Box, Typography, Grid, Button, Card, CardContent, Divider, TextField } from "@mui/material";
import Navbar from "../navbar/Navbar";
import '../../App.css'
import Image from "../assets/barcode-hero.png";
import SendIcon from '@mui/icons-material/Send';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import QrCodeIcon from '@mui/icons-material/QrCode';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ReviewsSection from "./Reviews";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";


const Home = () => {

  const navigate = useNavigate()


  return (
    <>
      <Box sx={{ position: "relative" }}>
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Box
          sx={{
            background: "#f9f9f9",
            borderRadius: "20px",
            margin: "0 30px",
            padding: "40px 20px",
            position: "relative",
            zIndex: 100,
          }}
        >
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {/* Text Section */}
            <Grid item xs={12} md={6} textAlign="center">
              <Typography fontWeight={800} fontSize={{ xs: 30, md: 50 }} fontFamily="Archivo Black">
                SCAN. SAVE. CONNECT.
              </Typography>
              <Typography
                color="grey"
                fontWeight={800}
                fontSize={{ xs: 16, md: 20 }}
                fontFamily="Archivo Black"
                sx={{ mt: 2 }}
              >
                Create QR Codes for your websites, apps, and products OR create QR Vcards!
              </Typography>



              <Box sx={{ mt: 3, display:'flex', alignContent:'center', justifyContent:'center', }}>
                <Button endIcon={<LibraryBooksIcon />} variant="contained" sx={{ mr: 2 }}>
                  Learn More
                </Button>
                <Button endIcon={<SendIcon />} variant="outlined">
                  Get Started
                </Button>
              </Box>


              
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} md={6} display="flex" justifyContent="center">
              <img src={Image} style={{ maxWidth: "100%", height: "auto" }} alt="QR Code Hero" />
            </Grid>
          </Grid>
        </Box>

        {/* Features Section */}
        <Box
          sx={{
            background: "#f9f9f9",
            borderRadius: "20px",
            margin: "30px",
            padding: "40px 20px",
            position: "relative",
            zIndex: 100,

          }}
        >
          <Typography textAlign={'center'} fontWeight={800} fontSize={{ xs: 30, md: 40 }} fontFamily="Archivo Black">
            FEATURES
          </Typography>
          <Typography textAlign={'center'} color="grey" fontSize={{ xs: 16, md: 18 }} sx={{ mt: 2, mb: 4 }}>
            Explore the powerful tools that make our QR Code Generator stand out.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* Feature 1 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ padding: "20px", textAlign: "center", boxShadow: 3 }}>
                <QrCodeIcon sx={{ fontSize: 50, color: "#5271FF" }} />
                <CardContent>
                  <Typography fontWeight={700} fontSize={20}>
                    Dynamic QR Codes
                  </Typography>
                  <Typography color="grey" fontSize={14}>
                    Update the destination link without reprinting your QR Code.
                  </Typography>
                </CardContent>
                <Button onClick={() => navigate('/web')} fullWidth variant="contained">Build your own</Button>
              </Card>
            </Grid>

            {/* Feature 2 */}
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ padding: "20px", textAlign: "center", boxShadow: 3 }}>
                <ContactMailIcon sx={{ fontSize: 50, color: "#5271FF" }} />
                <CardContent>
                  <Typography fontWeight={700} fontSize={20}>
                    QR Vcards
                  </Typography>
                  <Typography color="grey" fontSize={14}>
                    Easily share contact details with a single scan and save to your contacts.
                  </Typography>
                </CardContent>
                <Button onClick={() => navigate('/web')} fullWidth variant="contained">Build your own</Button>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ padding: "20px", textAlign: "center", boxShadow: 3 }}>
      <SendIcon sx={{ fontSize: 50, color: "#5271FF" }} />
      <CardContent>
        <Typography fontWeight={700} fontSize={20}>
          Social Media QR Codes
        </Typography>
        <Typography color="grey" fontSize={14}>
          Instantly link users to your Instagram, LinkedIn, or Twitter.
        </Typography>
      </CardContent>
      <Button onClick={() => navigate('/web')} fullWidth variant="contained">Build your own</Button>
    </Card>
  </Grid>
          </Grid>
        </Box>
      </Box>

      <ReviewsSection />

  
          <Footer />
  
    </>
  );
};

export default Home;
