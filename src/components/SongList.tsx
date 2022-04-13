import { Flex } from '@chakra-ui/react';
import Song from './Song';

const SongList = () => {
  return (
    <Flex direction="column" gap="1rem">
      <Song />
      <Song />
      <Song />
    </Flex>
  );
};

export default SongList;
