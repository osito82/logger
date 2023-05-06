var misc = require('../lib/misc.js');
var Table = require('cli-table3')


const multiDimensionArrayConsole = (obj, config, i, logArguments) => {
  
  if (logArguments.head == "default") {
    logArguments = [];
  }
  var clitable3 = new Table(logArguments);
  
  if (misc.countNumberKeys(obj) >= 1) {
    if (config.multiarray == "default") {
      console.log(obj[i]);
    } else if (config.multiarray == "default_table") {
      console.table(obj[i]);
    } else if (config.multiarray == "custom_table") {
      console.log(misc.printTable(obj[i], clitable3));
    }
  }
};

module.exports = multiDimensionArrayConsole;
