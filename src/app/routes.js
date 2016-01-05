'use strict';

import indexController from './controllers/index'
import apiController from './controllers/api'

const routes = (app) => {
  
  // Home Page
  app.get('/', indexController.home); 
  
  // Data API
  app.get('/api', apiController.base);
  app.get('/api/make', apiController.allMakes);
  app.get('/api/make/:id', apiController.makeById);
  app.get('/api/make/:id/models', apiController.allModelsByMake);
  app.get('/api/models/:id', apiController.getModel);
}
  
export { routes }
