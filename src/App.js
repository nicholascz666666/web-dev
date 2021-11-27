import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/font-awesome/css/all.min.css';
import './explore.css';
import HelloWorld from "./components/a6/HelloWorld";
import A6Practice from "./components/a6/Practice/index";
import A6Build from "./components/a6/Build/Build";
import A7Practice from "./components/a7/Practice/index";
import A7Build from "./components/a7/Build/Build";
import History from "./components/history";
import A8Practice from "./components/a8/Practice/index";
import A8Build from "./components/a8/Build"
import A9Build from "./a9/Build"
import A9Practice from "./a9/Practice"

import {BrowserRouter, Link, Route} from "react-router-dom";
import React from "react";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/a6/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/a6", "/a6/practice"]} exact={true}>
                    <A6Practice/>
                </Route>
                <Route path="/a6/twitter">
                    <A6Build/>
                </Route>
                <Route path={["/a7", "/a7/practice"]} exact={true}>
                    <A7Practice/>
                </Route>
                <Route path="/a7/twitter">
                    <A7Build/>
                </Route>

                <Route path={["/a8/practice"]} exact={true}>
                    <A8Practice/>
                </Route>

                <Route path="/a8/twitter">
                    <A8Build/>
                </Route>

                <Route path="/a9/practice">
                    <A9Practice/>
                </Route>

                <Route path="/a9/twitter">
                    <A9Build/>
                </Route>



                <Route path="/history">
                    <History/>
                </Route>


            </div>
            <Link to="/a6/hello">
                A6Hello And Previous HomeWork |
            </Link>
            <Link to="/a6/practice">
                A6 Practice |
            </Link>
            <Link to="/a7/practice">
                A7 Practice |
            </Link>
            <Link to="/a7/twitter/home">
                A7 Home |
            </Link>
            <Link to="/a7/twitter/explore">
                A7 Explore |
            </Link>
            <Link to="/a8/practice">
                A8 Practice |
            </Link>

            <Link to="/a8/twitter/home">
                A8 Home |
            </Link>
            <Link to="/a8/twitter/explore">
                A8 Explore | Github for server: https://github.com/nicholascz666666/fall21A8cs4550 |
            </Link>

            <Link to="/a9/practice">A9 Practice |</Link>
            <Link to="/a9/twitter/home">A9 Home |</Link>
            <Link to="/a9/twitter/explore">A9 Explore |</Link>


        </BrowserRouter>

    );
}

export default App;
