// src/components/NavbarProvider.tsx
"use client"; // Ensure this is a client-side component

import NavbarWrapper from "@/components/interface/NavbarWrapper";
import { useSession } from "next-auth/react";

export default function NavbarProvider() {
  const { data: session } = useSession();

  // if (session) {
  //   console.log("User's name:", session.user?.name);
  //   console.log("User's email:", session.user?.email);
  //   console.log("User's image:", session.user?.image);
  // } else {
  //   console.log("User is not logged in");
  // }

  return <NavbarWrapper session={session} />;
}
