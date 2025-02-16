import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elegant Decor Rentals",
  description: "Transform your events with our stunning decoration rentals",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
