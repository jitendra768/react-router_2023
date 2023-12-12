import { useCallback, useState } from "react";
import Children from "./Children";
const UseCallback = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  const learning = useCallback(() => {
    //some opereation
  }, [count]);
  return (
    <div className="m-20">
      <h2>Learninng UseCallback</h2>
      <Children learning={learning} count={count} />
      <span>{add}</span>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}>count</button>
    </div>
  );
};

export default UseCallback;
