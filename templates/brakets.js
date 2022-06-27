import * as misc from "../misc.js";
import _ from "lodash";

const logR_RESERVED_KEYS = ["__title", "__template", "__date"];

const cBrakets = (obj, i) => {
  // let __title = _.get(obj[i], "__title");
  //let __date = _.get(obj[i], "__date", false);

  let date = obj[i].__date == true ? `[${misc.getDate()}]` : "";
  let title = !_.isEmpty(obj[i].__title) ? `[${obj[i].__title}]` : "";
  //console.log('llllllllllllll', title)

  let braketsContent = "";
  for (let [key, val] of Object.entries(obj[i])) {
    if (misc.whatTypeIs(val) == "object") {
      val = JSON.stringify(val);
    }

    if (!logR_RESERVED_KEYS.includes(key)) {
      braketsContent = braketsContent + `[${key}:${val}]`;
    }
  }

  const consoleOut = `${title}${date}${braketsContent}`;

  return consoleOut;
};

const templatebrakets = (obj, i) => {
  if (misc.countNumberKeys(obj) >= 1) {
    
    console.log(cBrakets(obj, i));

  }
};

export default templatebrakets;
