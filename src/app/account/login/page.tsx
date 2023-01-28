"use client";
import React from 'react'
import {Grid, Paper, Avatar, TextField, Button, Typography, Link} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styles from './page.module.css';

export default function Login() {
    const paperStyle = {}

    return (
        <Grid>
            <Paper elevation={10}  className={styles.container}>
                <div className={styles.centerTitle}>
                    <Avatar style={{backgroundColor: '#1bbd7e'}}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </div>
                <TextField label='Username' placeholder='Username' variant="outlined" fullWidth required
                           className={styles.textField}/>
                <TextField label='Password' placeholder='Password' type='password' variant="outlined" fullWidth
                           required className={styles.textField}/>
                <Button type='submit' color='primary' variant="contained" fullWidth className={styles.submitButton}>Sign in</Button>
                <Typography><Link href="#">Forgot password ?</Link></Typography>
                <Typography> Already have an account ? <Link href="#">Sign Up</Link></Typography>
            </Paper>
        </Grid>
    )
}