import * as misc from '../lib/misc.js'

const booleanConsole = (obj, config, i) => {
  if (misc.countNumberKeys(obj) >= 1) {
    if (config.boolean == "default") {
      console.log(obj[i]);
    }
  }
};

export default booleanConsole;
