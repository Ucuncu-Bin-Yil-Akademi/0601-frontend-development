"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Sidebar } from "./components";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isLayoutActive, setIsLayoutActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const userToken = Cookies.get("token");
    if (pathname === "/login" || pathname === "/register") {
      if (userToken) {
        router.push("/");
        return;
      }
      setIsLayoutActive(false);
    } else {
      if (!userToken) {
        router.push("/login");
        return;
      }
      setIsLayoutActive(true);
    }

    setIsLoading(false);
  }, [pathname, router]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />

        {isLoading ? (
          <div className="w-screen h-screen flex justify-center items-center">
            <div className="flex flex-col items-center gap-5">
              <CircularProgress color="secondary" />
              <h2 className="text-lg font-semibold text-purple-400">Loading</h2>
            </div>
          </div>
        ) : (
          <div>
            {isLayoutActive && (
              <div className="w-full">
                <Header />
              </div>
            )}
            <main className="flex w-full gap-5 p-5">
              <div className="w-4/6">{children}</div>
              {isLayoutActive && (
                <aside className="w-2/6">
                  <Sidebar />
                </aside>
              )}
            </main>
          </div>
        )}
      </body>
    </html>
  );
}
