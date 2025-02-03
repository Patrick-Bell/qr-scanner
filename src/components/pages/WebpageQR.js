import React, { useState } from "react";
import { Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Grid, Typography, Button, TextField, Divider, LinearProgress } from "@mui/material";
import Navbar from "../navbar/Navbar";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import QRCode from "react-qr-code"; // To generate QR code
import CheckIcon from '@mui/icons-material/Check';
import { webUseCase } from "../api/UseCases";

const WebpageQR = () => {
  const [webpage, setWebpage] = useState(""); // Stores input but doesn't update QR code
  const [qrData, setQrData] = useState(""); // Stores data for QR code generation
  const [qrColor, setQRColor] = useState("black"); // Default QR color
  const [qrSize, setQrSize] = useState(256); // Default QR size
  const [value, setValue] = useState(0); // Tabs for customization
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false); // Track QR generation
  const [progress, setProgress] = useState(0); // Progress bar state

  const isValidURL = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)" + // Protocol (http or https)
      "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|" + // Domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IPv4 Address
      "(\\:\\d+)?(\\/[-a-zA-Z\\d%@_.~+&:]*)*" + // Port and Path
      "(\\?[;&a-zA-Z\\d%@_.,~+&:=-]*)?" + // Query String
      "(\\#[-a-zA-Z\\d_]*)?$", // Fragment Locator
      "i"
    );
    return pattern.test(url);
  };

  const handleGenerateQR = () => {
    let newErrors = {};

    if (!webpage) {
      newErrors.webpage = "URL cannot be empty";
    } else if (!isValidURL(webpage)) {
      newErrors.webpage = "Invalid URL. Please enter a valid webpage link.";
    }

    if (!qrSize) {
      newErrors.size = "Size cannot be empty";
    } else if (qrSize < 100 || qrSize > 400) {
      newErrors.size = "Size must be between 100 and 400";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setProgress(0);

    let timer = 0;
    const interval = setInterval(() => {
      timer += 1;
      setProgress((prev) => prev + 10); // Increase by 10% each second
      if (timer === 10) {
        clearInterval(interval);
        setLoading(false);
        setQrData(webpage);
      }
    }, 1000);
  };
  
  


  return (
    <>
        <Grid container sx={{ marginTop: '30px' }}>
          {/* Left Section - User Input */}
          <Grid item xs={12} md={6} sx={{ height: 'auto', padding: '20px', borderRadius: '20px', background: 'white' }}>
            <Typography variant="h6" fontWeight={800} mb={2}>Steps to Generate Your QR Code:</Typography>

            <List>
              {/* Step 1: Enter Webpage */}
              <ListItem>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '25px', height: '25px', backgroundColor: '#5271FF', color: 'white', borderRadius: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                    <Typography variant="body2">1</Typography>
                  </Box>
                  <ListItemText primary="Enter your webpage URL" />
                </Box>
              </ListItem>
              <TextField
                disabled={qrData || loading}
                placeholder="https://www.example.com"
                sx={{ marginTop: 1, width: '75%' }}
                error={!!errors.webpage}
                helperText={errors.webpage}
                onChange={(e) => setWebpage(e.target.value)}
              />
              <Divider sx={{ p: 2 }} />

              {/* Step 2: Customize QR Code */}
              <ListItem>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                  <Box sx={{ width: '25px', height: '25px', backgroundColor: '#5271FF', color: 'white', borderRadius: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                    <Typography variant="body2">2</Typography>
                  </Box>
                  <ListItemText primary="Customize your QR Code" />
                </Box>
              </ListItem>

              <Box sx={{ display: 'flex' }}>
                <Button disabled={qrData || loading} onClick={() => setValue(0)} variant={value === 0 ? 'outlined' : ''}>Color</Button>
                <Button disabled={qrData || loading} onClick={() => setValue(1)} variant={value === 1 ? 'outlined' : ''} sx={{ marginLeft: '5px' }}>Size</Button>
              </Box>

              {value === 0 && (
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  {["black", "red", "blue", "green", "grey"].map((color) => (
                    <Button
                      disabled={qrData || loading}
                      key={color}
                      onClick={() => setQRColor(color)}
                      sx={{
                        minWidth: "30px",
                        height: "30px",
                        border: color === qrColor ? '3px solid black' : '',
                        backgroundColor: color,
                        borderRadius: "20%",
                        "&:hover": { opacity: 0.7 }
                      }}
                    />
                  ))}
                </Box>
              )}

              {value === 1 && (
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                  <Typography>Size:</Typography>
                  <TextField
                    disabled={qrData || loading}
                    type="number"
                    sx={{ marginLeft: '5px', width: '200px' }}
                    size="small"
                    defaultValue={qrSize}
                    onChange={(e) => setQrSize(Number(e.target.value))}
                    helperText={errors.size}
                    error={!!errors.size}
                  />
                </Box>
              )}

              <Divider sx={{ p: 2 }} />

              <ListItem>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop:'20px' }}>
                  <Box sx={{ width: '25px', height: '25px', backgroundColor: '#5271FF', color: 'white', borderRadius: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                    <Typography variant="body2">3</Typography>
                  </Box>
                  <ListItemText primary="Submit your QR Code" />
                </Box>
              </ListItem>

              {/* Generate Button */}
              {!qrData ? (
                <Button
                disabled={loading}
                variant="contained"
                onClick={handleGenerateQR}
                sx={{ marginTop: '20px' }}
              >
                Generate QR Code
              </Button>
              ):(
                <Typography sx={{marginTop:'10px'}} fontWeight={800} color="grey">Your QR Code has been generated.</Typography>
              )}
            </List>
          </Grid>

          {/* Right Section - QR Code Display */}
          <Grid item xs={12} md={6} sx={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '20px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              {qrData && (
                <>
                <Typography>Your QR Code</Typography>
                <Divider sx={{m:2, width:'100%'}} />
                <QRCode
                  id="qr-code-canvas"
                  fgColor={qrColor} // Color selection
                  value={qrData} // Generated QR Data
                  size={qrSize} // Custom size
                />
                <Box sx={{height:'50px', width:'256px', background:'#5271FF', marginTop:'5px', display:'flex', alignItems:'center', textAlign:'center'}}>
                    <Typography fontWeight={800} sx={{color:'white', margin:'auto auto'}}>SCAN ME</Typography>
                </Box>
                <Divider sx={{m:2, width:'100%'}} />
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Button variant="contained" sx={{ margin: '0 10px' }}>Download</Button>
                <Button variant="contained" sx={{ margin: '0 10px' }}>Print</Button>
                <Button variant="contained" sx={{ margin: '0 10px' }}>Save</Button>
              </Box>
              </>
              )}

            {loading && (
              <>
                <Typography sx={{ marginTop: '10px', color: "gray", fontWeight: 700 }}>Building QR Code...</Typography>
                <LinearProgress variant="determinate" value={progress} sx={{ width: "75%", marginTop: "10px" }} />
              </>
            )}      

            {!qrData && !loading && (
              <>
                <Typography>Your QR Code will be generated here.</Typography>
                <Box sx={{mt:5}}>
                <Typography textAlign={'center'} fontWeight={800} >Use Cases:</Typography>
  
                <List>
                  {webUseCase.map((useCase, i) => (
                    <ListItem key={i}>
                    <ListItemAvatar>
                      <Avatar sx={{ borderRadius: '10px', border: '1px solid lightgrey', background: 'white', color: 'grey' }}>
                        <CheckIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={useCase.case} secondary={useCase.desc}  />
                    </ListItem>
                  ))}
                </List>
          
                </Box>
              </>
            )}        
            
            </Box>
          </Grid>
        </Grid>
    </>
  );
};

export default WebpageQR;
