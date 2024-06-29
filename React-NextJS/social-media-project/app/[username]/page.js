"use client";
import { useEffect, useState } from "react";
import ProfileCover from "./components/Cover";
import ProfileTabs from "./components/Tabs";
import { usePathname } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
import CircularProgress from "@mui/material/CircularProgress";

export default function ProfilePage() {
  const pathname = usePathname();
  const [currentUsername, setCurrentUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentUsername(pathname?.split("/")?.[1]);
  }, [pathname]);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:3001/users/${currentUsername}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then((res) => {
          setUserData(res.data);
          setIsLoading(false);
        });
    } catch (error) {
      window.location.href = "/404";
    }
  }, [currentUsername]);

  const handleFollowUser = async () => {
    setIsLoading(true);

    try {
      const res = await axios.post(
        `http://localhost:3001/users/follow/${userData._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );

      if (res.status === 200) {
        axios
          .get(`http://localhost:3001/users/${currentUsername}`, {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
            },
          })
          .then((res) => {
            setUserData(res.data);
            setIsLoading(false);
          });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="bg-white rounded border">
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div>
              <ProfileCover
                userData={userData}
                handleFollowUser={handleFollowUser}
              />
            </div>
            <div className="p-5">
              <ProfileTabs
                userData={userData}
                setUserData={setUserData}
                currentUsername={currentUsername}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
