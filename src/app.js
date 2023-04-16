const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// secrets
require('dotenv').config();

const app = express()
const port = process.env.PORT || 9090;

// Configuration for handling API endpoint data
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Listen to Port
app.listen(port, () => {
    (!process.env.PORT) ? 
        console.log('App ready at http://localhost:' + port) 
    : console.log('App ready at port ' + port);
});

app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//set static files
app.use(express.static(path.join(__dirname, 'public')));

/** ROUTING  **/
// declare routes
const mainRoutes = require('./routes/mainRoutes');

// use routes
app.use('/', mainRoutes);