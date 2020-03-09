const express = require ('express');
const path = require ('path');
const app = express ();
const bodyParser = require ('body-parser');
const router = require ('./router/index.js');
const session = require ('express-session');

app.use(bodyParser.urlencoded ({extended: false}));
app.use(bodyParser.json());

app.engine ('html', require ('express-art-template'));

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 1111111160000 }}));
app.use ('/public/', express.static (path.join (__dirname, './public/')));

app.use (router);

app.listen ('5000', () => {
    console.log ('Server is running...');
})