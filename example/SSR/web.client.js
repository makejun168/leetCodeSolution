import React from 'react';
import { hydrate } from 'react-dom';
import App from './app';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import User from './pages/user';
import Login from './pages/login';

hydrate(
  <Router>
    <Route path="/" component={App}>
      <Route exact path="/user" component={User}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Route>
  </Router>,
  document.getElementById("root")
);