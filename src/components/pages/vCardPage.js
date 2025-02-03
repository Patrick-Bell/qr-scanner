import { useState } from "react";
import Navbar from "../navbar/Navbar"
import { Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Grid, Typography, Button, TextField, Divider, LinearProgress , IconButton} from "@mui/material";
import QRCode from "react-qr-code"; // To ge
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Delete from "@mui/icons-material/Delete";
import ReactCardFlip from 'react-card-flip';
import { vCardUseCase } from "../api/UseCases";
import CheckIcon from '@mui/icons-material/Check';



const VCardPage = () => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [job, setJob] = useState("")

    const [image, setImage] = useState(null)

    const [webpage, setWebPage] = useState("")


  const [vCard, setVcard] = useState(null); // Stores data for QR code generation
  const [qrColor, setQRColor] = useState("black"); // Default QR color
  const [qrSize, setQrSize] = useState(256); // Default QR size
  const [value, setValue] = useState(0); // Tabs for customization
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false); // Track QR generation
  const [progress, setProgress] = useState(0); // Progress bar state

  const [isFlipped, setIsFlipped] = useState(false);

  // Function to handle the card flip
  const handleCardClick = () => {
    setIsFlipped(!isFlipped); // Toggle flip state
  };

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

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'First Name is required';
    if (!lastName) newErrors.lastName = 'Last Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!number) newErrors.number = 'Number is required';

    if (!webpage) {
      newErrors.webpage = "URL cannot be empty";
    } else if (!isValidURL(webpage)) {
      newErrors.webpage = "Invalid URL. Please enter a valid webpage link.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleGenerateQR = () => {

    if (!validateForm()) {
      return
    }

    setErrors({});
    setLoading(true);
    setProgress(0);

    const vCardData = `BEGIN:VCARD\r\nVERSION:3.0\r\nFN:${name} ${lastName}\r\nN:${lastName};${name};;;\r\nTEL:${number}\r\nEMAIL:${email}\r\nTITLE:${job}\r\nURL:${webpage}\r\nEND:VCARD`;
  
    let timer = 0;
    const interval = setInterval(() => {
      timer += 1;
      setProgress((prev) => prev + 10); // Increase by 10% each second
      if (timer === 10) {
        clearInterval(interval);
        setLoading(false);
        setVcard(vCardData);
      }
    }, 1000);
  };
  
  

  


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file); // Convert to Base64 URL
    }
  };

  const handleDeleteImage = () => {
    setImage(null)
  }

    return  (

        <>

            <Grid container sx={{ marginTop: '30px' }}>

            <Grid item xs={12} md={6} sx={{ height: 'auto', padding: '20px', borderRadius: '20px', background: 'white', maxHeight:'500px', overflow:'scroll' }}>
            <Typography variant="h6" fontWeight={800} mb={2}>Steps to Generate Your vCard:</Typography>

            <List>
              {/* Step 1: Enter Webpage */}
              <ListItem>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ width: '25px', height: '25px', backgroundColor: '#5271FF', color: 'white', borderRadius: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                    <Typography variant="body2">1</Typography>
                  </Box>
                  <ListItemText primary="Fill out the form" />
                </Box>
              </ListItem>

              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <TextField
              sx={{width:'100%'}}
                disabled={vCard || loading}
                placeholder="John"
                label="First Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                error={errors.name}
                helperText={errors.name}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                sx={{width:'100%'}}
                disabled={vCard || loading}
                placeholder="Doe"
                type="text"
                label="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                error={errors.lastName}
                helperText={errors.lastName}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
              sx={{width:'100%'}}
                disabled={vCard || loading}
                placeholder="johndoe@gmail.com"
                label="Email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                error={errors.email}
                helperText={errors.email}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                sx={{width:'100%'}}
                disabled={vCard || loading}
                placeholder="07000000000"
                label="Number"
                onChange={(e) => setNumber(e.target.value)}
                value={number}
                error={errors.number}
                helperText={errors.number}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField
                sx={{width:'100%'}}
                disabled={vCard || loading}
                placeholder="Software Engineer"
                onChange={(e) => setJob(e.target.value)}
                label="Job"
                error={errors.job}
                helperText={errors.job}
              />
              </Grid>

              </Grid>


              <Divider sx={{ p: 2 }} />



              <ListItem>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                  <Box sx={{ width: '25px', height: '25px', backgroundColor: '#5271FF', color: 'white', borderRadius: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                    <Typography variant="body2">2</Typography>
                  </Box>
                  <ListItemText primary="Your Logo" />
                </Box>
              </ListItem>
        
        {!image ? (
             <Button
             component="label"
             variant="contained"
             disabled={vCard || loading}
             sx={{
               mt: 2,
               backgroundColor: "#5271FF",
               color: "white",
               "&:hover": { backgroundColor: "#405ec7" },
               display: "flex",
               alignItems: "center",
               gap: 1,
               px: 3,
               py: 1.5,
               borderRadius: "8px",
             }}
           >
             <CloudUploadIcon />
             Choose File
             <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
           </Button>
        ):(
            <Box sx={{ mt: 3, position: "relative", display: "inline-block" }}>
          {/* Delete Button */}
          <IconButton
            onClick={handleDeleteImage}
            disabled={vCard || loading}
            sx={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              background: "white",
              borderRadius: "50%",
              boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
              "&:hover": { backgroundColor: "#ff4d4d", color: "white" },
            }}
          >
            <Delete />
          </IconButton>

          {/* Image */}
          <img
            src={image}
            alt="Uploaded"
            style={{
              width: "150px",
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          />
        </Box>
        )}
    

              <Divider sx={{ p: 2 }} />





              {/* Step 2: Customize QR Code */}
              <ListItem>
                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                  <Box sx={{ width: '25px', height: '25px', backgroundColor: '#5271FF', color: 'white', borderRadius: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 2 }}>
                    <Typography variant="body2">3</Typography>
                  </Box>
                  <ListItemText primary="Customize your QR Code" />
                </Box>
              </ListItem>

              <Box sx={{ display: 'flex' }}>
              <Button disabled={vCard || loading} onClick={() => setValue(0)} variant={value === 0 ? 'outlined' : ''}>Webpage URL</Button>
                <Button disabled={vCard || loading} onClick={() => setValue(1)} variant={value === 1 ? 'outlined' : ''}>Color</Button>
                <Button disabled={vCard || loading} onClick={() => setValue(2)} variant={value === 2 ? 'outlined' : ''} sx={{ marginLeft: '5px' }}>Size</Button>
              </Box>

              {value === 0 && (
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                  <TextField
                    type="text"
                    disabled={vCard || loading}
                    sx={{ marginLeft: '5px', width: '100%' }}
                    placeholder="https://www.google.com"
                    onChange={(e) => setWebPage(e.target.value)}
                    error={errors.webpage}
                    label='Webpage URL'
                    helperText={errors.webpage}
                  />
                </Box>
              )}

              {value === 1 && (
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  {["black", "red", "blue", "green", "grey"].map((color) => (
                    <Button
                      disabled={vCard || loading}
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

              {value === 2 && (
                <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
                  <Typography>Size:</Typography>
                  <TextField
                    disabled
                    type="number"
                    sx={{ marginLeft: '5px', width: 'auto' }}
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
                    <Typography variant="body2">4</Typography>
                  </Box>
                  <ListItemText primary="Submit your QR Code" />
                </Box>
              </ListItem>

              {/* Generate Button */}

              {!vCard ? (
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



    <Grid item xs={12} md={6} sx={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '20px', position:'relative' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
    {vCard && (
      <>
        <Typography sx={{ textAlign: 'center', fontWeight: 600, mb: 2 }}>Your QR Code</Typography>

        {/* Divider for separation */}
        <Divider sx={{m:2, width:'100%'}} />


        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <Box 
  onClick={handleCardClick} 
  sx={{ 
    minWidth: '350px', 
    height: '300px', 
    background: 'white', 
    borderRadius: '20px', 
    position: 'relative', 
    zIndex: 10,
    overflow: 'hidden' // Ensures nothing leaks outside the border-radius
  }}
>
  <List>
    <ListItem sx={{ borderRadius: '10px', margin: '10px', mb: 1 }}>
      <ListItemText primary={`${name} ${lastName}`} secondary={job} sx={{ color: 'black' }} />
    </ListItem>
  </List>

  {/* Profile Image */}
  {image && (
 <img 
 src={image} 
 style={{
   height: '100px', 
   width: '100px', 
   top: 0, 
   right: 0, 
   position: 'absolute', 
   padding: '8px', 
   borderRadius: '20px'
 }} 
/>
  )}
 

  {/* Contact Info */}
  <Box sx={{ display: 'block', alignItems: 'center', marginLeft: 4, borderLeft: '5px solid #5271FF' }}>
    <Typography variant="subtitle2" sx={{ marginLeft: '10px' }}>{number}</Typography>
    <Typography variant="subtitle2" sx={{ marginLeft: '10px' }}>{email}</Typography>
    <Typography variant="subtitle2" sx={{ marginLeft: '10px' }}>{webpage}</Typography>
  </Box>

  {/* QR Code in the bottom right */}
  <Box sx={{ position: 'absolute', bottom: '0', right: '0', p: 2 }}>
  <QRCode value={vCard} fgColor={qrColor} size={75} />
  </Box>

  {/* Red Circle at Bottom Left */}
  <Box 
    sx={{
      position: 'absolute',
      bottom: -40,
      left: -40,
      width: '150px',
      height: '150px',
      backgroundColor: '#5271FF',
      borderRadius: '50%'
    }} 
  />

</Box>


      <Box onClick={handleCardClick} style={{ width: '350px', height: '300px', background: '#5271FF', color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius:'20px' }}>
        <Typography variant="subtitle2" fontWeight={800} color="white">QR Lite vCard</Typography>
      </Box>
    </ReactCardFlip>

        {/* Divider after flip card */}
        <Divider sx={{m:2, width:'100%'}} />

        {/* Action buttons for Download, Print, Save */}
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

          {!vCard && !loading && (
              <>
                <Typography>Your QR Code will be generated here.</Typography>
                <Box sx={{mt:5}}>
                <Typography textAlign={'center'} fontWeight={800} >Use Cases:</Typography>
  
                <List>
                  {vCardUseCase.map((useCase, i) => (
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
    )
}


export default VCardPage