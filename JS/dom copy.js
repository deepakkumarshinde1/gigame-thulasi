let button = document.querySelector("button");
let a = document.querySelector("a");
let input = document.querySelector("input");

button.addEventListener("click", function (event) {
  event.preventDefault();
  let inputValue = input.value;
  if (inputValue.trim().length === 0) {
    alert("Enter Input");
    return false;
  }
  console.log(`button was clicked`);
});

a.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(`a was clicked`);
});

const text = "hello";

class Human {
  name = "deepakkumar";
  printName() {
    console.log(this.name);
  }

  static newName = "Rohan";
}

let human = new Human();
human.printName();
Human.newName;

let date = new Date();

Date.now();

// Variables
// Closures
// Function
// DOM

// Event Loop
// SetTimeOut => After A time id out
// SetInterval => At Every Time For Given Interval

function getData() {
  try {
    if (value === "") {
      throw new Error("Error");
    }
  } catch (error) {}
}
// Async program => Block
// Promises

async function div() {
  if (2 === 2) {
    return Promise.resolve("Hi");
  } else {
    return Promise.reject("Errors");
  }
}

div()
  .then(() => {})
  .catch(() => {});

async function Add() {
  if (2 === 2) {
    return Promise.resolve("Hi");
  } else {
    return Promise.reject("Errors");
  }
}

async function sub() {
  if (2 === 2) {
    return Promise.resolve("Hi");
  } else {
    return Promise.reject("Errors");
  }
}

async function multi() {
  if (2 === 2) {
    return Promise.resolve("Hi");
  } else {
    return Promise.reject("Errors");
  }
}

async function getResult() {
  try {
    let result = await Add();
    if (result === null) {
      throw new Error("Messgae");
    }
    let result1 = await sub();

    let result2 = await multi();

    let result3 = await div();
  } catch (error) {
    console.log(error);
  }
}

// all
Promise.all();
Promise.race();
Promise.allSettled();
// race
// getSettled

// prototyping
let text_1 = "deepak";
console.log(text_1.length);
// this
