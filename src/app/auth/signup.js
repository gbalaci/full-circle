import React, {useState} from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import {Alert, Autocomplete, Snackbar} from "@mui/material";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {getFirestore, doc, setDoc, collection} from "firebase/firestore";

function SignUp(props) {
    const navigate = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                const db = getFirestore();
                setDoc(doc(db, "user-properties", user.uid), {
                    firstName: firstName,
                    lastName: lastName,
                    location: location,
                    gender: gender,
                }).then(() => {
                    navigate("/app/forMe")
                }).catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error(errorCode, errorMessage);
                    setSnackBar({open: true, message: errorMessage});
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
                setSnackBar({open: true, message: errorMessage});
            });
    };

    const [snackBar, setSnackBar] = useState({open: false, message: ""});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [location, setLocation] = useState("");

    return (
        <Container component="main" maxWidth="xs">
            <Snackbar open={snackBar.open} autoHideDuration={6000}
                      onClose={() => setSnackBar({open: false, message: ""})}>
                <Alert onClose={() => setSnackBar({open: false, message: ""})} severity="error" sx={{width: '100%'}}>
                    {snackBar.message}
                </Alert>
            </Snackbar>
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box noValidate sx={{mt: 1}}>
                    <Box sx={{display: 'flex', flexDirection: 'row'}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="First Name"
                            name="firstName"
                            autoComplete="given-name"
                            autoFocus
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            sx={{mr: 1}}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Last Name"
                            name="lastName"
                            autoComplete="family-name"
                            autoFocus
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            sx={{ml: 1}}
                        />
                    </Box>
                    <Autocomplete
                        disablePortal
                        id="gender"
                        options={["Male", "Female", "Other", "Prefer not to say"]}
                        onChange={(e, value) => setGender(value)}
                        sx={{mb: 2, mt: 1}}
                        renderInput={(params) => <TextField {...params} label="Gender *"/>}
                    />
                    <TextField
                        required
                        margin="normal"
                        fullWidth
                        id="Location"
                        label="Location"
                        sx={{mt: 1}}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                        onClick={onSubmit}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Typography variant="body2" sx={{marginRight: 1}}>Already have an account?</Typography>
                                <Link href="/auth/login" variant="body2">Sign In</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}

export default SignUp;