import { HStack, Text, Icon } from "@chakra-ui/react";
import { Platform } from "../../hooks/useGames";
import { IconType } from "react-icons/lib";
import PlatformIcon from "./PlatformIcon";

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
