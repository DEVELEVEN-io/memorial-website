import { authOptions } from "@/auth/authOptions";
import { Button } from "@/components/ui/Button";
import { getServerSession } from "next-auth";

export default async function Contribute() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <p>Welcome, {session?.user?.name}</p>

      <Button href="/api/auth/signin" text="Login" />
    </>
  );
}
