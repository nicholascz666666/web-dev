import React from "react";
import {Link} from "react-router-dom";
import {BrowserRouter, Route} from "react-router-dom";
const A6 = () => {
    return (
        <BrowserRouter>
            <h2>Assignment 6</h2>
            <Link to="/a6/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a6/twitter">
                Build
            </Link>

        </BrowserRouter>
    )
};

export default A6;