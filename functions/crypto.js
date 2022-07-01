import crypto from "crypto";

export const md5 = (string) => {
  let hash = crypto.createHash("md5").update(string).digest("hex");

  return hash;
};
