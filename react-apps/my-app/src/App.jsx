import { useCallback, useMemo, useState } from "react";
import ChildComp from "./components/ChildComp";

function App() {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);

  let incCountOne = () => {
    setCount(count + 1);
  };

  let incCountTwo = useCallback(() => {
    setCount1(count1 + 1);
  }, [count1]);

  let result = useMemo(() => {
    return count % 5 === 0 ? "Yes" : "No";
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={incCountOne}>INC</button>
      <hr />
      <h1>{count1}</h1>
      <ChildComp result={result} incCountTwo={incCountTwo} />
    </>
  );
}

export default App;
