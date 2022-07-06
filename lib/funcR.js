
const logger = require("../lib/logR.js")
const localcrypto = require("../functions/crypto.js")
const _ = require('lodash');

class Functions {
  constructor() {}

  

  Funcs({ name }, ...obj) {
    const log = new logger.R();

    if (name === "md5") {
      log.R(localcrypto.md5(obj.toString()));
    }
  }
}

module.exports =  {Functions} ;
