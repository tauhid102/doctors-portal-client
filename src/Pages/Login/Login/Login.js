import { Container, Grid, Typography, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../../images/login.png';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData)
    }
    const handleLoginSubmit = e => {
        if(loginData.password!==loginData.password2){
            alert('Your data did not match')
            return;
        }
        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{ mt: 20 }}>
                        <Typography variant="body1" gutterBottom>
                            Login
                        </Typography>
                        <from onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                type="email"
                                onChange={handleOnChange}
                                variant="standard" />

                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onChange={handleOnChange}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Retype Your Password"
                                type="password"
                                name="password2"
                                onChange={handleOnChange}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none', width: '75%' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                        </from>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={login} style={{ width: '100%' }} alt=""/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;