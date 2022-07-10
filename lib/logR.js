const misc = require("./misc");
const funcs = require("../types/functions");
const md5 = require("./funcLib");

var { functionIsEmpty } = require("../types/functionIsEmpty.js");
const _ = require("lodash");

const Functions = require("./funcLib");

var colors = require("colors");

class R {
  //extends Functions
  constructor(configObject = {}) {
    //super(Functions);
    configObject = _.assign(this.config, configObject);
    _.assign(this.logArguments, this.logArgumentsDefault);
  }

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
    string_caps: false
  };

  //Properties for each log
  logArgumentsDefault = {
    head: "default",
    colors: "default",
    template: "default"
  };

  logArguments = {};

  Funcs(name, ...intObj) {
  //  Funcs(intObj) {
    // if (name === "test") {
    //   console.log('osolog');
    // }

    // if (name === "md5") {
    // return (md5(obj));
    // }
    _.assign(this.logArguments, { funcs: intObj });
    console.log(this.logArguments, '45484548 ----')
    return this;
    //return this
  }

  Args(intObj) {
    _.assign(this.logArguments, this.logArgumentsDefault);
    _.assign(this.logArguments, intObj);

    return this;
  }

  Template(intObj) {
    _.assign(this.logArguments, { template: intObj });
    return this;
  }

  R(...obj) {
    if (this.config.enableColors === true) {
      colors.enable();
    } else {
      colors.disable();
    }

    console.log('-------12125---------', misc.hasPropertyInObject(this.logArguments, "funcs"))
    if (this.config.logger === true) {
      let _emptyFunction = false;
      if (
        functionIsEmpty(obj, this.logArguments) &&
        !misc.hasPropertyInObject(this.logArguments, "funcs")
      ) {
        _emptyFunction = true;
      }

      for (let i = 0; i < obj.length; i++) {
        switch (misc.objectIdentifier(obj[i])) {
          case "NULL":
            funcs.nullConsole(obj, this.config, i);
            break;

          case "NUMBER":
            funcs.numberConsole(obj, this.config, i, this.logArguments);

            break;
          case "STRING":
            funcs.stringConsole(obj, this.config, i, this.logArguments);
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
          default:
            console.log("Not detected!");
            break;
        }
      }
    }

    _.assign(this.logArguments, this.logArgumentsDefault);

    return this;
  }
}

module.exports = R;
