// src/app/contribute/page.tsx
import SessionWrapper from "@/components/client/SessionWrapper";
import ContributeForm from "./ContributeForm";

export default async function ContributePage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <SessionWrapper>
      <ContributeForm />
    </SessionWrapper>
  );
}
