import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import appointmentBg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';

const bg={
    background:`url(${appointmentBg})`,
    marginTop:150,
    backgroundColor:'#40485C',
    backgroundBlendMode:'darken,luminosity',
    width:'100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
}
const AppointmentBanner = () => {
    return (
        <Box style={bg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>           
          <Grid item xs={12} md={5}>
            <img
            style={{width:400,marginTop:-110}}
            src={doctor} alt="" />
          </Grid>
          <Grid sx={{mt:2, display:'flex',alignItems:'center'}} item xs={12} md={7}>
            <Box>
            <Typography variant='h6' style={{color:'#10CFE3',fontSize:14}}>
                APPOINTMENT
            </Typography>
            <Typography variant='h4' style={{color:'white',marginTop:10, }}>
                Make an Appointment <br /> Today
            </Typography>
            <Typography variant='h6' style={{color:'white', fontSize:16,fontWeight:300,marginTop:15}}>
            orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
            <Button variant="contained" style={{marginTop:40,backgroundColor:'#10CFE3'}}>Learn More</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;