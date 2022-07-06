const crypton = require("crypto")

exports.md5 = (string) => {
  let hash = crypton.createHash("md5").update(string).digest("hex");

  return hash;
};
