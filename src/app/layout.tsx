// src/app/layout.tsx
import { authOptions } from "@/auth/authOptions";
import NavbarWrapper from "@/components/interface/NavbarWrapper";
import { getServerSession } from "next-auth";
import { Merriweather } from "next/font/google";
import "../styles/globals.css";
// import NavbarProvider from "@/components/client/NavbarProvider";
// import SessionWrapper from "@/components/client/SessionWrapper";
import { images } from "@/data";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Memorial Website",
  description: "Memorial Website",
};

// export default function RootLayout({ children }) { // old approach
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

        {/* <SessionWrapper> // old approach
          <NavbarProvider />
          {children}
        </SessionWrapper> */}
      </body>
    </html>
  );
}
