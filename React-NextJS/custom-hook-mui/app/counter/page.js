"use client";
import useCounter from "../hooks/useCounter";
export default function CounterPage() {
  const { arttir, azalt, sifirla, count } = useCounter(0);
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen gap-5">
        <button
          className="bg-red-400 text-white p-3 text-lg rounded"
          onClick={azalt}
        >
          -
        </button>
        <span className="text-2xl bg-gray-300 rounded p-5">{count}</span>
        <button
          className="bg-green-700 text-white p-3 text-lg rounded"
          onClick={arttir}
        >
          +
        </button>
        <button className="text-black border p-3 rounded" onClick={sifirla}>
          Sıfırla
        </button>
      </div>
    </>
  );
}
