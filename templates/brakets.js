import * as misc from "../misc.js";
import _ from "lodash";

const logR_RESERVED_KEYS = ["__title", "__template", "__date"];

const templatebrakets = (obj) => {
  let date = obj.__date == true ? `[${misc.getDate()}]` : "";
  let title = !_.isEmpty(obj.__title) ? `[${obj.__title}]` : "";

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
