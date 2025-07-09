import { useEffect, useState } from "react";

function FunctionalComp(props) {
  let [count, setCount] = useState(0);

  let getData = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getData();
    console.log("Fn componentDidMount");
  }, []); // mounting

  useEffect(() => {
    console.log("Fn componentDidUpdate");
  }, [count]); // updating

  useEffect(() => {
    return () => {
      console.log("Fn componentWillUnmount");
    };
  }, []);

  let inc = () => {
    setCount(count + 1);
  };

  return (
    <div>
      Function Comp {count} <button onClick={inc}>INC </button>
    </div>
  );
}

export default FunctionalComp;

// mounting => once => api or some logic
// unmounting => once => cleanup
// updating => multi => api or some logic
