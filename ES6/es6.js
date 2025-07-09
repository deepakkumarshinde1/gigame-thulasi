// destructuring
let array = [10, 20, 30, 40, 50];
let [n1, n2, ...list] = array;

let obj = {
  name: "deepakkumar",
  address: "Nashik",
};

let { address: city } = obj;
console.log(city);

// template literals
let name = "deepakkumar";
let city1 = "nashik";
let address = "Nashik";
let str = `My name is ${name} and I am from ${city1} and I live in ${address}`;

// object literals
let name1 = "deepakkumar";
let city2 = "nashik";
let address1 = "Nashik";
let obj1 = {
  name1,
  city2,
  address1,
};

// default parameters
function add(a, b = 10) {
  return a + b;
}

// arrow functions
let add1 = (a, b) => a + b;

let obj2 = {
  name: "deepakkumar",
  address: "nashik",
  getName() {
    return this.name;
  },
};

// Map [[],[],[],[]]
let map = new Map(Object.entries(obj2));
// map.set("name","deepakkumar");
// map.set("city","nashik");
// map.size();
// map.get("name");
// map.delete("name");
// map.clear();
// map.has("name");// true or false

// Set [1,2,3,4,5,5,6,6,7,7,8,8]
let set = new Set([1, 2, 3, 4, 5, 5, 6, 6, 7, 7, 8, 8]);
// set.add(10);
// set.size();
// set.delete(10);
// set.clear();
// set.has(10);// true or false

// array
let arr = [1, 2, 3];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // {value:1,done:false}
console.log(iterator.next()); // {value:2,done:false}
console.log(iterator.next()); // {value:3,done:false}
console.log(iterator.next()); // {value:undefined,done:true}

arr[Symbol.iterator] = function () {
  let index = 0;
  return {
    next: () => {
      if (index < this.length) {
        return {
          value: this[index++],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
    prevues: () => {
      if (index < this.length && index >= 0) {
        return {
          value: this[index--],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
};

// Generator
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generator();
console.log(gen.next()); // {value:1,done:false}
console.log(gen.next()); // {value:2,done:false}
console.log(gen.next()); // {value:3,done:false}
console.log(gen.next()); // {value:undefined,done:true}

let obj3 = {
  name: "deepakkumar",
};

let key = "name";
console.log(obj3[key]); // deepakkumar
