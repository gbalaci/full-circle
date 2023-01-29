import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {useLayoutEffect, useState} from "react";
import {Divider, ListItemIcon} from "@mui/material";
import {Logout, Settings} from "@mui/icons-material";
import {getAuth, signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import useAuth from "./useAuth";
import {getFirestore, doc, getDoc} from "firebase/firestore";
import {ReactComponent as Logo} from "../assets/Logo.svg";

function FCAppBar(props) {
    const {setMobileOpen } = props;
    useAuth();
    const navigate = useNavigate();
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [userProperties, setUserProperties] = useState(null);

    useLayoutEffect(() => {
        async function getUser() {
            const db = getFirestore();
            const user = getAuth().currentUser;
            console.log(user == null);
            setUserProperties((await (await getDoc(doc(db, "user-properties", user.uid))).data()));
        }
        getUser();
    }, []);

    const handleOpenNavMenu = (event) => {
        setMobileOpen(true);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth);
        setAnchorElUser(null);
        navigate("/");
    };

    return (
        <AppBar position="static" sx={{backgroundColor: "#398378", zIndex: 100, position: 'relative'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box  sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}>
                    <Logo style={{width: 55, height: 55}}/>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        FULL CIRCLE
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Box>
                    <Box  sx={{display: { md: 'none'}, mr: 1}}>
                        <Logo style={{width: 55, height: 55}}/>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        FULL CIRCLE
                    </Typography>
                    <Box  sx={{display: {xs: '', md: 'flex'}, mr: 1, flexGrow: 1}}/>
                    <Box sx={{flexGrow: 0}}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                 <Avatar alt="" sx={{backgroundColor: "#2196F3"}}>{userProperties ? userProperties.firstName[0] : ""}</Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: '45px'}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem disabled>
                                <Typography textAlign="center" color="black">{userProperties ? userProperties.firstName + " " + userProperties.lastName : ""}</Typography>
                            </MenuItem>
                            <Divider/>
                            <MenuItem onClick={handleCloseUserMenu}>
                                <ListItemIcon>
                                    <Settings fontSize="small"/>
                                </ListItemIcon>
                                <Typography textAlign="center">Settings</Typography>
                            </MenuItem>
                            <Divider/>
                            <MenuItem onClick={handleLogout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" color="error"/>
                                </ListItemIcon>
                                <Typography textAlign="center" color="error">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default FCAppBar;