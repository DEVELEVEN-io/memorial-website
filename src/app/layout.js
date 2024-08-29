// src/app/layout.js
import { Navbar } from "@/components";
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
        <Navbar
          brand={{
            name: "BD Heros",
            logoSrc: images.logo,
            logoAlt: "Logo",
            href: "/",
          }}
          navItems={[
            { label: "Home", href: "/" },
            { label: "Protesters", href: "/protesters" },
            { label: "Contribute", href: "/contribute" },
            { label: "Contact", href: "/about" },
          ]}
          userMenuItems={[
            { label: "Dashboard", href: "/dashboard" },
            { label: "Settings", href: "/settings" },
            { label: "Sign out", href: "/signout" },
          ]}
          showSearchBar={true}
          userInfo={{
            name: "Test User",
            email: "user@test.com",
            avatarSrc: images.icon,
          }}
        />
        {children}
      </body>
    </html>
  );
}
