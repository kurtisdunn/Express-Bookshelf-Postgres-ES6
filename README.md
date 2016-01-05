######DEV BUILD

## ES6-ExpressJS-Starter
ES6 with Grunt, Babel, ExpressJS, SASS &amp; BrowserSync.


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

```sh

## Development Stuff

# Compile ES6 to ES5
grunt compile

# run up a development version:
grunt dev

```


### DB Persistence:
This build uses Bookshelf.js to persist our data to and from postgresql. Easily mapping table relations in a minimal promise based format. 

```sh

  Make.where('id', req.params.id).fetch().then((make) => {
    res.json(make); 
  }).catch((err) => {
    console.error(err);
  });
  
```

###Endpoints

 - `GET /api` - Returns nothing
 - `GET /api/make/:id` - Query make by ID