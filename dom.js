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
