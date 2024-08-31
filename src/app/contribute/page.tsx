"use client";
import { Suspense, lazy, useEffect, useState } from "react";

const Editor = lazy(() => import("@/components/ui/Editor"));

export default function Contribute() {
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEditor(true);
    }, 2000); // Adjust the delay as needed (2000 ms = 2 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {showEditor && <Editor />}
    </Suspense>
  );
}
