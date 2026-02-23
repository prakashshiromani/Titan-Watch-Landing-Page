import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Titan Ceramic Fusion | Automatic Performance",
  description: "A bold expression of precision, crafted for those who value timeless design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} bg-luxury-bg text-white antialiased`} suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
