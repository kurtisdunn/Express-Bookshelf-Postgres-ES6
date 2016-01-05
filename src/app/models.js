
import {bookshelf as Bookshelf } from './config/persistence';


const Make = Bookshelf.Model.extend({
  tableName: 'make',
  models: () => {
    return this.hasMany(Model);
  }
});

const Model = Bookshelf.Model.extend({
  tableName: 'model',
  engines: () => {
    return this.hasMany(Engine);
  }
});

const Engine = Bookshelf.Model.extend({
  tableName: 'engine',
  makes: () => {
    return this.belongsToMany(Make);
  },
  models: () => {
    return this.belongsToMany(Model);
  }
})

export { Make, Model, Engine };