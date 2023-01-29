import React from 'react'
import "./Background.css"

const Background = () => {
    return (
        <div className = "container" >
            <div className = "title">
                <div className="circle"></div>
                <h1>full circle</h1>
            </div>
            <div className = "signup">
                <h3 className = "signText">Enter email here</h3>
            </div>
            <div className = "goal">
                <h1>Our Goal</h1>
                <p>We want to support high-fidelity conversations in the age of the internet.</p>
            </div>
        </div>
    )
}
export default Background;