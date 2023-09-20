import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SignUp from './SignUp'
import Home from "./Home";
import About from "./About"

export default function DefaultLayout() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">SignUp</Link>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>


                <Switch>
                    <Route exact path="/">
                        <SignUp />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}