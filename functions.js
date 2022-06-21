import * as misc from "./misc.js";
import { functionIsEmpty } from "./functions/functionIsEmpty.js";
import _ from "lodash";
//configR()
var memo = "";
var conf_R = {
  array: "xxx", // simple, extended
  color: false
};
//configR()

//var memo='';

function configR(objConf) {
  var novoovo = _.assign(conf_R, objConf);
  //console.log("??????????????????????", novoovo);
  const cloneStringed = _.cloneDeep(novoovo);
  // memo = "sssssssss"
  memo = JSON.stringify(cloneStringed);
  //   conf_R = JSON.parse(JSON.stringify(novoovo));
  // console.log(objConf)
  // console.log("-------------------------", memo);
  //  Object.assign(conf_R, objConf);
  // return objConf
  return objConf;
}

//configR()
//var updatedConfObject = {};
//memo = 'adios'
//console.log("-------------------------", configR);
console.log("-------------------------", memo);
//console.log("-------------------------", conf_R);
//console.log("*************************", updatedConfObject);

function R(...obj) {
  //conf_R.array
  let _emptyFunction = false;
  if (functionIsEmpty(obj)) {
    _emptyFunction = true;
  }

  //checking if obj is an array
  if (
    _emptyFunction === false &&
    misc.countNumberKeys(obj) === 1 &&
    misc.isArray(obj[0])
  ) {
    console.log(obj[0]);
    console.log(misc.arrayKeyValue(obj[0]));
    // console.log((obj[0]))
    // console.log('checlimg os array', )
    //  console.log('is array', Array.isArray(obj[0]))
  }

  //  console.log('0022', obj)
  //console.log('0021', misc.variableName(obj))
}

export { configR, R };

// module.exports = {
//   configR: configR,
//  // otherFunction: otherFunction,
// };
