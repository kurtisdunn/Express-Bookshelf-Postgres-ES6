'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var base = function base(req, res) {
  res.json('base api');
};

var allMakes = function allMakes(req, res) {
  res.json('make');
};

var makeById = function makeById(req, res) {
  _models.Make.where('id', req.params.id).fetch().then(function (i) {
    i.json(make);
  }).catch(function (err) {
    console.error(err);
  });
};

var allModelsByMake = function allModelsByMake(req, res) {
  _models.Model.where('make_id', req.params.id).fetch().then(function (i) {
    res.json(i);
  }).catch(function (err) {
    console.error(err);
  });
};

var getModel = function getModel(req, res) {
  console.log(req.params.id);

  _models.Model.where('model', 'ILIKE', '%' + req.params.id + '%').fetch({ withRelated: ['make', 'engine'] }).then(function (i) {
    res.json(i);
  }).catch(function (err) {
    console.error(err);
  });
};

exports.default = { base: base, allMakes: allMakes, makeById: makeById, allModelsByMake: allModelsByMake, getModel: getModel };
//# sourceMappingURL=api.js.map
