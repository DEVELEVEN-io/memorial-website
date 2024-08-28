import { Inter } from "next/font/google";
import { Navbar } from "../components";
import { images } from "../data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Memorial Website",
  description: "Memorial Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar
          brand={{
            name: "utsx",
            logoSrc: images.logo,
            logoAlt: "Logo",
            href: "/",
          }}
          navItems={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/about" },
            { label: "Protesters", href: "/services" },
            { label: "Contribute", href: "/contribute" },
            { label: "Contact", href: "/contact" },
          ]}
          userMenuItems={[
            { label: "Dashboard", href: "/navbar" },
            { label: "Settings", href: "/navbar" },
            { label: "Sign out", href: "/navbar" },
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
