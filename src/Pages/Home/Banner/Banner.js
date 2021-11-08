import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Button, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';


const bannerBg = {
    background: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'cover',
    width: '100%',

}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 500
}
const Banner = () => {
    return (
            <Container style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                    <Grid item xs={12} md={5} style={verticalCenter}>
                        <Box>
                            <Typography variant='h3' style={{ fontSize: 38, fontWeight: 600 }}>
                                Your New Smile <br /> Starts Here
                            </Typography>
                            <Typography variant='h6' style={{ fontSize: 16, fontWeight: 300, color: 'gray', marginTop: 30 }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro temporibus dolores voluptatum magni dolore magnam molestias vero, iusto non nam.
                            </Typography>
                            <Button variant="contained" style={{ marginTop: 40, backgroundColor: '#10CFE3', padding: 10 }}>Get Appintment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} style={verticalCenter} sx={{marginBottom:4}}>
                        <img src={chair} style={{ width: '500px', marginLeft: 'auto' }} alt="" />
                    </Grid>
                </Grid>
            </Container>
    );
};

export default Banner;