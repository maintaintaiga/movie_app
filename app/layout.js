"use client";
import { Inter } from "next/font/google";
import "@/css/globals.css";
import Appbar from "@/components/appbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Appbar />
        {children}
      </body>
    </html>
  );
}
