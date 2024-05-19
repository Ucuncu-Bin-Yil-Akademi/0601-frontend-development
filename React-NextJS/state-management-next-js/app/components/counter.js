"use client";

import { useContext } from "react";
import { CounterData } from "../context/counterContext";
export default function Counter() {
  const { counter, setCounter } = useContext(CounterData);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="flex gap-10 items-center">
        <button
          className="bg-red-700 p-5 rounded font-bold text-2xl"
          onClick={decreaseCounter}
        >
          -
        </button>
        <span className="bg-gray-200 text-gray-900 p-10 rounded font-bold text-4xl">
          {counter}
        </span>
        <button
          className="bg-green-700 p-5 rounded font-bold text-2xl"
          onClick={increaseCounter}
        >
          +
        </button>
      </div>
    </>
  );
}
