import indexController from './controllers/index'

console.log('indexController', indexController)

function routes(app) { app.get('/', indexController.home); }

export {routes}