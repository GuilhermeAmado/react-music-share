import { Grid, GridItem } from '@chakra-ui/react';
import AddSong from './components/AddSong';
import Header from './components/Header';
import Player from './components/Player';
import SongList from './components/SongList';

function App() {
  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colSpan={12}>
          <Header />
        </GridItem>
        <GridItem colSpan={7}>
          <AddSong />
          <SongList />
        </GridItem>
        <GridItem colSpan={5}>
          <Player />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
