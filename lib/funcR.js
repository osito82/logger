import * as misc from "../lib/misc.js";
import funcs from "../types/functions.js";
import { functionIsEmpty } from "../types/functionIsEmpty.js";
import * as localcrypto from "../functions/crypto.js"
import _ from "lodash";

//import colors from "colors";
//var colors = require('colors');

class Functions {
 

  md5(string) {
    console.log('md5' +  localcrypto.md5(string))
    // _.assign(this.logFunctions, this.logFunctionsDefault);
    // _.assign(this.logFunctions, intObj);
    // return this;
  }

}

export { Functions };
