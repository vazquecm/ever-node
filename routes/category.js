'use strict';

const express = require('express');
const router = express.Router();

const Category = require('../models/category');
const Note = require('../models/note');

const ctrl = require('../controllers/category');

router.param('id', (req, res, next, id) => {
  Category.findById(id, (err, category) => {
    if (err) throw err;

    req.category = category;

    Note.find({category: id})
    next();
  });
});

router
  .get('/categories', ctrl.index)
  .get('/categories/new', ctrl.new)
  .post('/categories', ctrl.create)
  .get('/categories/:id', ctrl.show);

module.exports = router;

