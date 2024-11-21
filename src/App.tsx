import { useState } from "react";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/nav-bar/NavBar";
import GameGrid from "./components/main/GameGrid";
import GenreList from "./components/side-bar/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/main/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector, { SortOrder } from "./components/main/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: SortOrder | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
        gap={4}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <GridItem hideBelow="lg" area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
        <GridItem area="main">
          <HStack paddingLeft="10px" marginBottom={3}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              setSelectedPlatform={gameQuery.platform}
            />
            <SortSelector
              onSelectSortOrder={(ordering) =>
                setGameQuery({ ...gameQuery, sortOrder: ordering })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
