import React from 'react';
import { createBrowserHistory } from "history";
import { Route, Router, StaticRouter, Redirect, Switch } from 'react-router';
import routeConfig from './routeConfig';

const routes = routeConfig.map((conf, index) => {
  const { type, ...otherConf } = conf;
  if (type === 'redirect') {
    return <Redirect key={index} {...otherConf} />;
  } else if (type === 'route') {
    return <Route key={index} {...otherConf}></Route>;
  }
});

export const createRouter = (type) => (params) => {
  if (type === 'client') {
    const history = createBrowserHistory();
    return <Router history={history}>
      <Switch>
        {routes}
      </Switch>
    </Router>
  } else if (type === 'server') {
    // const {location} = params;
    return <StaticRouter {...params}>
      <Switch>
        {routes}
      </Switch>
    </StaticRouter>
  }
}