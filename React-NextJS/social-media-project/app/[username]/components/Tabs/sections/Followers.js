import Avatar from "@mui/material/Avatar";

export default function ProfileFollowers() {
  const followersData = [
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
  return (
    <div className="grid grid-cols-3 gap-3">
      {followersData.map((user, index) => {
        return (
          <div
            key={index}
            className="border border-dashed rounded bg-white p-3"
          >
            <div className="flex items-center gap-3">
              <div>
                <Avatar sx={{ bgcolor: "#D9042B" }}>{user.name[0]}</Avatar>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span>{user.name}</span>
                  <span className="text-gray-400 text-sm">
                    @{user.username}
                  </span>
                </div>
                <span className="text-sm">
                  <span className="text-gray-600 font-semibold">Bio: </span>
                  {user.bio}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
