import Model from './model'

class Engine extends Model{
  
  constructor(id, make, makeSlug, mid, model, eid, name, type, location, size, configuration, cylinders, camshaft, totalValves, compression, manufacturerEngineCode, torque, pwratio, acceleration) {
    super(id, make, makeSlug, mid, model);
    this._id = eid;
    this._type = type;
    this._location = location;
    this._size = size;
    this._configuration = configuration;
    this._cylinders = cylinders;
    this._camshaft = camshaft;
    this._totalValves = totalValves;
    this._compression = compression;
    this._manufacturerEngineCode = manufacturerEngineCode;
    this._torque = torque;
    this._pwratio = pwratio;
    this._acceleration = acceleration;
  }
  
  getEngine(){
    let engindeDetails = {
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
    }
    return engineDetails;
  }

}
 
 let engine = new Engine('123','BMW','bmw','2','340i', '200478098', 'Piston', 'Front', '2998', 'In-line','6','DOHC with VVT','4','11','B58B30M0','240kW @ 6500rpm', '450Nm @ 1380-5000rpm', '159.8', '5.1');
  console.log(engine);   
  console.log(engine.getEngine());
//
// console.log(engine.compressorType); // Toyota Corolla
// engine.name = 'Ford Mustang';
// console.log(engine.test()) // Toyota Corolla 2009
//

