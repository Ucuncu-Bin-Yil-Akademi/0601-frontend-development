import { Inter } from "next/font/google";
import "./globals.css";
import CounterContext from "@/app/context/counterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UBY - NextJS State Management Example",
  description: "An example of state management in NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CounterContext>
        <body className={inter.className}>{children}</body>
      </CounterContext>
    </html>
  );
}
