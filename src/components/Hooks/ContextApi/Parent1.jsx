import { createContext } from "react";
import Child1 from "./Child1";

const data = createContext();
const data1 = createContext();
const Parent1 = () => {
  const name = "Shubham Kumar";
  const gender = "Male";
  return (
    <div>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
          <Child1 />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default Parent1;
export { data,data1 };
