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
/*
<nav className="navBar">
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/Contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/Projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/Technologies">Technologies</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/Landing">Home</NavLink>
                </li>
            </ul>
        </nav>
         */
export default NavBar;