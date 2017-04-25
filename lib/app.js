const http = require('http');
const express = require('express');
const compression = require('compression');

const app = express();
const server = http.Server(app);

app.set('views', `${process.cwd()}/client/views`);
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.use(compression());
app.use(express.static(`${process.cwd()}/client/public`));
app.use('/', require('./routes/web'));

module.exports = server;
