export const whatTypeIs = (object) => {
  return typeof object;
};

// return typeof message;
export const countNumberKeys = (object) => {
  return Object.keys(object).length;
};

export const isArray = (object) => {
  return Array.isArray(object);
  //return Object.keys(object).length;
};

export const hasPropertyInObject = (object, propertyName) => {
  return object.hasOwnProperty(propertyName);
  //return Object.keys(object).length;
};

//returns name and value of variable. Formart: 0: 45, 1: 58,
export const arrayKeyValue = (obj) => {
  let coma, container = "";
  //   console.log('------------', obj)
  Object.entries(obj).forEach(([key, value]) => {
    if (obj.length > key+1) {
      coma = ",";
    } else {
      coma = "";
    }

    container = container + `${key}: ${value}${coma} `;

    // console.log( key + ":", value)
  });

  return 'Array: ' + container;
  //  console.log())
};

export const variableName = (obxj) => {
  //   console.log('------------', obj)
  // let memo =  Object.getPrototypeOf(obj)
  //Object.entries(obj).forEach(([key, value]) => {
  console.log({ obxj });
  // });
  //  console.log())
};
