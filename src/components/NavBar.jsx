import React from 'react';
import '../App.css';

const NavBar = ({ AppClassName, setAppClassName }) => {

    const hamburgerClick = () => {
        if (AppClassName === "App active") {
            setAppClassName("App")
        }
        else {
            setAppClassName("App active")
        }
    }

    return (
        <div className="navBar">
            <div className="menu">
                <h3 className="logo">Magnus<span>Møllevik</span></h3>
                <div className="hamburger-menu" onClick={hamburgerClick}>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;