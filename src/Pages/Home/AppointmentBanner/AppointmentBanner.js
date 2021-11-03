import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';


const appoinmentbg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(63, 50, 86, 0.7 )',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '150px'
}

const AppointmentBanner = () => {
    return (
        <Box style={appoinmentbg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid sx={{ m: 0 }} item xs={12} md={6}>
                    <img style={{ width: '400px', marginTop: '-115px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    // alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    // flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'left'
                }} >
                    <Box >
                        <Typography variant="h6" sx={{ mb: 4 }} style={{ color: '#9BF5F8', }}>
                            Appoinment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an appoinment today
                        </Typography>
                        <Typography sx={{ my: 4 }} style={{ color: 'white' }} >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ipsum quas possimus facere eveniet ea!
                        </Typography>
                        <Button style={{ backgroundColor: '#9BF5F8', color: 'blue' }} variant="contained">Learn more</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;