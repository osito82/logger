import * as misc from "../lib/misc.js";
import funcs from "../types/functions.js";
import { functionIsEmpty } from "../types/functionIsEmpty.js";
import _ from "lodash";
import { Functions } from "./funcR.js";

import colors from "colors";
//var colors = require('colors');

class R extends Functions 
{
  config = {
    logger: true,
    enableColors: false,
    boolean: "default",
    number: "default",
    array: "default",
    null: "default",
    object: "default",
    multiarray: "default",
    string: "default",
    string_caps: false,
  };

  // logFunctionsDefault = {
  //   hash_md5: false,
  // };

  //Properties for each log
  logArgumentsDefault = {
    head: "default",
    colors: "default",
  };

  logArguments = {};
  // logFunctions = {};
//constructor({id = 'defaultId', options = { op2:'0'}} = {}){
  constructor(configObject={}) {
    // = this.config
   // constructor({configObject = this.config}= {}) {
   super(Functions);
   configObject= _.assign(this.config, configObject);
  }



  Args(intObj) {
    _.assign(this.logArguments, this.logArgumentsDefault);
    _.assign(this.logArguments, intObj);
    return this;
  }

  R(...obj) {


    _.assign(this.logArguments, this.logArgumentsDefault);


    if (this.config.enableColors === true) {
      colors.enable();
    } else {
      colors.disable();
    }

    if (this.config.logger === true) {
      let _emptyFunction = false;
      if (functionIsEmpty(obj)) {
        _emptyFunction = true;
      }

      for (let i = 0; i < obj.length; i++) {
        switch (misc.objectIdentifier(obj[i])) {
          case "NULL":
            funcs.nullConsole(obj, this.config, i);
            break;
          case "STRING":
            funcs.stringConsole(obj, this.config, i, this.logArguments);
            break;
          case "NUMBER":
            console.log(this.config)
            console.log(this.logArguments)
            funcs.numberConsole(obj, this.config, i, this.logArguments);
            break;
          case "BOOLEAN":
            funcs.booleanConsole(obj, this.config, i);
            break;
          case "UNDEFINED":
            funcs.undefinedConsole(obj, this.config, i);
            break;
          case "ARRAY":
            funcs.arrayConsole(obj, this.config, i);
            break;
          case "MULTI_ARRAY":
            funcs.multiDimensionArrayConsole(
              obj,
              this.config,
              i,
              this.logArguments
            );
            break;
          case "OBJECT":
            funcs.objectConsole(obj, this.config, i, this.logArguments);
            break;
          case null:
            console.log("we are working hard on null!");
            break;
          default:
            console.log("wow we have something weird here!");
            break;
        }
      }
    }
    // console.log(this.logArguments, '0021')
    _.assign(this.logArguments, this.logArgumentsDefault);
    // _.assign(this.logFunctions, this.logFunctionsDefault);

    // console.log(this.logArguments, '0021')
    return this;
  }
}

export { R };
