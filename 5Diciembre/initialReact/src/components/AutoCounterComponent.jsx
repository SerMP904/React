import { useState, useEffect } from "react";

function AutoCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Contador automático: {count}</p>
    </div>
  );
}

export default AutoCounter;