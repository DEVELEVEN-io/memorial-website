// src/app/about/page.tsx
import AuthButton from "@/components/ui/AuthButton";
import {
  FaApple,
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaTwitter,
} from "react-icons/fa";

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function About() {
  // await delay(300);

  return (
    <div>
      <AuthButton
        color="#3b5998"
        hoverColor="#3b5998/90"
        ringColor="#3b5998/50"
        textColor="white"
        icon={<FaFacebookF />}
        text="Sign in with Facebook"
      />
      <AuthButton
        color="#1da1f2"
        hoverColor="#1da1f2/90"
        ringColor="#1da1f2/50"
        textColor="white"
        icon={<FaTwitter />}
        text="Sign in with Twitter"
      />
      <AuthButton
        color="#24292F"
        hoverColor="#24292F/90"
        ringColor="#24292F/50"
        textColor="white"
        icon={<FaGithub />}
        text="Sign in with Github"
      />
      <AuthButton
        color="#4285F4"
        hoverColor="#4285F4/90"
        ringColor="#4285F4/50"
        textColor="white"
        icon={<FaGoogle />}
        text="Sign in with Google"
      />
      <AuthButton
        color="#050708"
        hoverColor="#050708/90"
        ringColor="#050708/50"
        textColor="white"
        icon={<FaApple />}
        text="Sign in with Apple"
      />
    </div>
  );
}
