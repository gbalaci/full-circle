import React from 'react';
import {Link} from "react-router-dom";
import Background from "../components/Background/background";

function Home(props) {
    return (
        <>
            <Background/>
            {/*<div>HOME*/}
            {/*    <br/>*/}
            {/*    <Link to={"/auth/login"}>Login</Link>*/}
            {/*    <br/>*/}
            {/*    <Link to={"/auth/signup"}>Sign Up</Link>*/}
            {/*</div>*/}
        </>
    );
}

export default Home;