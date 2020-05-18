const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();

const logger = require('./startup/logging');
require('./startup/routes')(app);
require('./startup/prod')(app);

app.engine('handlebars',exphbs({
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/mainLayout')
}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    logger['accessLog'].info(`Listening on port ${port}...`);
    console.log(`Server started on port: ${port}...`);
});

module.exports = server;