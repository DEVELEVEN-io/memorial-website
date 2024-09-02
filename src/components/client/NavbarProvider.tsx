// src/components/client/NavbarProvider.tsx
"use client"; // This is a client-side component

import NavbarWrapper from "@/components/interface/NavbarWrapper";
import { useSession } from "next-auth/react";

export default function NavbarProvider() {
  const { data: session } = useSession(); // No need to worry about refetching

  return <NavbarWrapper session={session} />;
}
