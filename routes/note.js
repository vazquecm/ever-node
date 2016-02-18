const express = require('express');
const router = express.Router();

const note = require('../controllers/note');

// making a new note in app
router.get('/notes/new', note.newNote);
router.get('/notes/:id', note.show);
router.post('/notes', note.create);



module.exports = router;
