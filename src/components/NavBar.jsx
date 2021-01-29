import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
        <nav className="navBar">
            <ul>
                <li>
                    <NavLink activeClassName="active" to="/Landing">Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/Technologies">Technologies</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/Languages">Languages</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/Projects">Projects</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/Skills">Skills & Hobbies</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to="/Contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;