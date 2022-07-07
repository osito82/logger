//This file only contains some mocks 

exports.noTemplateSimpleObject = {
  name: "Bob",
  lastname: "Patino",
  age: 45,
  nickname: "Lau",
  gender: "male",
  friends: ["Jamime", "Roberto", "Ana"],
  country: "Costa Rica",
  phone: "2285-6421",
  email: "info@domain.com",
  phones: { home: "222336789", cell: "22334455" },
  website: "https://www.yahoo.com"
};

exports.objectPerson = {
  name: "Mario",
  lastname: "Soto",
  bool:true,
  age: 45,
  friends: ["jamime", "roberto", "luis"],
  nickname: "Lau",
  gender: "male",
  country: "Costa Rica",
  phone: "2233-6421",
  email: "info@domain.com",
  website: "https://www.yahoo.com"
};

exports.jsonObject = {
  name: "Mario",
  named_object: { name: "guillermo", phone: "678-555-8888" },
  lastname: "Hernandez",
  age: 45
};

exports.stringExample = "I am an string";
exports.arrayNumbers = [
  10, 58, 566, 454, 1, 85002, 125, 45, 798, 69510, 58, 566, 454, 1, 85002, 125,
  45, 798, 695
];
exports.arrayStrings = [
  "cat",
  "dog",
  "horse",
  "zebra",
  "machache",
  "elephant",
  "rhino",
  "ant",
  "bird"
];
exports.arrayMixed = [
  15154,
  "Costa Rica",
  6595959,
  "Panama",
  5594598458,
  "Honduras"
];

exports.mDimensionsArray = [
  ["0, 0", "1, 0", "2, 0", "3, 0", "4, 0"],
  ["0, 1", "1, 1", "2, 1", "3, 1", "4, 1"],
  ["0, 2", "1, 2", "2, 2", "3, 2", "4, 2"],
  ["0, 3", "1, 3", "2, 3", "3, 3", "4, 3"],
  ["0, 4", "1, 4", "2, 4", "3, 4", "4, 4"]
];

exports.twoDimensionsArray = [
  [1, 2, 4, 60],
  [1, "2000", 4, 6],
  [1, 2, "cat", 6]
];
