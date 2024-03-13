import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rialto TA",
  description: "Rialto Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={"/favicon.png"} type="image/x-icon"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
