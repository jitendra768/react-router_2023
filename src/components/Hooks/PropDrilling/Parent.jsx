import ChildA from "./ChildA";

const Parent = () => {
  const name = "Amit Kumar";
  return (
    <div>
      <ChildA name={name} />
    </div>
  );
};

export default Parent;
