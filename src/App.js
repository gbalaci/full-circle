import './App.css';
import {initializeApp} from "firebase/app";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./app/home";
import SignUp from "./app/auth/signup";
import Login from "./app/auth/login";
import MainApp from "./app/main";
import Discover from "./app/posts/discover";
import Following from "./app/posts/following";
import ForMe from "./app/posts/forMe";

const firebaseConfig = {
    apiKey: "AIzaSyAW-oV5TJs1MS8ADcBb-o3eg17noA_6FOI",
    authDomain: "full-circle-1a754.firebaseapp.com",
    projectId: "full-circle-1a754",
    storageBucket: "full-circle-1a754.appspot.com",
    messagingSenderId: "283898895180",
    appId: "1:283898895180:web:5ef1b3b51b165148b68de9",
    measurementId: "G-3W832QEWBE"
};

const app = initializeApp(firebaseConfig);


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/auth/login" element={<Login/>}/>
                <Route path="/auth/signup" element={<SignUp/>}/>
                <Route path="app" element={<MainApp/>}>
                    <Route path="discover" element={<Discover/>}/>
                    <Route path="following" element={<Following/>}/>
                    <Route index path="forMe" element={<ForMe/>}/>
                    <Route path="*" element={<div>404</div>}/>
                </Route>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default App;
