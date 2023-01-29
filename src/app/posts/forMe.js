import React from 'react';
import Grid from "@mui/material/Grid";
import PostPreview from "../../components/postPreview";

function ForMe(props) {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <PostPreview/>
            <PostPreview/>
            <PostPreview/>
            <PostPreview/>
            <PostPreview/>
        </Grid>
    );
}

export default ForMe;