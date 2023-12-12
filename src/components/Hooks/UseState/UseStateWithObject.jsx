import { useState } from "react";

const UseStateWithObject = () => {
  const [allValues, setAllValues] = useState({
    firstName: "AMit",
    lastName: "Kumar",
  });

  const update = () => {
    setAllValues({...allValues,firstName:"Shubham"})
  };
  return (
    <div className="m-20">
      <h1>
        First name is {allValues.firstName} and last name is{" "}
        {allValues.lastName}.
      </h1>
      <button
        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={update}
      >
        Update
      </button>
    </div>
  );
};

export default UseStateWithObject;
