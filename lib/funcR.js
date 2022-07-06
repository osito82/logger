
const osolog = require("../lib/logR.js")



//const osolog = require("./lib/logR.js");
const localcrypto = require("../functions/crypto.js")
const _ = require('lodash');

module.exports = class Functions {
  constructor() {}

  //yes

  Funcs({ name }, ...obj) {

    const log = new osolog({})
//var log = new osolog();

//console.log(log, '88888888888')
//const log = new R(configuration)
//log.R('x')



   // const log = new osolog({});
    //var log = new osolog.R(configuration)
    if (name === "md5") {
      log.R(localcrypto.md5(obj.toString()));
    }
  }
}

//module.exports =  Functions;
