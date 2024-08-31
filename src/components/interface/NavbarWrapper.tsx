// src/components/interface/NavbarWrapper.tsx
import { Navbar } from "@/components/";
import { images } from "@/data";

export default function NavbarWrapper({ session }: { session: any }) {
  const userMenuItems = session?.user
    ? [
        { label: "Dashboard", href: "/dashboard" },
        { label: "Settings", href: "/settings" },
        { label: "Sign out", href: "/api/auth/signout" },
      ]
    : [{ label: "Sign in", href: "/api/auth/signin" }];

  const userInfo = {
    name: session?.user?.name || "Guest User",
    email: session?.user?.email || "guest@example.com",
    avatarSrc: session?.user?.image || null, // Use images.icon as default avatar
  };

  return (
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
      userMenuItems={userMenuItems}
      showSearchBar={true}
      userInfo={userInfo}
    />
  );
}
