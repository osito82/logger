//const log = require("./functions");
//import {log} =
//import { lowerCase } from "lodash";
import * as logger from "./functions.js";
import {
  objectPerson,
  stringExample,
  arrayNumbers,
  arrayStrings
} from "./mockData.js";

//CONFIGURATION OBJECT
const confR_obj = {
    array: "simple"
}

const log = new logger.R(confR_obj);


log.name='s'
log.R('hola')
log.R();
log.R(arrayNumbers);
log.R(arrayStrings);
log.R(stringExample, stringExample);
log.R("hola");


