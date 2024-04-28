"use client";
import Counter from "@/app/components/counter";
import { useContext } from "react";
import { CounterData } from "./context/counterContext";

export default function Home() {
  const { setCounter } = useContext(CounterData);
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col justify-center items-center gap-10">
      <h2>Hello world!</h2>
      <Counter />
      <button
        className="bg-orange-600 p-3 w-1/4 rounded"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
    </div>
  );
}
