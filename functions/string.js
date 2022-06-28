import * as misc from '../lib/misc.js'

//checking if it is a string
const stringConsole = (obj, config, i) => {
  if (misc.countNumberKeys(obj) >= 1) {
    if (config.string_caps == false) {
      console.log(obj[i]);
    } else if (config.string_caps == true) {
      console.log(misc.toUpperCaps(obj[i]));
    }
  }
};

export default stringConsole;
