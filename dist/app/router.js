'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _index = require('./controllers/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('indexController', _index2.default);

function routes(app) {
  app.get('/', _index2.default.home);
}

exports.routes = routes;
//# sourceMappingURL=router.js.map
