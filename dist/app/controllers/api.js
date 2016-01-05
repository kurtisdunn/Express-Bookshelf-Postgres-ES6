'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var base = function base(req, res) {
  res.json('base api');
};

var makeById = function makeById(req, res) {
  _models.Make.where('id', req.params.id).fetch().then(function (make) {
    res.json(make);
  }).catch(function (err) {
    console.error(err);
  });
};

exports.default = { base: base, makeById: makeById };
//# sourceMappingURL=api.js.map
