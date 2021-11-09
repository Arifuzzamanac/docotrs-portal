import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../context/Authprovider/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctor Ghor
                    </Typography>
                    <Link style={{ textDecoration: 'none' }} to='/appoinment'>
                        <Button sx={{ color: 'white', fontWeight: 550, ml: 3 }} color="inherit">Appoinment
                        </Button>
                    </Link>
                    {
                        user?.email ?
                            <Box>
                                <NavLink style={{ textDecoration: 'none' }} to="/dashboard">
                                    <Button sx={{ color: 'white', fontWeight: 550, ml: 3 }} color="inherit">Dashboard</Button>
                                </NavLink>
                                <Button onClick={logOut} sx={{ color: 'white', fontWeight: 550, ml: 3 }} color="inherit">Logout</Button>
                            </Box>

                            :

                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button sx={{ color: 'white', fontWeight: 550, ml: 3 }} color="inherit">Login</Button>
                            </NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;