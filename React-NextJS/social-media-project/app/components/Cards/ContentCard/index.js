import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Image from "next/image";
import moment from "moment";
import axios from "axios";
import Cookies from "js-cookie";
import { contentAtom } from "../../../context/contentAtom";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";

export default function ContentCard({
  user,
  date,
  content,
  image,
  likeCount,
  likes,
  contentId,
}) {
  const [, setContentData] = useAtom(contentAtom);
  const [currentUserId, setCurrentUserId] = useState(
    localStorage.getItem("userId")
  );

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    setCurrentUserId(userId);
  }, []);

  const handleLike = async () => {
    try {
      axios
        .post(
          `http://localhost:3001/publications/action/${contentId}`,
          {
            action: "like",
          },
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          }
        )
        .then((response) => {
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
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="border rounded">
        <div className="flex items-center gap-3 p-3 pb-0">
          <Avatar className="bg-dark">
            {user.name?.[0]}
            {user?.lastname?.[0]}
          </Avatar>
          <div className="flex flex-col">
            <span>
              {user.name} {user.lastname}
            </span>
            <span>{moment(date).format("DD-MM-YYYY HH:mm")}</span>
          </div>
        </div>
        <div className="p-3">
          <p>{content}</p>
          {/* {image && image?.length > 0 && (
            <div className="my-2">
              <Image
                src={image?.[0]}
                alt="content"
                width={500}
                height={500}
                className="rounded"
              />
            </div>
          )} */}
        </div>
        <div className="flex items-center bg-gray-100">
          <IconButton onClick={handleLike}>
            {likes?.includes(currentUserId?.replaceAll('"', "")) ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
          <span className="text-sm">{likeCount} kullanıcı</span>
        </div>
      </div>
    </>
  );
}
