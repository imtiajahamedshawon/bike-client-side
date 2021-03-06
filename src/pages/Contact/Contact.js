import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
    return (
        <div id = "contact">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="bg-dark mt-5 text-light p-5">
                <Card style={{ maxWidth: 950, margin: "0 auto", boxShadow: '3px 3px 10px 3px gray', padding: "20px 5px" }}>
                    <Typography style={{ color: 'tomato', }} gutterBottom variant="h5" sx = {{padding: 3}}>Contact Us</Typography>
                    <hr style={{  width: '20%', textAlign: 'center' }} />
                    
                    <Typography sx={{ color: '#77F5EA' }} gutterBottom color="textSecondary" variant="body2" component="p">Fill up the form and our team will get back to you within 24 hours</Typography>
                    <CardContent>
                        <form >
                            <Grid container spacing={1}>

                                <Grid xs={12} sm={6} item>
                                    <TextField label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField type="number" label="Phone" placeholder="Enter Phone Number" variant="outlined" fullWidth required />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                                </Grid>

                                <Grid xs={12} item>
                                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Contact;


