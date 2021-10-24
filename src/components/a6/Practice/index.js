import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput/index";
import TodoList from "./Todo/TodoList";

const Practice = () => {
    return(
        <>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/build">
                Build
            </Link>

            <div>
                <h1>Practice</h1>
                <ConditionalOutput/>
                <Styles/>
                <Classes/>
                <TodoList/>
            </div>


        </>

    )
};

export default Practice;