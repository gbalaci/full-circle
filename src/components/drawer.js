import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import PersonIcon from "@mui/icons-material/Person";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import {useNavigate} from "react-router-dom";

function FCDrawer(props) {
    const { window, mobileOpen, setMobileOpen } = props;
    const navigate = useNavigate();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    const toolbar = (
        <div>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={()=> navigate('/app/forMe')}>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary="For Me" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton onClick={()=> navigate('/app/discover')}>
                        <ListItemIcon>
                            <TravelExploreIcon />
                        </ListItemIcon>
                        <ListItemText primary="Discovery" />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <ListItemButton onClick={()=> navigate('/app/following')}>
                        <ListItemIcon>
                            <AddToPhotosIcon />
                        </ListItemIcon>
                        <ListItemText primary="Following" />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    return (
        <>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                }}
            >
                {toolbar}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, zIndex: 0 },
                }}
                open
            >
                <Toolbar/>
                {toolbar}
            </Drawer>
        </>

    );
}

export default FCDrawer;