import Make from './make'
class Model extends Make{

  constructor(id, make, makeSlug, mid, model) {
    super(id, make, makeSlug);
    this._id = mid;
    this._model = model;
  }
  
  getModel(){
    let model = {
      model: this._id,
      model: this._model
    }
  }
  
}

export default Model;
