'use strict';

var _ = require('lodash');
var HelpRequest = require('./help_request.model');

// Get list of help_requests
exports.index = function(req, res) {
  HelpRequest.find({'open': true}, function (err, help_requests) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(help_requests);
  });
};

// Get a single help_request
exports.show = function(req, res) {
  HelpRequest.findById(req.params.id, function (err, help_request) {
    if(err) { return handleError(res, err); }
    if(!help_request) { return res.status(404).send('Not Found'); }
    return res.json(help_request);
  });
};

// Creates a new help_request in the DB.
exports.create = function(req, res) {
  HelpRequest.create(req.body, function(err, help_request) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(help_request);
  });
};

// Updates an existing help_request in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  HelpRequest.findById(req.params.id, function (err, help_request) {
    if (err) { return handleError(res, err); }
    if(!help_request) { return res.status(404).send('Not Found'); }
    var updated = _.merge(help_request, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(help_request);
    });
  });
};

// Deletes a help_request from the DB.
exports.destroy = function(req, res) {
  HelpRequest.findById(req.params.id, function (err, help_request) {
    if(err) { return handleError(res, err); }
    if(!help_request) { return res.status(404).send('Not Found'); }
    help_request.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}
