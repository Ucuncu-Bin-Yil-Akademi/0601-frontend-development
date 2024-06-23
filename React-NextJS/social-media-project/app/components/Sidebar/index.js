"use client";
import Avatar from "@mui/material/Avatar";
import SidebarCard from "../Cards/SidebarCard";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";

export default function Sidebar() {
  const [popularContentsData, setPopularContentsData] = useState([]);
  const [popularUsersData, setPopularUsersData] = useState([]);

  const PopularUsersEl = popularUsersData.map((user, index) => {
    return (
      <div key={index} className="border border-dashed rounded bg-white p-3">
        <div className="flex items-center gap-3">
          <div>
            <Avatar sx={{ bgcolor: "#D9042B" }}>
              {user.name[0]?.toUpperCase()}
              {user.lastname[0].toUpperCase()}
            </Avatar>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span>{user.name}</span>
              <span className="text-gray-400 text-sm">@{user.username}</span>
            </div>
            <span className="text-sm">
              <span className="text-gray-600 font-semibold">Bio: </span>
              {user.bio || "Kullanıcı hakkında bilgi bulunmamaktadır."}
            </span>
          </div>
        </div>
      </div>
    );
  });

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3001/publications/popular", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then((response) => {
          setPopularContentsData(response.data.publications);
        })
        .catch((error) => {
          toast.error("Popüler içerikler getirilirken bir hata oluştu.");
        });
    } catch (error) {
      toast.error("Popüler içerikler getirilirken bir hata oluştu.");
    }

    // SON EKLENEN KULLANICILARI GETİR

    try {
      axios
        .get("http://localhost:3001/users", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        })
        .then((response) => {
          setPopularUsersData(response.data.users);
        })
        .catch((error) => {
          toast.error("Kullanıcılar getirilirken bir hata oluştu.");
        });
    } catch (error) {
      toast.error("Kullanıcılar getirilirken bir hata oluştu.");
    }
  }, []);

  const PopularContentsEl = popularContentsData.map((content, index) => {
    return (
      <div key={index} className="border border-dashed rounded bg-white p-3">
        <div className="flex items-center gap-3">
          <div>
            <Avatar sx={{ bgcolor: "#D9042B" }}>
              {content.user[0]?.name[0]}
              {content.user[0]?.lastname[0]}
            </Avatar>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span>{content.user[0]?.username}</span>
              <span className="text-gray-400 text-sm">
                {moment(content.createdAt).format("DD-MM-YYYY HH:mm")}
              </span>
            </div>
            <span className="text-sm">{content.content}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col gap-5">
      <SidebarCard title="Yeni Üyeler" body={PopularUsersEl} />
      <SidebarCard title="Popüler İçerikler" body={PopularContentsEl} />
    </div>
  );
}
