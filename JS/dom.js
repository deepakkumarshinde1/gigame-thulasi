// prototyping
String.prototype.getMoreData = function () {
  return { uc: this.toUpperCase(), len: this.length, text: this.toString() };
};
let text_1 = "deepak";
console.log(text_1.getMoreData());
// this

// constructor function
function Human(name) {
  this.name = name;
}

Human.prototype.printName = function () {
  console.log(this.name);
};

Human.prototype.printName_1 = function () {
  console.log(this.printName());
};

function Student(name) {
  Human.call(this, name);
}

Student.prototype = Object.create(Human.prototype);

let student = new Student('"Deepakkumar"');
student.printName();
console.log(student);

let student_1 = {
  list: [],
};

let product = {
  cart: [],
};

function add(a, b, c, d) {
  console.log(this);
}

add.call(student_1, 1, 2, 3, 4);
add.call(product);
add.apply(student_1, [1, 2, 3, 4]);
let newFunction = add.bind(student_1);
newFunction(1, 2, 3, 4);

class Human_1 {
  printData() {
    setTimeout(() => {
      console.log(this);
    }, 3000);
  }
}

const human = new Human_1();
human.printData();
