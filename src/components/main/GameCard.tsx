import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../../hooks/useGames";
import getCroppedImageUrl from "../../services/image-url";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <Card.Body>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading size="2xl">{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
