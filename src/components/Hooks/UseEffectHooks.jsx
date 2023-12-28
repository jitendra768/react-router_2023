import { useEffect, useState } from "react";

// const UseEffectHooks = () => {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]);
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>calculation: {calculation}</p>
//     </div>
//   );
// };

// export default UseEffectHooks;

// const UseEffectHooks = () => {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState("ram");
//   const handleState = () => {
//     setCount(count + 1);
//   };

//   const handleData = () => {
//     setData("Seeta");
//   };

//   useEffect(() => {
//     console.log("run on every render");
//   });

//   useEffect(() => {
//     console.log("run only on the first render");
//   }, [count]);
//   return (
//     <>
//       <h2>Learning useEffect {count}</h2>
//       <button onClick={handleState}>Click</button>
//       <button onClick={handleData}>updateData {data}</button>
//     </>
//   );
// };

// export default UseEffectHooks;

const UseEffectHooks = () => {
  //   But wait!! It keeps counting even though it should only count once!
  // useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.

  const [count, setCount] = useState(0);
  // const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return ()=>clearTimeout(timer)
  },[]);

  // useEffect(() => {
  //   setCalculation(() => count * 2);
  // }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      {/* <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>calculation: {calculation}</p> */}
    </div>
  );
};

export default UseEffectHooks;
