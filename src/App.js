import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import './App.css';

import Users from './user/pages/Users';
import Portfolios from './portfolios/pages/Portfolios';
import MainNavigation from './shared/components/Navigation/MainNavigation';

// http://localhost:3000/portfolios/new

function App() {
  return (
  <Router>
    <MainNavigation />
    <main>
    <Switch>
      <Route path="/" exact>
        <Users />
      </Route>
      <Route path="/places/new" exact>
        <Portfolios />
      </Route>
      <Redirect to="/"/>
    </Switch>
    </main>
  </Router>
  )
}

export default App;
