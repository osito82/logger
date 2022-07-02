import * as misc from '../lib/misc.js'

const undefinedConsole = (obj, config, i) => {
  if (misc.countNumberKeys(obj) >= 1) {
    console.log(obj[i]);
  }
};

export default undefinedConsole;
