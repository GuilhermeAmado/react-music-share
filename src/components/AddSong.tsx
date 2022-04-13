import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VisuallyHidden,
} from '@chakra-ui/react';
import { SyntheticEvent, useState } from 'react';
import { CgPlayListAdd } from 'react-icons/cg';

const AddSong = () => {
  const [songUrl, setSongUrl] = useState('');
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const isError = !songUrl.includes('youtube.com' || 'soundcloud.com');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (isError) {
      setIsInvalidUrl(false);
    }
    setSongUrl(e.target.value);
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    onOpen();
    setSongUrl('');
    setIsInvalidUrl(false);

    if (isError) {
      setIsInvalidUrl(true);
      return;
    }

    setSongUrl('');
  }

  return (
    <>
      <FormControl isInvalid={isInvalidUrl}>
        <Flex
          as="form"
          marginX="2rem"
          justifyContent="center"
          gap="0.5rem"
          onSubmit={handleSubmit}
        >
          <VisuallyHidden>
            <FormLabel htmlFor="songUrl">
              Add YouTube or SoundCloud URL
            </FormLabel>
          </VisuallyHidden>
          <Input
            id="songUrl"
            variant="filled"
            placeholder="Add YouTube or SoundCloud URL"
            maxWidth="480px"
            backgroundColor="light"
            _focus={{ borderColor: 'primary' }}
            value={songUrl}
            onChange={handleInputChange}
          />
          <IconButton
            type="submit"
            variant="outline"
            colorScheme="teal"
            aria-label="Add song"
            fontSize="20px"
            icon={<CgPlayListAdd />}
            disabled={songUrl === ''}
          />
        </Flex>
        <FormErrorMessage margin="0 auto" width="fit-content" padding="0.5rem">
          Invalid song URL
        </FormErrorMessage>
      </FormControl>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="primary">Edit song info</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Image
              margin="0 auto"
              boxSize="300px"
              objectFit="contain"
              src="https://i.discogs.com/2KT2yljoksF7lj8jkfeJGwXdS4H6ip5ytIGqRMoZ-oE/rs:fit/g:sm/q:90/h:600/w:594/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ0ODUy/NDUtMTQ1MDQ4NTkz/OC0xMDMwLmpwZWc.jpeg"
            />

            <FormControl mt={4}>
              <FormLabel>Title</FormLabel>
              <Input placeholder="Song title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Artist</FormLabel>
              <Input placeholder="Song artist" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Thumbnail</FormLabel>
              <Input placeholder="Song cover thumbnail url" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button colorScheme="teal" ml={3}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddSong;
