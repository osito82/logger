import * as misc from "../lib/misc.js";
import Table from "cli-table2";

const multiDimensionArrayConsole = (obj, config, i) => {
  var clitable2 = new Table();
  //{    head: ['TH 1 label', 'TH 2 label']   }
  if (misc.countNumberKeys(obj) >= 1) {
    if (config.multiarray == "default") {
      console.log(obj[i]);
    } else if (config.multiarray == "default_table") {
      console.table(obj[i]);
    } else if (config.multiarray == "custom_table") {
      console.log(misc.printTable(obj[i], clitable2));
    }
  }
};

export default multiDimensionArrayConsole;
