import * as misc from "../lib/misc.js";

const arrayConsole = (obj, config = {}, i) => {
  if (
    misc.countNumberKeys(obj) >= 1 &&
    misc.isArray(obj[i]) &&
    !misc.isMultiDimensionArray(obj[i])
  ) {
    if (config.array == "default") {
      console.log(obj[i]);
    } else if (config.array == "ordered") {
      console.log(misc.arrayKeyValue(obj[i]));
    } else if (config.array == "default_table") {
      console.table(obj[i]);
    }
  }
};

export default arrayConsole;
