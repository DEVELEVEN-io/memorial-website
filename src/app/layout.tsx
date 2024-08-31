// src/app/layout.tsx
import NavbarProvider from "@/components/client/NavbarProvider";
import SessionWrapper from "@/components/client/SessionWrapper";
import { images } from "@/data";
import { Merriweather } from "next/font/google";
import "../styles/globals.css";
const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Memorial Website",
  description: "Memorial Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={images.icon} sizes="any" />
      </head>
      <body className={merriweather.className}>
        <SessionWrapper>
          <NavbarProvider />
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
