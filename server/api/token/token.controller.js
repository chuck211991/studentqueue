'use strict';

var _ = require('lodash');
var Token = require('./token.model');

// Creates a new token in the DB.
exports.create = function(req, res) {
  Token.create({"id": Math.random().toString(36).substring(7),
                  "token": Math.random().toString(36).substring(7)}, function(err, token) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(token);
  });
};

// Updates an existing token in the DB.
exports.update = function(req, res) {
  if(req.body.password != "TacoCat") { return res.status(403).send("Not authorized"); }
  Token.findById(req.body._id, function (err, token) {
    if (err) { return handleError(res, err); }
    if(!token) { return res.status(404).send('Token not Found'); }
    token.admin = true;
    console.log(token);
    token.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(token);
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
