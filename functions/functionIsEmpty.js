import lodash from "lodash";

export const functionIsEmpty = (object) => {
  let _isEmpty = true;
  try {
    if (lodash.isEmpty(object)) {
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
