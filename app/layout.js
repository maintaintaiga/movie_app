"use client";
import { Inter } from "next/font/google";
import "../css/globals.css";
import { MovieContext } from "../context/movie";
import { useState } from "react";
import Appbar from "@/components/appbar";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}; */

export default function RootLayout({ children }) {
  const [movie, setMovie] = useState(null);
  return (
    <html lang="en">
      <MovieContext.Provider value={{ movie, setMovie }}>
        <body className={inter.className}>
          <Appbar />
          {children}
        </body>
      </MovieContext.Provider>
    </html>
  );
}