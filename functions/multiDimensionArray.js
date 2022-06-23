import * as misc from "../misc.js";

//checking if it is an array

//console.log("entrado multi");

const multiDimensionArrayConsole = (obj, config, i) => {

//console.log(obj[i])
  
  if (misc.countNumberKeys(obj) >= 1 && misc.isMultiDimensionArray(obj[i])) {
console.log('MULTIDIMENSION 0021', obj) 
  //console.log('-------------',obj[i])

 // console.log("has 2+ dimensions");
  // if (config.array == "default") {
  //   console.log(obj[i]);
  // } else if (config.array == "ordered")
  //   console.log(misc.arrayKeyValue(obj[i]));
  //  }
};

}
//console.log(multiDimensionArrayConsole())
export default multiDimensionArrayConsole;

//notes:
//config is this.config
