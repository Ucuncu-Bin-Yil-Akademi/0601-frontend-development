import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";

export default function ContentCard({ user, date, content, image, likeCount }) {
  return (
    <>
      <div className="border rounded">
        <div className="flex items-center gap-3 p-3 pb-0">
          <Avatar className="bg-dark">{user[0]}</Avatar>
          <div className="flex flex-col">
            <span>{user}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="p-3">
          <p>{content}</p>
          <div className="my-2">
            <Image
              src={image}
              alt="content"
              width={500}
              height={500}
              className="rounded"
            />
          </div>
        </div>
        <div className="flex items-center bg-gray-100">
          <IconButton aria-label="delete">
            <FavoriteBorderIcon />
          </IconButton>
          <span className="text-sm">{likeCount} kullanıcı</span>
        </div>
      </div>
    </>
  );
}
