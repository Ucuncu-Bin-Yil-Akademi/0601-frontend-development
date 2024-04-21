"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const helloText = "To the world!";
  const imgUrl = "https://via.placeholder.com/150";
  let loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const [lorem2Text, setLorem2Text] = useState("Lorem ipsum");
  const [inputValue, setInputValue] = useState("");

  const clickHandler = () => {
    alert("Hello world!");
    loremText = "Değeri güncelledim.";
    setLorem2Text("Yeni değer");
  };

  /*   useEffect(() => {
    alert("Burası sadece sayfa ilk yüklendiği anda çalışır.");
  }, []); */

  useEffect(() => {
    alert(
      "Burası sayfa ilk yüklendiği anda ve lorem2Text state değiştiğinde çalışır."
    );
  }, [lorem2Text]);

  return (
    <div>
      <h1
        style={{
          backgroundColor: "red",
          color: "white",
          padding: 10,
        }}
      >
        Hello world!
      </h1>
      <h2>{helloText}</h2>
      <h3>{loremText}</h3>
      <h4>{lorem2Text}</h4>
      <img src={imgUrl} alt="placeholder" />
      {/* <span>comment line</span> */}
      <p>{inputValue}</p>
      <input
        className="border mt-4"
        type="text"
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button
        className="border"
        onClick={() => {
          console.log("clicked");
          clickHandler();
        }}
      >
        Click me
      </button>

      <button className="border ml-4" onClick={clickHandler}>
        Clik me again!
      </button>
    </div>
  );
}
