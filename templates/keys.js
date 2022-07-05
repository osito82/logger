import * as misc from "../lib/misc.js";
import _ from "lodash";
import colors from "colors";

const templatekeys = (obj, logArguments) => {
  const keycolor = logArguments.colors.key;

  const valuecolor = logArguments.colors.value;

  let date =
    logArguments.template.date == true ? `"Date":"${misc.getDate()}",` : "";
  let title = !_.isEmpty(logArguments.template.title)
    ? `"title":"${logArguments.template.title}",`
    : "";

  let braketsContent = "";
  colors.setTheme({
    customKey: keycolor,
    customValue: valuecolor
  });

  for (let [key, val] of Object.entries(obj)) {
    val = JSON.stringify(val);

    if (logArguments.colors === "default") {
      braketsContent = braketsContent + `"${key}":"${val}",`;
    }

    if (logArguments.colors !== "default") {
      braketsContent =
        braketsContent + `"${key.customKey}":"${val.customValue}",`;
    }
  }

  let consoleOut = `{${title}${date}${braketsContent}}`;

  return consoleOut.replace(/",}(\s+)?$/, "}");
};

export default templatekeys;
