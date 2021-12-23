import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';
import Login from '@/pages/login';
import User from '@/pages/user';

const app = express();

app.use(express.static("dist"))

app.get('*', function (req, res) {
  const content = renderToString(<div>
    <StaticRouter location={req.url}>
      <Route exact path="/user" component={User}></Route>
      <Route exact path="/login" component={Login}></Route>
    </StaticRouter>
  </div>);
  
  res.send(`
    <!doctype html>
      <html>
        <title>ssr</title>
        <body>
          <div id="root">${content}</div>
            <script src="/client/index.js"></script
          </body>
      </html>
 `);
});

app.listen(3000)