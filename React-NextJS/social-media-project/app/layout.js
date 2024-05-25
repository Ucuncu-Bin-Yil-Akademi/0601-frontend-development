"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Sidebar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <div className="w-full">
            <Header />
          </div>
          <main className="flex w-full bg-blue-60 gap-5 p-5">
            <div className="w-4/6 bg-green-600">{children}</div>
            <aside className="w-2/6 bg-orange-600">
              <Sidebar />
            </aside>
          </main>
        </div>
      </body>
    </html>
  );
}
