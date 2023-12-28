import { useState } from "react";
import { sculptureList } from "./data";

const AddingStateVariable = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index + 1);
    }
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  const handlePrevClick = () => {
    if (hasPrev) {
      setIndex(index - 1);
    }
  };

  let sculpture = sculptureList[index];
  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;
  return (
    <>
      <div className="m-10">
        <h1 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-2xl dark:text-white">
          <i>
            {sculpture.name} by {sculpture.artist}
          </i>
        </h1>
        <h3 className="mb-4 text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl lg:text-2xl dark:text-white">
          ({index + 1} of {sculptureList.length})
        </h3>
        <img src={sculpture.url} alt={sculpture.alt} />

        {showMore && (
          <p className="mb-3 text-gray-500 dark:text-gray-400">
            {sculpture.description}
          </p>
        )}
        <button
          onClick={handleNextClick}
          disabled={!hasNext}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Next
        </button>
        <button
          onClick={handleMoreClick}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {showMore ? "hide" : "show"} detailes
        </button>
        <button
          onClick={handlePrevClick}
          disabled={!hasPrev}
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Previous
        </button>
      </div>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
    </>
  );
};

export default AddingStateVariable;
