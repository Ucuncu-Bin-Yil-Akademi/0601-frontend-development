"use client";
import { useEffect, useState } from "react";
import ProfileCover from "./components/Cover";
import ProfileTabs from "./components/Tabs";
import { usePathname } from "next/navigation";
import axios from "axios";

export default function ProfilePage() {
  const pathname = usePathname();
  const [currentUsername, setCurrentUsername] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setCurrentUsername(pathname?.split("/")?.[1]);
  }, [pathname]);

  useEffect(() => {
    try {
      axios
        .get(`http://localhost:3001/users/${currentUsername}`)
        .then((res) => {
          setUserData(res.data);
        });
    } catch (error) {
      window.location.href = "/404";
    }
  }, [currentUsername]);
  return (
    <>
      <div className="bg-white rounded border">
        <div>
          <ProfileCover userData={userData} />
        </div>
        <div className="p-5">
          <ProfileTabs userData={userData} />
        </div>
      </div>
    </>
  );
}
