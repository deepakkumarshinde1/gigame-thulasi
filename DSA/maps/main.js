// map
let studentData = {
  name: "Deepak",
  age: 25,
  isStudent: false,
  hobbies: ["reading", "gaming"],
  address: {
    state: "Maharashtra",
    city: "Nashik",
  },
};

let map = new Map(Object.entries(studentData));
console.log(map); // Map(5) { 'name' => 'Deepak', 'age' => 25, 'isStudent' => false, 'hobbies' => [ 'reading', 'gaming' ], 'address' => { state: 'Maharashtra', city: 'Nashik' } }
// map.set('name', 'Deepak');
// map.set('age', 25);
// map.set('isStudent', false);
// map.set('hobbies', ['reading', 'gaming']);
// map.set('address', { state: 'Maharashtra',city: 'Nashik' });

console.log(map.get("name")); // Deepak
console.log(map.size); // 5
console.log(map.has("age")); // true

map.delete("isStudent");
console.log(map.has("isStudent")); // false

map.clear();
console.log(map.size); // 0

// weakMap

let weakMap = new WeakMap();
let obej1 = { name: "Deepak" };

weakMap.set(obej1, "Student");

console.log(weakMap.get(obej1)); // Student

// hashMap
let weakMap1 = new WeakMap();
class Counter {
  constructor() {
    weakMap.set(this, { count: 0 });
  }

  increment() {
    let count = weakMap.get(this);
    count.count++;
    weakMap.set(this, count);
  }
  decrement() {
    let count = weakMap.get(this);
    count.count--;
    weakMap.set(this, count);
  }
  getCount() {
    return weakMap.get(this).count;
  }
}

console.log(weakMap1.get()); // Student
