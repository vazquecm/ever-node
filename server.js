'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

const Note = mongoose.model('Notes', mongoose.Schema({
  title: String,
  text: String
}));

app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended:false}));

// creates a root route & simply sends raw text --- starting off point
app.get('/', (req, res)  => {
  res.send('Server Running');
});

// making a new note in app
app.get('/notes/new', (req, res) => {
  res.render('new-note');
});

// viewing a note
app.get('/notes/:id', (req, res) => {
  Note.findById(req.params.id, (err, note) => {
  if (err) throw err;
  res.render('show-note', {note: note});
 });
});

app.post('/notes', (req, res) => {
  Note.create(req.body, (err, note) => {
    if (err) throw err;
  // specifies the path being used
  res.redirect(`/notes/${note._id}`);
  });
});

mongoose.connect('mongodb://localhost:27017/ever-node', (err) => {
  if (err) throw err;


app.listen(port, () => {
  console.log(`Evernode server running on port: ${port}`);
 });
});
