import "./App.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div>
      <DateCounter />
    </div>
  );
}

function DateCounter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  // classic way of function for set value to state
  // function increaseStep() {
  //   //setStep(step + 1);
  //   setStep((i) => i + 1);
  // }

  // function decreaseStep() {
  //   setStep((i) => i - 1);
  // }

  // function countIncrease() {
  //   setCount(count + 1);
  // }

  // function countDecrease() {
  //   setCount(count - 1);
  // }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <p style={{ fontWeight: "bold", margin: "5px" }}>Step: {step}</p>
        <button onClick={() => setStep((i) => i + 1)}>+</button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p style={{ fontWeight: "bold", margin: "5px" }}>Count: {count}</p>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p style={{ textAlign: "center", fontSize: "24px" }}>
        <span>
          {/* ternary operator */}
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} day ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
