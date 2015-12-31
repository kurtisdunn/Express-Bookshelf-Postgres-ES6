class Make {

  constructor(id, make) {
    this._id = id;
    this._make = make;
  }

  getMake(){
    let make = {
      id: this._id,
      make: this._make,
      
    }
  }
  
}

export default Make;
