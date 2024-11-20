import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/nav-bar/NavBar";
import GameGrid from "./components/main/GameGrid";
import GenreList from "./components/side-bar/GenreList";

function App() {
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
          <GenreList />
        </GridItem>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
