'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bookshelf = undefined;

var _pg = require('pg');

var _pg2 = _interopRequireDefault(_pg);

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var opts = {
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
var db = (0, _knex2.default)({
  client: 'pg',
  connection: opts
});
var bookshelf = require('bookshelf')(db);

exports.bookshelf = bookshelf;
//# sourceMappingURL=persistence.js.map
