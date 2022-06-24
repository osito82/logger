import * as misc from "../misc.js";

//checking if it is an array

//console.log("entrado multi");

const multiDimensionArrayConsole = (obj, config, i) => {

//console.log(obj[i])
  
  if (misc.countNumberKeys(obj) >= 1) {




  //console.log('-------------',obj[i])

 // console.log("has 2+ dimensions");
  if (config.multiarray == "default") {
    console.log(obj[i]);
  } else if (config.multiarray == "table")
  console.table(obj) 
   }
};


//console.log(multiDimensionArrayConsole())
export default multiDimensionArrayConsole;

//notes:
//config is this.config
