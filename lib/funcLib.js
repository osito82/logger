const localcrypto = require("../functions/crypto.js");
const _ = require("lodash");

const osolog = require("./logR.js");

//const log = new osolog();

//log.R('objectPerson');

const md5 = (number) =>{
return localcrypto.md5(number.toString())
}


module.exports = md5;

