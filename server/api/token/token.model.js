'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TokenSchema = new Schema({
  token: String,
  id: String,
  admin: {type: Boolean, default: false}
});

module.exports = mongoose.model('Token', TokenSchema);
