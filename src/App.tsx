import { Grid, GridItem } from "@chakra-ui/react";

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
        <GridItem area="nav" bg="coral">
          Nav
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
