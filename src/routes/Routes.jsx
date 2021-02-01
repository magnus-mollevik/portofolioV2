import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Projects from '../pages/Projects.jsx';
import Contact from '../pages/Contact.jsx';
import Landing from '../pages/Landing.jsx';
import About from '../pages/About.jsx';
import Technologies from '../pages/Technologies.jsx';
import NavBar from '../components/NavBar.jsx';

export const Routes = () => {
    return (
        <div>
            <NavBar></NavBar>
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
    )
}