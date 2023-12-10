import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <h2>Couter App {count}</h2>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCount}
        >
          increament
        </button>
      </div>

      <div>
        <MessageList />
      </div>
    </>
  );
};

export default UseState;

const MessageList = () => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  return (
    <>
      <input
        className="bg-gray-200 hover:bg-white hover:border-gray-300 focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 ..."
        type="text"
        value={message}
        placeholder="Enter a message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
      <input
        className="bg-teal-500 hover:bg-teal-600 focus:outline-none focus:shadow-outline ..."
        type="button"
        value="add"
        onClick={() => {
          setMessageList([
            ...messageList,
            { id: messageList.length + 1, message: message },
          ]);
          setMessage(" ");
        }}
      />
      <ul>
        {messageList.map((m) => (
          <li key={m.id}>{m.message}</li>
        ))}
      </ul>
    </>
  );
};
