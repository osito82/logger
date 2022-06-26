import * as misc from "../misc.js";
import _ from "lodash";

const cBrakets = (obj, i) => {
  // console.log(obj[i])
  let __title = _.get(obj[i], "__title");
  let __date = _.get(obj[i], "__date", false);

  //let date = __date == true ? misc.date
  //var elvisLives = Math.PI > 4 ? "Sip" : "Nop";
  let date = __date == true ? misc.getDate() : undefined;
 
 
  let consoleOut = `[${__title}][${date}]`;

  //  if (obj.hasOwnProperty('__title') ){}
  return consoleOut;
};

const objectConsole = (obj, config, i) => {
  if (misc.countNumberKeys(obj) >= 1) {
    if (config.object == "default") {
      console.log(obj[i]);
    } else if (config.object == "table") {
      console.table(obj[i]);
    } else if (config.object == "string") {
      console.log(JSON.stringify(obj[i]));
    } else if (config.object == "brackets") {
      console.log(cBrakets(obj, i));
      //console.log(JSON.stringify(obj[i]));
    }
  }
};

export default objectConsole;

//notes:
//config is this.config
