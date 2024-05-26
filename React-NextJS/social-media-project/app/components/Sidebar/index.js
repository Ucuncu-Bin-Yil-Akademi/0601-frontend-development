import Avatar from "@mui/material/Avatar";
import SidebarCard from "../Cards/SidebarCard";

export default function Sidebar() {
  const popularUsersData = [
    {
      name: "John Doe",
      username: "johndoe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Doe",
      username: "janedoe1990",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "John Doe",
      username: "john_doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Doe",
      username: "janedoe2000",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "John Doe",
      username: "john_doe1",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const popularContentsData = [
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "johndoe",
      createdOn: "2 hours ago",
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "janedoe1990",
      createdOn: "3 hours ago",
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "john_doe",
      createdOn: "4 hours ago",
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "janedoe2000",
      createdOn: "5 hours ago",
    },
    {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      user: "john_doe1",
      createdOn: "6 hours ago",
    },
  ];

  const PopularUsersEl = popularUsersData.map((user, index) => {
    return (
      <div key={index} className="border border-dashed rounded bg-white p-3">
        <div className="flex items-center gap-3">
          <div>
            <Avatar sx={{ bgcolor: "#D9042B" }}>{user.name[0]}</Avatar>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span>{user.name}</span>
              <span className="text-gray-400 text-sm">@{user.username}</span>
            </div>
            <span className="text-sm">
              <span className="text-gray-600 font-semibold">Bio: </span>
              {user.bio}
            </span>
          </div>
        </div>
      </div>
    );
  });

  const PopularContentsEl = popularContentsData.map((content, index) => {
    return (
      <div key={index} className="border border-dashed rounded bg-white p-3">
        <div className="flex items-center gap-3">
          <div>
            <Avatar sx={{ bgcolor: "#D9042B" }}>{content.user[0]}</Avatar>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span>{content.user}</span>
              <span className="text-gray-400 text-sm">{content.createdOn}</span>
            </div>
            <span className="text-sm">{content.content}</span>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col gap-5">
      <SidebarCard title="Popüler Kullanıcılar" body={PopularUsersEl} />
      <SidebarCard title="Popüler İçerikler" body={PopularContentsEl} />
    </div>
  );
}
