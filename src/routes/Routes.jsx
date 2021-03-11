import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Projects from '../pages/Projects.jsx';
import Contact from '../pages/Contact.jsx';
import Landing from '../pages/Landing.jsx';
import About from '../pages/About.jsx';
import Technologies from '../pages/Technologies.jsx';
import NavBar from '../components/NavBar.jsx';
import { NavLink } from 'react-router-dom';
import '../App.css';

export const Routes = ({ AppClassName, setAppClassName }) => {

    return (
        <>
            <NavBar AppClassName={AppClassName} setAppClassName={setAppClassName}></NavBar>
            <div className="main">
                <Switch>
                    <Route exact path="/Landing" component={Landing}></Route>
                    <Route exact path="/">
                        <Redirect to="/Landing" component={Landing} />
                    </Route>
                    <Route exact path="/Technologies" component={Technologies}></Route>
                    <Route exact path="/Projects" component={Projects}></Route>
                    <Route exact path="/About" component={About}></Route>
                    <Route exact path="/Contact" component={Contact}></Route>
                </Switch>
            </div>
            <nav className="links">
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
        </>
    )
}