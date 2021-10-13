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
import HelloWorld from "./components/HelloWorld";
import Practice from "./components/Practice/index";
import Build from "./components/Build/Build";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
        <div className="container">
            <Route path="/hello" exact={true}>
            <HelloWorld/>
            </Route>

            <Route path={["/", "/practice"]} exact={true}>
            <Practice/>
            </Route>

            <Route path="/build" exact={true}>
            <Build/>
            </Route>
        </div>
        </BrowserRouter>
    );}


export default App;
