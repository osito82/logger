import * as logger from "./lib/logR.js";
import {
  jsonObject,
  objectPerson,
  stringExample,
  arrayNumbers,
  arrayMixed,
  arrayStrings
} from "./mockData.js";

//CONFIGURATION OBJECT
const configLog = {
  logger: true,
  //  array: "ordered",
  //array: "default_table",
  array: 'custom_table',
  string_caps: true,
  multiarray: "custom_table"
  //multiarray: "defualt_table",
  //multiarray:'table'
  //  object:'default',

  
  //object:'string',
  // object:'table',
 // object:"brakets",

   
    
        
    
   
};

const log = new logger.R(configLog);

log.R("hola");

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

//log.R(objectPerson);
log.R(objectPerson);
//console.log(['hola'])

//log.R(jsonObject);
//console.table({firstname:"John", lastname:"Doe"});

log.R([
  [1, 2, 4, 60],
  [1, "2000", 4, 6],
  [1, 2, "guillermo", 6]
]);
log.R(undefined)
log.R([
  [1, { casa: 5 }],
  [2, [1, 2]],
  [undefined, 5]
]);
