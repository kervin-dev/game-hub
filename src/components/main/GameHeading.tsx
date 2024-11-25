import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";
import useGenreLookup from "../../hooks/useGenreLookup";
import usePlatformLookup from "../../hooks/usePlatformLookup";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useGenreLookup(gameQuery.genreId);
  const selectedPlatform = usePlatformLookup(gameQuery.platformId);

  const gameHeading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Game`;
  return <Heading size={"5xl"}>{gameHeading}</Heading>;
};

export default GameHeading;
