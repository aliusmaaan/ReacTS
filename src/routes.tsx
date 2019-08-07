import React from "react"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Home from './ts/components/home'
import ERR404 from './ts/components/err404'
import ERR505 from './ts/components/err505'
import logo from './logo.svg'
import tsLogo from './i/download.png'

import './App.css'

const HomePage = () => <Home />
const AppRouter = () => (
  <BrowserRouter>
    <div className='flx'>
      <div className='col-md-2 fl'>
          <img src={logo} className="App-logo" alt="logo" />
          
          
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/home/">Home</Link>
            </li> */}
            {/* <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li> */}
            <li>
              <Link to="/404/">404</Link>
            </li>
            <li>
              <Link to="/505/">505</Link>
            </li>
          </ul>
        </nav>
        <img src={tsLogo} className="tsLogo" alt="talogo" />
        {/* <img src={html5logo}  alt="logo" /> */}
      </div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/home/" component={Home} /> */}
        {/* <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} /> */}
        <Route path='/404/' component={ERR404} />
        <Route path='/505/' component={ERR505} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
