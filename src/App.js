import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import FlightSearch from './components/FlightSearch';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={FlightSearch} />
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;