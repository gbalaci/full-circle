import React from 'react';
import {Card, Modal, Paper} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CameraAltIcon from '@mui/icons-material/CameraAlt';

function NewPostModal(props) {
    const {open, onClose} = props;
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState('');

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Card sx={{
                width: {xs: '100%', md: 'min(80%,1000px)'},
                height: {xs: '100%', md: 'min(80%,1000px)'},
                position: 'absolute',
                top: {xs: 0, md: '50%'},
                left: {xs: 0, md: '50%'},
                transform: {xs: 'none', md: 'translate(-50%, -50%)'},
            }}>
                <AppBar position="static" sx={{backgroundColor: "#398378"}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2}}
                        >
                            <CloseIcon/>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            New Post
                        </Typography>
                        <Button color="inherit">Post</Button>
                    </Toolbar>
                </AppBar>
                <Box>
                    <TextField
                        margin="normal"
                        required
                        sx={{m: 3, width: '95%'}}
                        id="email"
                        label="Post Title"
                        name="title"
                        autoFocus
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        multiline
                        rows={2}
                        maxRows={4}
                        sx={{m: 3, mt: -1, width: '95%'}}
                        id="email"
                        label="Post Description"
                        name="title"
                        autoFocus
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Paper elevation={2} sx={{m: 3, mt: -1, width: '95%', height: 100}}>
                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 100}}>
                            <Button sx={{color: "#398378"}}>
                                <CameraAltIcon/>
                                Choose Image
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Card>
        </Modal>
    );
}

export default NewPostModal;