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

var _router = require('./app/router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.engine('ejs', _consolidate2.default.ejs);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/app/views');
app.use(_express2.default.static(__dirname + '/app/_public'));
app.use((0, _morgan2.default)('dev'));

(0, _router.routes)(app);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
//# sourceMappingURL=server.js.map
