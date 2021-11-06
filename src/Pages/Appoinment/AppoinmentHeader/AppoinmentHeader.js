import { Container, Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import Calander from '../../Shared/Calander/Calander';

const AppoinmentHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid sx={{ mt: 1 }} container spacing={2}>
                <Grid xs={12} md={6}>
                    <Calander date={date} setDate={setDate}></Calander>
                </Grid>
                <Grid xs={12} md={6}>
                    <img style={{ width: '100%' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppoinmentHeader;