import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { SiApplemusic } from 'react-icons/si';

const Header = () => {
  return (
    <Flex
      as="header"
      color="primary"
      margin="0"
      alignItems="center"
      padding="1rem"
      direction="column"
    >
      <Flex alignItems="center">
        <Icon as={SiApplemusic} height="32px" width="32px" marginRight="1rem" />{' '}
        <Heading as="h1">React Music Share</Heading>
      </Flex>
      <Text>What do you wanna hear and share today?</Text>
    </Flex>
  );
};

export default Header;
