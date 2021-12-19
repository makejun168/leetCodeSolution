const React = require('react');
const { renderToString  } = require('react-dom/server')
const express = require('express')

const app = express();
const port = 3000;

// 客户端渲染的 静态页面 已经处理好了
const App = () => {};

app.use(express.static('dist'));

app.get('/', function(req, res) {
    const content = renderToString(React.createElement(App))
    
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
})

app.listen(port, () => {
    console.log('server listen on' + port)
});