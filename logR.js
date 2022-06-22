import * as misc from "./misc.js";
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

    //checking if it is an array
    if (misc.countNumberKeys(obj) >= 1 && misc.isArray(obj[0])) {
      if (this.config.array == "default") {
        console.log(obj[0]);
      } else if (this.config.array == "ordered")
        console.log(misc.arrayKeyValue(obj[0]));
    }

    //checking if it is a string
    if (misc.countNumberKeys(obj) >= 1 && typeof obj[0] == "string") {
      if (this.config.string_caps == false) {
        console.log(obj[0]);
      } else if (this.config.string_caps == true) {
        console.log(misc.toUpperCaps(obj[0]));
      }
    }
  } //function R
} //class R

export { R };
