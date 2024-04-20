"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const imageUrl = "https://picsum.photos/200/300";
  const [helloText, setHelloText] = useState("Hello React + NextJS!");
  //let helloText = "Hello React + NextJS!";

  const clickHandler = () => {
    alert("Diğer butona tıklandı!");
    //helloText = "Değer değişti!";
    setHelloText("Değer değişti!");
  };

  useEffect(() => {
    alert("Sayfa yüklendi.");
  }, [helloText]);

  return (
    <div className="bg-red-500 h-screen w-full flex justify-center items-center">
      <div className="text-gray-700 font-semibold bg-gray-200 rounded px-4 py-10">
        <h2
          style={{
            color: "red",
            textShadow: "1px 1px 1px #000",
          }}
        >
          {helloText}
        </h2>

        <img
          src={imageUrl}
          style={{
            borderRadius: "10px",
            marginTop: "10px",
            width: "100%",
            height: "100px",
            objectFit: "cover",
          }}
        />

        <button
          className="bg-gray-700 py-5 w-full text-white rounded mt-10"
          onClick={() => {
            alert("Merhaba Dünya");
          }}
        >
          Bana Tıkla
        </button>

        <button
          className="bg-gray-700 py-5 w-full text-white rounded mt-10"
          onClick={() => clickHandler()}
        >
          Bana da Tıkla
        </button>

        <button
          className="bg-gray-700 py-5 w-full text-white rounded mt-10"
          onClick={clickHandler}
        >
          Buraya da Tıkla
        </button>

        <input
          type="text"
          className="w-full mt-10 p-2 rounded border border-gray-400"
          placeholder="Buraya bir isim giriniz."
        />
      </div>
    </div>
  );
}
