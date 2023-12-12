import Child from "./Child";

const ParentLift = () => {
  function getData(data) {
    console.log(data);
  }
  return (
    <div>
      <h2>Lifting Up State</h2>
      <Child getData={getData} />
    </div>
  );
};

export default ParentLift;
