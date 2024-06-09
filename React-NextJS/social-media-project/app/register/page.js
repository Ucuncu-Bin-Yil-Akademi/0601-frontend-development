"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    name: "",
    lastname: "",
    bio: "",
    password: "",
    rePassword: "",
  });

  const handleRegister = async () => {
    try {
      if (formData.password !== formData.rePassword) {
        toast.error("Şifreler uyuşmuyor.");
        return;
      }

      const response = await axios.post("http://localhost:3001/auth/register", {
        email: formData.email,
        username: formData.username,
        name: formData.name,
        lastname: formData.lastname,
        bio: formData.bio,
        password: formData.password,
      });

      if (response.status === 200) {
        toast.success("Kayıt başarılı. Yönlendiriliyorsunuz.");
        Cookies.set("token", response.data.token);
        router.push("/");
      } else {
        toast.error("Kayıt olunurken bir hata oluştu. Lütfen tekrar deneyin.");
      }
    } catch (e) {
      toast.error("Kayıt olunurken bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-5 w-1/2 flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl mt-5 mb-0 text-secondary font-bold">
              Welcome.
            </h1>
            <span>Create a new account.</span>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <div className="flex w-full gap-3">
              <input
                className="border px-3 py-2 rounded w-full"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                className="border px-3 py-2 rounded w-full"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>
            <div className="flex w-full gap-3">
              <input
                className="border px-3 py-2 rounded w-full"
                type="text"
                placeholder="First Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                className="border px-3 py-2 rounded w-full"
                type="text"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })
                }
              />
            </div>
            <textarea
              className="border px-3 py-2 rounded resize-none"
              placeholder="Bio"
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
            />
            <input
              type="password"
              className="border px-3 py-2 rounded"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <input
              type="password"
              className="border px-3 py-2 rounded"
              placeholder="Re-type your Password"
              value={formData.rePassword}
              onChange={(e) =>
                setFormData({ ...formData, rePassword: e.target.value })
              }
            />
            <button
              className="bg-secondary text-light p-3 rounded"
              onClick={handleRegister}
            >
              Kayıt Ol
            </button>
            <div className="flex justify-end my-3">
              <Link className="text-gray-400" href="/login">
                Zaten hesabınız var mı?{" "}
                <span className="underline">Giriş yapın</span>.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
