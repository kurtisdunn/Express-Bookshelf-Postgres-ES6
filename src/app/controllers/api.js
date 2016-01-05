'use strict';

import { Make, Model, Engine } from '../models'

const base = (req, res) => {
  res.json('base api'); 
}

const allMakes = (req, res) => {
    res.json('make'); 
}

const makeById = (req, res) => {
  Make.where('id', req.params.id).fetch().then((i) => {
    i.json(make); 
  }).catch((err) => {
    console.error(err);
  });
}

const allModelsByMake = (req, res) => {
  Model.where('make_id', req.params.id).fetch().then((i) => {
    res.json(i); 
  }).catch((err) => {
    console.error(err);
  });
}

const getModel = (req, res) => {
  console.log(req.params.id)
 
  Model.where('model', 'ILIKE', '%' + req.params.id + '%').fetch({withRelated: ['make', 'engine']}).then((i) => {
    res.json(i); 
  }).catch((err) => {
    console.error(err);
  });
}

export default { base, allMakes, makeById, allModelsByMake, getModel };
