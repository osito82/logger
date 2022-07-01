import * as misc from "../lib/misc.js";
import * as logger from "../lib/logR.js";
import funcs from "../types/functions.js";
import { functionIsEmpty } from "../types/functionIsEmpty.js";
import * as localcrypto from "../functions/crypto.js";
import _ from "lodash";

//import colors from "colors";
//var colors = require('colors');
//  let configLog
//let logArguments = {};
class Functions {
  //   constructor() {

  //   }


 // const log = new logger.R();


//log.R(objectPerson);


  Funcs({name}, ...obj) {
     const log = new logger.R();
    //const configLog = {}
    console.log('n---------------------ame')
   // console.log(function)
    if (name === "md5") {
      console.log("md5" + obj[1]);
   //    log.R(localcrypto.md5(obj[1]));
    }
    // _.assign(this.logFunctions, this.logFunctionsDefault);
    // _.assign(this.logFunctions, intObj);
    // return this;
  }
}

export { Functions };
