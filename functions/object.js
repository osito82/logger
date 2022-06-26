import * as misc from "../misc.js";
import _ from "lodash";
import templatebrakets from "../templates/brakets.js";

const objectConsole = (obj, config, i) => {

  //    console.log('vvvvvvv', obj[i].__template )


  if (misc.countNumberKeys(obj) >= 1) {



    let template = _.get(obj[i], "__template");


    if (!template) {
      if (config.object == "default") {
        console.log(obj[i]);
      } else if (config.object == "table") {
        console.table(obj[i]);
      } else if (config.object == "string") {
        console.log(JSON.stringify(obj[i]));
      }
    }

    //USING TEMPLATES FOR OBJECTS

    else if (template == "brakets") {
      console.log(templatebrakets(obj, config, i));
    }
  }
};

export default objectConsole;

//notes:
//config is this.config
