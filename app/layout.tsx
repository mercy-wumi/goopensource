"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "GoOpenSource: Explore Open Source Projects",
  description:
    "A project dedicated to helping developers of all levels find open source project they can contribute to.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
