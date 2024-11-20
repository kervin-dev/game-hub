import { useState } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/nav-bar/NavBar";
import GameGrid from "./components/main/GameGrid";
import GenreList from "./components/side-bar/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/main/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
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
            onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}
            selectedGenre={selectedGenre}
          />
        </GridItem>
        <GridItem area="main">
          <PlatformSelector
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
            setSelectedPlatform={selectedPlatform}
          />
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
