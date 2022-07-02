import * as misc from '../lib/misc.js'

//checking if it is a string
const nullConsole = (obj, config, i) => {

  if (misc.countNumberKeys(obj) >= 1) {
    if (config.null == "default") {
      console.log('null');
    }
  }
};

export default nullConsole;
