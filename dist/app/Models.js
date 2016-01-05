'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Engine = exports.Model = exports.Make = undefined;

var _persistence = require('./config/persistence');

var Make = _persistence.bookshelf.Model.extend({
  tableName: 'make',
  models: function models() {
    return this.hasMany(Model, 'make_id');
  }
});

var Model = _persistence.bookshelf.Model.extend({
  tableName: 'model',
  engine: function engine() {
    return this.hasOne(Engine, 'model_id');
  },
  make: function make() {
    return this.belongsTo(Make, 'make_id');
  }

});

var Engine = _persistence.bookshelf.Model.extend({
  tableName: 'engine',
  model: function model() {
    return this.belongsTo(Model, 'engine_id');
  }
});

exports.Make = Make;
exports.Model = Model;
exports.Engine = Engine;
//# sourceMappingURL=models.js.map
