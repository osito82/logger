import * as logger from "../lib/logR.js";

import * as localcrypto from "../functions/crypto.js";
import _ from "lodash";

class Functions {
  constructor() {}

  

  Funcs({ name }, ...obj) {
    const log = new logger.R();

    if (name === "md5") {
      log.R(localcrypto.md5(obj.toString()));
    }
  }
}

export { Functions };
