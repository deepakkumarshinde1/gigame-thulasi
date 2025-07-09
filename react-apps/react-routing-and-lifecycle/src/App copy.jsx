import { useState } from "react";
import ClassComp from "./components/ClassComp";
import FunctionalComp from "./components/FunctionalComp";

function App() {
  let [toggle, setToggle] = useState(false);
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle ? <ClassComp /> : <FunctionalComp />}
    </>
  );
}

export default App;
