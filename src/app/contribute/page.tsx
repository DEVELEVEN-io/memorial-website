// src/app/contribute/page.tsx
import SessionWrapper from "@/components/client/SessionWrapper";
import Contribute from "./contribute";

export default function ContributePage() {
  return (
    <SessionWrapper>
      <Contribute />
    </SessionWrapper>
  );
}
