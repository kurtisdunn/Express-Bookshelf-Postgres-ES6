'use strict';

import { Make, Model, Engine } from '../models'

const base = (req, res) => {
  res.json('base api'); 
}

const makeById = (req, res) => {
  Make.where('id', req.params.id).fetch().then((make) => {
    res.json(make); 
  }).catch((err) => {
    console.error(err);
  });
}

export default { base, makeById };
