import { useState } from "react";

const FormInput = () => {
  const data = { name: "", lastName: "" };
  const [user, setUser] = useState(data);

  const handleFirstNameChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setUser("");
  };
  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter name here"
            required
            value={user.name}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter name here"
            required
            value={user.lastName}
            onChange={handleFirstNameChange}
          />
        </div>
        <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-2xl dark:text-white">
          Hi, {user.name} {user.lastName}
        </h1>
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          onClick={handleReset}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default FormInput;
