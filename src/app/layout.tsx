import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koinx",
  description: "KoinX is determined to become an indispensable platform, trusted throughout the world for its commitment to simplification, customer satisfaction, and dependability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
