'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const note = require('./routes/note');
const app = express();
const port = process.env.PORT || 3000;



app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended:false}));
// looks for a query parameter in a post
app.use(methodOverride('_method'));

// creates a root route & simply sends raw text --- starting off point
app.get('/', (req, res)  => {
  res.send('Server Running');
});

app.use(note);

mongoose.connect('mongodb://localhost:27017/ever-node', (err) => {
  if (err) throw err;


app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
 });
});
