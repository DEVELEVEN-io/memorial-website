// src/components/SessionProvider.tsx
"use client"; // Ensure this is a client-side component

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function SessionProvider() {
  const { data: session } = useSession();

  if (session) {
    console.log("User's name:", session.user?.name);
    console.log("User's email:", session.user?.email);
    console.log("User's image:", session.user?.image); // Access the user's image
  } else {
    console.log("User is not logged in");
  }

  return (
    <div>
      {session ? (
        <div>
          <p>Welcome, {session.user?.name}</p>
          <Image
            width={100}
            height={100}
            src={session.user?.image}
            alt="User Image"
          />
        </div>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}
