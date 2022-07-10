var _ = require("lodash");
const misc = require("../lib/misc");

exports.functionIsEmpty = (object) => {
  let _isEmpty = true;
  try {
    if (_.isEmpty(object)) {
      throw {
        errorMessage: "Function Log.R has no arguments"
      };
    } else {
      _isEmpty = false;
    }
  } catch (e) {
    console.log(e);
  } finally {
    return _isEmpty;
  }
};
