"use client";
import useCounter from "./hooks/useCounter";
import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function Home() {
  const { count, arttir } = useCounter(0);
  return (
    <>
      <h2>Hello world!</h2>
      <span className="text-xl mr-5">Sayaç: {count}</span>
      <Button variant="contained" className="bg-gray-900 p-10" onClick={arttir}>
        Arttır
      </Button>

      <AcUnitIcon className="text-red-600" />
    </>
  );
}
