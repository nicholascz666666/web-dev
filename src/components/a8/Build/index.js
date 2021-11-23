import React from "react";
import {Link, Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import "./explore.css"
import HomeScreen from "./HomeScreen";
import who from "../../../reducers/who";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import tweets from "../../../reducers/tweets";

const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);

const Build = () => {
    return (
        <Provider store={store}>
            <div>
                <Route path={["/a8/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path="/a8/twitter/explore" exact={true} component={ExploreScreen}/>
            </div>
        </Provider>
    );
};
export default Build;
