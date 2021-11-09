import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert, AlertTitle } from '@mui/material';
import React, { useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import login from '../../../images/login.png';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Box } from '@mui/system';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, authError, user, googleSignIn } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(loginData)
    }
    const handleLoginSubmit = e => {
        console.log('press login')
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const hanndleGoogleSignIN = () => {
        googleSignIn(location, history)
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
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
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

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Please Register</Button>
                            </NavLink>
                            {isLoading && <Box sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>}
                            {
                                user?.email && <Alert severity="success">
                                    <AlertTitle>Success</AlertTitle>
                                    Login Successfully <strong>Congrass</strong>
                                </Alert>
                            }
                            {
                                authError && <Alert severity="error">
                                    <AlertTitle>Error</AlertTitle>
                                    {authError}
                                </Alert>
                            }
                        </form>
                            <p>--------------------</p>
                            <Button onClick={hanndleGoogleSignIN} variant="contained">Google Sign In</Button>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={login} style={{ width: '100%' }} alt="" />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;