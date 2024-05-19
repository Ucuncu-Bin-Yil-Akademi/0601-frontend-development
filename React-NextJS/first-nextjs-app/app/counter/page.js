"use client";
import { useEffect, useState } from "react";

export default function CounterPage() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
    localStorage.setItem("counter", counter + 1);
    // counter = counter + 1 // veya ...
    // counter += 1;
  };

  const decreaseCounter = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
    localStorage.setItem("counter", counter - 1);
  };

  useEffect(() => {
    const counterValue = localStorage.getItem("counter");
    if (counterValue) {
      setCounter(Number(counterValue));
    }
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-blue-400">
      <div className="flex gap-10 items-center">
        <button className="bg-red-400 rounded p-5" onClick={decreaseCounter}>
          -
        </button>
        <h2 className="text-3xl font-semibold bg-gray-200 rounded p-5">
          {counter}
        </h2>
        <button className="bg-green-600 rounded p-5" onClick={increaseCounter}>
          +
        </button>
      </div>
    </div>
  );
}
