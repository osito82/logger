import * as misc from "../misc.js";

//checking if it is an array

const arrayConsole = (obj, config, i) => {
  if (misc.countNumberKeys(obj) >= 1 && misc.isArray(obj[i])) {
    if (config.array == "default") {
      console.log(obj[i]);
    } else if (config.array == "ordered")
      console.log(misc.arrayKeyValue(obj[i]));
  }
};

export default arrayConsole;

//notes:
//config is this.config
