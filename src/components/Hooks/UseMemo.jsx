import { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(100);

  const handleAdd = () => {
    setCount(count + 1);
  };

  // function multiply() {
  //   console.log("***********");
  //   return count * 10;
  // }

  const multiplication = useMemo(
    function multiply() {
      console.log("***********");
      return count * 10;
    },
    [count]
  );

  return (
    <div className="m-5">
      {multiplication}
      <br />
      <span>add:{count}</span>
      <button
        className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={handleAdd}
      >
        Increment
      </button>
      <br />
      <span>minus: {minus}</span>
      <button
        className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => setMinus(minus - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseMemo;
