import Navbar from "../navbar/Navbar"
import { Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Grid, Typography, Button, TextField, Divider, LinearProgress } from "@mui/material";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import WebpageQR from "./WebpageQR";
import VCardPage from "./vCardPage";
import { useState } from "react";
import EmailPage from "./EmailPage";
import ComingSoon from "./ComingSoon";
import Footer from "./Footer";


const QrPage = () => {

    const [activeSection, setActiveSection] = useState(0)



    const renderSection = () => {
        switch (activeSection) {
            case 0:
                return <WebpageQR />
            case 1:
                return <VCardPage />        
            case 2:
                return <EmailPage />;
            case 3:
                return <ComingSoon />
        }
    }

    return (


        <>
        <Navbar />
        <Box sx={{ background: "#f9f9f9", borderRadius: "20px", margin: "0 30px", padding: "40px 20px", position: "relative", zIndex: 100 }}>

        <Box sx={{ background: 'white', borderRadius: '20px', display: 'flex', overflow: 'scroll', gap:'10px' }}>
          <List>
            <ListItem onClick={() => setActiveSection(0)} sx={{ background: activeSection === 0 ? '#5271FF' : '', borderRadius: '10px', margin: '10px', mb: 1, "&:hover": { background: '#729BFF', cursor: 'pointer' } }}>
              <ListItemAvatar>
                <Avatar sx={{ borderRadius: '10px', border: '1px solid lightgrey', background: 'white', color: 'grey' }}>
                  <QrCodeScannerIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={'Website'} sx={{ color: activeSection === 0 ? 'white' : 'grey' }} />
            </ListItem>
          </List>
          <List>
            <ListItem onClick={() => setActiveSection(1)} sx={{ background: activeSection === 1 ? '#5271FF' : '', borderRadius: '10px', margin: '10px', mb: 1, "&:hover": { background: '#729BFF', cursor: 'pointer' } }}>
              <ListItemAvatar>
                <Avatar sx={{ borderRadius: '10px', border: '1px solid lightgrey', background: 'white', color: 'grey' }}>
                  <QrCodeScannerIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={'vCard'} sx={{ color: activeSection === 1 ? 'white' : 'grey' }}  />
            </ListItem>
          </List>
          <List>
            <ListItem onClick={() => setActiveSection(2)} sx={{ background: activeSection === 2 ? '#5271FF' : '', borderRadius: '10px', margin: '10px', mb: 1, "&:hover": { background: '#729BFF', cursor: 'pointer' } }}>
              <ListItemAvatar>
                <Avatar sx={{ borderRadius: '10px', border: '1px solid lightgrey', background: 'white', color: 'grey' }}>
                  <QrCodeScannerIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={'Email'} sx={{ color: activeSection === 2 ? 'white' : 'grey' }}  />
            </ListItem>
          </List>
          <List>
            <ListItem onClick={() => setActiveSection(3)} sx={{ background: activeSection === 3 ? '#5271FF' : '', borderRadius: '10px', margin: '10px', mb: 1, "&:hover": { background: '#729BFF', cursor: 'pointer' } }}>
              <ListItemAvatar>
                <Avatar sx={{ borderRadius: '10px', border: '1px solid lightgrey', background: 'white', color: 'grey' }}>
                  <QrCodeScannerIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={'More...'} sx={{ color: activeSection === 3 ? 'white' : 'grey' }}  />
            </ListItem>
          </List>
        </Box>




        {renderSection()}




        </Box>    

        <Footer />      

        
        
        </>
    )
}

export default QrPage