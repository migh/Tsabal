module.exports = (function () {
  var Tsabal = {  };
  
  Tsabal.help = function () {
    console.debug('Tsabal-client v0.0.1');
  };

  Tsabal.engineering = require('./tsabal/engineering/engineering');
  // Tsabal.graphics = require('./tsabal/graphics/graphics');
  // Tsabal.math = require('./tsabal/math/math');
  // Tsabal.ui = require('./tsabal/ui/ui');
  Tsabal.utils = require('./tsabal/utils/utils');

  return Tsabal;
  
})();