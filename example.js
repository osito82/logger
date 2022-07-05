import * as logger from "./lib/logR.js";
import colors from "colors";

import {
  jsonObject,
  objectPerson,
  stringExample,
  arrayNumbers,
  arrayMixed,
  arrayStrings,
  noTemplateSimpleObject,
  mDimensionsArray,
  twoDimensionsArray
} from "./mockData.js";

//CONFIGURATION OBJECT
const configLog = {
  logger: true,
  enableColors: true,

  array: "default",
  // array:'default_table',
  // array:'ordered',

  string_caps: false,

  multiarray: "custom_table"
  //multiarray: "defualt_table",
  //multiarray:'table'

  //object:'default',
  //object:'string',
  //object:'table',
};

const log = new logger.R(configLog);

log.R();
log.R(55665);
log.R(true);
log.R(stringExample, stringExample);
log.R("hola", "ce");
log.R(stringExample);

log.R(null, jsonObject, arrayMixed);

//log.R(objectPerson);

//console.log(['hola'])

//log.R(jsonObject);
//console.table({firstname:"John", lastname:"Doe"});

log.R([
  [1, 2, 4, 60],
  [1, "2000", 4, 6],
  [1, 2, "guillermo", 6]
]);
log.R(undefined);
log.R([
  [1, { casa: 5 }],
  [2, [1, 2]],
  [undefined, 5]
]);

//log.Args({ head: ["H1", "H2", "H3", "H4"] }).R(noTemplateSimpleObject);
//log.Args({ head: ["H5", "H6", "H7", "H8"] }).R(noTemplateSimpleObject);

//console.log('--------------------------------------------------------------------')
log.Args({ head: ["H1", "88", "88", "88"] }).R(twoDimensionsArray);
log.R(twoDimensionsArray);
log.Args({ head: ["H1", "H2", "H3", "66"] }).R(twoDimensionsArray);
//log.R(twoDimensionsArray).Args({ head: ["H1", "H2", "H3", "H4"] });
log.R(mDimensionsArray);

//todo: find a way to filter args according to the object

//  log.Args({ colors: ["rainbow", "blue", "bgGreen"] }).R("batman forever");
//log.Args({ colors: ["blue"] }).R("batman forever");
log.R("MES DE:");
log.Args({ colors: ["rainbow"] }).R(1111111111111111);
log.R(22222222222222);
log.R(arrayMixed);
log.R(arrayNumbers);

log.R(arrayStrings); //en arrays no colors
log
  .Args({ colors: { key: ["red", "bgWhite"], value: ["blue", "bgWhite"] } })
  .R(objectPerson);
log.R(objectPerson);

//log.md5('sss')

log.Funcs({ name: "md5" }, "hola");
log.R(noTemplateSimpleObject);
//log.();
log
  .Args({ colors: { key: ["red", "bgWhite"], value: ["blue", "bgWhite"] } })
  .Template({ name: "brakets", date: true, title: "objectPerson" })
  .R(objectPerson);

log
  .Args({ colors: { key: ["red", "bgWhite"], value: ["blue", "bgWhite"] } })
  .Template({ name: "keys", date: true, title: "objectPerson" })
  .R(objectPerson);
