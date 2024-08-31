// src/app/page.tsx

import SkeletonAvatar from "@/components/skeleton/SkeletonAvatar";
import { SkeletonCard } from "@/components/skeleton/SkeletonCard";
import SkeletonDetails from "@/components/skeleton/SkeletonDetails";
import SkeletonText from "@/components/skeleton/SkeletonText";

export default function Home() {
  return (
    <>
      Nothing to see here.
      <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow">
        <div className="flex animate-pulse space-x-4">
          <SkeletonAvatar />
          <div className="flex-1 space-y-6 py-1">
            <SkeletonText />
            <SkeletonText />
            <SkeletonDetails />
          </div>
        </div>
        <SkeletonCard />
      </div>
    </>
  );
}
