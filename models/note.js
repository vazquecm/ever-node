'use strict';

const mongoose = require('mongoose');
// there is a collection on the database in this form and it is requested by "findOne", "findById"....more magic going on
module.exports = mongoose.model('Notes', mongoose.Schema({
  title: String,
  text: String
 })
);
