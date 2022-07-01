import _ from "lodash";

class Functions {
  Funcs(...obj) {
    if (obj[0] === "md5") {
      console.log("md5" + obj[1]);
    }
  }
}

export { Functions };
