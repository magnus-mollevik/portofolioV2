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
import { useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";

export const Routes = ({ AppClassName, setAppClassName }) => {
    const ref = useRef(null);
    const history = useHistory();

    const menuElementClick = () => {
        if (AppClassName === "App active") {
            setAppClassName("App")
        }
        else {
            setAppClassName("App active")
        }
    }

    const mainClick = () => {
        if (AppClassName === "App active") {
            setAppClassName("App")
        }
    }

    useEffect(() => {
        const unlisten = history.listen(() => {
            ref.current.scrollTo(0, 0);
        });
        return () => {
          unlisten();
        }
      }, [history]);

    return (
        <>
            <NavBar AppClassName={AppClassName} setAppClassName={setAppClassName}></NavBar>
            <div className="main" onClick={mainClick} ref={ref}>
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
                        <NavLink activeClassName="active" to="/Landing" onClick={menuElementClick}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Projects" onClick={menuElementClick}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/About" onClick={menuElementClick}>About</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Technologies" onClick={menuElementClick}>Technologies</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Contact" onClick={menuElementClick}>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}