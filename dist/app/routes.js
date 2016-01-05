'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _index = require('./controllers/index');

var _index2 = _interopRequireDefault(_index);

var _api = require('./controllers/api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes(app) {

  // Home Page
  app.get('/', _index2.default.home);

  // Data API
  app.get('/api', _api2.default.base);
  app.get('/api/make/:id', _api2.default.makeById);
};

exports.routes = routes;
//# sourceMappingURL=routes.js.map
