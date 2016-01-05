'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _ejs = require('ejs');

var _ejs2 = _interopRequireDefault(_ejs);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _consolidate = require('consolidate');

var _consolidate2 = _interopRequireDefault(_consolidate);

var _routes = require('./app/routes');

var _persistence = require('./app/config/persistence');

var _persistence2 = _interopRequireDefault(_persistence);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.engine('ejs', _consolidate2.default.ejs).set('view engine', 'ejs').set('views', __dirname + '/app/views').use(_express2.default.static(__dirname + '/app/_public')).use((0, _morgan2.default)('dev'));

(0, _routes.routes)(app);

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
//# sourceMappingURL=server.js.map
