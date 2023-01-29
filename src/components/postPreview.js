import React from 'react';
import Box from "@mui/material/Box";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    LinearProgress,
    linearProgressClasses
} from "@mui/material";
import Typography from "@mui/material/Typography";
import image from '../assets/img.png';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ChatIcon from '@mui/icons-material/Chat';

function PostPreview(props) {
    return (
        <Card sx={{maxWidth: 345, margin: 2.5}}>
            <CardActionArea>
                <CardMedia
                    sx={{height: 140}}
                    image={image}
                    title="image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Too Much Trash!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Too much trash is being thrown away. We need to do something about it.
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'space-end', mt: 2}}>
                        <Box sx={{display: 'flex', alignItems: 'center', mr: 2}}>
                            <VisibilityIcon sx={{color: "gray"}} color="gray"/>
                            <Typography variant="body2" color="text.secondary" sx={{ml: 1}}> 150</Typography>
                        </Box>
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <ChatIcon sx={{color: "gray"}} color="gray"/>
                            <Typography variant="body2" color="text.secondary" sx={{ml: 1}}> 50</Typography>
                        </Box>
                    </Box>
                </CardContent>
            </CardActionArea>
            <LinearProgress
                variant="buffer"
                value={30}
                valueBuffer={70}
                sx={{
                    "& .MuiLinearProgress-barColorPrimary": {
                        backgroundColor: "#00bfa5"
                    },
                    [`& .${linearProgressClasses.colorSecondary}`]: {
                        backgroundColor: "rgba(0,191,165,0.57)"
                    },
                    "& .MuiLinearProgress-dashed": {
                        backgroundColor: "lightgrey",
                        backgroundImage: "none",
                        animation: "none"
                    },
                    height: 10,
                }}
            />
        </Card>
    );
}

export default PostPreview;