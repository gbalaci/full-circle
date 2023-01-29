import React from 'react';
import {Fab} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function NewPostFab(props) {
    return (
        <>
            <Fab sx={{backgroundColor: "#398378", display: {xs: 'flex', md: 'none'}}} style={{
                margin: 0,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
                position: 'fixed',
            }}>
                <AddIcon/>
            </Fab>
            <Fab variant="extended" sx={{backgroundColor: "#398378", display: {xs: 'none', md: 'flex'}}} style={{
                margin: 0,
                top: 'auto',
                right: 20,
                bottom: 20,
                left: 'auto',
                position: 'fixed',
            }}>
                <AddIcon sx={{mr: 1}}/>
                New Post
            </Fab>
        </>
    );
}

export default NewPostFab;