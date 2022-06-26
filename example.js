import * as logger from "./logR.js";
import {
  jsonObject,
  objectPerson,
  stringExample,
  arrayNumbers,
  arrayMixed,
  arrayStrings,
} from "./mockData.js";

//CONFIGURATION OBJECT
const configLog = {
  logger: true,
  //  array: "ordered",
  string_caps: true,
  multiarray: "custom",
  //multiarray:'table'
  //object:'default',
  //object:'string',
  // object:'table',
};

const log = new logger.R(configLog);

log.R("hola");
log.R([
  [1, 2],
  [2, 5],
  [5, 5],
]);

log.R([
  [1, 2],
  [2, 5, [1, 2], 5],
  [5, 5],
]);

log.R();
log.R(55665);
log.R(true);
log.R(arrayNumbers);
log.R(arrayStrings);
log.R(stringExample, stringExample);
log.R("hola", "ce");
log.R(stringExample);
log.R(arrayMixed);

log.R(null, jsonObject, arrayMixed);

console.log(null, jsonObject, arrayMixed);

log.R(objectPerson);

log.R(jsonObject);
//console.table({firstname:"John", lastname:"Doe"});
