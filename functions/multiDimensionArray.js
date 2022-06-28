import * as misc from "../misc.js";
import Table from "cli-table2";



var displayBoard = (board, clitable2) => {
  for (var i = 0; i < board.length; i++) {
    var buffer = [];
    for (var x = 0; x < board[i].length; x++) {
      buffer.push(board[i][x]);
    }
    clitable2.push(buffer);
  }
  console.log(clitable2.toString());
  //clitable2 =null
  //clitable2.
};

const multiDimensionArrayConsole = (obj, config, i) => {
  var clitable2 = new Table();
  if (misc.countNumberKeys(obj) >= 1) {
  //  console.log(config.multiarray);

    if (config.multiarray == "default") {
      console.log(obj[i]);
    } else if (config.multiarray == "table") {
      console.table(obj);
    } else if (config.multiarray == "custom") {
      displayBoard(obj[i], clitable2);
    }
  }
};

export default multiDimensionArrayConsole;

//notes:
//config is this.config
