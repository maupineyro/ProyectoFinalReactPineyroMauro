import React from 'react';
import logo from "../../logo.svg"

const NavBar = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Reactive Shop
                </p>

            </header>
        </div>
    )
}

export default NavBar