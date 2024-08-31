import { SkeletonAvatar, SkeletonDetails, SkeletonText } from "@/components";

export default function Loading() {
  return (
    <>
      <div className="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4 shadow">
        <div className="flex animate-pulse space-x-4">
          <SkeletonAvatar />
          <div className="flex-1 space-y-6 py-1">
            <SkeletonText />
            <SkeletonDetails />
          </div>
        </div>
      </div>
    </>
  );
}
