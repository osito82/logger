var misc = require('../lib/misc')
var _ = require('lodash');
var colors = require ('colors')

//const RESERVED_KEYS = ["___title", "___template", "___date"];

const templatebrakets = (obj, logArguments) => {
  // let template = _.get(logArguments, "template", "default");

  const keycolor = logArguments.colors.key;

  const valuecolor = logArguments.colors.value;

  let date = logArguments.template.date == true ? `[${misc.getDate()}]` : "";
  let title = !_.isEmpty(logArguments.template.title)
    ? `[${logArguments.template.title}]`
    : "";

  let braketsContent = "";
  colors.setTheme({
    customKey: keycolor,
    customValue: valuecolor
  });

  for (let [key, val] of Object.entries(obj)) {
    val = JSON.stringify(val);

    if (logArguments.colors === "default") {
      braketsContent = braketsContent + `[${key}:${val}]`;
    }

    if (logArguments.colors !== "default") {
      braketsContent = braketsContent + `[${key.customKey}:${val.customValue}]`;
    }
  }

  let consoleOut = `${title}${date}${braketsContent}`;

  return consoleOut;
};

exports.templatebrakets= templatebrakets;
