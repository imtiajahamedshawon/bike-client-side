import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import GoogleIcon from '@mui/icons-material/Google';
import sectionBg from '../../images/sectionBg.png'

const footerBg = {
    backgroundImage: `url(${sectionBg})`
}

const Footer = () => {
    return (
        <Box style={footerBg}>

            <Container sx={{ mt: 6, textAlign: 'left', color: 'gray', }}>
                <Grid container spacing={2}>
                      <Grid item xs={12} sm={3} md={3}>
                        <Typography variant='h5' sx={{ color: '#77F5EA' }}>
                        Buying & Selling 
                        </Typography>
                        <Box sx={{ mt: 4 }}>
                            <Typography sx={{ py: 1 }}>Find a bike</Typography>
                            <Typography sx={{ py: 1 }}>Listings by City</Typography>
                            <Typography sx={{ py: 1 }}> bike Payment Calculators</Typography>
                            <Typography sx={{ py: 1 }}>bike Reviews & Ratings</Typography>
                            <Typography sx={{ py: 1 }}>Fraud Awareness</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant='h5' sx={{ color: '#77F5EA' }}>
                            services 
                        </Typography>
                        <Box sx={{ mt: 4 }}>
                            <Typography sx={{ py: 1 }}>Yamah Ri5 v3</Typography>
                            <Typography sx={{ py: 1 }}>KTM 690 Duke R</Typography>
                            <Typography sx={{ py: 1 }}>Electric Motorcycles</Typography>
                            <Typography sx={{ py: 1 }}>Kawasaki Ninja 650</Typography>
                            <Typography sx={{ py: 1 }}>Royal Enfield</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant='h5' sx={{ color: '#77F5EA' }}>
                            Our Address
                        </Typography>
                        <Box sx={{ mt: 4 }}>
                            <Typography sx={{ py: 1 }}>Hosenpur, Cumilla.</Typography>
                            <Typography sx={{ py: 1 }}>Bangladesh</Typography>
                            <br />
                            <FacebookSharpIcon sx={{ borderRadius: '50%', fontSize: 45, color: '#68F7EB' }} />
                            <GoogleIcon  sx={{ color: '#68F7EB', border: '1px solid #68F7EB', borderRadius: '50%', p: 1 }} />
                            <br />
                            
                            <Typography sx={{ py: 1 }}>Call</Typography>
                            <Typography sx={{ py: 1, backgroundColor: '#68F7EB', color: 'white', width: '40%', borderRadius: 1, px: 1 }}>+4674638657</Typography>
                        </Box>
                    </Grid>
                    <form style={{ maxWidth: 250,backgroundColor:'#77F5EA',   }}>
                    <Grid container spacing={1}>

                        <Grid  xs={12} item>
                            <TextField type="email" label="Email"
                                 placeholder="Enter email" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                                <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                            </Grid>
                            <Grid xs={12} item>
                                <Button type="submit" variant="contained" color="primary" fullWidth>Contact</Button>
                            </Grid>
                    </Grid>
                </form>

                </Grid>
            </Container>
            <Typography sx={{ pt: 10,textColor: '#68F7EB', color: '#77F5EA', pb: 4 }}>
                &copy;2021,all rights reserved
            </Typography>
        </Box>
    );
};

export default Footer;