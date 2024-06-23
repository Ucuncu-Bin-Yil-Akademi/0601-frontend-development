"use client";
import ContentCard from "../../Cards/ContentCard";
import Masonry from "@mui/lab/Masonry";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { contentAtom } from "../../../context/contentAtom";
import { useAtom } from "jotai";
import InfiniteScroll from "react-infinite-scroll-component";
import CircularProgress from "@mui/material/CircularProgress";

export default function ContentList() {
  const [contentData, setContentData] = useAtom(contentAtom);
  const [hasMore, setHasMore] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);

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
          setTotalPageCount(response.data.totalPages);
        })
        .catch((error) => {
          toast.error("İçerikler getirilirken bir hata oluştu.");
        });
    } catch (error) {
      toast.error("İçerikler getirilirken bir hata oluştu.");
    }
  }, []);

  const getMoreContent = () => {
    try {
      axios
        .get(`http://localhost:3001/publications?page=${currentPage + 1}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then((response) => {
          setContentData([...contentData, ...response.data.publications]);
          setCurrentPage(currentPage + 1);
          setTotalPageCount(response.data.totalPages);
          if (currentPage + 1 === totalPageCount) {
            setHasMore(false);
          }
        })
        .catch((error) => {
          toast.error("İçerikler getirilirken bir hata oluştu.");
        });
    } catch (error) {
      toast.error("İçerikler getirilirken bir hata oluştu.");
    }
  };
  return (
    <div className="p-3">
      <InfiniteScroll
        dataLength={contentData?.length || 0}
        next={() => getMoreContent()}
        hasMore={hasMore}
        loader={
          hasMore && (
            <div className="flex justify-center items-center p-3">
              <CircularProgress />
            </div>
          )
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Bütün içerikleri gördünüz.</b>
          </p>
        }
      >
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
                likes={content.likes}
                contentId={content._id}
              />
            );
          })}
        </Masonry>
      </InfiniteScroll>
    </div>
  );
}
