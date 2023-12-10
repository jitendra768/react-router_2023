const State = () => {
  var x = 10;
  const handleClick = () => {
    x = 15;
  };
  console.log(x);
  return (
    <div>
      <h2>Learning state {x}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default State;
