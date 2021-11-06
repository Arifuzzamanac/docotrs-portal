import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState();
    const handleOnChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[name] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        alert('welcome');
        e.preventDefault();
        // e.name = '';
        // e.password = '';
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ mt: 9 }}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
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
                        <Button sx={{ width: '75%', m: 1, fontWeight: 700 }} type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: "none" }} to="/register">
                            <Button variant="text">New In Here ? Please Register</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;