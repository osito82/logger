import * as misc from "./misc.js";
import { functionIsEmpty } from "./functions/functionIsEmpty.js";
import _ from "lodash";

class R {


  defaultConfigObject = {
    array: "default",
    string: "default"
}


  constructor(config = this.defaultConfigObject) {
   // this.defaultConfigObject = config;

    console.log("------------------", config);
    console.log("------------------", this.defaultConfigObject);
    
  }

  //console.log

  configR(objConf) {
    //const configR =  (objConf)=> {
    // var novoovo = _.assign(conf_R, objConf);
    //console.log("??????????????????????", novoovo);
    // const cloneStringed = _.cloneDeep(novoovo);
    // console.log('cloneStringed', cloneStringed)
    // memo = "sssssssss"
    // memo = JSON.stringify(cloneStringed);
    //   conf_R = JSON.parse(JSON.stringify(novoovo));
    console.log("**************", objConf);
    // memo = JSON.stringify(objConf);
    // console.log("-------------------------", memo);
    //  Object.assign(conf_R, objConf);
    // return objConf
    return objConf;
  }
  //console.log('------------', (configR()))

  //configR()
  //var updatedConfObject = {};
  //memo = 'adios'
  //console.log("-------------------------", configR);
  //console.log("---------0021----------------", memo);
  //console.log("-------------------------", conf_R);
  //console.log("*************************", updatedConfObject);

  R(...obj) {
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
    }
  }
}
export { R };
