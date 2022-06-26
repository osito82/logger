import * as misc from "../misc.js";
import _ from "lodash";

const logR_RESERVED_KEYS = ["__title"];

const cBrakets = (obj, config, i) => {
  let __title = _.get(obj[i], "__title");
  //let __date = _.get(obj[i], "__date", false);
  let date = config.template.date == true ? `[${misc.getDate()}]` : '';

  let braketsContent = "";
  for (let [key, val] of Object.entries(obj[i])) {
    if (misc.whatTypeIs(val) == "object") {
      val = JSON.stringify(val);
    }

    if (!logR_RESERVED_KEYS.includes(key)) {
      braketsContent = braketsContent + `[${key}:${val}]`;
    }
  }

  let consoleOut = `[${__title}]${date}${braketsContent}`;

  return consoleOut;
};

const templatebrakets = (obj, config, i) => {
  if (misc.countNumberKeys(obj) >= 1) {
    //  if (config.object == "brakets") {
    console.log(cBrakets(obj, config, i));
    //console.log(JSON.stringify(obj[i]));
    //}
  }
};

export default templatebrakets;
