import * as misc from "../lib/misc.js";
import _ from "lodash";
import colors from "colors";

const RESERVED_KEYS = ["___title", "___template", "___date"];

const templatebrakets = (obj, logArguments) => {
  const keycolor = logArguments.colors.key;

  const valuecolor = logArguments.colors.value;

  let date = obj.___date == true ? `[${misc.getDate()}]` : "";
  let title = !_.isEmpty(obj.___title) ? `[${obj.___title}]` : "";

  let braketsContent = "";
  colors.setTheme({
    customKey: keycolor,
    customValue: valuecolor,
  });

  for (let [key, val] of Object.entries(obj)) {
    if (misc.whatTypeIs(val) == "object") {
      val = JSON.stringify(val);
    }

    if (!RESERVED_KEYS.includes(key) && logArguments.colors === "default") {
      braketsContent = braketsContent + `[${key}:${val}]`;
    }

    if (!RESERVED_KEYS.includes(key) && logArguments.colors !== "default") {
      braketsContent = braketsContent + `[${key.customKey}:${val.customValue}]`;
    }
  }

  let consoleOut = `${title}${date}${braketsContent}`;

  return consoleOut;
};

export default templatebrakets;
