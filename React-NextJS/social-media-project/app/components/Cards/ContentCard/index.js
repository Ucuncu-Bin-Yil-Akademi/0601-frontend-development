import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import moment from "moment";

export default function ContentCard({ user, date, content, image, likeCount }) {
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
          <IconButton aria-label="delete">
            <FavoriteBorderIcon />
          </IconButton>
          <span className="text-sm">{likeCount} kullanıcı</span>
        </div>
      </div>
    </>
  );
}
