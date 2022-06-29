import * as misc from "../lib/misc.js";
import colors from "colors";
import _ from "lodash";

const stringConsole = (obj, config, i, logArguments) => {
  if (logArguments.colors != "default") {
    _.assign(logArguments, { colors: logArguments.colors });
    
    colors.setTheme({
      custom: logArguments.colors
    });
  }
  else {
    colors.setTheme({
      custom: 'reset'
    });
  }

  if (misc.countNumberKeys(obj) >= 1) {
    if (config.string_caps == false) {
      console.log(obj[i].custom);
    } else if (config.string_caps == true) {
      console.log(misc.toUpperCaps(obj[i].custom));
    }
  }
};

export default stringConsole;
