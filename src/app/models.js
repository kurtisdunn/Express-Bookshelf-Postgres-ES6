
import {bookshelf as Bookshelf } from './config/persistence';


const Make = Bookshelf.Model.extend({
  tableName: 'make',
  models: function() {
    return this.hasMany(Model, 'make_id');
  }
});

const Model = Bookshelf.Model.extend({
  tableName: 'model',
  engine: function() {
    return this.hasOne(Engine, 'model_id');
  },
  make: function() {
    return this.belongsTo(Make, 'make_id');
  }
  
});

const Engine = Bookshelf.Model.extend({
  tableName: 'engine',
  model: function() {
    return this.belongsTo(Model, 'engine_id');
  }
})

export { Make, Model, Engine };