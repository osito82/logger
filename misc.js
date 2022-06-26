export const whatTypeIs = (object) => {
  return typeof object;
};

// return typeof message;
export const countNumberKeys = (object) => {
  return Object.keys(object).length;
};

export const isArray = (object) => {
  return Array.isArray(object);
};

export const getDate =()=>{
  
var today= new Date().toLocaleString('en-US', { timeZone: 'UTC' });
return today

}

export const hasPropertyInObject = (object, propertyName) => {
  return object.hasOwnProperty(propertyName);
};

//returns name and value of variable. Formart: 0: 45, 1: 58,
export const arrayKeyValue = (obj) => {
  let coma,
    container = "";
  Object.entries(obj).forEach(([key, value]) => {
    if (obj.length > key + 1) {
      coma = ",";
    } else {
      coma = "";
    }

    container = container + `${key}: ${value}${coma} `;

    // console.log( key + ":", value)
  });

  return "Array: " + container;
  //  console.log())
};

export const variableName = (obxj) => {
  console.log({ obxj });
};

//convert string to UPPER CAPS
export const toUpperCaps = (obxj) => {
  obxj = obxj.toUpperCase();
  return obxj;
};

//check if it is a multidimensional array
//TODO - This algoritm has to be improved. It only check first 2 cases of array in an multi array
export const isMultiDimensionArray = (ax = []) => {
  if (Array.isArray(ax[0]) && Array.isArray(ax[1])) {
    return true;
  } else {
    return false;
  }
};

export const isNUll = (obj) => {
  if (typeof obj !== "undefined" && (typeof obj !== "object" || !obj)) {
    return true;
  } else {
    return false;
  }
};

//checks and identify what kind of object we have to deal with!
export const objectIdentifier = (obj) => {
  if (typeof obj == "string") {
    return "STRING";
  }
  if (typeof obj == "boolean") {
    return "BOOLEAN";
  }

  if (typeof obj === "undefined") {
    return "UNDEFINED";
  }
  if (typeof obj == "number") {
    return "NUMBER";
  }

  if (typeof obj == "object") {
    if (isNUll(obj)) {
      return "NULL";
    } else if (isMultiDimensionArray(obj)) {
      return "MULTI_ARRAY";
    } else if (isArray(obj)) {
      return "ARRAY";
    } else {
      return "OBJECT";
    }
  }
};
