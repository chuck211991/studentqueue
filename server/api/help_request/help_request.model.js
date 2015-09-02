'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HelpRequestSchema = new Schema({
  name: String,
  purpose: String,
  open: Boolean,
  created: { type: Date, default: Date.now },
  completed: Date
});

module.exports = mongoose.model('HelpRequest', HelpRequestSchema);
