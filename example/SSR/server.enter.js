import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createRouter } from './src/router';

const app = express();

app.use(express.static("dist"))

app.get('*', function (req, res) {
  const content = renderToString(createRouter('server')({ location: req.url }));

  if (context.url) {
    //302
    res.redirect(context.url);
  } else {
    if (context.NOT_FOUND) res.status(404);//判断是否设置状态码为404

    res.send(`
      <!doctype html>
      <html></html>
        <title>ssr</title>
        <body>
          <div id="root">${content}</div>
          <script src="/client/index.js"></script>
        </body>
      </html>
    `);
  }
});


app.listen(3000);
