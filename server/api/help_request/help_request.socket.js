/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var HelpRequest = require('./help_request.model');

exports.register = function(socket) {
  HelpRequest.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  HelpRequest.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('help_request:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('help_request:remove', doc);
}