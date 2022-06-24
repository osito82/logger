import * as misc from "../misc.js";

//checking if it is a string
const numberConsole = (obj, config, i) => {

  if (misc.countNumberKeys(obj) >= 1) {
    if (config.number == "default") {
      console.log(obj[i]);
    }
  }
};

export default numberConsole;
