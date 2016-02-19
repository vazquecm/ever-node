'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const logger = require('./lib/logger');
const note = require('./routes/note');

const app = express();
const port = process.env.PORT || 3000;

// looking for jade templates to be used
app.set('view engine', 'jade');
// getting information from the requested url in the browser transfers info into usable JSON -- this is middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
// middleware being used here --- makes it easier to use data received
app.use(methodOverride('_method'));
// middlware being used here
app.use(logger);
// root route -- letting me know that the browser is getting a request and then has option to get a response
app.get('/', (req, res) => {
  res.send('<h1>Are you listening yet?</h1><a href="/notes">Work for me please</a>');
});
// grabbing data from the route -- holds functions, getting info, post data ....
app.use(note);
// open up and listen to the request once connection is made it locks onto the db to listen for any requests
mongoose.connect('mongodb://localhost:27017/ever-node', (err) => {
  if (err) throw err;

  app.listen(port, () => {
    console.log(`Ever-node server running on port: ${port}`);
  });
});
