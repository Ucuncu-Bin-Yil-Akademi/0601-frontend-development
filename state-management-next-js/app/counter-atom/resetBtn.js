import { useAtom } from "jotai";
import { counterAtom } from "../atoms/counterAtom";

export default function ResetCounter() {
  const [counter, setCounter] = useAtom(counterAtom);
  return (
    <>
      Güncel değer: <b>{counter}</b>
      <button onClick={() => setCounter(0)}>Reset Counter</button>
    </>
  );
}
