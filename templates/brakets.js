import * as misc from '../lib/misc.js'
import _ from "lodash";

const logR_RESERVED_KEYS = ["___title", "___template", "___date"];

const templatebrakets = (obj) => {
  let date = obj.___date == true ? `[${misc.getDate()}]` : "";
  let title = !_.isEmpty(obj.___title) ? `[${obj.___title}]` : "";

  let braketsContent = "";

  for (let [key, val] of Object.entries(obj)) {
    if (misc.whatTypeIs(val) == "object") {
      val = JSON.stringify(val);
    }

    if (!logR_RESERVED_KEYS.includes(key)) {
      braketsContent = braketsContent + `[${key}:${val}]`;
    }
  }

  let consoleOut = `${title}${date}${braketsContent}`;

  return consoleOut;
  
};

export default templatebrakets;
