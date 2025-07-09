import { useState } from "react";
import Input from "./components/Input";

function App() {
  let [numbers, setNumber] = useState([10, 20, 30, 40, 50, 60]); // [value,setValue]
  let inc = (index) => {
    let newNumbers = [...numbers];
    newNumbers[index] += 1;
    setNumber(newNumbers);
  };

  let remove = (index) => {
    let isRemove = window.confirm("Are you sure?");
    if (isRemove) {
      let newNumbers = [...numbers];
      newNumbers.splice(index, 1);
      setNumber(newNumbers);
    }
  };
  return (
    <>
      <h1 className="bg-amber-900 text-red-100">Hello</h1>
      {numbers.map((value, index) => {
        return (
          <Input
            key={index}
            remove={remove}
            number={value}
            inc={inc}
            index={index}
          />
        );
      })}
    </>
  );
}

export default App;

// JSX => JavaScript XML
// JSX is a syntax extension for JavaScript.
//  It was written to be used with React. JSX code looks a lot like HTML.
// class => className
// for => htmlFor
// camelCase property naming convention
// elements must be closed
// JSX expressions must have one parent element
// JSX is not a string
