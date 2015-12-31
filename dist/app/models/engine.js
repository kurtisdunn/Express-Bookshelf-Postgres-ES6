'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Engine = (function (_Model) {
  _inherits(Engine, _Model);

  function Engine(id, make, makeSlug, mid, model, eid, name, type, location, size, configuration, cylinders, camshaft, totalValves, compression, manufacturerEngineCode, torque, pwratio, acceleration) {
    _classCallCheck(this, Engine);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Engine).call(this, id, make, makeSlug, mid, model));

    _this._id = eid;
    _this._type = type;
    _this._location = location;
    _this._size = size;
    _this._configuration = configuration;
    _this._cylinders = cylinders;
    _this._camshaft = camshaft;
    _this._totalValves = totalValves;
    _this._compression = compression;
    _this._manufacturerEngineCode = manufacturerEngineCode;
    _this._torque = torque;
    _this._pwratio = pwratio;
    _this._acceleration = acceleration;
    return _this;
  }

  _createClass(Engine, [{
    key: 'getEngine',
    value: function getEngine() {
      var engindeDetails = {
        id: this._id,
        type: this._type,
        location: this._location,
        size: this._size,
        configuration: this._configuration,
        cylinders: this._cylinders,
        camshaft: this._camshaft,
        totalValves: this._totalValves,
        compression: this._compression,
        manufacturerEngineCode: this._manufacturerEngineCode,
        torque: this._torque,
        pwratio: this._pwratio,
        acceleration: this._acceleration
      };
      return engineDetails;
    }
  }]);

  return Engine;
})(_model2.default);

var engine = new Engine('123', 'BMW', 'bmw', '2', '340i', '200478098', 'Piston', 'Front', '2998', 'In-line', '6', 'DOHC with VVT', '4', '11', 'B58B30M0', '240kW @ 6500rpm', '450Nm @ 1380-5000rpm', '159.8', '5.1');
console.log(engine);
console.log(engine.getEngine());
//
// console.log(engine.compressorType); // Toyota Corolla
// engine.name = 'Ford Mustang';
// console.log(engine.test()) // Toyota Corolla 2009
//
//# sourceMappingURL=engine.js.map
