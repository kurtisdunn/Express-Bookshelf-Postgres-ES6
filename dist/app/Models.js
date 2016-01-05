'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Engine = exports.Model = exports.Make = undefined;

var _persistence = require('./config/persistence');

var Make = _persistence.bookshelf.Model.extend({
  tableName: 'make',
  models: function models() {
    return this.hasMany(Model);
  }
});

var Model = _persistence.bookshelf.Model.extend({
  tableName: 'model',
  engines: function engines() {
    return this.hasMany(Engine);
  }
});

var Engine = _persistence.bookshelf.Model.extend({
  tableName: 'engine',
  makes: function makes() {
    return this.belongsToMany(Make);
  },
  models: function models() {
    return this.belongsToMany(Model);
  }
});

exports.Make = Make;
exports.Model = Model;
exports.Engine = Engine;
//# sourceMappingURL=models.js.map
