import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Booking from '../Bookking/Booking';

const bookings = [
    { id: 1, name: 'Cavity Protection', time: '11.0 AM - 12.00 PM', space: 5 },
    { id: 2, name: 'Pediatric Dental', time: '11.0 AM - 12.00 PM', space: 5 },
    { id: 3, name: 'Oral Sergery', time: '11.0 AM - 12.00 PM', space: 5 },
    { id: 4, name: 'Teeth Orthodontics', time: '11.0 AM - 12.00 PM', space: 5 },
    { id: 5, name: 'Cosmetic Dentistry', time: '11.0 AM - 12.00 PM', space: 5 },
    { id: 6, name: 'Teeth Cleaning', time: '11.0 AM - 12.00 PM', space: 5 }
]



const AvailableAppoinment = ({ date }) => {
    return (
        <Container>
            <Typography variant='h4' sx={{ color: 'info.main', my: 5 }}>Available Appoinment On: {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        date={date}
                        key={booking.id}
                        booking={booking}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppoinment;