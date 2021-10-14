import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//       <h1>Hello World!</h1>
//
//       // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//   );
// }
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/font-awesome/css/all.min.css';
import './explore.css';
import HelloWorld from "./components/a6/HelloWorld";
import All_ass from "./allass.js";
import Practice from "./components/a6/Practice/index";
import Build from "./components/a6/Build/Build";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (

    <div className="container">
        <BrowserRouter>
            <Route path="/hello" exact={true}>
            <HelloWorld/>
            </Route>

            <Route path={["/", "/practice"]} exact={true}>
            <Practice/>
            </Route>

            <Route path="/build" exact={true}>
            <Build/>
            </Route>

            <Route path="/allass">
                <All_ass/>
            </Route>
        </BrowserRouter>

    </div>




    );}


export default App;
