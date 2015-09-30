'use strict';

var express = require('express');
var controller = require('./token.controller');

var router = express.Router();

router.post('/', controller.create);
router.put('/', controller.update);
module.exports = router;
