import * as misc from "../misc.js";

//checking if it is an array

//console.log("entrado multi");

const multiDimensionArrayConsole = (obj, config, i) => {
  //console.log(obj[i])

  function print(arr)
  {
  //var console = document.getElementById('mydiv');
  var msg = '';
  for(var i=0;i<arr.length;i++)
  {
      for(var j=0;j<arr[0].length;j++)
          msg += arr[i][j];
      msg += '<br />';
  }
console.log(msg);
  }

  if (misc.countNumberKeys(obj) >= 1) {
    //console.log('-------------',obj[i])
  //  console.log('---------------------------------')
    console.log(config.multiarray);


    if (config.multiarray == "default") {
      console.log(obj[i]);
    } else if (config.multiarray == "table") {
      console.table(obj);
    } else if (config.multiarray == "custom") {
      print(obj);
    }
  }
};

//console.log(multiDimensionArrayConsole())
export default multiDimensionArrayConsole;

//notes:
//config is this.config
