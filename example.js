import * as logger from "./logR.js";
import {
  objectPerson,
  stringExample,
  arrayNumbers,
  arrayStrings
} from "./mockData.js";

//CONFIGURATION OBJECT
const confR_obj = {
  logger:true,
  //  array: "ordered",
  string_caps: true
}

const log = new logger.R(confR_obj);

// log.name='s'
log.R('hola')
log.R([[1,2], [2,5], [5,5]])



// 
// log.R();
//log.R(arrayNumbers);
// log.R(arrayStrings);
// log.R(stringExample, stringExample);
// log.R("hola", 'ce');
// log.R(stringExample)


