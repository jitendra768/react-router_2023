import { useRef, useState } from "react";

const UseRefHook = () => {
  const [name, setName] = useState("Amit");
  const refValue = useRef();
  console.log(refValue);

  const handleReset = () => {
    setName(" ");
    refValue.current.focus();
  };

  const handleInput = () => {
    refValue.current.style.color = "red";
  };
  return (
    <div>
      <input
        type="text"
        ref={refValue}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleInput}>Handle Input</button>
    </div>
  );
};

export default UseRefHook;
