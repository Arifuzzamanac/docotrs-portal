import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';

const bannerBg = {
    background: `url(${bg})`,
    marginTop: '50px'
};

const varticalPosition = {
    display: 'flex',
    height: '450px',
    alignItems: 'center'
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...varticalPosition, textAlign: 'left' }}>
                    <Box>
                        <Typography variant="body2" sx={{ fontSize: 'h3.fontSize', fontWeight: 700 }}>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{ my: 4, fontSize: 14, fontWeight: 300, color: 'gray' }}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum atque similique nostrum pariatur corporis facilis voluptas. Reprehenderit nesciunt odio consequuntur!
                        </Typography>
                        <Button style={{ backgroundColor: '#9BF5F8', color: 'blue' }} variant="contained">get appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={varticalPosition}>
                    <img style={{ width: 500 }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;