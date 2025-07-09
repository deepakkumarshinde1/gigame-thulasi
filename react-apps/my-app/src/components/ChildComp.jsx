import { memo } from "react";

function ChildComp({ result, incCountTwo }) {
  console.log("ChildComp");
  return (
    <div>
      ChildComp {result} <button onClick={incCountTwo}>INC 1</button>
    </div>
  );
}

export default memo(ChildComp);

// cache a comp => memo
// cache a value => useMemo
// cache a function => useCallback
