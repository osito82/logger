import * as misc from "../lib/misc.js";
import _ from "lodash";
import templatebrakets from "../templates/brakets.js";
import templatekeys from "../templates/keys.js";


const objectConsole = (obj, config, i, logArguments) => {

  if (misc.countNumberKeys(obj) >= 1) {
    let template = _.get(logArguments, "template", "default");

    if (!template || template == "default") {
      if (config.object == "default") {
        console.log(obj[i]);
      } else if (config.object == "table") {
        console.table(obj[i]);
      } else if (config.object == "string") {
        console.log(JSON.stringify(obj[i]));
      }
    }

    //USING TEMPLATES FOR OBJECTS
    else if (template.name == "brakets") {
      console.log(templatebrakets(obj[i], logArguments));
    }
    else if (template.name == "keys") {
      console.log(templatekeys(obj[i], logArguments));
    }
  }
};

export default objectConsole;
