import React from 'react';
import './Navbar.css';

function NavBar() {
    return(
        <div className="nav-container">
            <nav>
                <input type="checkbox" id="nav-toggle" />
                <label htmlFor="nav-toggle" className="burger-menu">
                    <div className="white-bar"></div>
                    <div className="white-bar"></div>
                    <div className="white-bar"></div>
                </label>
                <div className="left-menu">
                   <p>Home</p>
                   <p>Sign Up</p>
                   <p>Login</p>
                </div>
                <h1 className="logo">BookMarker</h1>
            </nav>
        </div>
    )
}

export default NavBar