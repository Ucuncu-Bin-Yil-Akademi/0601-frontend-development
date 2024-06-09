"use client";
import Logo from "../../../public/logo.png";
import Image from "next/image";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";
import Link from "next/link";

const ProfileUpdateSection = ({ profileSetting, setProfileSetting }) => {
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Ad"
            value={profileSetting.name}
            onChange={(e) => {
              setProfileSetting({
                ...profileSetting,
                name: e.target.value,
              });
            }}
            className="border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Soyad"
            value={profileSetting.surname}
            onChange={(e) => {
              setProfileSetting({
                ...profileSetting,
                surname: e.target.value,
              });
            }}
            className="border px-3 py-2 rounded"
          />
        </div>
        <input
          type="password"
          placeholder="Güncel Şifre"
          value={profileSetting.password}
          onChange={(e) => {
            setProfileSetting({
              ...profileSetting,
              password: e.target.value,
            });
          }}
          className="border px-3 py-2 rounded w-full"
        />
        <div className="flex gap-3">
          <input
            type="password"
            placeholder="Yeni Şifre"
            value={profileSetting.newPassword}
            onChange={(e) => {
              setProfileSetting({
                ...profileSetting,
                newPassword: e.target.value,
              });
            }}
            className="border px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Yeni Şifre Tekrar"
            className="border px-3 py-2 rounded"
            value={profileSetting.newPasswordRepeat}
            onChange={(e) => {
              setProfileSetting({
                ...profileSetting,
                newPasswordRepeat: e.target.value,
              });
            }}
          />
        </div>
        <textarea
          placeholder="Biyografi"
          className="border px-3 py-2 rounded w-full resize-none"
          value={profileSetting.bio}
          onChange={(e) => {
            setProfileSetting({
              ...profileSetting,
              bio: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [profileSetting, setProfileSetting] = useState({
    name: "",
    surname: "",
    password: "",
    newPassword: "",
    newPasswordRepeat: "",
    bio: "",
  });

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdateProfileSettings = async () => {
    if (profileSetting.newPassword !== profileSetting.newPasswordRepeat) {
      toast.error("Şifreler uyuşmuyor.");
      return;
    }
    setIsSettingsModalOpen(false);
  };

  return (
    <div className="bg-white p-5 border-b shadow-sm flex items-center justify-between">
      <Link href="/">
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </Link>

      <input
        type="search"
        placeholder="Search"
        className="border px-3 py-2 rounded w-1/2"
      />

      <div className="flex items-center gap-3">
        <span className="text-gray-600">
          Hello, <strong>John Doe</strong>
        </span>

        <IconButton
          className="bg-light"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <PersonIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profil</MenuItem>
          <MenuItem
            onClick={() => {
              setIsSettingsModalOpen(true);
              handleClose();
            }}
          >
            Hesap Ayarları
          </MenuItem>
          <MenuItem onClick={handleClose}>Çıkış Yap</MenuItem>
        </Menu>
      </div>

      <Dialog
        open={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Profil Ayarları</DialogTitle>
        <DialogContent>
          <ProfileUpdateSection
            profileSetting={profileSetting}
            setProfileSetting={setProfileSetting}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsSettingsModalOpen(false)}>Vazgeç</Button>
          <Button onClick={handleUpdateProfileSettings} autoFocus>
            Güncelle
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
