const osolog = require("./lib/logR.js");
var colors = require("colors");

const {
  jsonObject,
  objectPerson,
  stringExample,
  arrayNumbers,
  arrayMixed,
  arrayStrings,
  noTemplateSimpleObject,
  mDimensionsArray,
  twoDimensionsArray
} = require("./mockData.js");

const log = new osolog();

log.R(objectPerson);
