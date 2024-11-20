import { Card, SimpleGrid } from "@chakra-ui/react";
import { Skeleton, SkeletonText } from "../ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width="300px">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
