var misc = require('../lib/misc.js');
var colors = require ('colors')

const numberConsole = (obj, config, i, logArguments) => {
  colors.setTheme(misc.colorsToConsole(logArguments));

  if (misc.countNumberKeys(obj) >= 1) {
    if (config.number == "default" && logArguments.colors === "default") {
      console.log(obj[i]);
    } else if (
      config.number == "default" &&
      logArguments.colors !== "default"
    ) {
      var toStringa = obj[i].toString();
      console.log(toStringa.custom);
    }
  }
 // return 'hola'
};


exports.numberConsole = numberConsole
//exports.numberConsole = numberConsole; 0021
