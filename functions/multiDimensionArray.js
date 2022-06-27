import * as misc from "../misc.js";

//checking if it is an array

const multiDimensionArrayConsole = (obj, config, i) => {
  if (misc.countNumberKeys(obj) >= 1) {
    console.log(config.multiarray);

    if (config.multiarray == "default") {
      console.log(obj[i]);
    } else if (config.multiarray == "table") {
      console.table(obj);
    } else if (config.multiarray == "custom") {
      //.  print(obj);
    }
  }
};

export default multiDimensionArrayConsole;

//notes:
//config is this.config
