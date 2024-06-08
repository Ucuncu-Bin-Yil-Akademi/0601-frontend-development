"use client";
import { useEffect, useState } from "react";
import ProfileCover from "./components/Cover";
import ProfileTabs from "./components/Tabs";
import { usePathname } from "next/navigation";

export default function ProfilePage() {
  const pathname = usePathname();
  const [currentUsername, setCurrentUsername] = useState("");

  useEffect(() => {
    setCurrentUsername(pathname?.split("/")?.[1]);
  }, [pathname]);
  return (
    <>
      <div className="bg-white rounded border">
        <div>
          <ProfileCover />
        </div>
        <div className="p-5">
          <ProfileTabs />
        </div>
      </div>
    </>
  );
}
