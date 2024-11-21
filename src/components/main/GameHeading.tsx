import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const gameHeading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Game`;
  return <Heading size={"5xl"}>{gameHeading}</Heading>;
};

export default GameHeading;
