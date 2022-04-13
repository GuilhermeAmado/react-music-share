import { Container, Grid, GridItem } from '@chakra-ui/react';
import AddSong from './components/AddSong';
import Header from './components/Header';
import Player from './components/Player';
import SongList from './components/SongList';

function App() {
  return (
    <>
      <Header />
      <AddSong />
      <Container marginTop="2rem" maxWidth="1024px">
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <GridItem colSpan={7}>
            <SongList />
          </GridItem>
          <GridItem colSpan={5}>
            <Player />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

export default App;
