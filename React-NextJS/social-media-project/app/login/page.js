"use client";
import Cookies from "js-cookie";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        toast.success("Giriş başarılı. Yönlendiriliyorsunuz.");
        Cookies.set("token", response.data.token);
        localStorage.setItem("userId", JSON.stringify(response.data._id));
        localStorage.setItem("name", JSON.stringify(response.data.name));
        localStorage.setItem("bio", JSON.stringify(response.data.bio));
        localStorage.setItem(
          "username",
          JSON.stringify(response.data.username)
        );
        localStorage.setItem(
          "lastname",
          JSON.stringify(response.data.lastname)
        );
        router.push("/");
      }
    } catch (e) {
      toast.error("Giriş yapılırken bir hata oluştu. Lütfen tekrar deneyin.");
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
            <span>Sign in to continue.</span>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <input
              className="border px-3 py-2 rounded"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="border px-3 py-2 rounded"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="bg-secondary text-light p-3 rounded"
              onClick={handleLogin}
            >
              Sign In
            </button>
            <div className="flex justify-end my-3">
              <Link className="text-gray-400" href="/register">
                Don`t have an account?{" "}
                <span className="underline">Sign up</span> here.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
