import React from 'react';
import FCAppBar from "../components/appbar";
import NewPostFab from "../components/newPostFab";
import FCDrawer from "../components/drawer";
import Box from "@mui/material/Box";
import {Outlet} from "react-router-dom";
import NewPostModal from "./posts/newPost";

function MainApp(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [modalOpen, setModalOpen] = React.useState(true);

    return (
        <div style={{width: '100%', height: '100vh'}}>
            <FCAppBar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
            <FCDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
            <NewPostFab/>
            <NewPostModal open={modalOpen} onClose={() => {setModalOpen(false)}} />
            <Box sx={{marginLeft: {xs: 5, md: 35}, mt: 5}}>
                <Outlet/>

            </Box>
        </div>
    );
}

export default MainApp;