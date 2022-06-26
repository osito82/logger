import * as misc from "../misc.js";
import _ from "lodash";
import templatebrakets from "../templates/brakets.js";

const objectConsole = (obj, config, i) => {
  if (misc.countNumberKeys(obj) >= 1) {
    if (config.template.name == "default") {
      if (config.object == "default") {
        console.log(obj[i]);
      } else if (config.object == "table") {
        console.table(obj[i]);
      } else if (config.object == "string") {
        console.log(JSON.stringify(obj[i]));
      }
    }

    //USING TEMPLATES FOR OBJECTS
    else if (config.template.name == "brakets") {
      console.log(templatebrakets(obj, config, i));
    }
  }
};

export default objectConsole;

//notes:
//config is this.config
