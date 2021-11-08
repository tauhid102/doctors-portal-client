import { Grid, Paper } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModel from '../BookingModel/BookingModel';

const Booking = ({ booking,date }) => {
    const { name, time, space } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4} className="App">
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography style={{ color: '#10CFE3', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} Spaces Available
                    </Typography>
                    <Button onClick={handleOpen} variant="contained" style={{ backgroundColor: '#10CFE3' }}>Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModel
                booking={booking}
                handleClose={handleClose}
                open={open}
                date={date}
            ></BookingModel>
        </>
    );
};

export default Booking;