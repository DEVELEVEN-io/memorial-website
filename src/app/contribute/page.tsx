// import { authOptions } from "@/auth/authOptions";
// import { getServerSession } from "next-auth";
import { Editor } from "@/components";

export default async function Contribute() {
  // const session = await getServerSession(authOptions);
  return (
    <>
      {/* <p>Welcome, {session?.user?.name}</p> */}

      {/* <Button href="/api/auth/signin" text="Login" /> */}

      <Editor />
    </>
  );
}
