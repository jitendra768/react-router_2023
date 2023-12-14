import { useState } from "react";

const UseCounter = () => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  return [Increment, Decrement, count];
};

export default UseCounter;
