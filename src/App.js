// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global,Indonesia,Provinsi,provinsi } from './pages'


const App = () =>{
    return (
        <Router>
            <div>
              <h1> Covid Tracker</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/Global">
                                Global
                            </Link>
                        </li>
                        <li>
                            <Link to="/Indonesia">
                                Indonesia
                            </Link>
                        </li>
                        <th>
                            <Link to="/Provinsi">
                                Provinsi
                            </Link>
                        </th>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/Global">
                    <Global />
                </Route>
                <Route path="/Indonesia">
                    <Indonesia />
                </Route>
                <Route path="/Provinsi">
                    <Provinsi/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App