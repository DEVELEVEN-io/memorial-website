// src/app/layout.tsx
import { authOptions } from "@/auth/authOptions";
import NavbarWrapper from "@/components/interface/NavbarWrapper";
import { images } from "@/data";
import { getServerSession } from "next-auth";
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={images.icon} sizes="any" />
      </head>
      <body className={merriweather.className}>
        <NavbarWrapper session={session} />
        {children}
      </body>
    </html>
  );
}
