//import * as misc from "./misc.js";
import funcs from "./functions/functions.js";
import { functionIsEmpty } from "./functions/functionIsEmpty.js";
import _ from "lodash";

class R {
  config = {
    logger: true,
    array: "default",
    string: "default",
    string_caps: false
  };

  constructor(configObject = this.config) {
    _.assign(this.config, configObject);
  }

  R(...obj) {
    if (this.config.logger === true) {
      let _emptyFunction = false;
      if (functionIsEmpty(obj)) {
        _emptyFunction = true;
      }

      //looping ...obj
      for (let i = 0; i <= obj.length; i++) {
        //checking if it is an array
        funcs.arrayConsole(obj, this.config, i);

        //checking if it is a multi-Dimensional Array
        funcs.multiDimensionArrayConsole(obj, this.config, i);

        //checking if it is a string
        funcs.stringConsole(obj, this.config, i);
      } //for
    } // if logger swich conf
  } //function R
} //class R

export { R };
