var _ = require('lodash');

exports.functionIsEmpty = (object) => {
  console.log('-------', object)
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
  }
  finally {
    return _isEmpty
  }
}; 
