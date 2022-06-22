import * as misc from "../misc.js";

//checking if it is a string
const stringConsole = (obj, config, i) => {
  if (misc.countNumberKeys(obj) >= 1 && typeof obj[i] == "string") {
    if (config.string_caps == false) {
      console.log(obj[i]);
    } else if (config.string_caps == true) {
      console.log(misc.toUpperCaps(obj[i]));
    }
  }
};

export default stringConsole;
