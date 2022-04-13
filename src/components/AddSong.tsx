import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  VisuallyHidden,
} from '@chakra-ui/react';
import { SyntheticEvent, useState } from 'react';
import { CgPlayListAdd } from 'react-icons/cg';

const AddSong = () => {
  const [songUrl, setSongUrl] = useState('');
  const [isInvalidUrl, setIsInvalidUrl] = useState(false);

  const isError = !songUrl.includes('youtube.com' || 'soundcloud.com');

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (isError) {
      setIsInvalidUrl(false);
    }
    setSongUrl(e.target.value);
  }

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setIsInvalidUrl(false);

    if (isError) {
      setIsInvalidUrl(true);
      return;
    }

    setSongUrl('');
  }

  return (
    <FormControl isInvalid={isInvalidUrl}>
      <Flex
        as="form"
        marginX="2rem"
        justifyContent="center"
        gap="0.5rem"
        onSubmit={handleSubmit}
      >
        <VisuallyHidden>
          <FormLabel htmlFor="songUrl">Add YouTube or SoundCloud URL</FormLabel>
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
  );
};

export default AddSong;
