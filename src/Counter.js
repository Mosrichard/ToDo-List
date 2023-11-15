import React from "react";
import { useState } from "react";
import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  const Decrease = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="container">
        <h1 className="number">{count}</h1>
      </div>

      <section className="btns-container">
        <button className="increment" onClick={Increase}>
          +
        </button>
        <button className="decrement" onClick={Decrease}>
          -
        </button>
      </section>
    </>
  );
};

export default Counter;
