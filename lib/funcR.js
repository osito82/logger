const localcrypto = require("../functions/crypto.js");
const _ = require("lodash");

class Functions {
  constructor() {}

  Funcs({ name }, ...obj) {
    if (name === "md5") {
      console.log(localcrypto.md5(obj.toString()));
    }
  }
}

module.exports = Functions;

