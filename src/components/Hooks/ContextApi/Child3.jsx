import { data, data1 } from "./Parent1";
const Child3 = () => {
  return (
    <div>
      <data.Consumer>
        {(name) => {
          return (
            <>
              <data1.Consumer>
                {(gender) => {
                  return (
                    <h2>
                      My name is {name} and my gender is {gender}{" "}
                    </h2>
                  );
                }}
              </data1.Consumer>
              <h2>My name is {name} </h2>
            </>
          );
        }}
      </data.Consumer>
    </div>
  );
};

export default Child3;
