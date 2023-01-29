import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div>HOME
            <br/>
            <Link to={"/auth/login"}>Login</Link>
            <br/>
            <Link to={"/auth/signup"}>Sign Up</Link>
        </div>
    );
}

export default Home;