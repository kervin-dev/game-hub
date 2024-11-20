import { HStack } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../ui/skeleton";

const GenreListSkeleton = () => {
  return (
    <HStack width="full">
      <Skeleton boxSize={"32px"} />
      <SkeletonText noOfLines={1} height={"24px"} />
    </HStack>
  );
};

export default GenreListSkeleton;
