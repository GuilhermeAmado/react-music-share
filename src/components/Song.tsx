import {
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { BiAddToQueue } from 'react-icons/bi';

const Song = () => {
  return (
    <Flex
      backgroundColor="light"
      height="75px"
      alignItems="center"
      padding="0.5rem"
      borderRadius="20px"
      fontSize="12px"
    >
      <Image
        boxSize="60px"
        borderRadius="12px "
        objectFit="contain"
        src="https://i.discogs.com/2KT2yljoksF7lj8jkfeJGwXdS4H6ip5ytIGqRMoZ-oE/rs:fit/g:sm/q:90/h:600/w:594/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0ODUy/NDUtMTQ1MDQ4NTkz/OC0xMDMwLmpwZWc.jpeg"
      />
      <Grid templateColumns="repeat(12, 1fr)" marginLeft="1rem" gap="1rem">
        <GridItem colSpan={6}>
          <Text fontWeight={700}>Smells Like Teen Spirit</Text>
        </GridItem>

        <GridItem colSpan={3}>
          <Text>Nirvana</Text>
        </GridItem>

        <GridItem colSpan={1}>
          <Text>3:15</Text>
        </GridItem>

        <GridItem colSpan={2} marginLeft="auto">
          <IconButton
            transform="rotateY(180deg)"
            size="xs"
            padding="5px"
            aria-label="add to song queue"
            as={BiAddToQueue}
            colorScheme="red"
            variant="outline"
            marginRight="8px"
          />
          <IconButton
            transform="rotateY(180deg)"
            size="xs"
            padding="5px"
            aria-label="add to song queue"
            as={BiAddToQueue}
            colorScheme="teal"
          />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default Song;
