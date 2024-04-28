"use client";
import { counterAtom } from "../atoms/counterAtom";
import { useAtom } from "jotai";
import ResetCounter from "./resetBtn";

export default function CounterAtomPage() {
  const [counter, setCounter] = useAtom(counterAtom);
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <div className="flex gap-10 items-center">
        <button
          className="bg-red-700 p-5 rounded font-bold text-2xl"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
        <span className="bg-gray-200 text-gray-900 p-10 rounded font-bold text-4xl">
          {counter}
        </span>
        <button
          className="bg-green-700 p-5 rounded font-bold text-2xl"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
      <ResetCounter />
    </div>
  );
}
