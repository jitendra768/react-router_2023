import { createContext} from "react";
import Children1 from "./Children1";

const data = createContext();
const Parent2 = () => {
  return (
    <div>
      <data.Provider value={{ name: "Amit Kumar", gender: "Male" }}>
        <Children1 />
      </data.Provider>
    </div>
  );
};

export default Parent2;
export { data };


