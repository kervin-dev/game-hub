import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
        <GridItem hideBelow="lg" area="aside" bg="teal">
          Aside
        </GridItem>
        <GridItem area="main" bg="magenta">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
