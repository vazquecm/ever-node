'use strict';

const Note = require('../models/note');

// module.exports allows all the functions inside to be used in other places, they are like using global variable but you need to "require" them in other files -- these functions are going to use the "magic" in mongoose to update, show, ....
module.exports = {
  edit (req, res) {
    Note.findOne({_id: req.params.id}, (err, dbres) => {
      if (err) throw err;
      console.log('my result is', dbres);
    // console.log(req.note);
    // const hardNote = {title:'hello', text:'world'};
    // console.log('location were at noe');
    // Note.findOne({_id: '56c5fe11dc2539877be894ee'}, (err, dbres) => {
    //   console.log(err);
    //   console.log(res);
    //   res.render('new-note', {note: dbres});

    // }
    // );
    // console.log(looking);
      res.render('new-note', {note: dbres});
    })
  },

  update (req, res) {
    req.note.update(req.body, (err) => {
      if (err) throw err;
      console.log(req.note._id);
      res.redirect(`/notes/${req.note._id}`);
    });
  },
// this is a function --
  index (req, res) {
    Note.find({}, (err, notes) => {
      if (err) throw err;
      console.log(notes);
      res.render('notes-index', {notes: notes});
    });
  },

  newNote (req, res) {
    res.render('new-note');
  },

  show (req, res) {
    Note.findOne({_id: req.params.id}, (err, dbres) => {
      if (err) throw err;
      console.log('my result is', dbres);
      // confirm('msg') whatHey = {
      //   'hello': dbres.title, // ghjfghj
      //   'world': dbres.text // ghfjdjfhg
      // };
      // whatHey.hello = dbres.title;
      // whatHey.world = dbres.text;
      // console.log(whatHey.hello);
      // console.log(whatHey.world);
      res.render('show-note', {note: dbres});
    })
  },

  create (req, res) {
    const newNote = {
      title: req.body.title,
      text: req.body.text
    };
    Note.create(newNote, (err, dbres) => {
      if (err) throw err;
      console.log(dbres);
      res.redirect(`/notes/${dbres._id}`);
    });
  },

  destroy (req, res) {
    req.note.remove((err) => {
      if (err) throw err;

      res.redirect('/notes');
    });
  }
};
