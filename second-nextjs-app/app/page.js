"use client";

import ContentCard from "./components/ContentCard";

export default function Home() {
  const functionProp = () => {
    console.log("Function prop çalıştı");
  };
  return (
    <>
      <div id="contentArea">
        <div className="grid grid-cols-5 gap-5 p-5">
          <ContentCard
            content="İçerik 1"
            prop2={5}
            prop3={true}
            prop4={functionProp}
          />
          <ContentCard content="İçerik 2" />
          <ContentCard content="İçerik 3" />
          <ContentCard content="İçerik 4" />
          <ContentCard content="İçerik 5" />
          <ContentCard content="İçerik 6" />
          <ContentCard content="İçerik 7" />
          <ContentCard content="İçerik 8" />
          <ContentCard content="İçerik 9" />
          <ContentCard content="İçerik 10" />
        </div>
      </div>
    </>
  );
}
