import { MarginTwoTone } from "@mui/icons-material";
import { Box, List, ListItem, ListItemAvatar, Avatar, ListItemText, Grid, Typography, Button, TextField, Divider, LinearProgress } from "@mui/material";
import { useState } from "react";
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { qrScanners } from "../api/QrScanners";


const ComingSoon = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')




    return (

        <>
        <Grid container sx={{ marginTop: '30px' }}>
          {/* Left Section - User Input */}
          <Grid item xs={12} md={6} sx={{ height: 'auto', padding: '20px', borderRadius: '20px', background: 'white' }}>
          <Typography variant="h6" fontWeight={800} mb={2}>Contact</Typography>

          <TextField
                sx={{width:'100%'}}
                placeholder="John"
                label="Name"
              />
               <TextField
                sx={{width:'100%', mt:2}}
                placeholder="example@gmail.com"
                label="Email"
              /> 
              <TextField
              sx={{width:'100%', mt:2}}
              placeholder="Type your message here..."
              label="Message"
            />
            <Button fullWidth sx={{mt:2}} variant='contained'>Submit</Button>

          </Grid>

          <Grid item xs={12} md={6} sx={{ height: 'auto', padding: '20px', borderRadius: '20px' }}>
          <Typography fontWeight={800} sx={{mb:2}}>New Scanners Coming Soon...</Typography>
            <Grid container spacing={2}>
                {qrScanners.map((scanner, i) => (
                    <Grid item xs={12} sm={6}>
                        <List>
                        <ListItem>
                        <ListItemAvatar>
                            <Avatar sx={{ borderRadius: '10px', border: '1px solid lightgrey', background: 'white', color: 'grey' }}>
                            <QrCodeScannerIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={scanner.name} secondary={scanner.desc} />
                        </ListItem>
                    </List>
                    </Grid>
                ))}


            </Grid>
         
        

        </Grid>

          </Grid>
        
        </>
    )
}

export default ComingSoon