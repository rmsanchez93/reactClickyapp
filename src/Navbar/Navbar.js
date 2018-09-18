import React from 'react'
import './Navbar.css'

const Navbar = (props) =>
    
        (
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 h1">Clicky Game</span>
                <span className="navbar-brand mb-0 h1">Current Score: {props.currentScore}  |</span>
                <span className="navbar-brand mb-0 h1">High Score :{props.highScore}</span>

            </nav>
        )
    



export default Navbar