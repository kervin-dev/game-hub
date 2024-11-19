import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/nav-bar/NavBar";
import GameGrid from "./components/main/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gap={4}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <GridItem hideBelow="lg" area="aside">
          Aside
        </GridItem>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
