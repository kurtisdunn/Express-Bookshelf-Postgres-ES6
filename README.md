> ######  DEV BUILD

## ES6-ExpressJS-Starter
ES6 with Grunt, Babel, Express, Bookshelf.js


### Main Components:
 - Grunt 
 - Babel Compiler
 - Express
 - Bookshelf.js
 - SASS
 - BrowserSync




### Usage:

```sh
# clone a copy
git clone https://github.com/kurtisdunn/ES6-ExpressJS-Starter.git
cd ES6-ExpressJS-Starter

# get it going:
npm install

# run it
node dist/server.js

```

### Development Stuff
```sh
# Compile ES6 to ES5
grunt compile

# run up a development version:
grunt dev

```


### DB Persistence:
This build uses Bookshelf.js to persist our data from postgresql, easily mapping table relations in a minimal promise based format. 

```sh
# Model
const Make = Bookshelf.Model.extend({
  tableName: 'make',
  models: () => {
    return this.hasMany(Model);
  }
});
  
# Query
Make.where('id', req.params.id).fetch().then((make) => {
  res.json(make); 
}).catch((err) => {
  console.error(err);
});
  
```

###Endpoints

 - `GET /api` - Returns nothing
 - `GET /api/make/:id` - Query make by ID