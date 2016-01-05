
import {bookshelf as Bookshelf } from './config/persistence';


const Make = Bookshelf.Model.extend({
  tableName: 'make',
  models: function() {
    return this.hasMany(Model);
  }
});

const Model = Bookshelf.Model.extend({
  tableName: 'model',
  engines: function() {
    return this.hasMany(Engine);
  }
});

const Engine = Bookshelf.Model.extend({
  tableName: 'engine',
  makes: function() {
    return this.belongsToMany(Make);
  },
  models: function() {
    return this.belongsToMany(Model);
  }
})

export { Make, Model, Engine };