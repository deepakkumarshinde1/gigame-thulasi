let object = {
  name: "value",
  name123: 1234,
  123: true,
  print: () => {},
  array: [1, 2, 3, 4],
};

// copy this object
let obj = Object.assign({}, object);
let obj1 = { ...object };

// i want to collect all the keys
let keys = Object.keys(object);
let values = Object.values(object);
Object.entries(object); // [["name","value"],["name123", "1234"],["print",()=>{}]]

object.mobile = "8007070845";
object["mobile"] = "8007070845";

let varOne = "mobile";
object[varOne] = "8007070845";
