import { PrimeReactProvider } from "primereact/api";
import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import "./globals.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={"/favicon.png"} type="image/x-icon"></link>
        <link
          id="theme-link"
          href={`/themes/tailwind-light/theme.css`}
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
