import { useEffect, useState } from "react";
import styles from "./Cover.module.css";
import Avatar from "@mui/material/Avatar";

export default function ProfileCover({ userData, handleFollowUser }) {
  const [currentUserId, setCurrentUserId] = useState("");

  useEffect(() => {
    const userIdVal = window.localStorage.getItem("userId");
    setCurrentUserId(userIdVal?.replaceAll('"', ""));
  }, []);

  return (
    <div className={styles.coverWrapper}>
      <div className="flex justify-between items-center gap-5">
        <div className="flex items-center gap-5 w-3/4">
          <Avatar
            style={{
              height: "100px",
              width: "100px",
              fontSize: "2rem",
            }}
          >
            {userData.name?.charAt(0) + userData.lastname?.charAt(0)}
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">
                {userData.name} {userData.lastname}
              </span>
              <span className="text-sm text-gray-200">
                @{userData.username}
              </span>
            </div>

            <p className="text-sm text-gray-200 italic mt-3">
              {userData.bio || "Bu kullanıcı henüz bir bio yazmamış."}
            </p>
          </div>
        </div>
        {currentUserId !== userData._id && (
          <div className="w-1/4 flex justify-end">
            {userData?.userFollowers?.filter(
              (user) => user._id === currentUserId
            ).length > 0 ? (
              <button
                className="bg-primary px-5 py-3 rounded"
                onClick={handleFollowUser}
              >
                Takipten Çık
              </button>
            ) : (
              <button
                className="bg-primary px-5 py-3 rounded"
                onClick={handleFollowUser}
              >
                Takip Et
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
