//const log = require("./functions");
//import {log} =
import * as log from "./functions.js";

import {
  objectPerson,
  stringExample,
  arrayNumbers,
  arrayStrings
} from "./mockData.js";
//let memo= null

// var configObj = {
//   array: "simple"
// }

var conf_R = {
    array: "simple"
}

log.configR(conf_R);

log.R();
log.R("perro");
log.R(arrayNumbers);
log.R(arrayStrings);
//log.R(memo);
log.R(stringExample, stringExample);

log.R("hola");

//log.R(arrayAnimals);
//log.R(["a"], ["b"], { hola: 1 });

//log.R(objectPerson, arrayAnimals);
