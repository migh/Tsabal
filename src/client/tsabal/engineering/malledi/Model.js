/**
 * Malledi model
 * 
 * TODO: Make a model base prototype for all others to inherit
 * 
 */
module.exports = (function () {

  function Model(){
    console.debug('This is a new model.');
    this.mode = 'execution';
    this.program = 'PLUSH';
    this.mainAxis = 'x';
    this.soilStrata = 0;
    this.axis = {
      x: [],
      y: [],
      z: []
    };

  }

  // Properties
  Model.prototype = {
    mode: null,
    program: null,
    mainAxis: null,
    soilStrata: null,
    axis: null,
    floorMap: null,
    modifiers: null

  };

  // TODO: Modifiers can be applied by point or group

  //Methods
  Model.prototype.clone = {
    // Deep clone of model
  };

  return Model;

})();