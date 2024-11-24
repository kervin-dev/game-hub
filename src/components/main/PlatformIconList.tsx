import { HStack } from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import { Platform } from "../../hooks/usePlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  return (
    <HStack marginY={2}>
      {platforms.map((p) => (
        <PlatformIcon key={p.id} slug={p.slug} color="gray" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
