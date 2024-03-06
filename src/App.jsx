import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <div className="card">
        <button onClick={increment}>+</button>
        <h1>{count}</h1>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>
    </>
  );
}

export default App;
