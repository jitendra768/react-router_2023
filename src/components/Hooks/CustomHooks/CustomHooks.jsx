import UseCounter from "./UseCounter";

const CustomHooks = () => {
  const [count, Increment, Decrement] = UseCounter();
  return (
    <div className="m-20">
      <button
        onClick={()=>Increment()}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Increment
      </button>
      <div>{count}</div>
      <button
        onClick={()=>Decrement()}
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        Decrement
      </button>
    </div>
  );
};

export default CustomHooks;
