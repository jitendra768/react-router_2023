import { useEffect, useState } from "react";
import FormInput from "./FormInput";

const Registration = () => {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Register");
  }, [flag]);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All Field mendatory");
    } else {
      setFlag(true);
    }
  };

  return (
    <>
      <div>
        <pre>
          {flag ? (
            <h2>Hello {inputData.name}, You have Registered Successsfully</h2>
          ) : (
            " "
          )}
        </pre>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <h4 className="text-3xl font-extrabold dark:text-white">
            Registration Form
          </h4>
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
              value={inputData.name}
              onChange={handleData}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Enter email here"
              value={inputData.email}
              onChange={handleData}
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <input
              type="text"
              name="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              placeholder="Enter your password"
              value={inputData.password}
              onChange={handleData}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <FormInput />
    </>
  );
};

export default Registration;
