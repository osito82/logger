import * as misc from "./misc.js";
import funcs from "./functions/functions.js";
import { functionIsEmpty } from "./functions/functionIsEmpty.js";
import _ from "lodash";

class R {
  config = {
    array: "default",
    string: "default",
    string_caps: false
  };

  constructor(configObject = this.config) {
    _.assign(this.config, configObject);
  }

  R(...obj) {
    let _emptyFunction = false;
    if (functionIsEmpty(obj)) {
      _emptyFunction = true;
    }

    for (let i = 0; i <= obj.length; i++) {
      
      //checking if it is an array
      funcs.arrayConsole(obj, this.config, i);

      //checking if it is a string
      funcs.stringConsole(obj, this.config, i);
    } //for
  } //function R
} //class R

export { R };
