const winston = require('winston');
const path = require('path');
const logPath = __dirname;
const tsFormat = () => (new Date().toISOString());
const express = require('express');
const app = express();

const logger = require('./startup/logging');
require('./startup/routes')(app);

app.set('view engine', 'pug');
app.set('views', './views');

const port = process.env.PORT || 3000;
const server = app.listen(3000, () => logger['accessLog'].info(`Listening on port ${port}`));

module.exports = server;