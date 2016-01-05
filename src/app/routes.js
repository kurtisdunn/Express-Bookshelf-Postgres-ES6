'use strict';

import indexController from './controllers/index'
import apiController from './controllers/api'

const routes = (app) => {
  
  // Home Page
  app.get('/', indexController.home); 
  
  // Data API
  app.get('/api', apiController.base)
  app.get('/api/make/:id', apiController.makeById)
  
  
}
  
export { routes }