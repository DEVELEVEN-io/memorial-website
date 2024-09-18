// src/app/protesters/page.tsx
import Protesters from "./Protesters";

const ProtestersPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <>
      <Protesters />
    </>
  );
};

export default ProtestersPage;
