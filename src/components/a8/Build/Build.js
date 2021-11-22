import React from "react";
import tweets from "../../../reducers/tweets";
import who from "../../../reducers/who";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path={["/", "/a8/twitter/home"]} exact={true} component={HomeScreen}/>
                <Route path="/a8/twitter/explore" exact={true} component={ExploreScreen}/>
            </div>
        </Provider>
    );
};
export default Build;