import * as misc from "../misc.js";
import Table from "cli-table2";


//readme: This function only prints 2 dimension arrays
//Enbeded arrays or objects will be stringyfy
var displayBoard = (board, clitable2) => {
  for (var i = 0; i < board.length; i++) {
    var buffer = [];
    for (var x = 0; x < board[i].length; x++) {
      if (misc.isArray(board[i][x])) {
        buffer.push("[" + board[i][x].toString() + "]");
      } else if (misc.whatTypeIs(board[i][x]) == "object") {
        var val = JSON.stringify(board[i][x]);
        buffer.push(val);
      } else {
        buffer.push(board[i][x]);
      }
    }
    clitable2.push(buffer);
  }
  console.log(clitable2.toString());
};

const multiDimensionArrayConsole = (obj, config, i) => {
  var clitable2 = new Table();
  if (misc.countNumberKeys(obj) >= 1) {
    if (config.multiarray == "default") {
      console.log(obj[i]);
    } else if (config.multiarray == "default_table") {
      console.table(obj);
    } else if (config.multiarray == "custom_table") {
      displayBoard(obj[i], clitable2);
    }
  }
};

export default multiDimensionArrayConsole;

//notes:
//config is this.config
