import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom' 

import './App.css';

import Home from './pages/Home'
import FiveDayForecast from './pages/FiveDayForecast';
import CurrentWeather from './pages/CurrentWeather'

function App() {
  return (
    <div className="App">
      <Router >
        <div>
          <nav className='navbar'>
            <ul>
              <li>
                <Link className='link' to='/'>Home</Link>
              </li>
              <li>
                <Link className='link' to='/pages/currentweather'>Current Weather</Link>
              </li>
              <li>
                <Link className='link' to='/pages/fivedayforecast'>5-Day Forecast</Link>
              </li>
            </ul>
          </nav>
     
        </div>
        <Switch>
          <Route path='/pages/fivedayforecast' basename={'/comit-final-project'}>
            <FiveDayForecast />
          </Route>
          <Route path='/pages/currentweather' >
            <CurrentWeather />
          </Route>
          <Route path='/' exact={true}>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;
