"use client";

import ContentCard from "./components/ContentCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [contentData, setContentData] = useState([]);
  const functionProp = () => {
    console.log("Function prop çalıştı");
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setContentData(response.data);
      })
      .catch((error) => {
        console.log("İşlem başarısız:", error);
      });
  }, []);

  console.log("Burası client tarafında çalışacaktır");
  return (
    <>
      <div id="contentArea">
        <div className="grid grid-cols-5 gap-5 p-5">
          <h2>Hello world!</h2>
          {contentData.length > 0 ? (
            <h1>İçerikler getirildi</h1>
          ) : (
            <h1>İçerikler yükleniyor!!!</h1>
          )}

          {contentData.find(
            (post) => post.title === "necessitatibus quasi exercitationem odio"
          ) && <h2>Aranan içerik bulundu.</h2>}
          {exampleValue}
          {contentData
            .filter(
              (post) =>
                post.title === "necessitatibus quasi exercitationem odio"
            )
            .map((post, i) => {
              return (
                <ContentCard
                  key={i}
                  content={post.title}
                  prop2={5}
                  prop3={true}
                  prop4={functionProp}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
