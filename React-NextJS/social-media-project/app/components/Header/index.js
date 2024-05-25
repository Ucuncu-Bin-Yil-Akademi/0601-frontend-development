import Logo from "@/public/logo.png";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";

export default function Header() {
  return (
    <div className="bg-white p-5 border-b shadow-sm flex items-center justify-between">
      <Image src={Logo} alt="Logo" width={100} height={100} />

      <input
        type="search"
        placeholder="Search"
        className="border px-3 py-2 rounded w-1/2"
      />

      <div className="flex items-center gap-3">
        <span className="text-gray-600">
          Hello, <strong>John Doe</strong>
        </span>

        <IconButton className="bg-light">
          <PersonIcon />
        </IconButton>
      </div>
    </div>
  );
}
