import * as misc from "../lib/misc.js";
import colors from "colors";

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

export default stringConsole;
