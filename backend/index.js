const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const logger = require('./startup/logging');
require('./startup/db')();
require('./startup/routes')(app);
require('./startup/prod')(app);
require('./startup/config')();
app.use(express.static('public'));
app.use(cors());


app.engine('.hbs',exphbs({
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/mainLayout'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    logger['accessLog'].info(`Listening on port ${port}...`);
    console.log(`Server started on port: ${port}...`);
});

module.exports = server;