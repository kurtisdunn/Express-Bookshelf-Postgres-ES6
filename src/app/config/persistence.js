'use strict';

import pg from 'pg';
import knex from 'knex';

const opts = {
  host: '127.0.0.1',
  user: 'user',
  password: 'password',
  database: 'cars',
  charset: 'utf8',
  debug: true,
  pool: {
    min: 0,
    max: 7
  }
};
const db = knex({
  client: 'pg',
  connection: opts
});
const bookshelf = require('bookshelf')(db);

export { bookshelf };