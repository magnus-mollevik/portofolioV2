import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Projects from '../pages/Projects.jsx';
import Contact from '../pages/Contact.jsx';
import Landing from '../pages/Landing.jsx';
import Languages from '../pages/Languages.jsx';
import Skills from '../pages/Skills.jsx';
import Technologies from '../pages/Technologies.jsx';
//import NavBar from '../components/NavBar.jsx';
import { NavLink } from 'react-router-dom';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';


export const Routes = () => {
    return (
        <div>
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
            <Route render={({location}) =>(
                <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={200}
                    classNames="fade">
                    <Switch location={location}>
                        <Route exact path="/Landing" component={Landing}></Route>
                        <Route exact path="/">
                            <Redirect to="/Landing" />
                        </Route>
                        <Route exact path="/Technologies" component={Technologies}></Route>
                        <Route exact path="/Languages" component={Languages}></Route>
                        <Route exact path="/Projects" component={Projects}></Route>
                        <Route exact path="/Skills" component={Skills}></Route>
                        <Route exact path="/Contact" component={Contact}></Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            )}/>
        </div>
    )
}