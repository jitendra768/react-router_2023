import { useState } from "react";

const ControlComponents = () => {
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handlePsw = (e) => {
    console.log(e.target.value);
    setPsw(e.target.value);
  };
  return (
    <div className="m-20">
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              First Name
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={name}
              onChange={handleChange}
            />
            <br/>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              value={psw}
              onChange={handlePsw}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ControlComponents;
