import { Flex } from '@chakra-ui/react';
import QueuedSongList from './QueuedSongList';

const Player = () => {
  return (
    <>
      <Flex
        boxShadow={'lg'}
        backgroundColor="light"
        minHeight="180px"
        borderRadius="12px"
        padding="1rem"
      >
        Player
      </Flex>
      <QueuedSongList />
    </>
  );
};

export default Player;
