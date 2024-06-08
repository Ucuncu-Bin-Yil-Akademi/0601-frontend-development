import styles from "./Cover.module.css";
import Avatar from "@mui/material/Avatar";

export default function ProfileCover() {
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
            OP
          </Avatar>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">John Doe</span>
              <span className="text-sm text-gray-200">@john_doe</span>
            </div>

            <p className="text-sm text-gray-200 italic mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="w-1/4 flex justify-end">
          <button className="bg-primary px-5 py-3 rounded">Takip Et</button>
        </div>
      </div>
    </div>
  );
}
