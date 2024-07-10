import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

import { themeChange } from 'theme-change'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tarek Shawky - Frontend Developer",
  description: "I'm Tarek Shawky, a frontend developer skilled in HTML, CSS, JavaScript, Bootstrap, TailwindCSS, WordPress, and Elementor plugin. Passionate about creating engaging and responsive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="mytheme">
      <body className={inter.className}>
        <Navbar/>
      {children}
      </body>
    </html>
  );
}
