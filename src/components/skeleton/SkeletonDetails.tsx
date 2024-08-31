import SkeletonText from "./SkeletonText";

export const SkeletonDetail = () => {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <SkeletonText />
        </div>
        <div className="col-span-1">
          <SkeletonText />
        </div>
      </div>
      <SkeletonText />
    </div>
  );
};

export default SkeletonDetail;
