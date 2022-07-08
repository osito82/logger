var misc = require("../lib/misc.js");
var colors = require("colors");

const stringConsole = (obj, config, i, logArguments) => {
  colors.setTheme(misc.colorsToConsole(logArguments));

  if (misc.countNumberKeys(obj) >= 1) {
    if (config.string_caps == false) {
      console.log(obj[i].custom);
    } else if (config.string_caps == true) {
      console.log(misc.toUpperCaps(obj[i].custom));
    }
  }
};

module.exports = stringConsole;
