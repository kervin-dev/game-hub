import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "./GameCard";
import { useEffect } from "react";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading, setGames } = useGames();
  const cardSkeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <p className="text-danger">{error}</p>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        gap={10}
      >
        {isLoading && cardSkeleton.map((c) => <GameCardSkeleton key={c} />)}
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
