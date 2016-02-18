'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const note = require('./routes/note');
const app = express();
const port = process.env.PORT || 3000;



app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended:false}));

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
