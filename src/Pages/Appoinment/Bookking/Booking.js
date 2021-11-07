import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenBooking = () => setOpenModal(true);
    const handleCloseBooking = () => setOpenModal(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ mb: 5, py: 5 }}>
                    <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ color: 'info.main' }} variant="h5" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography sx={{ color: 'info.main' }} variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleOpenBooking} sx={{ backgroundColor: 'info.main', color: 'white' }} variant="contained">book {name}</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openModal={openModal}
                handleCloseModal={handleCloseBooking}
            ></BookingModal>
        </>
    );
};

export default Booking;