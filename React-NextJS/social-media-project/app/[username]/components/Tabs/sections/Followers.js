import Avatar from "@mui/material/Avatar";

export default function ProfileFollowers({ userData }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {userData?.userFollowers?.map((user, index) => {
        return (
          <div
            key={index}
            className="border border-dashed rounded bg-white p-3"
          >
            <div className="flex items-center gap-3">
              <div>
                <Avatar sx={{ bgcolor: "#D9042B" }}>
                  {user.name[0]}
                  {user.lastname[0]}
                </Avatar>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span>{user.name}</span>
                  <span className="text-gray-400 text-sm">
                    @{user.username}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
