"use client";
import ContentCard from "../../Cards/ContentCard";
import Masonry from "@mui/lab/Masonry";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function ContentList() {
  const [contentData, setContentData] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("http://localhost:3001/publications", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then((response) => {
          setContentData(response.data.publications);
        })
        .catch((error) => {
          toast.error("İçerikler getirilirken bir hata oluştu.");
        });
    } catch (error) {
      toast.error("İçerikler getirilirken bir hata oluştu.");
    }
  }, []);
  return (
    <div className="p-3">
      <Masonry columns={3} spacing={2}>
        {contentData?.map((content) => {
          return (
            <ContentCard
              key={content._id}
              content={content.content}
              image={content.images}
              user={content.user?.[0]}
              date={content.createdAt}
              likeCount={content?.likes?.length || 0}
            />
          );
        })}
      </Masonry>
    </div>
  );
}
