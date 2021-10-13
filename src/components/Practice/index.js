import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput/index";
import TodoList from "./Todo/TodoItem";

const Practice = () => {
    return(
        <>
        <h1>Practice</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/build">
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