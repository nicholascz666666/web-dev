import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/font-awesome/css/all.min.css';
import './explore.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice/index";
import Build from "./components/a6/Build/Build";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (

    <div className="container">
        <BrowserRouter>
            <Route path="/a6/hello" exact={true}>
            <HelloWorld/>
            </Route>

            <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
            <Practice/>
            </Route>

            <Route path="/a6/build" exact={true}>
            <Build/>
            </Route>

        </BrowserRouter>

    </div>
    );}


export default App;
